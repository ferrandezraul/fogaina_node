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

