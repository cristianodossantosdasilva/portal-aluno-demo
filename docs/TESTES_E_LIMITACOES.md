# Testes e Limitações

## Ambientes e Avaliação
- O layout do Portal do Aluno foi estruturado isoladamente e avaliado nos quesitos design responsivo, simulação de sistema interno EAD e componentização visual de cartões acadêmicos.

## Integração ao Salesforce Agentforce
O portal adota uma estratégia **live-first**:

1. **Modo ao vivo:** Enquanto a org temporária do Salesforce Agentforce estiver ativa, o portal tenta carregar o agente original (Especialista de Sucesso do Aluno v9) via Embedded Messaging. O widget exibirá a identificação de modo ao vivo.
2. **Fallback automático:** Se a org estiver indisponível, expirar ou o carregamento falhar, o portal alterna automaticamente para uma simulação determinística claramente identificada como demonstração offline. O fallback não equivale a uma resposta de um modelo de linguagem em tempo real.

## Limitações do Ambiente de Demonstração
- A org temporária está sujeita a expiração futura após o período de avaliação do Hackathon.
- A execução automatizada dos cenários no Preview não foi preservada devido a limitações do ambiente de automação.
- O fallback público é uma simulação determinística da experiência e não equivale ao runtime do Agentforce.

## Acessibilidade
- O portal conta com landmarks básicos, contraste apropriado nos indicadores acadêmicos e feedback em estado hover nos botões primários.

