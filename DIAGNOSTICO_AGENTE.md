# Diagnóstico — Agente não funciona no Portal do Aluno

**Data:** 2026-08-16
**Org:** `00Dfj00000arKK2EAM` (orgfarm-138e8f6c88-dev-ed)
**Página:** https://cristianodossantosdasilva.github.io/portal-aluno-demo/

## ✅ O que está OK (infra de messaging)

| Verificação | Resultado |
|---|---|
| Org ID no código bate com a org conectada | ✅ `00Dfj00000arKK2` |
| `bootstrap.min.js` carrega | ✅ HTTP 200 |
| Endpoint de config do embedded service | ✅ HTTP 200 |
| CORS — origem do GitHub Pages na allowlist | ✅ `https://cristianodossantosdasilva.github.io` permitida |
| Deployment `Vitru_Messaging` existe e canal ativo | ✅ IsActive = true |

## 🔴 Causa raiz

O agente que o portal deveria usar — **"Especialista de Sucesso do Aluno UniCesumar"**
(`UniCesumar_EAD_Success_Agent`, label interno "Vitru | Agente de Sucesso do Aluno") —
**não tem nenhuma versão ativa**. Todas as versões (1, 3, 4, 6, 8) estão `Inactive`.

O único agente com versão ativa é o **"Consultor de Carreiras UniCesumar"**
(`UniCesumar_EAD_Sales_Agent`, versão 1 = `Active`) — que é o agente de vendas, não o de sucesso do aluno.

```
BotDefinition                     Versão   Status
UniCesumar_EAD_Success_Agent      1,3,4,6,8   TODAS Inactive   ← esperado pelo portal
UniCesumar_EAD_Sales_Agent        1           Active           ← único ativo
```

Sem uma BotVersion ativa vinculada ao canal `Vitru_Messaging`, o widget de chat
não consegue iniciar conversa com o agente → aparenta "não funcionar".

## 🛠️ Como corrigir

1. Setup → **Agentforce Agents** → abrir **"Especialista de Sucesso do Aluno UniCesumar"**.
2. Ativar a versão desejada (**Activate** / definir como versão ativa).
3. Confirmar que esse agente está vinculado ao **Messaging Deployment `Vitru_Messaging`**
   (Setup → Embedded Service Deployments → Vitru_Messaging → routing/agente).
4. Republicar o Embedded Service se necessário e testar o widget.

> Se a intenção for usar o agente de vendas (Sales) mesmo, então o deployment `Vitru_Messaging`
> precisa ser roteado para `UniCesumar_EAD_Sales_Agent` — mas pelo nome/label o correto é o Success Agent.

## Observação sobre o código do portal
O `index.html` + `assets/js/script.js` estão corretos: têm timeout de 8s e um
fallback offline. O que o usuário vê hoje é provavelmente o **fallback mockado**
(chat "Modo Offline Demo"), justamente porque o agente real não sobe.
