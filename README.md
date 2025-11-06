# 🛍️ Tsenako

**Tsenako** is a side project designed to explore and master **microservice architecture**, **event-driven communication with Kafka**, and **monorepo management using Turborepo**.
It’s an experimental **e-commerce platform** that serves as a practical playground for learning how to structure, scale, and orchestrate distributed services efficiently.

[![Node.js](https://img.shields.io/badge/Node.js-v22.16.0-green?logo=nodedotjs)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-v19.0.0-61dafb?logo=react)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-v15.0.0-black?logo=nextdotjs)](https://nextjs.org/)
[![Express](https://img.shields.io/badge/Express-v5.1.0-white?logo=express)](https://expressjs.com/)
[![Fastify](https://img.shields.io/badge/Fastify-v5.0.0-lightgrey?logo=fastify)](https://fastify.dev/)
[![Hono](https://img.shields.io/badge/Hono-v4.0.0-orange?logo=hono)](https://hono.dev/)

[![Kafka](https://img.shields.io/badge/Kafka-Event--Streaming-black?logo=apachekafka)](https://kafka.apache.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-Monorepo%20Manager-%23000000?logo=turborepo)](https://turbo.build/)
[![Docker](https://img.shields.io/badge/Docker-Containerization-blue?logo=docker)](https://www.docker.com/)

> [!IMPORTANT]
> Tsenako is under active development and not yet production-ready.

## Project Goals

- **Learn microservices architecture** : split the e-commerce logic into independent, domain-driven services (auth, products, payments, orders, etc.)
- **Experiment with Kafka** : handle asynchronous communication and real-time event streaming between services
- **Master monorepo workflows** : use **Turborepo** to efficiently manage shared packages, services, and build pipelines
- **Hands-on experience with modern web and backend frameworks** : explore the ecosystem around **Node.js**, **TypeScript**, and **React**

## Core Technologies

### Frontend

- **React** : core UI library
- **Next.js** : for SSR, routing, and API routes
- **TypeScript** : static typing for better DX and scalability
- **Turborepo** : monorepo management (pipelines, caching, parallel builds)

### Backend / Services

- **Node.js** : runtime environment
- **Express**, **Hono**, **Fastify** : various backend frameworks to explore different styles of API building
- **Kafka** : message broker for inter-service communication and event streaming
- **REST / gRPC (optional)** : service-to-service communication patterns
- **PostgreSQL / MongoDB** : data persistence depending on the service domain
- **Redis** : caching and session management

### DevOps & Tooling

- **Docker** : containerization for all services
- **Docker Compose** : local environment orchestration
- **Turborepo Pipelines** : building, linting, testing, and deploying services
- **ESLint / Prettier** : code quality and style consistency
- **pnpm** : efficient dependency management

## Key Concepts to Explore

- Event-driven microservices with **Kafka producers and consumers**
- Request-response vs asynchronous communication
- Shared libraries and cross-service type safety in a **TypeScript monorepo**
- Efficient build and deploy workflows with **Turborepo caching and tasks**
- API Gateway and service discovery patterns
- Scalable authentication and payment integration

## Planned Services

| Service           | Description                                        | Framework         |
| ----------------- | -------------------------------------------------- | ----------------- |
| `auth-service`    | Handles signup, login, JWT, and user sessions      | Hono / Express    |
| `product-service` | Manages product catalog, inventory, and categories | Fastify           |
| `order-service`   | Handles orders, carts, and checkout flow           | Express           |
| `payment-service` | Integrates with external payment providers         | Hono              |
| `gateway`         | Central API entry point and reverse proxy          | Express / Fastify |
| `web`             | Frontend for user interaction and shopping UI      | Next.js + React   |

## Learning Focus

Tsenako isn’t about building a production-ready e-commerce platform — it’s about **learning how to structure and connect multiple moving parts** efficiently and cleanly.

The focus areas are:

- **Microservice architecture** design and coordination
- **Event-driven data flow** with Kafka
- **Monorepo setup** with isolated builds and shared types
- **Exploration of multiple backend frameworks** under one architecture

## Setup (WIP)

```bash
git clone https://github.com/HarenaFiantso/tsenako.git
cd tsenako

pnpm install

turbo dev
```

Each service will run independently with its own Docker setup and Kafka instance for local testing.
