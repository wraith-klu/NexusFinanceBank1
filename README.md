 # 💳 Nexus Finance Bank



![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)

![Spring Boot](https://img.shields.io/badge/Backend-SpringBoot-green?logo=springboot)

![MySQL](https://img.shields.io/badge/Database-MySQL-blue?logo=mysql)

![Docker](https://img.shields.io/badge/DevOps-Docker-blue?logo=docker)

![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)



Nexus Finance Bank is a **Full-Stack Banking Application** that allows users to register, log in, manage accounts, and perform transactions.  

It is containerized with **Docker** and supports deployment on cloud platforms.



---



## 🚀 Features

- 🔐 User Registration & Login (Authentication)

- 🏦 Account Management

- 💸 Fund Transfers

- 📜 Transaction History

- 📊 Responsive Frontend Dashboard

- 🐳 Dockerized setup for easy deployment



---



## 🛠️ Tech Stack



### Frontend

- ⚛️ React.js

- 🎨 CSS (custom styling)



### Backend

- ☕ Java Spring Boot

- 🔗 REST APIs



### Database

- 🐬 MySQL 8.0



### DevOps / Deployment

- 🐳 Docker & Docker Compose

- 🌐 Deployed on **Vercel** (Frontend)

- ⚙️ Local & Dockerized Backend + Database



---
---

## 📂 Project Structure

The repository is structured to separate the key components for a clean build and deployment process:

NexusFinanceBank1/

│── docker-NexusBankBackend/ # Spring Boot backend

│── docker-bank-frontend/ # React frontend

│── docker-compose.yml # Docker Compose setup

│── docker/ # Additional Docker configs

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/wraith-klu/NexusFinanceBank1.git
cd NexusFinanceBank1

2️⃣ Run with Docker
docker compose up --build

3️⃣ Access the Application

Frontend → http://localhost

Backend → http://localhost:2020

Database → localhost:3307

🧑‍💻 Developers

Backend & Database → Java Spring Boot + MySQL

Frontend → React.js

DevOps → Docker & Deployment

✅ To-Do / Future Enhancements

Add JWT-based authentication

Enable role-based access (Admin/User)

Integrate Payment Gateway APIs

Deploy Backend to AWS/GCP

📜 License

This project is for educational purposes.
Feel free to fork and enhance 🚀

- Saurabh Yadav
