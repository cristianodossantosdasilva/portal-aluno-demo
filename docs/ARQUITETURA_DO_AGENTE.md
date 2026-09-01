# Arquitetura do Agente: Especialista de Sucesso do Aluno UniCesumar (Lisa)

## Identificação
- **Papel:** Suporte acadêmico, retenção, ambientação (AVA) e suporte financeiro pós-matrícula.
- **Versão Ativa e Validada:** v9 (confirmada e imutável no Backup Bruto do Agent Builder).

## Tópicos e Capabilities
- O agente baseia-se num Copilot com roteamento de intenções, dividindo as expertises para não perder o contexto:
  
  1. **Especialista em Retenção:** Atua na retenção de aluno propenso à evasão ou insatisfação, com permissão imediata de handover humano.
  2. **Suporte Acadêmico:** Sub-agente que orienta sobre dependências curriculares, prazos de TCC/atividades extracurriculares e rotinas pedagógicas.
  3. **Suporte Administrativo e Financeiro:** Auxilia sobre boletos, renovação, atestados, certidões e requerimentos.
  4. **Guia do AVA (Studeo):** Ajudante técnico para navegação na plataforma EAD.
  5. **Sucesso Geral:** Orquestrador generalista.

## Conhecimento (RAG)
O agente utiliza a Ação `AnswerQuestionsWithKnowledge` em suas verticais para fornecer FAQs corretas acerca da política de alunos ativos da UniCesumar, minimizando alucinações.

