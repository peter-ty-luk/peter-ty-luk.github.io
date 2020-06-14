# Github projects explorer
List all your projects under your github page (i.e. https://<username>.github.io/) 
The page is written in Angular and provided with search/filter tag function 

## Create angular app and deploy to your github page
```bash
# create new angular project
ng new <project-name> 

cd <project-name>

# add this project to github 
git remote add origin https://github.com/`<username>`/`<username>`.github.io.git 

# add angular-cli-ghpages to your project, it can help to deploy your app to github host
ng add angular-cli-ghpages  

# since github webpage only read master branch, you need to create a dev branch for development and master branch for your deployment
# create 'dev' branch
git checkout -b dev 

# deploy to master branch (instead of dev branch)
ng deploy --branch=master 
```

Goto https://`<username>`.github.io/, you should see your angular project deployed

## edit your projects in projects.json
