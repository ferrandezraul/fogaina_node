# PUSH CHANGES TO PRODUCTION: 

# PUSH TO CYCLIC
See (Cyclic website)[https://app.cyclic.sh/]
Whenever we push changes to the main branch of the git repository https://github.com/ferrandezraul/fogaina_node.git
the changes are automatically deployed since there is a connection between github and cyclic account.

# PUSH TO HEROKU
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

# DNS Configuration and SSL with Cyclic

In your domain provider, set a a CNAME like below:
| TYPE  | NAME  | DATA                              |
|-------|-------|-----------------------------------|
| CNAME | www   | lazy-pear-zebra-vest.cyclic.app  |
|       |       |                                   |

 Note that lazy-pear-zebra-vest.cyclic.app is the url of your cyclic app.

In cyclic advanced settings, set your custom domain and you will be told to set the corresponding CNAME entries on your DNS provider.

https://app.cyclic.sh/#/app/ferrandezraul-fogaina_node/advanced


# Convert images

Aumentar
```
convert IMG_1856.jpg -resize '1000x400' -gravity center -extent 1000x400  test.jpg
```

Disminuir
```
convert IMG_1856.png -resize '1920x1200^' -gravity center  -crop '1920x1200+0+0' test.png	
```

# TODO
Refactor and clean code.
Redirect lafogaina.con to www.lafogaina.com
Issue related to the apex or root domain 
https://www.lafogaina.com works
https://lafogaina.com does not work


