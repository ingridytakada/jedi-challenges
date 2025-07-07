# 🚀 Instruções de Deploy - CloudWalk Nimbus Challenges

## 1. Deploy do Site (Vercel)

### Comando para Deploy
```bash
# Fazer commit das mudanças
git add .
git commit -m "feat: Complete CloudWalk Nimbus Challenges transformation

- Rename project from 'CloudWalk AI Jedi Challenges' to 'CloudWalk Nimbus Challenges'
- Rename all files for consistent nomenclature:
  * clouwalk-jedi-challeges.md → cloudwalk-nimbus-challenges.md
  * [nimbus] ai jedi challenges events.csv → nimbus-challenges-events.csv
  * nimbus/jedi-challenges/ → nimbus/nimbus-challenges/
- Update README.md with new branding and simplified analytics
- Simplify analytics to track only challenge clicks
- Remove unnecessary event tracking (hover, scroll, time, etc.)
- Clean data structure for better N8N integration
- Create optimized N8N workflow for click tracking"

# Push para o repositório (auto-deploy no Vercel)
git push origin main
```

### Verificação do Deploy
- URL do site: https://cloudwalk-nimbus-challenges.vercel.app/
- URL legacy: https://cloudwalk-jedi-challenges.vercel.app/ (para referência)
- Verificar se o título mudou para "CloudWalk Nimbus Challenges"
- Testar clicks nos desafios
- Verificar logs no console do navegador

## 2. Configuração do N8N

### Passo 1: Importar Workflow
1. Acesse seu painel N8N
2. Clique em "Import from File"
3. Selecione `n8n-nimbus-click-tracking.json`
4. Importe o workflow

### Passo 2: Configurar Credenciais
1. Configure as credenciais do Google Sheets
2. Crie uma nova planilha ou use a existente
3. Ajuste o ID da planilha no nó "Google Sheets"

### Passo 3: Ativar Workflow
1. Clique em "Activate" no workflow
2. Verifique se o webhook está ativo
3. Teste com o comando curl fornecido

## 3. Estrutura da Planilha Google Sheets

### Colunas Necessárias
```
A: timestamp
B: event_type
C: challenge_name
D: challenge_title
E: challenge_level
F: action
G: session_id
H: user_agent
I: url
J: referrer
```

### Exemplo de Dados
```
2025-01-05T15:30:00.000Z | challenge_click | cloudwalk-chatbot | 💬 CloudWalk Chatbot | Level 1: Padawan – Light Side Missions | expand | nimbus_123 | Mozilla/5.0 | https://site.com | 
```

## 4. Teste Completo

### Teste 1: Site Funcionando
```bash
# Abrir site
open https://cloudwalk-nimbus-challenges.vercel.app/

# Verificar:
# - Título mudou para "CloudWalk Nimbus Challenges"
# - Clicks nos desafios funcionam
# - Console mostra logs de eventos
```

### Teste 2: Webhook N8N
```bash
# Teste de evento válido (será processado)
curl -X POST https://cloudwalk-growth.app.n8n.cloud/webhook/973d5b3f-1952-42c2-8de7-671ae0906f24 \
  -H "Content-Type: application/json" \
  -d '{
    "event_type": "challenge_click",
    "challenge_name": "cloudwalk-chatbot",
    "challenge_title": "💬 CloudWalk Chatbot",
    "challenge_level": "Level 1: Padawan",
    "action": "expand"
  }'

# Resposta esperada:
# {"status": "success", "message": "Challenge click tracked successfully"}
```

### Teste 3: Filtro de Eventos
```bash
# Teste de evento inválido (será ignorado)
curl -X POST https://cloudwalk-growth.app.n8n.cloud/webhook/973d5b3f-1952-42c2-8de7-671ae0906f24 \
  -H "Content-Type: application/json" \
  -d '{
    "event_type": "page_view",
    "page_title": "Test Page"
  }'

# Resposta esperada:
# {"status": "ignored", "message": "Event type not tracked"}
```

## 5. Monitoramento

### Verificações Diárias
- [ ] Site está online e funcionando
- [ ] Webhook N8N está ativo
- [ ] Dados estão sendo salvos na planilha
- [ ] Estrutura de dados está correta

### Métricas Importantes
- **Desafios mais clicados**: TOP 5 por dia/semana
- **Distribuição por nível**: Padawan vs Jedi Knight vs Grand Master
- **Sessões únicas**: Quantos usuários únicos por dia
- **Horários de pico**: Quando há mais engajamento

## 6. Troubleshooting

### Problema: Webhook não funciona
**Soluções:**
1. Verificar se o workflow está ativo
2. Checar credenciais do Google Sheets
3. Testar com curl manual
4. Verificar logs no N8N

### Problema: Dados não aparecem na planilha
**Soluções:**
1. Verificar ID da planilha no workflow
2. Checar permissões da planilha
3. Testar mapeamento de colunas
4. Verificar filtros no N8N

### Problema: Site não carrega
**Soluções:**
1. Verificar deploy no Vercel
2. Checar sintaxe do HTML/JavaScript
3. Verificar logs no console do navegador
4. Testar localmente primeiro

## 7. Estrutura Final do Projeto

### Arquivos Principais
```
cloudwalk-nimbus-challenges/
├── index.html                         # Site principal
├── cloudwalk-nimbus-challenges.md     # Documentação dos desafios
├── nimbus-challenges-events.csv       # Dados de analytics
├── n8n-nimbus-click-tracking.json    # Workflow N8N otimizado
├── README.md                          # Documentação principal
├── NIMBUS_CHALLENGES_CHANGES.md       # Log de mudanças
├── DEPLOY_INSTRUCTIONS.md             # Este arquivo
└── nimbus/                            # Recursos adicionais
    └── nimbus-challenges/             # Versão backup
```

### Arquivos de Configuração N8N
- `n8n-nimbus-click-tracking.json` - Workflow otimizado (USAR ESTE)
- `n8n-workflow-example.json` - Workflow legacy com todos os eventos
- `n8n-sheets-workflow.json` - Variação para Google Sheets
- `n8n-simple-workflow.json` - Versão simplificada

## 8. Próximas Melhorias

### Curto Prazo
- [ ] Dashboard de analytics em tempo real
- [ ] Alertas para desafios mais populares
- [ ] Análise de padrões de comportamento

### Longo Prazo
- [ ] A/B testing de conteúdo
- [ ] Personalização baseada em interesse
- [ ] Integração com CRM

### Melhorias de UX
- [ ] Animações mais suaves
- [ ] Feedback visual melhorado
- [ ] Versão mobile otimizada

## 9. Histórico de Mudanças

### Versão 2.0 - CloudWalk Nimbus Challenges
- **Rebranding completo**: Nova nomenclatura consistente
- **Analytics simplificado**: Foco apenas em clicks de desafios
- **Arquivos organizados**: Nomenclatura clara e sem erros
- **Documentação atualizada**: README e guias atualizados

### Versão 1.0 - CloudWalk AI Jedi Challenges
- **Implementação inicial**: Site com todos os desafios
- **Analytics completo**: Múltiplos tipos de eventos
- **Integração N8N**: Primeiro workflow implementado

---

🎯 **Objetivo Final**: Identificar quais desafios despertam mais interesse para otimizar conteúdo e experiência do usuário, com nomenclatura consistente e dados limpos. 