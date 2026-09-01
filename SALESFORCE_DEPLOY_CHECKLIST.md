# Checklist Salesforce Embedded Messaging

> Use este checklist para validar que todas as configurações necessárias no Salesforce foram realizadas antes de testar o Agentforce em uma URL pública.

---

## 📌 URL Pública do Portal

Preencha aqui após publicar:

- **URL pública do portal:** `________________________`
- Exemplo: `https://usuario.github.io/portal-aluno-demo/`

---

## ✅ Configurações a Validar no Salesforce

Após obter sua URL pública, verifique os seguintes pontos no **Salesforce Setup**. A interface pode variar de acordo com a edição e versão do Salesforce.

### 1. CORS (Cross-Origin Resource Sharing)

- [ ] No Setup, buscar por **CORS**
- [ ] Clicar em **Allowed Origins** (Origens Permitidas)
- [ ] Adicionar a URL pública do portal (ex: `https://usuario.github.io`)
- [ ] Salvar

### 2. Trusted URLs

- [ ] No Setup, buscar por **Trusted URLs**
- [ ] Verificar se a URL pública está listada
- [ ] Se não estiver, clicar em **New Trusted URL**
- [ ] Adicionar a URL pública do portal
- [ ] Marcar as opções de CSP relevantes (All, se possível)
- [ ] Salvar

### 3. Embedded Service Deployment

- [ ] No Setup, buscar por **Embedded Service Deployments**
- [ ] Clicar na implantação **Vitru_Messaging**
- [ ] Verificar se há seção de **Allowed Domains**, **Website URLs** ou **Authorized Domains**
- [ ] Se existir, adicionar a URL pública do portal
- [ ] Salvar e/ou Publicar

### 4. Session Settings (Clickjack Protection)

- [ ] No Setup, buscar por **Session Settings**
- [ ] Rolar até a seção de proteção contra Clickjack
- [ ] Verificar se iframes de domínios externos são permitidos
- [ ] Se necessário, adicionar a URL pública como domínio confiável para iframes

### 5. Experience Site (Security & Privacy)

- [ ] No Setup, buscar por **All Sites** (Digital Experiences)
- [ ] Abrir o Builder do site que hospeda o Agentforce
- [ ] Ir em **Settings → Security & Privacy**
- [ ] Confirmar que **Clickjack Protection** está em "Allow framing by any page" ou "Allow framing by trusted domains"
- [ ] Se alterou algo, clicar em **Publish** no canto superior direito

> **Nota:** Nem todos esses campos existem em todas as orgs. Trate cada item como ponto de verificação.

---

## 🧪 Teste Principal

### Passos

1. Abrir a URL pública do portal no navegador
2. Abrir DevTools (F12) → Console
3. Verificar os seguintes logs:

**Se tudo funcionar:**
```
🚀 Agentforce: carregamento iniciado
✅ Agentforce: script bootstrap carregado
✅ Agentforce: init executado
🎉 Agentforce: carregado com sucesso
```

**Se falhar (fallback ativado):**
```
🚀 Agentforce: carregamento iniciado
⚠️ Agentforce: falha no carregamento, fallback ativado
📱 Fallback: modo offline ativo
```

---

## 💬 Frases de Teste do Agentforce

Testar no widget real do Agentforce (ou no fallback offline):

### Atendimento Humano / Polo
| Frase de teste | Ação esperada |
|---|---|
| "Quero atendimento humano" | Acionar fluxo de encaminhamento ao polo |
| "Preciso falar com uma pessoa" | Acionar fluxo de encaminhamento ao polo |
| "Quero falar com o polo" | Acionar fluxo de encaminhamento ao polo |
| "Acabei de ingressar, preciso de atendimento humano" | Acionar fluxo de encaminhamento ao polo |

### Primeira Atividade
| Frase de teste | Ação esperada |
|---|---|
| "Onde encontro minha primeira atividade?" | Retornar informações da Atividade 1 |
| "Qual é minha próxima atividade?" | Retornar informações da Atividade 1 |

### Ambientação
| Frase de teste | Ação esperada |
|---|---|
| "Estou perdido" | Retornar guia de ambientação |
| "Não sei por onde começar" | Retornar guia de ambientação |

---

## 🎯 Resultado Esperado

### Para atendimento humano (Agentforce Real):
- Acionar o tópico **Encaminhamento ao Polo**
- Executar a ação **TriggerPoloHandoff** (Apex Invocable)
- Retornar mensagem de conexão com o polo
- Retornar protocolo mock ou equivalente

### Para atendimento humano (Fallback Offline):
- Retornar: *"Vou te conectar com o pessoal do seu polo. Eles vão te dar todo o apoio que você precisa para seguir em frente."*
- Exibir: **Protocolo: MOCK-CASE-001**

---

## 🔄 Se o Agentforce Não Carregar

1. Verificar o Console do DevTools para identificar o erro
2. Validar cada item deste checklist
3. Se persistir, usar o fallback offline alterando `AGENTFORCE_ENABLED = false` no `assets/js/script.js`
4. O fallback cobre todas as intenções necessárias para a apresentação
