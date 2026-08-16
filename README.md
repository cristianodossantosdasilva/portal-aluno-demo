# Portal do Aluno Demo — Plataforma de Sucesso do Aluno

> Ambiente Virtual de Aprendizagem (AVA) de demonstração para o **Hackathon Vitru 2026**.
> Simula a jornada de um aluno EAD recém-matriculado com um agente de IA de acolhimento embutido na página.

---

## 🎯 Objetivo do Projeto

Demonstrar, ao vivo, como um **Agente de Sucesso do Aluno** (powered by Salesforce Agentforce) pode intervir de forma proativa e positiva na jornada de um estudante EAD, ajudando-o a concluir sua ambientação, localizar atividades e acessar o polo de apoio.

O portal inclui:
- Dashboard educacional com cards de progresso
- Widget de chat integrado ao Salesforce Embedded Messaging (Agentforce)
- Fallback offline completo para demonstração sem internet

---

## 🏗️ Stack Tecnológica

| Camada     | Tecnologia           |
|------------|----------------------|
| Estrutura  | HTML5 semântico      |
| Estilo     | CSS3 (Vanilla)       |
| Lógica     | JavaScript (Vanilla) |
| Fontes     | Google Fonts (Outfit)|
| Ícones     | Phosphor Icons (CDN) |
| Agente IA  | Salesforce Agentforce (Embedded Messaging) |
| Servidor   | Python `http.server` (apenas local) |

---

## 💻 Como Executar Localmente

### Pré-requisitos
- Python 3.x instalado

### Passos

```bash
# 1. Clone ou baixe o repositório
git clone https://github.com/SEU_USUARIO/portal-aluno-demo.git
cd portal-aluno-demo

# 2. Inicie o servidor local
python run.py

# 3. Acesse no navegador
# http://localhost:8000
```

> **Nota:** O `run.py` é apenas um utilitário local. O projeto é 100% estático e não depende de Python para funcionar em produção.

---

## 🚀 Como Publicar no GitHub Pages

1. Crie um repositório no GitHub chamado `portal-aluno-demo`
2. Envie os arquivos do projeto:
   ```bash
   git init
   git add .
   git commit -m "Portal do Aluno Demo v1.3"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/portal-aluno-demo.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages**
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`
5. Clique em **Save**
6. Aguarde ~2 minutos e copie a URL pública gerada (ex: `https://seu-usuario.github.io/portal-aluno-demo/`)
7. **Importante:** Adicione essa URL nas configurações do Salesforce (veja `SALESFORCE_DEPLOY_CHECKLIST.md`)

---

## 🌐 Como Publicar no Netlify

1. Acesse [app.netlify.com](https://app.netlify.com)
2. Faça login com sua conta GitHub
3. Clique em **"Add new site" → "Deploy manually"**
4. Arraste e solte a pasta `portal-aluno-demo` inteira na área de upload
5. Aguarde o deploy (~30 segundos)
6. Copie a URL gerada (ex: `https://portal-aluno-demo.netlify.app`)
7. Adicione essa URL nas configurações do Salesforce

---

## ▲ Como Publicar no Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New..." → "Project"**
3. Importe o repositório GitHub `portal-aluno-demo`
4. Em **Framework Preset**, selecione **"Other"** (o projeto é estático puro)
5. Clique em **Deploy**
6. Copie a URL gerada (ex: `https://portal-aluno-demo.vercel.app`)
7. Adicione essa URL nas configurações do Salesforce

---

## 🧪 Como Testar o Fallback Offline

1. Abra o arquivo `assets/js/script.js`
2. Na **linha 12**, altere:
   ```javascript
   const AGENTFORCE_ENABLED = false;
   ```
3. Salve o arquivo e recarregue a página (F5)
4. O botão flutuante do fallback aparecerá no canto inferior direito
5. Teste digitando no chat:
   - `"Onde encontro minha primeira atividade?"` → Resposta sobre Atividade 1
   - `"Estou perdido"` → Resposta sobre ambientação
   - `"Quero atendimento humano"` → Resposta de conexão com o polo
6. **Lembre de voltar para `true` antes da apresentação!**

---

## 🤖 Como Testar o Agentforce Online

1. Publique o portal em uma URL HTTPS pública (GitHub Pages, Netlify ou Vercel)
2. Adicione a URL pública nas configurações do Salesforce (veja `SALESFORCE_DEPLOY_CHECKLIST.md`)
3. Acesse a URL pública no navegador
4. Abra o DevTools (F12) → Console
5. Verifique os logs:
   - `🚀 Agentforce: carregamento iniciado`
   - `✅ Agentforce: script bootstrap carregado`
   - `✅ Agentforce: init executado`
   - `🎉 Agentforce: carregado com sucesso`
6. O widget oficial do Salesforce aparecerá no canto inferior direito
7. Teste enviando: `"Quero atendimento humano"`

---

## 🔗 URLs que Devem ser Adicionadas no Salesforce

Após publicar o portal, adicione a URL pública nos seguintes locais do Salesforce Setup:

| Configuração Salesforce         | URL a adicionar                                    |
|---------------------------------|----------------------------------------------------|
| **CORS (Allowed Origins)**      | `https://seu-usuario.github.io`                    |
| **Trusted URLs**                | `https://seu-usuario.github.io`                    |
| **Session Settings (se aplicável)** | Adicionar como domínio confiável para iframes  |

> Consulte `SALESFORCE_DEPLOY_CHECKLIST.md` para o checklist completo.

---

## 🛡️ Plano B para Apresentação

Se o Agentforce não carregar durante a apresentação (problemas de rede, Salesforce indisponível, etc.):

1. **O fallback ativa automaticamente** após 8 segundos de timeout
2. O botão flutuante aparece e o chat simulado fica funcional
3. Todas as 3 intenções estão programadas (atividade, ambientação, polo)
4. Se precisar forçar o fallback imediatamente, altere `AGENTFORCE_ENABLED = false` no `script.js`

> O público não perceberá diferença visual significativa entre o chat real e o fallback.

---

## 📁 Estrutura do Projeto

```
portal-aluno-demo/
├── index.html                    # Página principal do portal
├── run.py                        # Servidor local Python (utilitário)
├── README.md                     # Este arquivo
├── CHANGELOG.md                  # Registro de versões
├── SALESFORCE_DEPLOY_CHECKLIST.md # Checklist de integração Salesforce
├── DEPLOYMENT_OPTIONS.md         # Comparativo de opções de deploy
├── assets/
│   ├── css/
│   │   └── style.css             # Estilos do portal
│   └── js/
│       └── script.js             # Lógica do portal + Agentforce + Fallback
└── docs/
    └── deployment_publico.md     # Guia de publicação HTTPS
```

---

## 📝 Licença

Projeto desenvolvido exclusivamente para o **Hackathon Vitru 2026**. Uso interno e demonstrativo.
