# Guia de Publicação HTTPS Pública

> Por que sair do localhost e como validar o Agentforce em ambiente real.

---

## 🔍 Por que Sair do Localhost?

O Salesforce Embedded Messaging (Agentforce) possui múltiplas camadas de segurança que restringem o carregamento do widget em ambientes que não atendam aos requisitos mínimos:

### Problemas comuns em localhost

| Problema | Descrição |
|----------|-----------|
| **CORS** | O navegador bloqueia requisições cross-origin do `localhost` para os servidores Salesforce |
| **CSP (Content Security Policy)** | O Salesforce retorna headers `frame-ancestors` que não incluem `localhost` |
| **Clickjack Protection** | O iframe do widget é impedido de renderizar dentro de páginas não autorizadas |
| **Mixed Content** | `http://localhost` (sem SSL) pode ser bloqueado por políticas de conteúdo misto |

### Por que HTTPS público resolve

Quando o portal está em uma URL HTTPS pública (ex: `https://usuario.github.io/portal-aluno-demo/`):

1. O navegador aceita requisições cross-origin de domínios HTTPS confiáveis
2. O Salesforce pode ser configurado para autorizar esse domínio específico
3. Não há problemas de conteúdo misto (tudo é HTTPS)
4. A proteção contra clickjack pode ser ajustada para incluir o domínio

---

## 🔒 Como o HTTPS Público Ajuda no Teste do Embedded Messaging

```
┌─────────────────────────────────────────────────┐
│  Navegador do usuário                           │
│  https://usuario.github.io/portal-aluno-demo/   │
│                                                 │
│  ┌─────────────────────────────────────────┐    │
│  │  Portal do Aluno (HTML/CSS/JS)          │    │
│  │                                         │    │
│  │  ┌─────────────────────────────────┐    │    │
│  │  │  Salesforce Embedded Messaging  │    │    │
│  │  │  (iframe autorizado)            │    │    │
│  │  └─────────────────────────────────┘    │    │
│  └─────────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
         ↕ HTTPS (autorizado via CORS/CSP)
┌─────────────────────────────────────────────────┐
│  Salesforce Cloud                               │
│  orgfarm-138e8f6c88-dev-ed.develop.my.site.com  │
└─────────────────────────────────────────────────┘
```

**Fluxo de comunicação:**
1. O navegador carrega o portal da URL HTTPS pública
2. O `bootstrap.min.js` do Salesforce é baixado e executado
3. O Salesforce verifica se a origem (URL do portal) está autorizada
4. Se autorizada → widget renderiza normalmente
5. Se não autorizada → erro de CORS/CSP no console

---

## 🧪 Como Validar no Console

Após publicar o portal e configurar o Salesforce, abra o DevTools (F12) na aba Console:

### ✅ Cenário de sucesso
```
🚀 Agentforce: carregamento iniciado
   AGENTFORCE_ENABLED = true
   AGENTFORCE_LOAD_TIMEOUT_MS = 8000ms
✅ Agentforce: script bootstrap carregado
✅ Agentforce: init executado
🎉 Agentforce: carregado com sucesso
```

### ⚠️ Cenário de falha (com fallback)
```
🚀 Agentforce: carregamento iniciado
   AGENTFORCE_ENABLED = true
   AGENTFORCE_LOAD_TIMEOUT_MS = 8000ms
❌ Agentforce: evento de erro recebido
⚠️ Agentforce: falha no carregamento, fallback ativado
📱 Fallback: modo offline ativo
```

### 🔴 Erros comuns no Console

| Erro | Significado | Solução |
|------|-------------|---------|
| `blocked by CORS policy` | Domínio não autorizado | Adicionar URL em Setup → CORS |
| `frame-ancestors` violation | iframe não permitido | Ajustar Clickjack Protection no Experience Builder |
| `Content Security Policy` | CSP bloqueando scripts | Adicionar domínio em Trusted URLs |
| `net::ERR_BLOCKED_BY_RESPONSE` | Resposta bloqueada pelo navegador | Verificar todas as configurações de segurança |

---

## 🔄 Como Voltar para Fallback se o Agentforce Falhar

### Automático (padrão)
O portal já possui mecanismo de contingência automático:
- Se o script do Salesforce falhar ao carregar → fallback ativa automaticamente
- Se o timeout de 8 segundos for atingido → fallback ativa automaticamente
- Nenhuma intervenção manual necessária

### Manual (forçar fallback)
Se precisar garantir que o fallback estará ativo durante a apresentação:
1. Abrir `assets/js/script.js`
2. Alterar a linha 12: `const AGENTFORCE_ENABLED = false;`
3. Salvar e recarregar a página

### Voltar ao modo Agentforce
1. Alterar de volta: `const AGENTFORCE_ENABLED = true;`
2. Salvar e recarregar a página

---

## 🎤 Como Explicar para a Banca a Contingência

### Roteiro sugerido para a apresentação

> *"Nosso portal possui um mecanismo de contingência automático. Se o Agentforce estiver disponível, ele assume a conversa com inteligência artificial real, conectada ao Salesforce. Se houver qualquer indisponibilidade de rede ou do serviço, o portal ativa automaticamente um modo de demonstração offline que simula exatamente os mesmos fluxos de atendimento — ambientação, localização de atividades e encaminhamento ao polo. Isso garante que a apresentação funcione em qualquer cenário."*

### Pontos-chave para destacar

1. **Resiliência**: O portal nunca "quebra" — ele sempre tem uma resposta
2. **Transparência**: Logs no console indicam claramente qual modo está ativo
3. **Experiência consistente**: O aluno tem a mesma jornada nos dois modos
4. **Decisão arquitetural**: Fallback não é um "gambito" — é uma decisão de design que demonstra maturidade técnica
