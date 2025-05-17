# OrgChart API

## Features
- Get all subordinates for an employee
- JWT protected endpoint
- Redis caching
- Load balancing with cluster module
- Structured logging
- Docker support

## Setup
1. Copy .env.example to .env and fill values
2. Run `docker-compose up --build`

## Endpoints
- GET /api/employees/{id}/subordinates
- GET /api/protected (requires JWT)
- POST /api/login (get JWT token)

## Testing
`npm test`

## Scaling
- Horizontal scaling with Docker Swarm/Kubernetes
- Database read replicas
- Redis cluster for distributed caching

## Monitoring
- Export logs to ELK stack
- Metrics collection with Prometheus
- Distributed tracing with Jaeger

## Deployment
1. Build Docker image: `docker build -t orgchart-api .`
2. Deploy stack: `docker stack deploy -c docker-compose.yml orgchart`


# you can import postman collections for API test
- question_pro_app.postman_collection.json import your postman