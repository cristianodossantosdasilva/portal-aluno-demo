/**
 * Portal do Aluno Demo - Script Principal
 * Versão: v1.3
 * 
 * Controle de integração Agentforce + Fallback Offline
 */

// ═══════════════════════════════════════════════════════════
// CONFIGURAÇÃO
// ═══════════════════════════════════════════════════════════
const AGENTFORCE_ENABLED = true;
const AGENTFORCE_LOAD_TIMEOUT_MS = 8000;

// ═══════════════════════════════════════════════════════════
// INICIALIZAÇÃO
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Agentforce: carregamento iniciado");
    console.log(`   AGENTFORCE_ENABLED = ${AGENTFORCE_ENABLED}`);
    console.log(`   AGENTFORCE_LOAD_TIMEOUT_MS = ${AGENTFORCE_LOAD_TIMEOUT_MS}ms`);

    // ── Elementos do DOM ──
    const btnOpenChat = document.getElementById('btnOpenChat');
    const btnCloseChat = document.getElementById('btnCloseChat');
    const chatWindow = document.getElementById('chatWindow');
    
    const contextBanner = document.getElementById('contextBanner');
    const btnCloseBanner = document.getElementById('btnCloseBanner');
    const btnActionBanner = document.getElementById('btnActionBanner');
    
    const chatMessages = document.getElementById('chatMessages');
    const chatOptionsBtns = document.querySelectorAll('.chat-option-btn');
    
    const chatInputFallback = document.getElementById('chatInputFallback');
    const btnSendFallback = document.getElementById('btnSendFallback');
    
    let chatOpenedOnce = false;
    let fallbackActive = !AGENTFORCE_ENABLED;
    let agentforceLoaded = false;

    // ═══════════════════════════════════════════════════════════
    // MONITORAMENTO DO AGENTFORCE
    // ═══════════════════════════════════════════════════════════
    if (AGENTFORCE_ENABLED) {
        // Inicialmente ocultamos o botão de fallback para não competir
        btnOpenChat.style.display = 'none';

        // Detecção imediata do bootstrap (se já carregou antes do DOMContentLoaded)
        if (window.embeddedservice_bootstrap) {
            console.log("✅ Agentforce: bootstrap disponível (pré-carregado)");
        }

        // Timer de fallback
        const loadTimeout = setTimeout(() => {
            if (!agentforceLoaded) {
                console.warn("⏱️ Agentforce: timeout de " + AGENTFORCE_LOAD_TIMEOUT_MS + "ms atingido");
                console.log("⚠️ Agentforce: falha no carregamento, fallback ativado");
                activateFallback();
            }
        }, AGENTFORCE_LOAD_TIMEOUT_MS);

        // Ouvinte de erro injetado no HTML (onerror do script ou catch do init)
        window.addEventListener('agentforce-load-error', () => {
            if (!agentforceLoaded) {
                console.error("❌ Agentforce: evento de erro recebido");
                console.log("⚠️ Agentforce: falha no carregamento, fallback ativado");
                clearTimeout(loadTimeout);
                activateFallback();
            }
        });

        // Polling verificando se a API foi injetada com sucesso
        const checkInterval = setInterval(() => {
            if (typeof embeddedservice_bootstrap !== 'undefined') {
                console.log("✅ Agentforce: script bootstrap carregado");

                if (embeddedservice_bootstrap.utilAPI) {
                    agentforceLoaded = true;
                    clearInterval(checkInterval);
                    clearTimeout(loadTimeout);
                    console.log("✅ Agentforce: init executado");
                    console.log("🎉 Agentforce: carregado com sucesso");
                    // Garantimos que o botão fallback permaneça oculto
                    btnOpenChat.style.display = 'none';
                }
            }
        }, 500);
    } else {
        console.log("ℹ️ Agentforce: desabilitado via AGENTFORCE_ENABLED = false");
        activateFallback();
    }

    function activateFallback() {
        fallbackActive = true;
        btnOpenChat.style.display = 'flex';
        console.log("📱 Fallback: modo offline ativo");
    }

    // ═══════════════════════════════════════════════════════════
    // CHAT WINDOW (FALLBACK)
    // ═══════════════════════════════════════════════════════════
    const openChat = () => {
        chatWindow.classList.add('active');
        if (contextBanner) contextBanner.classList.remove('active');
        
        if (!chatOpenedOnce) {
            chatOpenedOnce = true;
            
            // Simula digitação da segunda mensagem
            setTimeout(() => {
                const delayedMsg = document.querySelector('.delayed-msg');
                if(delayedMsg) delayedMsg.classList.add('visible');
            }, 1000);
            
            // Simula exibição de botões
            setTimeout(() => {
                const options = document.querySelector('.delayed-options');
                if(options) options.classList.add('visible');
            }, 2000);
        }
    };

    btnOpenChat.addEventListener('click', () => {
        openChat();
        btnOpenChat.style.transform = 'scale(0.9)';
        setTimeout(() => {
            btnOpenChat.style.transform = '';
        }, 200);
    });

    btnCloseChat.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });

    // ═══════════════════════════════════════════════════════════
    // BANNER DE CONTEXTO / RECOMENDAÇÃO
    // ═══════════════════════════════════════════════════════════
    if (contextBanner) {
        setTimeout(() => {
            contextBanner.classList.add('active');
        }, 1500);
    }

    if (btnCloseBanner) {
        btnCloseBanner.addEventListener('click', () => {
            contextBanner.classList.remove('active');
        });
    }

    if (btnActionBanner) {
        btnActionBanner.addEventListener('click', () => {
            if (contextBanner) contextBanner.classList.remove('active');
            
            // Tenta abrir o chat oficial do Salesforce se estiver carregado
            if (AGENTFORCE_ENABLED && agentforceLoaded && typeof embeddedservice_bootstrap !== 'undefined') {
                try {
                    embeddedservice_bootstrap.utilAPI.launchChat();
                    console.log("✅ Agentforce: chat aberto via botão do banner");
                    return;
                } catch (e) {
                    console.warn("⚠️ Falha ao abrir Agentforce via API. Usando fallback offline.");
                }
            }
            
            // Fallback para o chat mockado
            activateFallback();
            openChat();
        });
    }

    // ═══════════════════════════════════════════════════════════
    // LÓGICA DE RESPOSTAS DO FALLBACK (NLP Simulado)
    // ═══════════════════════════════════════════════════════════
    const appendUserMessage = (text) => {
        const delayedOpts = document.querySelector('.delayed-options');
        if (delayedOpts) delayedOpts.style.display = 'none';
        
        const userMsgDiv = document.createElement('div');
        userMsgDiv.className = 'message user-msg';
        userMsgDiv.innerHTML = `<p>${text}</p>`;
        chatMessages.appendChild(userMsgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const processBotResponse = (text) => {
        const lowerText = text.toLowerCase();
        let botResponse = 'Ainda estou aprendendo, mas posso te ajudar com sua ambientação, suas atividades ou te transferir para o polo.';
        
        // A) Primeira atividade
        if (
            lowerText.includes('primeira atividade') ||
            lowerText.includes('onde encontro') ||
            lowerText.includes('próxima atividade') ||
            lowerText.includes('próximos passos') ||
            lowerText.includes('atividade para fazer') ||
            lowerText.includes('minha atividade')
        ) {
            botResponse = 'Sua próxima atividade é a Atividade 1 - Diagnóstica. Ela ajuda você a iniciar sua jornada e entender seus primeiros passos no ambiente de estudos.';
        }
        // B) Ambientação
        else if (
            lowerText.includes('perdido') ||
            lowerText.includes('ingressar') ||
            lowerText.includes('por onde começar') ||
            lowerText.includes('não sei') ||
            lowerText.includes('ambientação') ||
            lowerText.includes('acabei de') ||
            lowerText.includes('preciso de ajuda')
        ) {
            botResponse = 'Eu posso te ajudar com os próximos passos da ambientação. Você já realizou o primeiro acesso. Agora, o ideal é conhecer o ambiente virtual, configurar suas notificações e localizar sua primeira atividade.';
        }
        // C) Atendimento humano / polo
        else if (
            lowerText.includes('atendimento humano') ||
            lowerText.includes('falar com o polo') ||
            lowerText.includes('falar com meu polo') ||
            lowerText.includes('pessoa') ||
            lowerText.includes('transferir') ||
            lowerText.includes('ajuda humana') ||
            lowerText.includes('atendente') ||
            lowerText.includes('polo')
        ) {
            botResponse = 'Vou te conectar com o pessoal do seu polo. Eles vão te dar todo o apoio que você precisa para seguir em frente.<br><br>Protocolo: MOCK-CASE-001';
        }

        setTimeout(() => {
            const botMsgDiv = document.createElement('div');
            botMsgDiv.className = 'message bot-msg';
            botMsgDiv.innerHTML = `<p>${botResponse}</p>`;
            chatMessages.appendChild(botMsgDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 800);
    };

    // Botões rápidos do chat
    chatOptionsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const userText = e.target.getAttribute('data-reply');
            appendUserMessage(userText);
            processBotResponse(userText);
        });
    });

    // Campo de texto livre
    const handleSendInput = () => {
        const text = chatInputFallback.value.trim();
        if (text) {
            appendUserMessage(text);
            processBotResponse(text);
            chatInputFallback.value = '';
        }
    };

    if (btnSendFallback && chatInputFallback) {
        btnSendFallback.addEventListener('click', handleSendInput);
        chatInputFallback.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSendInput();
        });
    }

    // ═══════════════════════════════════════════════════════════
    // ANIMAÇÃO DA BARRA DE PROGRESSO
    // ═══════════════════════════════════════════════════════════
    setTimeout(() => {
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.width = '40%';
            }, 300);
        }
    }, 500);
});
