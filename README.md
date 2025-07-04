# 🧠 CloudWalk AI Jedi Challenges

> **Choose Your Mission. Master the Force of AI.**

A cyberpunk-themed collection of AI coding challenges designed to test and showcase advanced artificial intelligence and multi-agent system development skills.

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-cloudwalk--jedi--challenges.vercel.app-00ff41?style=for-the-badge)](https://cloudwalk-jedi-challenges.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/ingridytakada/jedi-challenges)

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
- **Analytics**: Vercel Analytics with custom event tracking
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
- **Real-time Data**: Vercel Analytics dashboard integration
- **Event Categories**: Separate tracking for expand, collapse, and hover events

### 🎯 User Experience
- **Progressive Disclosure**: Show summaries first, details on demand
- **Visual Hierarchy**: Clear level progression and difficulty indication
- **Responsive Layout**: Mobile-first design with desktop enhancements
- **Accessibility**: Semantic HTML and keyboard navigation support

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
├── .gitignore                   # Git ignore patterns
└── README.md                    # This file
```

### 🧹 Clean & Minimal
- **No Dependencies**: Pure vanilla web technologies
- **No Build Process**: Ready to run directly in browser
- **Lightweight**: ~35KB total size
- **Fast Loading**: Optimized assets and minimal HTTP requests

## 📈 Analytics Dashboard

Monitor candidate engagement through Vercel Analytics:

1. **Visit**: [Vercel Dashboard](https://vercel.com/dashboard)
2. **Select**: `jedi-challenges` project
3. **Navigate**: Analytics → Custom Events
4. **Filter**: By event names:
   - `Challenge Expanded` - Main interest metric
   - `Challenge Collapsed` - Completion tracking
   - `Challenge Hover` - Passive engagement

### 📊 Key Metrics
- **Most Popular Challenges**: Track expansion counts by challenge
- **Difficulty Preference**: Compare engagement across levels
- **User Journey**: Analyze hover → expand → collapse patterns
- **Geographic Data**: See where candidates are located

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
// Track custom events
window.va('track', 'Custom Event Name', {
    challenge: challengeName,
    additional: data
});
```

## 🤝 Contributing

This project serves as a recruitment tool for CloudWalk. For contributions or questions:

**Contact**: [nimbus@cloudwalk.io](mailto:nimbus@cloudwalk.io)

### 🌟 Candidate Instructions
1. **Choose ONE challenge** that matches your interests and skills
2. **Set your own deadline** - self-managed timeline
3. **Build with quality** - clean, documented, professional code
4. **Submit via email** - send your solution to the contact above

## 📝 License

This project is created for CloudWalk recruitment purposes. All rights reserved.

---

<div align="center">

**🚀 Ready to accept a challenge?**

**[Visit the Site →](https://cloudwalk-jedi-challenges.vercel.app/)**

*May the source be with you!*

</div> 