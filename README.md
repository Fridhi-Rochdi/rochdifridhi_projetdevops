<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center">Todo API - DevOps Project</h1>

<p align="center">A NestJS REST API for managing todo items with complete DevOps lifecycle implementation.</p>

<p align="center">
  <a href="https://github.com/Fridhi-Rochdi/rochdifridhi_projetdevops/actions/workflows/ci-cd.yml">
    <img src="https://github.com/Fridhi-Rochdi/rochdifridhi_projetdevops/actions/workflows/ci-cd.yml/badge.svg" alt="CI/CD Pipeline">
  </a>
  <a href="https://github.com/Fridhi-Rochdi/rochdifridhi_projetdevops/actions/workflows/codeql.yml">
    <img src="https://github.com/Fridhi-Rochdi/rochdifridhi_projetdevops/actions/workflows/codeql.yml/badge.svg" alt="CodeQL">
  </a>
  <a href="https://hub.docker.com/r/rochdifridhi456/nestjs-todo-api">
    <img src="https://img.shields.io/docker/v/rochdifridhi456/nestjs-todo-api?label=docker" alt="Docker Image">
  </a>
  <a href="https://hub.docker.com/r/rochdifridhi456/nestjs-todo-api">
    <img src="https://img.shields.io/docker/pulls/rochdifridhi456/nestjs-todo-api" alt="Docker Pulls">
  </a>
  <a href="https://github.com/Fridhi-Rochdi/rochdifridhi_projetdevops/security">
    <img src="https://img.shields.io/badge/security-scanning-brightgreen" alt="Security Scanning">
  </a>
</p>

## Description

This is a simple Todo REST API built with [NestJS](https://github.com/nestjs/nest) framework, designed as an academic DevOps project. The API demonstrates:
- RESTful API design
- Docker containerization
- CI/CD pipelines
- Security scanning (SAST/DAST)
- Observability (logging, metrics, tracing)
- Kubernetes deployment

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check endpoint
- `POST /todos` - Create a new todo
- `GET /todos` - Get all todos
- `GET /todos/:id` - Get a todo by ID
- `PATCH /todos/:id` - Update a todo
- `DELETE /todos/:id` - Delete a todo

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docker

### Build and run with Docker

```bash
# Build Docker image
$ docker build -t nestjs-todo-api .

# Run container
$ docker run -p 3000:3000 nestjs-todo-api

# Or use Docker Compose
$ docker-compose up

# Run in detached mode
$ docker-compose up -d

# Stop containers
$ docker-compose down

# Pull from Docker Hub
$ docker pull rochdifridhi456/nestjs-todo-api:latest
$ docker run -p 3000:3000 rochdifridhi456/nestjs-todo-api:latest
```

### Docker image details
- Multi-stage build for optimized image size
- Non-root user for security
- Health check configured
- Base image: node:18-alpine
- Available on Docker Hub: `rochdifridhi456/nestjs-todo-api`

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Project Structure

```
src/
├── todo/               # Todo module
│   ├── dto/           # Data Transfer Objects
│   ├── entities/      # Todo entity
│   ├── todo.controller.ts
│   ├── todo.service.ts
│   └── todo.module.ts
├── health/            # Health check controller
├── app.module.ts      # Root module
└── main.ts            # Application entry point
```

## Technical Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Runtime**: Node.js 18+
- **Validation**: class-validator
- **Container**: Docker
- **Registry**: Docker Hub
- **CI/CD**: GitHub Actions
- **Security**: CodeQL, Trivy, npm audit
- **Orchestration**: Docker Compose / Kubernetes (planned)

## DevOps Features

- ✅ Git workflow with GitHub Issues
- ✅ Docker containerization
- ✅ CI/CD with GitHub Actions
- ✅ Automated Docker builds and pushes
- ✅ Security scanning (SAST with CodeQL)
- ✅ Dependency vulnerability scanning (npm audit)
- ✅ Container image scanning (Trivy)
- 🔄 Kubernetes deployment (planned)
- 🔄 Observability stack (planned)

## Security

This project implements multiple layers of security scanning:

### SAST (Static Application Security Testing)
- **CodeQL**: Automated code scanning for security vulnerabilities
- Runs on every push and PR
- Weekly scheduled scans
- Detects: SQL injection, XSS, command injection, path traversal, etc.

### Dependency Scanning
- **npm audit**: Checks for vulnerable dependencies
- Runs in CI/CD pipeline
- Identifies packages with known CVEs

### Container Security
- **Trivy**: Scans both filesystem and Docker images
- Detects OS and application vulnerabilities
- Scans for CRITICAL and HIGH severity issues
- Results uploaded to GitHub Security tab

### How to View Security Results
1. Go to [Security tab](https://github.com/Fridhi-Rochdi/rochdifridhi_projetdevops/security)
2. Check "Code scanning alerts" for CodeQL findings
3. Check "Dependabot alerts" for dependency issues
4. Review Trivy results in workflow logs

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).

## License

This project is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
