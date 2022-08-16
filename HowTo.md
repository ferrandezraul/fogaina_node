# PUSH CHANGES TO PRODUCTION: 
Production uses the remote named heroku (with URL lafogaina.com and repo https://git.heroku.com/lafogaina.git ) 
Development and test uses the heroku-18 remote. (with URL https://lafogainatest18.herokuapp.com/ and repo https://git.heroku.com/lafogainatest18.git)

Te deploy to production use:
```
git push heroku main
```

To deploy to development use:
```
git push heroku-dev main
```
