# Portal do Aluno - Demo

## Resumo Executivo
Este repositório é um ambiente demonstrativo isolado (público) que documenta e apresenta a interface de frontend projetada para o **Especialista de Sucesso do Aluno UniCesumar (Lisa)**, um agente de IA de permanência criado para o projeto **Marco Zero** durante o Hackathon Vitru 2026.

## Equipe e construção coletiva

O Marco Zero foi concebido, desenvolvido e apresentado coletivamente por uma equipe multidisciplinar de cinco integrantes durante o Hackathon Vitru 2026.

Todos contribuíram para a solução como um todo. Cada integrante concentrou mais atenção em determinadas frentes, mas as decisões não ficaram isoladas: o entendimento do negócio, a análise e a modelagem dos dados, a investigação das possíveis causas de evasão, a perspectiva do estudante, o desenho das jornadas, a criação dos agentes e a construção do pitch foram compartilhados e se influenciaram mutuamente.

As informações levantadas por Yasmin Baltieri, Yasmim Sobrinho e Eduardo Ferreira Mattos sobre o negócio, os dados e as possíveis causas de evasão alimentaram diretamente o desenho dos serviços, dos comportamentos e das intervenções dos agentes. A perspectiva de Victoria Suares sobre ingresso, estudo, permanência e acolhimento ajudou a transformar essas evidências em jornadas compreensíveis para candidatos e estudantes.

Victoria Suares e Cristiano Silva cocriaram conceitual e funcionalmente os dois agentes, conectando as evidências produzidas pela equipe, as necessidades dos usuários, os comportamentos esperados e os fluxos de atendimento. Cristiano realizou a configuração e a implementação técnica dos agentes e da base de conhecimento no Salesforce Agentforce com programação assistida por IA. Essa responsabilidade técnica descreve um foco de atuação e não estabelece autoria exclusiva ou hierarquia.

Em paralelo, Yasmin, Yasmim e Eduardo concentraram esforços na organização e comunicação da proposta no pitch, construído com contribuições da equipe e apresentado por Eduardo em nome do grupo.

Os focos abaixo registram responsabilidades assumidas ao longo do hackathon, e não limites de participação:

- **[Yasmin Baltieri](https://www.linkedin.com/in/yasminbaltieri/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bb93z3nWqTnGpeUV5z9qLPw%3D%3D):** contribuiu para toda a construção coletiva, com maior concentração no contexto do modelo de negócio da Vitru, na leitura dos dados anonimizados, na análise das possíveis causas de evasão e na construção do pitch.
- **[Yasmim Sobrinho](https://www.linkedin.com/in/yasmim-sobrinho-19aa14160/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bb93z3nWqTnGpeUV5z9qLPw%3D%3D):** contribuiu para toda a construção coletiva, com maior concentração na modelagem e leitura estatística dos dados, na formulação de hipóteses sobre evasão e na construção do pitch.
- **[Eduardo Ferreira Mattos](https://www.linkedin.com/in/eduardo-ferreira-mattos/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bb93z3nWqTnGpeUV5z9qLPw%3D%3D):** contribuiu para toda a construção coletiva, com maior concentração na análise dos dados, na investigação das possíveis causas de evasão e na construção do pitch, que apresentou em nome da equipe.
- **[Victoria Suares](https://www.linkedin.com/in/victoria-suares/):** contribuiu para toda a construção coletiva, com maior concentração na perspectiva do estudante, nas necessidades de ingresso, estudo, permanência e acolhimento e na cocriação conceitual e funcional dos dois agentes com Cristiano.
- **[Cristiano Silva](https://github.com/cristianodossantosdasilva):** contribuiu para toda a construção coletiva, com maior concentração na análise assistida por IA, nas dores de onboarding, navegação e solicitação de serviços, na cocriação conceitual e funcional dos dois agentes com Victoria e na configuração e implementação técnica dos agentes e da base de conhecimento no Salesforce Agentforce.

As responsabilidades foram diferentes, complementares e igualmente relevantes. O resultado pertence à equipe, e nenhuma frente teria produzido a mesma solução de forma isolada.

## Metodologia Assistida por IA
A metodologia adotada para o desenvolvimento deste projeto consistiu em programação assistida por IA, desenvolvimento orientado por intenção, prototipação iterativa e validação humana. O termo "vibe coding" pode aparecer como termo secundário.

**Origem das ferramentas de IA utilizadas:**
- **Microsoft Copilot, Antigravity e Gemini:** ferramentas pessoais pagas por Cristiano.
- **Kiro:** fornecido pela AWS durante o hackathon.
- **Claude:** cedido pela Salesforce somente para ajustes pontuais.
- **Salesforce Agentforce:** plataforma de implementação e orquestração.

## Demo Online
- [Portal do Aluno](https://cristianodossantosdasilva.github.io/portal-aluno-demo/)
- [Repositório Portal do Aluno](https://github.com/cristianodossantosdasilva/portal-aluno-demo)

## Evidência e limitação
Os metadados exportados, os portais navegáveis e as capturas do Agentforce Builder preservam evidências da arquitetura e da implementação. A execução automatizada dos cenários no Preview não foi preservada devido a limitações do ambiente de automação. O fallback público é uma simulação determinística da experiência e não equivale ao runtime do Agentforce nem a respostas de um modelo de linguagem em tempo real.

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
- [Portal do Candidato](https://cristianodossantosdasilva.github.io/portal-do-candidato-demo/)
- [Repositório Portal do Candidato](https://github.com/cristianodossantosdasilva/portal-do-candidato-demo)

## Marcas e uso
As marcas e os nomes de produtos mencionados pertencem aos respectivos titulares. Este repositório é uma demonstração técnica de portfólio e não representa produto oficial nem implantação produtiva das organizações citadas.

