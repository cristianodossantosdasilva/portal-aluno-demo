# Portal do Aluno - Demo

## Resumo Executivo
Este repositório é um ambiente demonstrativo isolado (público) que documenta e apresenta a interface de frontend projetada para o **Especialista de Sucesso do Aluno UniCesumar (Lisa)**, um agente de IA de permanência criado para o projeto **Marco Zero** durante o Hackathon Vitru 2026.

## Equipe e Contribuições
O Marco Zero foi desenvolvido por uma equipe multidisciplinar no Hackathon Vitru 2026. O trabalho reuniu contexto de negócio, análise de dados, modelagem de hipóteses, perspectiva do estudante e implementação técnica assistida por IA.

### Integrantes da Equipe
- **[Victoria Suares](https://www.linkedin.com/in/victoria-suares/)**: Cocriou os dois agentes com Cristiano, contribuindo para seu desenvolvimento conceitual e funcional a partir da perspectiva do estudante, das dificuldades de ingresso, estudo e permanência e das necessidades de acolhimento. Também contribuiu para o conceito de mentoria ocupacional que evoluiu para o Consultor de Carreiras.
- **[Cristiano Silva](https://github.com/cristianodossantosdasilva)**: Cocriou os dois agentes com Victoria, contribuindo para seu desenvolvimento conceitual e funcional, para a tradução das jornadas em fluxos de atendimento e para a implementação e configuração técnica dos agentes e da base de conhecimento no Salesforce Agentforce com programação assistida por IA.
- **[Yasmin Baltieri](https://www.linkedin.com/in/yasminbaltieri/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bb93z3nWqTnGpeUV5z9qLPw%3D%3D)**: Atuou como madrinha do time; trouxe informações sobre o modelo de negócio da Vitru, contexto sobre os dados anonimizados ligados à dor explorada, e participou da leitura e análise dos dados.
- **[Yasmim Sobrinho](https://www.linkedin.com/in/yasmim-sobrinho-19aa14160/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bb93z3nWqTnGpeUV5z9qLPw%3D%3D)**: Apoiou a modelagem dos dados e das hipóteses de evasão, e contribuiu com perspectiva estatística.
- **[Eduardo Ferreira Mattos](https://www.linkedin.com/in/eduardo-ferreira-mattos/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bb93z3nWqTnGpeUV5z9qLPw%3D%3D)**: Apoiou a busca das possíveis causas de evasão e participou ativamente da leitura e análise dos dados junto com a equipe.

### Cocriação dos agentes
Os dois agentes do Marco Zero foram cocriados por **Victoria Suares** e **Cristiano Silva**, com contribuições diferentes e igualmente relevantes.

Victoria contribuiu para o desenvolvimento conceitual e funcional a partir da perspectiva do estudante, das dificuldades de ingresso, estudo e permanência e das necessidades de acolhimento. Essa visão ajudou a definir as jornadas, os serviços e os comportamentos esperados dos agentes, incluindo o conceito de mentoria ocupacional que evoluiu para o Consultor de Carreiras.

Cristiano contribuiu para o desenvolvimento conceitual e funcional, transformou requisitos e jornadas em fluxos de atendimento e realizou a implementação e configuração técnica dos dois agentes e da base de conhecimento no Salesforce Agentforce, com programação assistida por IA.

A concepção, a experiência do estudante, os comportamentos esperados, os fluxos e a implementação técnica foram construídos de forma integrada. Por isso, os agentes devem ser apresentados como uma cocriação de Victoria e Cristiano, sem hierarquia entre as contribuições.

## Metodologia Assistida por IA
Este agente foi desenvolvido com programação assistida por inteligência artificial, desenvolvimento orientado por intenção e prototipação iterativa (vibe coding). O processo não consistiu em aceitar automaticamente código gerado. O desenvolvimento ocorreu em ciclos de intenção, geração assistida, revisão, testes, correção e validação humana.

**Origem das ferramentas de IA utilizadas:**
- **Microsoft Copilot, Antigravity e Gemini:** ferramentas pessoais pagas e utilizadas por Cristiano.
- **Kiro:** fornecido pela AWS durante o hackathon.
- **Claude:** cedido pela Salesforce somente para ajustes pontuais.
- **Salesforce Agentforce:** plataforma de implementação e orquestração dos agentes.

## Demo Online
- [Acessar Portal do Aluno (GitHub Pages)](https://cristianodossantosdasilva.github.io/portal-aluno-demo/)

## Evidência e Limitação
Os metadados exportados, os portais navegáveis e as capturas do Agentforce Builder comprovam a arquitetura e a implementação dos agentes. A execução automatizada dos cenários no Preview não foi preservada devido a limitações do ambiente de automação. O fallback público é uma simulação determinística da experiência e não equivale ao runtime do Agentforce nem a uma resposta de LLM em tempo real.

A implementação original utiliza uma org temporária do Salesforce Agentforce, ainda acessível no momento da preservação e sujeita a expiração futura.

**Nota técnica:** A substituição proposital do Org ID no código-fonte por medida de segurança impossibilita a conexão direta do widget Embedded Messaging de conectar na Org do Salesforce neste repositório. Por isso, a página adota explicitamente o modo offline/fallback para demonstração visual permanente.

## Arquitetura do Agente
*(Veja mais em [docs/ARQUITETURA_DO_AGENTE.md](docs/ARQUITETURA_DO_AGENTE.md))*
O agente ativo **Especialista de Sucesso do Aluno (v9)** implementado:
1. Especialista em Retenção
2. Suporte Acadêmico
3. Suporte Administrativo e Financeiro
4. Guia do AVA (Studeo)
5. Sucesso Geral do Aluno

## Relação com o Agente Complementar
A jornada inicial do estudante pode ser consultada no ambiente irmão:
- [Portal do Candidato (Consultor de Carreiras)](https://github.com/cristianodossantosdasilva/portal-do-candidato-demo)

## Licença e Uso
Este repositório contém artefatos de demonstração construídos durante o Hackathon Vitru 2026. Todos os direitos sobre a marca e o caso de uso pertencem à instituição. O código e a interface gráfica servem estritamente para propósitos de demonstração técnica de portfólio.

