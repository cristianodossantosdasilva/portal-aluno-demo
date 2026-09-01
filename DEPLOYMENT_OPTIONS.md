# Opções de Deploy — Portal do Aluno Demo

> Comparativo das opções de publicação para hospedar o portal em uma URL pública HTTPS.

---

## A) GitHub Pages ⭐ Recomendado

### Vantagens
- **Simples**: Ativação em 3 cliques no repositório
- **Gratuito**: Sem custos para repositórios públicos
- **HTTPS público**: Certificado SSL automático
- **Ideal para projeto estático**: Serve HTML/CSS/JS diretamente
- **Estável**: Infraestrutura do GitHub (Microsoft)

### Riscos
- A URL pode conter subpasta (ex: `https://usuario.github.io/portal-aluno-demo/`)
- Exige que todos os caminhos de assets sejam relativos (já ajustado no projeto)
- Propagação de DNS pode levar até 10 minutos na primeira publicação

### Como usar
```bash
# No repositório GitHub:
# Settings → Pages → Source: main / root → Save
```

---

## B) Netlify

### Vantagens
- **Deploy muito rápido**: Arrastar e soltar pasta no navegador
- **HTTPS automático**: Certificado provisionado em segundos
- **Bom para arrastar e soltar**: Ideal se não quiser usar Git
- **URL limpa**: `https://nome-projeto.netlify.app` (sem subpasta)

### Riscos
- Depende de conta Netlify (gratuita, mas requer cadastro)
- Se usar drag-and-drop, atualizações futuras exigem re-upload manual
- Free tier tem limites de bandwidth (suficiente para demo)

### Como usar
```
app.netlify.com → Add new site → Deploy manually → Arrastar pasta
```

---

## C) Vercel

### Vantagens
- **HTTPS automático**: Certificado provisionado em segundos
- **Bom para projetos front-end**: Detecção automática de framework
- **Preview deployments**: Cada push gera uma URL de preview
- **URL limpa**: `https://nome-projeto.vercel.app`

### Riscos
- Pode tentar detectar framework automaticamente (selecionar "Other" no setup)
- Depende de conta Vercel (gratuita, mas requer cadastro)
- Interface mais complexa que Netlify para projetos simples

### Como usar
```
vercel.com → Add New → Import repo → Framework: Other → Deploy
```

---

## D) Cloudflare Tunnel

### Vantagens
- **Mantém rodando local**: O portal continua no seu computador
- **Expõe HTTPS público**: Cria um túnel seguro para o localhost
- **Útil para teste rápido**: Não precisa fazer deploy em nenhum lugar
- **Zero configuração de hosting**: Apenas um comando

### Riscos
- **URL temporária**: Muda a cada execução (exige reconfigurar Salesforce)
- **Dependência do computador**: Se o PC desligar, o portal sai do ar
- **Mais uma dependência**: Precisa instalar o `cloudflared`
- **Instável para apresentação**: Risco de cair durante a demo

### Como usar
```bash
# Instalar cloudflared e rodar:
cloudflared tunnel --url http://localhost:8000
```

---

## E) Google Colab com Túnel

### ⚠️ Não recomendado como primeira opção

### Avaliação
O Google Colab pode rodar Python e expor um servidor via túnel (ngrok ou similar), **porém**:

- **URL gerada por túnel pode mudar** a cada sessão
- **Limitação de sessão**: Colab desconecta após ~30 min de inatividade
- **Não é ideal para front-end**: Colab foi feito para notebooks, não para servir HTML
- **Risco desnecessário**: Adiciona complexidade sem benefício para um projeto estático
- **Pode falhar durante o hackathon**: Instabilidade de sessão em momentos críticos

### Quando considerar
Apenas se todas as outras opções falharem e o único recurso disponível for um Chromebook com acesso ao Google Colab.

---

## 📊 Resumo Comparativo

| Opção | HTTPS | Estabilidade | Facilidade | URL Fixa | Custo |
|-------|-------|-------------|------------|----------|-------|
| **GitHub Pages** | ✅ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ | Grátis |
| **Netlify** | ✅ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | Grátis |
| **Vercel** | ✅ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ | Grátis |
| **Cloudflare Tunnel** | ✅ | ⭐⭐⭐ | ⭐⭐⭐ | ❌ | Grátis |
| **Google Colab** | ✅* | ⭐⭐ | ⭐⭐ | ❌ | Grátis |

---

## 🏆 Conclusão Recomendada

| Prioridade | Opção | Motivo |
|------------|-------|--------|
| **1ª** | GitHub Pages | Simples, gratuito, estável, URL fixa, HTTPS |
| **2ª** | Netlify | Excelente para drag-and-drop rápido |
| **3ª** | Vercel | Alternativa sólida se já tiver conta |
| **4ª** | Cloudflare Tunnel | Apenas para testes rápidos internos |
| **Evitar** | Google Colab | Não depender disso para a apresentação principal |
