![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase)
![React Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styledcomponents)

# 🏨 The Wild Oasis - Hotel Management System

A modern hotel management dashboard built with React, Supabase, and TanStack Query. The application helps hotel staff efficiently manage cabins, bookings, guests, check-ins, check-outs, user accounts, and hotel settings through a secure, responsive, and intuitive admin interface.

### Built With

React • Supabase • TanStack Query • React Router • Styled Components • Dark Mode

---

## 📑 Table of Contents

- [🚀 Live Demo](#-live-demo)
- [📂 GitHub Repository](#-github-repository)
- [🛠️ Tech Stack](#️-tech-stack)
- [✨ Features](#-features)
- [📊 Dashboard Features](#-dashboard-features)
- [👤 User Management](#-user-management)
- [📱 Responsive Design](#-responsive-design)
- [📷 Screenshots](#-screenshots)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [☁️ Deployment](#️-deployment)
- [🔐 Environment Variables](#-environment-variables)
- [🔑 Authentication](#-authentication)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## 🚀 Live Demo

👉 **[View Live Demo](https://the-wild-oasis-six-sigma.vercel.app)**

---

## 📂 GitHub Repository

👉 **[View Source Code](https://github.com/sagarpatel1516/the-wild-oasis)**

---

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Supabase
- TanStack Query (Server State Management)
- React Router
- Styled Components
- React Hook Form
- Recharts
- React Hot Toast

---

## ✨ Features

This application provides a complete hotel management solution, enabling administrators and hotel staff to efficiently manage daily operations through a modern dashboard.

- Secure Authentication
- Dashboard Analytics
- Cabin Management (CRUD)
- Booking Management
- Guest Management
- Check-in & Check-out
- User Management
- Hotel Settings
- Pagination
- Search & Filter
- Responsive Dashboard
- Protected Routes
- Dark Mode

---

## ⭐ Key Highlights

- Secure authentication using Supabase
- Real-time data fetching with TanStack Query
- Interactive analytics dashboard
- CRUD operations for cabins and bookings
- Protected routes and role-based access
- Fully responsive interface
- Dark mode support

## 📊 Dashboard Features

- Booking Statistics
- Revenue Overview
- Sales Charts
- Stay Duration Charts
- Today's Activities
- Recent Bookings
- Occupancy Insights

---

## 👤 User Management

- Secure Login
- User Registration
- Update Profile
- Change Password
- Upload Avatar
- Protected Dashboard Access

---

## 📱 Responsive Design

The application is optimized for:

- 💻 Desktop
- 📱 Tablet
- 📱 Mobile

---

## 📷 Screenshots

### 📊 Dashboard
  
  <img width="1318" height="623" alt="image" src="https://github.com/user-attachments/assets/a6abf520-2b3d-4909-951d-5f4eb0897382" />  

### 🏡 Cabin Management
  
<img width="1042" height="550" alt="image" src="https://github.com/user-attachments/assets/9cb02eba-98a8-4e51-a9d0-154534a6ca62" />

### 📖 Booking Management
  
<img width="1064" height="560" alt="image" src="https://github.com/user-attachments/assets/d5959ceb-9bdc-4a36-9720-4a82c51ad173" />

### 📄 Booking Details
  
  <img width="1074" height="563" alt="image" src="https://github.com/user-attachments/assets/c745cb92-eec3-44b9-8d72-b4f37ea5e393" />

### ✅ Check-in Page
  
  <img width="878" height="554" alt="image" src="https://github.com/user-attachments/assets/4adbf70f-1cbc-4eac-8c14-98455aa1592b" />

### 👤 User Profile
  
  <img width="1001" height="549" alt="image" src="https://github.com/user-attachments/assets/3d361abf-a65f-4adf-b687-d06cea3ccd55" />

### ⚙️ Settings

  <img width="541" height="373" alt="image" src="https://github.com/user-attachments/assets/db8bb053-8644-431e-8ca7-951e8dea90a2" />
  
### 🔐 Login Page

  <img width="659" height="634" alt="image" src="https://github.com/user-attachments/assets/42130851-6eb1-43ac-bb44-89f54553138e" />

---

## 📁 Project Structure

```text
The-Wild-Oasis/
├── context/
│   └── DarkModeContext.jsx
│
├── data/
│   ├── cabins/
│   ├── img/
│   ├── data-bookings.js
│   ├── data-cabins.js
│   └── data-guests.js
│
├── features/
│   ├── authentication/
│   ├── bookings/
│   ├── cabins/
│   ├── check-in-out/
│   ├── dashboard/
│   └── settings/
│
├── hooks/
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Bookings.jsx
│   ├── Booking.jsx
│   ├── Cabins.jsx
│   ├── Users.jsx
│   ├── Settings.jsx
│   ├── Login.jsx
│   └── Account.jsx
│
├── services/
│   ├── apiAuth.js
│   ├── apiBookings.js
│   ├── apiCabins.js
│   ├── apiSettings.js
│   └── supabase.js
│
├── styles/
│
├── ui/
│   ├── AppLayout.jsx
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── Table.jsx
│   ├── Modal.jsx
│   ├── Pagination.jsx
│   └── ProtectedRoute.jsx
│
├── utils/
│
├── App.jsx
├── main.jsx
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/sagarpatel1516/the-wild-oasis.git
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

---

## ☁️ Deployment

The application is deployed on **Vercel** and uses **Supabase** as the backend for authentication, database, and storage.

## 🔐 Environment Variables

Create a `.env` file and add:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 🔑 Authentication

- Email & Password Login
- Protected Routes
- User Session Management
- Password Update
- Profile Management

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Sagar Patel**  
Junior React & Next.js Developer

- 📧 Email: sagarpatel2524@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/sagar-patel-984ab6219
- 💻 GitHub: https://github.com/sagarpatel1516
