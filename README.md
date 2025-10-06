# 💳 Nexus Finance Bank: Full-Stack Banking Application

A robust, full-stack banking application containerized with **Docker** for easy deployment and scalability.

[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Spring Boot](https://img.shields.io/badge/Backend-SpringBoot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Docker](https://img.shields.io/badge/Containerization-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Vercel](https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 🌟 Project Summary

Nexus Finance Bank is a **Full-Stack Banking Application** that allows users to register, log in, manage accounts, and perform transactions.

It is containerized with **Docker** and supports deployment on cloud platforms, providing a solid foundation for a modern financial service application.

---

## 🚀 Key Features

| Icon | Feature | Description |
| :---: | :--- | :--- |
| 🔐 | **User Authentication** | Secure User Registration & Login. |
| 🏦 | **Account Management** | Comprehensive tools for managing user accounts. |
| 💸 | **Fund Transfers** | Seamless and reliable fund transfer capabilities. |
| 📜 | **Transaction History** | Detailed record keeping and history view. |
| 📊 | **Responsive Frontend** | Modern dashboard built with React.js. |
| 🐳 | **Dockerized Setup** | Easy setup and deployment using Docker and Docker Compose. |

---

## 🛠️ Technology Stack Breakdown

This project utilizes a modern and robust technology stack across all layers.

### Frontend (User Interface)
| Technology | Details |
| :---: | :--- |
| **⚛️ React.js** | The core library for building the dynamic user interface. |
| **🎨 CSS** | Custom styling for a unique and responsive design. |

### Backend (API & Business Logic)
| Technology | Details |
| :---: | :--- |
| **☕ Java Spring Boot** | Used for creating the robust and scalable backend services. |
| **🔗 REST APIs** | Standardized interface for communication between frontend and backend. |

### Database
| Technology | Details |
| :---: | :--- |
| **🐬 MySQL 8.0** | The reliable relational database for persistent data storage. |

### DevOps / Deployment
| Technology | Details |
| :---: | :--- |
| **🐳 Docker & Docker Compose** | Used to containerize the application for consistent environment setup. |
| **🌐 Vercel (Frontend)** | Platform for deploying the React frontend. |
| **⚙️ Local & Dockerized** | The backend and database are set up for local and containerized execution. |

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
