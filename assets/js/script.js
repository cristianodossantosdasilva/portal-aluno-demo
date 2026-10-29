/**
 * Portal do Aluno - chat conectado ao gateway Vitru.
 * A chave da OpenAI permanece exclusivamente no servidor Render.
 */
const AGENT_API_URL = 'https://vitru-agent-gateway.onrender.com';
const AGENT_ROLE = 'student_onboarding';

document.addEventListener('DOMContentLoaded', () => {
    const btnOpenChat = document.getElementById('btnOpenChat');
    const btnCloseChat = document.getElementById('btnCloseChat');
    const chatWindow = document.getElementById('chatWindow');
    const contextBanner = document.getElementById('contextBanner');
    const btnCloseBanner = document.getElementById('btnCloseBanner');
    const btnActionBanner = document.getElementById('btnActionBanner');
    const chatMessages = document.getElementById('chatMessages');
    const chatOptionsBtns = document.querySelectorAll('.chat-option-btn');
    const chatInput = document.getElementById('chatInputFallback');
    const btnSend = document.getElementById('btnSendFallback');
    const footer = document.querySelector('.chat-footer span');

    let sessionId = null;
    let openingPromise = null;
    let sending = false;

    if (footer) footer.textContent = '⚡ Conectado ao agente Vitru';
    if (btnOpenChat) btnOpenChat.style.display = 'flex';

    function appendMessage(text, type) {
        const message = document.createElement('div');
        message.className = `message ${type}-msg`;
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        message.appendChild(paragraph);
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function setBusy(value) {
        sending = value;
        if (btnSend) btnSend.disabled = value;
        if (chatInput) chatInput.disabled = value;
    }

    async function request(path, options = {}) {
        const response = await fetch(`${AGENT_API_URL}${path}`, {
            method: options.method || 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: options.body ? JSON.stringify(options.body) : undefined
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(payload.error || `Gateway HTTP ${response.status}`);
        return payload;
    }

    async function ensureSession() {
        if (sessionId) return;
        if (openingPromise) return openingPromise;
        openingPromise = (async () => {
            const created = await request('/api/sessions', {
                method: 'POST',
                body: {
                    context: {
                        role: AGENT_ROLE,
                        channel: 'portal-aluno',
                        page: window.location.pathname
                    }
                }
            });
            sessionId = created.sessionId;
            const opened = await request(`/api/sessions/${sessionId}/open`, {
                method: 'POST',
                body: { trigger: 'page_context' }
            });
            chatMessages.innerHTML = '';
            const firstMessage = opened.messages?.[0]?.text;
            if (firstMessage) appendMessage(firstMessage, 'bot');
        })();
        try {
            await openingPromise;
        } finally {
            openingPromise = null;
        }
    }

    async function sendMessage(text) {
        if (!text || sending) return;
        setBusy(true);
        try {
            await ensureSession();
            appendMessage(text, 'user');
            const result = await request(`/api/sessions/${sessionId}/messages`, {
                method: 'POST',
                body: { text }
            });
            const reply = result.messages?.[0]?.text || 'Não consegui gerar uma resposta agora.';
            appendMessage(reply, 'bot');
        } catch (error) {
            console.error('Falha ao consultar o agente Vitru:', error);
            appendMessage('Não consegui conectar ao agente neste momento. Tente novamente em alguns segundos.', 'bot');
        } finally {
            setBusy(false);
        }
    }

    async function openChat() {
        chatWindow.classList.add('active');
        if (contextBanner) contextBanner.classList.remove('active');
        try {
            await ensureSession();
        } catch (error) {
            console.error('Falha ao abrir o agente Vitru:', error);
            chatMessages.innerHTML = '';
            appendMessage('O agente está iniciando. Envie uma mensagem para tentar novamente.', 'bot');
        }
    }

    btnOpenChat?.addEventListener('click', () => {
        openChat();
        btnOpenChat.style.transform = 'scale(0.9)';
        setTimeout(() => { btnOpenChat.style.transform = ''; }, 200);
    });
    btnCloseChat?.addEventListener('click', () => chatWindow.classList.remove('active'));
    btnCloseBanner?.addEventListener('click', () => contextBanner?.classList.remove('active'));
    btnActionBanner?.addEventListener('click', openChat);

    chatOptionsBtns.forEach((button) => {
        button.addEventListener('click', () => {
            const text = button.getAttribute('data-reply') || '';
            document.querySelector('.chat-options')?.classList.remove('visible');
            sendMessage(text);
        });
    });

    function submitInput() {
        const text = chatInput?.value.trim();
        if (!text || sending) return;
        chatInput.value = '';
        sendMessage(text);
    }
    btnSend?.addEventListener('click', submitInput);
    chatInput?.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') submitInput();
    });

    setTimeout(() => contextBanner?.classList.add('active'), 1500);
    setTimeout(() => {
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.width = '0%';
            setTimeout(() => { progressBar.style.width = '40%'; }, 300);
        }
    }, 500);
});
