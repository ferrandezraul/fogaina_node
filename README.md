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

Guide from https://docs.aws.amazon.com/lambda/latest/dg/nodejs-image.html#nodejs-image-instructions

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

aws ecr --profile fogaina get-login-password --region eu-west-3 | docker login --username AWS --password-stdin 482107978951.dkr.ecr.eu-west-3.amazonaws.com/fogaina
```

Update your docker image:
```
docker build -t fogainalambdafunction:latest .
```

Tag the docker image: 
```
docker tag fogainalambdafunction 482107978951.dkr.ecr.eu-west-3.amazonaws.com/fogainaappd13d92ef/fogainalambdafunctionf2811c79repo:fogainalambdafunction
```
Push to ECR:
```
docker push 482107978951.dkr.ecr.eu-west-3.amazonaws.com/fogainaappd13d92ef/fogainalambdafunctionf2811c79repo:fogainalambdafunction
```

Afterwards, go to your lambda function and update the image used to the last uploaded image above.

This is how to do it wwith cli:

Create lambda execution role and use it to create the lambda function.
Recuerda usar el --profile:
```
aws lambda --profile fogaina create-function --function-name fogaina --package-type Image --code ImageUri=482107978951.dkr.ecr.eu-west-3.amazonaws.com/fogainalambdafunction --role arn:aws:iam::482107978951:role/lambda_role
```


Lambda creada y puedo invocarla:
aws lambda --profile fogaina invoke --function-name fogaina response.json

