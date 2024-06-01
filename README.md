# Node App 

Install node version specified in package.json with nvm.

Install dependencies:
```
npm install
```

Nodejs app with express and ejs.

Start app:
```
npm start
```

Call eslint to detect issues:
```
npm run lint
```

# Deployment to AWS

Install Docker. We use version 26.1.3:
https://docs.docker.com/engine/install/ubuntu/


Build docker image:
```
docker build -t fogaina:test .
```

Test the image locally:
```
docker run -p 3000:3000 fogaina:test
```

Login to your AWS console or AWS Acces Portal.

Then update yor local aws credentials having an active AWS access portal session opened in your browser:
```
aws configure sso 
```

Then, you do not need to use or update your .aws/credentials file with the info you see in your Access Keys from your AWS Access Portal.

**Use the profile indicated when command above finishes**:
```
aws s3 ls --profile AdministratorAccess-482107978951

aws ecr --profile AdministratorAccess-482107978951 get-login-password --region eu-west-3 | docker login --username AWS --password-stdin 482107978951.dkr.ecr.eu-west-3.amazonaws.com/ecrraul
```

Update your docker image:
```
docker build -t fogaina:test .
```

Tag the docker image: 
```
docker tag fogaina:test 482107978951.dkr.ecr.eu-west-3.amazonaws.com/ecrraul:latest
```
Push to ECR:
```
docker push 482107978951.dkr.ecr.eu-west-3.amazonaws.com/ecrraul:latest
```





