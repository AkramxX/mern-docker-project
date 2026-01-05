# 🐳 Dockerized MERN Stack Application

A fully containerized MERN (MongoDB, Express, React, Node.js) stack application demonstrating Docker best practices.

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

---

## 🐳 Docker Features Demonstrated

| Feature                             | Description                                                        |
| ----------------------------------- | ------------------------------------------------------------------ |
| **Multi-Container Orchestration**   | Docker Compose manages frontend & backend with dependency ordering |
| **Custom Bridge Networks**          | Isolated `mern-network` for secure inter-container communication   |
| **Health Checks**                   | Backend container health monitoring for orchestration readiness    |
| **Non-Root User Execution**         | Backend runs as non-privileged `node` user for security            |
| **Layer Caching Optimization**      | Strategic `COPY` ordering for faster rebuilds                      |
| **Docker Compose Watch**            | Hot-reload development with automatic file synchronization         |
| **Environment Variable Management** | Secrets externalized via `.env` files                              |
| **`.dockerignore` Files**           | Optimized build context excluding unnecessary files                |

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Docker Host                             │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                 mern-network (bridge)                   │ │
│  │                                                         │ │
│  │   ┌──────────────┐            ┌──────────────┐         │ │
│  │   │   Frontend   │    HTTP    │   Backend    │         │ │
│  │   │  React/Vite  │ ─────────► │  Express.js  │         │ │
│  │   │  Port: 5173  │            │  Port: 8000  │         │ │
│  │   └──────────────┘            └──────┬───────┘         │ │
│  └──────────────────────────────────────┼─────────────────┘ │
└─────────────────────────────────────────┼───────────────────┘
                                          ▼
                              ┌─────────────────────┐
                              │   MongoDB Atlas     │
                              └─────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) (v20.10+)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/mern-docker.git
cd mern-docker

# Configure environment
cp .env.example .env
# Edit .env with your MongoDB connection string

# Build and run
docker compose up --build
```

### Access

| Service     | URL                   |
| ----------- | --------------------- |
| Frontend    | http://localhost:5173 |
| Backend API | http://localhost:8000 |

---

## 🐳 Useful Commands

```bash
# Start services (detached)
docker compose up -d

# Start with hot-reload
docker compose watch

# View logs
docker compose logs -f

# Stop services
docker compose down
```

---

## 🔒 Security Practices

- ✅ Non-root container user
- ✅ Secrets in environment variables
- ✅ `.dockerignore` for build context
- ✅ Production-only dependencies
- ✅ Alpine-based minimal images
- ✅ Isolated bridge network

---

<p align="center">Made with Docker 🐳</p>
