# ❤️ Helping Hands Foundation — Serving humanity with care.

Helping Hands Foundation is a **full-stack non-profit donation and fundraising platform** that connects donors with impactful social causes such as **Education, Health, Hunger, Livelihood, and Disaster Relief**.

The platform supports **secure social authentication**, **real-time donations**, **Razorpay payment gateway**, and a **personalized user dashboard**.

---

## 🌍 Project Vision

> *“Give a child the gift of imagination — Donate storybooks today.”*

Helping Hands Foundation aims to make donations **simple, secure, and transparent**, empowering individuals to contribute toward meaningful causes with confidence.

---

## 🖼️ Screenshots

### 🏠 Home & Causes Overview
![Home Page](./public/screenshots/home.png)

---

### 🔐 Authentication (Social Login)
![Sign In Page](./public/screenshots/login.png)

---

### 💳 Donation & Supporter Page
![Donation Page](./public/screenshots/donation.png)

---

### 💸 Razorpay Secure Checkout (NEW)
![Razorpay Checkout](./public/screenshots/razorpay.png)

---

### 📊 User Dashboard
![Dashboard](./public/screenshots/dashboard.png)

---

## ✨ Key Features

### 🧑‍🤝‍🧑 For Donors
- 🔐 Secure OAuth login (Google, Facebook, GitHub, Microsoft, Apple)
- ❤️ Donate to verified causes
- ✍️ Add donation messages
- 💳 Secure payments via **Razorpay**
- 📋 View recent supporters & donations
- 👤 Personalized dashboard
- 🔁 Instant payment confirmation

### 🏢 For Foundation
- 🧾 Donation records stored in MongoDB
- 📊 Supporter activity tracking
- 💰 Razorpay-verified transactions
- 🔐 Secure server-side payment handling

---

## 💳 Razorpay Payment Gateway (Highlighted Feature)

The platform integrates **Razorpay Checkout** to ensure:

- 🔒 PCI-compliant & secure payments
- 💳 Multiple payment options:
  - Debit / Credit Cards
  - Netbanking
  - Wallets
  - Pay Later
- 🇮🇳 INR currency support
- 🧾 Razorpay order creation on server
- ✅ Payment verification using Razorpay signature
- ⚠️ Test Mode & Live Mode support

> Payments are processed securely without exposing sensitive card details to the application.

---

## 🛠 Tech Stack

### Frontend
- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **FontAwesome Icons**

### Backend
- **Next.js API Routes**
- **MongoDB**
- **NextAuth (OAuth Authentication)**

### Payments
- **Razorpay Checkout**
- Visa / MasterCard / American Express
- Netbanking & Wallets

---
## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/helping-hands-foundation.git
cd helping-hands-foundation

npm install

Create a .env.local file:
# Database
MONGODB_URI=mongodb://localhost:27017/helpinghands

# Auth
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# Razorpay
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=


npm run dev

#open:
http://localhost:3000

```
---

## 🔁 Donation Flow (End-to-End)

### User signs in via OAuth

### Enters donation amount & message

### Server creates Razorpay order

### Razorpay Checkout modal opens

### User completes payment

### Payment signature verified on server

### Donation stored in MongoDB

### Supporter list updates instantly
---
## 🧠 Best Practices Used

Server-side payment verification

Secure OAuth authentication

Clean client / server separation

Hydration-safe Next.js setup

Environment-based configuration

Scalable MongoDB schema

---
## 🔮 Future Enhancements

📊 Admin analytics dashboard

🧾 Auto-generated donation receipts

📧 Email confirmations

🌍 Multi-language support

📱 Mobile-first optimization

📈 Cause-wise donation insights

---

# 👨‍💻 Author

## Aman Singh Sikarwar

Full-Stack Developer

Built as a real-world, portfolio-grade NGO donation platform using modern web technologies.
