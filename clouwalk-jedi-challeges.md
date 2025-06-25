# 🧠 CloudWalk AI Coding Challenges – Choose Your Mission

Welcome to the **AI-Powered Coding Challenge Collection**. Below are several missions of increasing difficulty. Choose **only one** to implement. 

---

## 🧑‍🚀 Level 1: Padawan – Light Side Missions

### 💬 CloudWalk Chatbot

**Goal:**  
Build a chatbot that explains what CloudWalk is, its products (like InfinitePay), mission, and brand values.

**Input:**  
User questions via chat interface.

**Output:**  
Natural language answers (optionally Markdown or links).

**Requirements:**  
- Retrieval-augmented generation (RAG) from public sources.  
- 3 sample conversations in README.  

---

### 🔍 Find the Video Source

**Goal:**  
Given a snippet of text (from a book, paper, article, or transcript), find the original video where it was spoken.

**Input:**  
Text snippet (plain text).

**Output:**
```json
{
  "video_id": "yt123",
  "timestamp_start": "00:14:05",
  "timestamp_end": "00:14:38"
}
```

**Hints:**  
Use YouTube transcripts, embeddings + search APIs (Serper, Tavily, etc).

---
## 🥷 Level 2: Jedi Knight – Self-Driven Multi-Agent Companies

### 🎮 Self-Driven Game Platform
> “In the future, software writes software.” – Unknown Jedi Coder

**Goal:**  
Build a fully autonomous company that generates and promotes a new game daily.

**Tasks:**  
- **Game Generator Agent**: Publishes a new JavaScript game every day at one website. 
- **Marketing Agent**: Posts daily ads (Twitter, LinkedIn, Reddit).  
- **Billing Agent**: Charges $1 for access.

**Requirements:**
- Agents orchestrated with CrewAI, AutoGen, LangChain, etc.  
- Persistent logs or DB of actions.  
- Unit test simulating 3 days of operation.

**Plus Features (Optional):**
- A/B testing of ad performance.  
- Global leaderboard.  
- Infrastructure as code (Terraform/Pulumi).

---

### 📬 Self-Driven Newsletter Company

**Tasks:**  
- **Curation Agent**: Picks trending topics and writes newsletters with LLM.  
- **Billing Agent**: Charges $1/month. 
- **Marketing Agent**: Promotes daily via posts or emails.

**Plus Features:**  
- User segmentation.  
- Topic voting via embedded forms.

---

### 🎧 Self-Driven Music Generator Company

**Tasks:**  
- **Music Agent**: Generates AI music daily (using Suno, Diff-Singer, Riffusion).  
- **Billing Agent**: Handles monthly payment ($1).  
- **Marketing Agent**: Posts to social media with samples.

**Plus Features:**  
- Spotify-like auto playlist builder.  
- Mood-based music generation.

---

### 📚 Self-Driven Ebook Generator Company

**Tasks:**  
- **Ebook Agent**: Uses LLM + DALL·E to write and design ebooks.  
- **Billing Agent**: Monetizes downloads (R$1/month).  
- **Marketing Agent**: Generates ads and previews.

**Plus Features:**  
- Topic selection via poll.  
- Auto-distribution via Telegram bot.

---

## 🧙‍♂️ Level 3: Jedi Grand Master – Hardcore AI Missions

### 🤖 Kaggle-Slaying Multi-Agent Team

**Goal:**  
Build a team of agents that autonomously participate in Kaggle competitions and aim for top 20%.

**Tasks:**  
- Collect data.  
- Train models.  
- Submit solutions via API.  
- Monitor leaderboard.

---

### 🏊‍♂️ ML Estimation – How Many Pools in São Paulo?

**Goal:**  
Estimate the number of swimming pools in São Paulo using ML + satellite images.

**Tasks:**  
1. Sample rooftops from Google Maps or INPE.  
2. Train a detector (>0.65 mAP) for pools.  
3. Use statistics to extrapolate total count.

**Bonus:**  
- Folium map with pool density.  
- District-wise comparison.

---

### 🧾 Voynich Manuscript Decoder Challenge

> *“The most beautiful thing we can experience is the mysterious.”* — Albert Einstein

**Goal:**  
Use AI to decode the **Voynich Manuscript**, one of the most mysterious books in the world, written in an unknown script and language.

**Tasks:**  
- Build a pipeline that ingests transcribed Voynich text (EVA or Takahashi transcription).  
- Use LLMs, embeddings, or custom models to find patterns, possible meanings, or linguistic structures.  
- Try to match parts of the text with known languages, glyph frequencies, or hypothesized semantics.

**Input:**  
- Transcription file (e.g., `voynich_eva.txt`).  
- Optional: XML or images from the Beinecke Library.

**Output Example:**
```json
{
  "section": "Herbal A",
  "hypothesis": "This section might describe plant properties using a symbolic language.",
  "translation_attempt": {
    "line_1": "otedy qokeedy qokedy",
    "meaning": "plant root soak boil"
  }
}
```

**Requirements:**  
- Use AI reasoning to explore unknown language or construct hypotheses.  
- Provide clear logs of your process.  
- Explain why you believe your approach may uncover meaning.

**Bonus Features:**  
- Visual overlay of decoded terms on manuscript images.  
- Model fine-tuned on similar ciphered texts.  
- Timeline of symbol usage evolution across manuscript pages.

---
### Good luck, and may the source be with you! 🚀
