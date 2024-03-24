# Build Docker image
docker build -t my_blog .

# Tag Docker image
docker tag my_blog 427243519225.dkr.ecr.ap-southeast-2.amazonaws.com/my_blog:latest

# Authenticate AWS ECR
aws ecr get-login-password --region ap-southeast-2 | docker login --username AWS --password-stdin 427243519225.dkr.ecr.ap-southeast-2.amazonaws.com

# Push Docker image
docker push 427243519225.dkr.ecr.ap-southeast-2.amazonaws.com/my_blog:latest

# Git operations
git add -A
git commit -m "from cicd.sh"
git push

echo "Script completed."
