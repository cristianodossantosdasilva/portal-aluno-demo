# Testes e Limitações

## Ambientes e Avaliação
- O layout do Portal do Aluno foi estruturado isoladamente e avaliado nos quesitos design responsivo, simulação de sistema interno EAD e componentização visual de cartões acadêmicos.

## Conexão ao Salesforce e Limitações
- **Org Expirável:** A implementação original utiliza uma org temporária do Salesforce Agentforce, ainda acessível no momento da preservação e sujeita a expiração futura.
- **Fallback Estático:** Em caso de falha de carregamento do widget (devido à omissão de identificadores para segurança ou org inativa), a página ativa o modo fallback. Este modo apresenta a mesma janela com mensagens pré-renderizadas, permitindo que os avaliadores naveguem e compreendam a experiência idealizada. O fallback público é uma simulação determinística da experiência e não equivale ao runtime do Agentforce nem a uma resposta de LLM em tempo real.

