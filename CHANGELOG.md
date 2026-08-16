# Changelog - Portal do Aluno Demo

## [v1.3] - 2026-08-15
### Adicionado
- Preparação do portal para publicação HTTPS pública (GitHub Pages, Netlify, Vercel).
- Revisão e validação de todos os caminhos relativos de assets.
- Criação de `README.md` completo com instruções de execução, deploy e testes.
- Criação de `SALESFORCE_DEPLOY_CHECKLIST.md` com checklist de integração Salesforce.
- Criação de `DEPLOYMENT_OPTIONS.md` com comparativo de opções de hospedagem.
- Criação de `docs/deployment_publico.md` com guia de publicação HTTPS e contingência.
- Melhoria dos logs de diagnóstico no console (emojis, detecção de bootstrap, mensagens mais claras).
- Ampliação das keywords de NLP do fallback para cobrir mais variações de intenção.
- Otimizações de performance (`preconnect`, `preload`, `defer`) mantidas da v1.2.

### Motivo
Preparação do portal para validação real do Salesforce Embedded Messaging fora do localhost, resolvendo bloqueios de CORS/CSP que impedem o carregamento do Agentforce em ambiente local.


## [v1.2] - 2026-08-15
### Adicionado
- Integração do Salesforce Embedded Messaging / Agentforce no Portal do Aluno.
- Preservação do fallback offline como contingência.
- Ajuste do fallback para simular interativamente os fluxos de atividade, ambientação e atendimento humano.
- Inclusão de mecanismo de detecção de falha no carregamento do Agentforce e timeouts dinâmicos.

## [v1.1] - 2026-08-15
### Adicionado
- **Narrativa de Intervenção Inteligente**: Evolução do card de "Ambientação" para focar em recomendações proativas, adicionando a mensagem de incentivo: "Alunos que concluem a ambientação tendem a se adaptar melhor à rotina de estudos EAD." e alterando os ícones para indicar "pendência de sucesso" em vez de atrasos ou riscos.
- **Banner de Contexto**: Adicionado um alerta ("Recomendação de Sucesso") que surge acima do widget do chat após 1.5s com um *Call to Action* amigável.
- **Fallback Estático (Offline Demo)**: Criada uma experiência simulada de conversa no widget do Agentforce. Caso o snippet oficial não seja injetado, o usuário pode clicar nos botões estáticos ("Ver próximos passos", "Encontrar minha atividade", "Falar com o polo") para apresentar o fluxo sem dependência de internet/Salesforce.
- **Marcação Estrutural**: Inserção das tags HTML `<!-- INÍCIO ÁREA AGENTFORCE -->` e `<!-- FIM ÁREA AGENTFORCE -->` para facilitar a substituição futura.

### Motivo
Introdução da narrativa de Intervenção Inteligente (mudança do viés reativo de "evasão" para um viés proativo de "sucesso do aluno") e preparação do portal para modo de demonstração offline do Agentforce.
