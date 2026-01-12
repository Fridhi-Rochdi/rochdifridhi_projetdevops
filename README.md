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
  <a href="https://github.com/Fridhi-Rochdi/rochdifridhi_projetdevops/actions/workflows/dast.yml">
    <img src="https://github.com/Fridhi-Rochdi/rochdifridhi_projetdevops/actions/workflows/dast.yml/badge.svg" alt="DAST Security Scan">
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
- `GET /health` - Health check endpoint (with memory metrics)
- `GET /metrics` - Prometheus metrics endpoint
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

## Kubernetes Deployment

### Prerequisites
- Kubernetes cluster (minikube, Docker Desktop, or cloud provider)
- kubectl installed and configured

### Deploy to Kubernetes

```bash
# Apply all manifests
kubectl apply -f k8s/

# Or use Kustomize
kubectl apply -k k8s/

# Check deployment status
kubectl get all -n todo-api

# Check pods
kubectl get pods -n todo-api

# View logs
kubectl logs -n todo-api -l app=nestjs-todo-api --tail=50 -f
```

### Access the Application

```bash
# Port forward to access locally
kubectl port-forward -n todo-api service/todo-api-service 3000:3000

# Then access at http://localhost:3000
```

### Kubernetes Resources

- **Namespace**: `todo-api` - Isolated environment
- **Deployment**: 2 replicas with rolling updates
- **Service**: ClusterIP on port 3000
- **ConfigMap**: Environment variables
- **HPA**: Auto-scales between 2-5 pods based on CPU/memory

### Health Checks

- **Liveness Probe**: `/health` - Restarts unhealthy pods
- **Readiness Probe**: `/health` - Controls traffic routing
- **Startup Probe**: `/health` - Handles slow container starts

### Resource Limits

- **Requests**: 100m CPU, 128Mi memory
- **Limits**: 500m CPU, 512Mi memory

### Scaling

```bash
# Manual scaling
kubectl scale deployment todo-api -n todo-api --replicas=3

# Check HPA status
kubectl get hpa -n todo-api

# Watch autoscaling
kubectl get hpa -n todo-api -w
```

### Cleanup

```bash
# Delete all resources
kubectl delete -f k8s/

# Or delete namespace (removes everything)
kubectl delete namespace todo-api
```

See [k8s/COMMANDS.md](k8s/COMMANDS.md) for more Kubernetes commands.

## Project Structure

```
src/
├── common/            # Shared modules
│   ├── logger/        # Custom logger service
│   └── middleware/    # Request ID middleware
├── todo/              # Todo module
│   ├── dto/           # Data Transfer Objects
│   ├── entities/      # Todo entity
│   ├── todo.controller.ts
│   ├── todo.service.ts
│   └── todo.module.ts
├── health/            # Health check controller
├── metrics/           # Prometheus metrics module
├── app.module.ts      # Root module
└── main.ts            # Application entry point

k8s/
├── namespace.yaml     # Kubernetes namespace
├── configmap.yaml     # Environment configuration
├── deployment.yaml    # Application deployment
├── service.yaml       # Service definition
├── hpa.yaml           # Horizontal Pod Autoscaler
├── kustomization.yaml # Kustomize configuration
└── COMMANDS.md        # Kubernetes commands reference
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
- **Orchestration**: Kubernetes (minikube)
- **Observability**: Structured logging, Prometheus metrics, Request tracing

## DevOps Features

- ✅ Git workflow with GitHub Issues
- ✅ Docker containerization
- ✅ CI/CD with GitHub Actions
- ✅ Automated Docker builds and pushes
- ✅ Security scanning (SAST, dependency, container)
- ✅ Structured logging with Pino
- ✅ Prometheus metrics endpoint
- ✅ Request correlation IDs
- ✅ Kubernetes deployment with auto-scaling
- 🔄 Monitoring stack (Prometheus/Grafana) (planned)
- ✅ Security scanning (SAST with CodeQL)
- ✅ Dependency vulnerability scanning (npm audit)
- ✅ Container image scanning (Trivy)
- ✅ Observability (structured logging, metrics, tracing)
- 🔄 Kubernetes deployment (planned)

## Security

This project implements multiple layers of security scanning:

### SAST (Static Application Security Testing)
- **CodeQL**: Automated code scanning for security vulnerabilities
- Runs on every push and PR
- Weekly scheduled scans
- Detects: SQL injection, XSS, command injection, path traversal, etc.

### DAST (Dynamic Application Security Testing)
- **OWASP ZAP**: Runtime security scanning of deployed API
- Scans all API endpoints in running application
- Baseline scan for common vulnerabilities
- Manual trigger + weekly scheduled scans
- Reports uploaded as workflow artifacts

**Run DAST scan manually:**
1. Go to [Actions tab](https://github.com/Fridhi-Rochdi/rochdifridhi_projetdevops/actions/workflows/dast.yml)
2. Click "Run workflow"
3. Wait for scan completion
4. Download HTML/JSON report from artifacts

**Tested endpoints:**
- `GET /health` - Health check
- `GET /metrics` - Prometheus metrics
- `POST /todos` - Create todo
- `GET /todos` - List todos
- `GET /todos/:id` - Get single todo
- `PATCH /todos/:id` - Update todo
- `DELETE /todos/:id` - Delete todo

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

## Observability

This project implements comprehensive observability with the three pillars: **Logs**, **Metrics**, and **Traces**.

### Structured Logging

- **Format**: JSON with structured fields
- **Library**: nestjs-pino + pino-pretty
- **Fields**: timestamp, level, context, requestId, message
- **Transport**: Pretty-printed in development, JSON in production

**Example log output:**
```
[2026-01-12 21:00:00] INFO (TodoController): Creating todo: Buy groceries | requestId: abc123
[2026-01-12 21:00:01] INFO (TodoService): Todo created with ID: xyz789
```

**Log Levels:**
- `error` - Errors and exceptions
- `warn` - Warnings and potential issues
- `log` - General application info
- `debug` - Detailed debug information

### Metrics (Prometheus)

Access metrics at: `http://localhost:3000/metrics`

**Default Metrics:**
- `process_cpu_user_seconds_total` - CPU usage
- `process_resident_memory_bytes` - Memory usage
- `nodejs_heap_size_total_bytes` - Heap size
- `nodejs_heap_size_used_bytes` - Heap used
- `process_uptime_seconds` - Process uptime

**HTTP Metrics** (automatically collected):
- `http_requests_total` - Total HTTP requests by method, route, status
- `http_request_duration_seconds` - Request duration histogram

**Example Prometheus query:**
```promql
# Request rate
rate(http_requests_total[5m])

# 95th percentile latency
histogram_quantile(0.95, http_request_duration_seconds_bucket)
```

### Request Tracing

- **Correlation ID**: X-Request-ID header
- **Auto-generated**: UUID v4 if not provided
- **Propagation**: Included in all log entries
- **Response header**: X-Request-ID echoed back

**Example:**
```bash
# Send request with custom ID
curl -H "X-Request-ID: my-trace-123" http://localhost:3000/todos

# Check logs - all entries will include requestId: my-trace-123
```

### Monitoring Stack Integration

The metrics endpoint is compatible with:
- **Prometheus** - Time-series metrics collection
- **Grafana** - Metrics visualization
- **Loki** - Log aggregation (JSON logs)
- **Jaeger/Tempo** - Distributed tracing (future enhancement)

**Example Prometheus scrape config:**
```yaml
scrape_configs:
  - job_name: 'nestjs-todo-api'
    static_configs:
      - targets: ['localhost:3000']
    metrics_path: '/metrics'
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).

## License

This project is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
