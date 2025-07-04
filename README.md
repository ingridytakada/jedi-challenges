# 🧠 CloudWalk AI Jedi Challenges

> **Choose Your Mission. Master the Force of AI.**

A cyberpunk-themed collection of AI coding challenges designed to test and showcase advanced artificial intelligence and multi-agent system development skills.

## 🎯 Overview

This project presents **9 progressive AI challenges** across 3 difficulty levels, from beginner-friendly chatbots to hardcore AI research projects like decoding the mysterious Voynich Manuscript.

### 🚀 Live Experience
- **Interactive Interface**: Click any challenge to expand and explore details
- **Analytics Tracking**: Monitor candidate interest and engagement
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
- **Analytics**: Dual system - GA4 + N8N Webhook for advanced automation
- **Deployment**: Vercel with automatic GitHub integration
- **Version Control**: Git with semantic commit messages

## 🎨 Features

### 🎮 Interactive Experience
- **Expandable Challenges**: Click-to-expand interface with smooth animations
- **Visual Feedback**: Hover effects, transitions, and color changes
- **Terminal Aesthetics**: Authentic cyberpunk terminal design
- **Matrix Background**: Animated falling characters effect

### 📊 Analytics & Tracking
- **Challenge Interest**: Track which challenges candidates expand
- **Engagement Metrics**: Monitor hover interactions and time spent
- **Google Analytics 4**: Real-time tracking with custom events
- **N8N Webhook**: Advanced automation and real-time processing
- **Event Categories**: Separate tracking for expand, collapse, and hover events

### 🎯 User Experience
- **Progressive Disclosure**: Show summaries first, details on demand
- **Visual Hierarchy**: Clear level progression and difficulty indication
- **Responsive Layout**: Mobile-first design with desktop enhancements
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🔗 N8N Webhook Analytics

### 🎯 Sistema Avançado de Analytics
O site possui integração com webhook N8N para automação e análise avançada:

- **Eventos Estruturados**: Dados JSON detalhados para cada interação
- **Retry Automático**: Sistema de tentativas com fallback offline
- **Session Tracking**: Acompanha comportamento por sessão
- **Processamento em Tempo Real**: Automação instantânea no N8N

### 📊 Tipos de Eventos Enviados
- `page_view`: Visita à página
- `challenge_expanded`: Challenge expandido (evento mais importante)
- `challenge_hover`: Mouse sobre challenge
- `challenge_time_spent`: Tempo gasto em challenge específico
- `scroll_depth`: Profundidade de scroll (25%, 50%, 75%, 90%, 100%)
- `time_on_page`: Marcos de tempo (30s, 60s, 2min, 5min)
- `page_exit`: Saída da página com métricas finais

### ⚙️ Configuração Rápida
1. **Configure URL do webhook** no `index.html`:
```javascript
const WEBHOOK_CONFIG = {
    url: 'https://sua-instancia-n8n.com/webhook/jedi-challenges',
    enabled: true,
    retryAttempts: 3,
    retryDelay: 1000
};
```

2. **Importe o workflow** do arquivo `n8n-workflow-example.json`
3. **Configure integrações** (Google Sheets, Slack, etc.)

### 🎯 Casos de Uso
- **Lead Scoring**: Pontuação automática baseada em engagement
- **Notificações em Tempo Real**: Alertas quando usuários interagem com challenges avançados
- **Analytics Avançadas**: Integração com Google Sheets, CRM, etc.
- **Automação de Marketing**: Triggers baseados em comportamento

📋 **Documentação Completa**: Ver `N8N_WEBHOOK_SETUP.md`

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
jedi-challenges/
├── index.html                    # Main site with all challenges
├── clouwalk-jedi-challeges.md   # Original challenge documentation
├── N8N_WEBHOOK_SETUP.md         # N8N webhook configuration guide
├── n8n-workflow-example.json    # Ready-to-import N8N workflow
├── .gitignore                   # Git ignore patterns
└── README.md                    # This file
```

### 🧹 Clean & Minimal
- **No Dependencies**: Pure vanilla web technologies
- **No Build Process**: Ready to run directly in browser
- **Lightweight**: ~35KB total size
- **Fast Loading**: Optimized assets and minimal HTTP requests

## 📈 Analytics Dashboard

### 📊 Google Analytics 4
Monitor candidate engagement through GA4:

1. **Configure GA4 ID** in `index.html`
2. **Access Dashboard**: Google Analytics 4 interface
3. **Custom Events**: Track challenge interactions
4. **Real-time Data**: Monitor live user behavior

### 🤖 N8N Automation
Advanced analytics and automation:

1. **Real-time Processing**: Events processed instantly
2. **Custom Workflows**: Automated responses to user behavior
3. **Integrations**: Google Sheets, Slack, CRM systems
4. **Lead Scoring**: Automatic scoring based on engagement

### 📊 Key Metrics
- **Most Popular Challenges**: Track expansion counts by challenge
- **Difficulty Preference**: Compare engagement across levels
- **User Journey**: Analyze hover → expand → collapse patterns
- **Engagement Depth**: Time spent and scroll behavior
- **Session Analytics**: Multi-visit behavior tracking

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
// GA4 custom events
gtag('event', 'custom_event', {
    'challenge_name': challengeName,
    'additional': data
});

// N8N webhook events
sendEventToN8N({
    event_type: 'custom_event',
    challenge_name: challengeName,
    additional: data
});
```

### Configuring N8N Webhook
```javascript
// Update webhook configuration
const WEBHOOK_CONFIG = {
    url: 'https://your-n8n-instance.com/webhook/jedi-challenges',
    enabled: true,
    retryAttempts: 3,
    retryDelay: 1000
};
```

---

<div align="center">

**🚀 Ready to accept a challenge?**

**[Visit the Site →](https://cloudwalk-jedi-challenges.vercel.app/)**

*May the source be with you!*

</div> 