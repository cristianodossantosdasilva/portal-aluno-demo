# Portal do Aluno - Demo

## Resumo Executivo
Este repositório é um ambiente demonstrativo isolado (público) que documenta e apresenta a interface de frontend projetada para o **Especialista de Sucesso do Aluno UniCesumar (Lisa)**, um agente de IA de permanência criado para o projeto **Marco Zero** durante o Hackathon Vitru 2026.

## Autoria e Metodologia

### Desenvolvimento assistido por IA
Este agente foi desenvolvido com programação assistida por inteligência artificial, desenvolvimento orientado por intenção e prototipação iterativa, abordagem também conhecida como vibe coding.

Cristiano Silva conduziu a definição do problema, requisitos, jornada do usuário, arquitetura, regras de negócio, guardrails, critérios de validação e ciclos de revisão. As ferramentas de IA apoiaram a geração e revisão de código, estruturação de instruções, diagnóstico de falhas e documentação.

Microsoft Copilot, Antigravity e Gemini faziam parte do ecossistema pessoal de ferramentas pagas por Cristiano. Durante o hackathon, a AWS forneceu o Kiro para apoio ao desenvolvimento, e a Salesforce cedeu o Claude somente para ajustes pontuais. O Salesforce Agentforce foi a plataforma usada para implementar e orquestrar os agentes.

O processo não consistiu em aceitar automaticamente código gerado. O desenvolvimento ocorreu em ciclos de intenção, geração assistida, revisão, testes, correção e validação humana.

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

