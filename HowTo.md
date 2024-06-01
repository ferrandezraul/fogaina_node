# OUTDATED

# PUSH CHANGES TO PRODUCTION: 

# PUSH TO CYCLIC
See (Cyclic website)[https://app.cyclic.sh/]
Whenever we push changes to the main branch of the git repository https://github.com/ferrandezraul/fogaina_node.git
the changes are automatically deployed since there is a connection between github and cyclic account.

# PUSH TO HEROKU (OLD. Not used)
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

# Upgrade node version

Upgrade your node version with nvm and set it as default:
```
nvm list
nvm install 18.12.1
nvm alias default 18.12.1
```

Update the node engine in your package.json.
Remove your node_modules folder.
Run nvm install
In case of dependency errors, try to fix them one by one. 

Remember to check that the npm and the node version you use are compatible.

# Add closed due to vacation

Check github log "Add close due to holidays"
An easy way is to add at the end of your views/home.ejs file the following code (i.e. image with info):
```
<div style="margin-top: 15px;">
  <img src="images/slideshow/1000x400/vacances2023.jpg" class="d-block w-100" alt="...">
</div>
```

# TODO
1. Refactor and clean code.
2. https://www.lafogaina.com works well.
   However, if you only type lafogaina.com, it redirects to the cyclick URL instead of www.lafogaina.com
   Issue related to the apex or root domain 
   Besides:
   https://www.lafogaina.com works
   https://lafogaina.com does not work


