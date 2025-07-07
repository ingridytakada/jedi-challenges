# 🧠 CloudWalk Nimbus Challenges

> **Choose Your Mission. Master the Force of AI.**

A cyberpunk-themed collection of AI coding challenges designed to test and showcase advanced artificial intelligence and multi-agent system development skills.

## 🎯 Overview

This project presents **9 progressive AI challenges** across 3 difficulty levels, from beginner-friendly chatbots to hardcore AI research projects like decoding the mysterious Voynich Manuscript.

### 🚀 Live Experience
- **Interactive Interface**: Click any challenge to expand and explore details
- **Advanced Analytics**: Monitor candidate interest and engagement with simplified tracking
- **Cyberpunk Aesthetics**: Matrix-inspired design with terminal interface
- **Responsive Design**: Works seamlessly on desktop and mobile

## 🥷 Challenge Levels

### 🧑‍🚀 **Level 1: Padawan** (Light Side Missions)
- **CloudWalk Chatbot**: RAG-powered company information assistant
- **Find the Video Source**: Text-to-video matching using AI search

### 🥷 **Level 2: Jedi Knight** (Self-Driven Multi-Agent Companies)
- **Self-Driven Game Platform**: Autonomous game generation and marketing
- **Self-Driven Newsletter Company**: AI-powered content curation and distribution
- **Self-Driven Music Generator**: AI music creation with social media promotion
- **Self-Driven Ebook Generator**: Automated book writing and publishing

### 🧙‍♂️ **Level 3: Jedi Grand Master** (Hardcore AI Missions)
- **Kaggle-Slaying Multi-Agent Team**: Autonomous competition participation
- **ML Pool Estimation São Paulo**: Computer vision for satellite image analysis
- **Voynich Manuscript Decoder**: AI-powered historical cryptography

## 🛠️ Tech Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with cyberpunk theme, Matrix rain effect
- **Fonts**: Space Mono (monospace, terminal aesthetic)
- **Analytics**: Optimized N8N Webhook system for challenge click tracking
- **Deployment**: Vercel with automatic GitHub integration
- **Version Control**: Git with semantic commit messages

## 🎨 Features

### 🎮 Interactive Experience
- **Expandable Challenges**: Click-to-expand interface with smooth animations
- **Visual Feedback**: Hover effects, transitions, and color changes
- **Terminal Aesthetics**: Authentic cyberpunk terminal design
- **Matrix Background**: Animated falling characters effect

### 📊 Optimized Analytics & Tracking
- **Focus on Intent**: Track only challenge clicks that show real interest
- **Clean Data Structure**: Organized data for better analysis
- **Google Analytics 4**: Basic page view tracking
- **N8N Webhook**: Advanced automation for challenge interactions
- **Simplified Events**: Only `challenge_click` and `page_view` events

### 🎯 User Experience
- **Progressive Disclosure**: Show summaries first, details on demand
- **Visual Hierarchy**: Clear level progression and difficulty indication
- **Responsive Layout**: Mobile-first design with desktop enhancements
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🔗 N8N Webhook Analytics

### 🎯 Sistema Simplificado e Eficiente
O site possui integração otimizada com webhook N8N:

- **Foco em Clicks**: Apenas eventos de click nos desafios são capturados
- **Dados Estruturados**: JSON limpo com informações relevantes
- **Retry Automático**: Sistema de tentativas para garantia de entrega
- **Session Tracking**: Acompanha comportamento por sessão única

### 📊 Eventos Rastreados
- `challenge_click`: Click para expandir desafio (evento principal)
- `page_view`: Visita à página (controle básico)

**Estrutura do evento de click:**
```json
{
  "event_type": "challenge_click",
  "challenge_name": "cloudwalk-chatbot",
  "challenge_title": "💬 CloudWalk Chatbot",
  "challenge_level": "Level 1: Padawan – Light Side Missions",
  "action": "expand",
  "sessionId": "nimbus_1234567890_abc123",
  "timestamp": "2025-01-05T15:30:00.000Z"
}
```

### ⚙️ Configuração Rápida
1. **Configure URL do webhook** no `index.html`:
```javascript
const WEBHOOK_CONFIG = {
    url: 'https://cloudwalk-growth.app.n8n.cloud/webhook/973d5b3f-1952-42c2-8de7-671ae0906f24',
    enabled: true,
    retryAttempts: 3,
    retryDelay: 1000
};
```

2. **Importe o workflow** do arquivo `n8n-nimbus-click-tracking.json`
3. **Configure integrações** (Google Sheets, Slack, etc.)

### 🎯 Casos de Uso
- **Análise de Interesse**: Identificar desafios mais atrativos
- **Lead Scoring**: Pontuação baseada em engajamento real
- **Otimização de Conteúdo**: Ajustar desafios baseado em dados
- **Automação de Marketing**: Triggers baseados em interesse específico

📋 **Documentação Completa**: Ver `N8N_WEBHOOK_SETUP.md` e `NIMBUS_PROJECT_CHANGES.md`

## 🚀 Quick Start

### Local Development
```bash
# Clone the repository
git clone https://github.com/ingridytakada/jedi-challenges.git

# Navigate to project directory
cd jedi-challenges

# Open in browser (simple HTTP server)
python -m http.server 8000
# OR
npx serve .

# Visit http://localhost:8000
```

### Deployment
This project is automatically deployed to Vercel:
- **Production**: https://cloudwalk-jedi-challenges.vercel.app/
- **Auto-deploy**: Every push to `main` branch triggers deployment

## 📁 Project Structure

```
nimbus-challenges/
├── index.html                         # Main site with all challenges
├── cloudwalk-nimbus-challenges.md     # Challenge documentation
├── nimbus-challenges-events.csv       # Analytics data export
├── N8N_WEBHOOK_SETUP.md              # N8N webhook configuration guide
├── n8n-nimbus-click-tracking.json    # Optimized N8N workflow
├── n8n-workflow-example.json         # Legacy workflow (full events)
├── NIMBUS_PROJECT_CHANGES.md         # Project transformation documentation
├── DEPLOY_INSTRUCTIONS.md            # Deployment guide
├── .gitignore                        # Git ignore patterns
├── nimbus/                           # Additional resources
│   └── nimbus-challenges/            # Backup/alternative version
└── README.md                         # This file
```

### 🧹 Clean & Minimal
- **No Dependencies**: Pure vanilla web technologies
- **No Build Process**: Ready to run directly in browser
- **Lightweight**: ~35KB total size
- **Fast Loading**: Optimized assets and minimal HTTP requests

## 📈 Analytics Dashboard

### 📊 Google Analytics 4
Monitor basic page visits:

1. **Configure GA4 ID** in `index.html`
2. **Access Dashboard**: Google Analytics 4 interface
3. **Page Views**: Track basic site usage

### 🤖 N8N Automation
Advanced analytics focused on challenge interest:

1. **Real-time Processing**: Challenge clicks processed instantly
2. **Custom Workflows**: Automated responses to specific interests
3. **Integrations**: Google Sheets, Slack, CRM systems
4. **Intent Scoring**: Focus on actual challenge exploration

### 📊 Key Metrics
- **Most Popular Challenges**: Track click counts by challenge
- **Difficulty Preference**: Compare engagement across levels
- **Interest Patterns**: Which challenges attract most clicks
- **Session Analytics**: Multi-challenge exploration behavior
- **Conversion Funnel**: From page view to challenge exploration

## 🎨 Design Philosophy

### 🌃 Cyberpunk Aesthetics
- **Color Palette**: Matrix green (#00ff41), electric blue, deep blacks
- **Typography**: Space Mono for authentic terminal feel
- **Animation**: Subtle transitions and Matrix rain background
- **Interface**: Terminal-inspired windows and controls

### 🎯 User-Centered Design
- **Progressive Disclosure**: Show what's needed, when needed
- **Visual Hierarchy**: Clear challenge levels and difficulty
- **Feedback Systems**: Immediate response to user interactions
- **Accessibility**: Semantic markup and keyboard support

## 🔧 Customization

### Adding New Challenges
1. **Update HTML**: Add new challenge block with proper data attributes
2. **Include Summary**: Brief description for initial view
3. **Full Details**: Complete challenge description in expandable section
4. **Analytics**: Ensure proper `data-challenge` attribute for tracking

### Modifying Analytics
```javascript
// GA4 page views
gtag('event', 'page_view', {
    'page_title': document.title,
    'page_location': window.location.href
});

// N8N webhook events (challenge clicks only)
sendEventToN8N({
    event_type: 'challenge_click',
    challenge_name: challengeName,
    challenge_title: challengeTitle,
    action: 'expand'
});
```

### Configuring N8N Webhook
```javascript
// Update webhook configuration
const WEBHOOK_CONFIG = {
    url: 'https://cloudwalk-growth.app.n8n.cloud/webhook/973d5b3f-1952-42c2-8de7-671ae0906f24',
    enabled: true,
    retryAttempts: 3,
    retryDelay: 1000
};
```

## 📋 Recent Updates

### 🎯 CloudWalk Nimbus Transformation
- **Rebranded** from "CloudWalk AI Jedi Challenges" to "CloudWalk Nimbus Challenges"
- **Simplified Analytics**: Focus on challenge clicks only
- **Optimized Data Structure**: Clean, organized tracking
- **Enhanced N8N Integration**: Streamlined workflow for better automation

### 📊 Analytics Improvements
- **Removed Noise**: No more hover, scroll, or time-based events
- **Clean Data**: Structured columns instead of raw JSON dumps
- **Focused Insights**: Track what matters - actual challenge interest
- **Better Performance**: Fewer requests, faster processing

---

<div align="center">

**🚀 Ready to accept a challenge?**

**[Visit the Site →](https://cloudwalk-jedi-challenges.vercel.app/)**

*May the source be with you!*

</div> 