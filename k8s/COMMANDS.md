# Kubernetes Deployment Scripts

## Deploy to Kubernetes

# Apply all manifests
kubectl apply -f k8s/

# Or use kustomize
kubectl apply -k k8s/

## Check deployment status
kubectl get all -n todo-api

## Check pods
kubectl get pods -n todo-api

## Check logs
kubectl logs -n todo-api -l app=nestjs-todo-api --tail=50

## Port forward to access locally
kubectl port-forward -n todo-api service/todo-api-service 3000:3000

## Delete deployment
kubectl delete -f k8s/
# or
kubectl delete namespace todo-api

## Useful commands

# Watch pods
kubectl get pods -n todo-api -w

# Describe pod
kubectl describe pod -n todo-api <pod-name>

# Get service
kubectl get svc -n todo-api

# Get HPA status
kubectl get hpa -n todo-api

# Scale manually
kubectl scale deployment todo-api -n todo-api --replicas=3

# Update image
kubectl set image deployment/todo-api -n todo-api todo-api=rochdifridhi456/nestjs-todo-api:new-tag

# Restart deployment
kubectl rollout restart deployment/todo-api -n todo-api

# Check rollout status
kubectl rollout status deployment/todo-api -n todo-api

# Get deployment history
kubectl rollout history deployment/todo-api -n todo-api
