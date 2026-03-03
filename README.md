# 🤖 FikoChatbot

FikoChatbot modern dizaynlı, React + Tailwind + Typescript ilə hazırlanmış ağıllı web chatbot layihəsidir.  
JSON əsaslı mini knowledge base sistemi ilə işləyir və istifadəçi yazdığı sözləri analiz edərək uyğun cavabı avtomatik seçir.

---

## 🚀 Xüsusiyyətlər

- Mini Knowledge Base (JSON ilə idarə olunur)  
- Regular Expression Matching (söz cümlənin içində olsa da tanıyır)  
- Multiple Keyword Matching  
- Random cavab seçimi  
- Accent-insensitive axtarış (ə-e, ı-i, ö-o və s. fərqləri anlayır)  
- Typing animation  
- Auto scroll sistemi  
- Clear chat düyməsi  
- Online status indicator  
- Glassmorphism UI dizayn  
- Tam responsive struktur  

---

## 🧠 Necə işləyir?

Bot bütün cavabları `knowledgeBase.json` faylından oxuyur.

İstifadəçi mesaj yazdıqda:

1. Mesaj normalize edilir  
2. JSON içindəki keyword-lərlə regex yoxlanılır  
3. Uyğun blok tapılır  
4. Cavablar arasından random biri seçilir  
5. Bot typing effekti ilə cavabı göstərir  

Əgər uyğun keyword tapılmazsa, default cavab qaytarılır.

---

## 📂 Knowledge Base Strukturu

Yeni sual və cavab əlavə etmək üçün sadəcə JSON faylına yeni blok əlavə etmək kifayətdir:

```json
{
  "keywords": ["salam", "hello"],
  "replies": [
    "Salam 👋",
    "Salam dost!",
    "Salam, necə kömək edə bilərəm?"
  ]
}

Hazırlayan: Firudin Maniyev