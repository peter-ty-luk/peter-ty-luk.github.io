# Github projects explorer
List all your projects under github with search function written in Angular

## Create angular app and deploy to your github website
```bash
ng new <project-name> # create new project
cd <project-name>
git remote add origin https://github.com/<username>/<username>.github.io.git # add this project to github 
ng add angular-cli-ghpages  # add angular-cli-ghpages to your project, it can help to deploy your app to github host

# since github webpage only read master branch, you need to create a dev branch for development and master branch for your deployment
git checkout -b dev # create 'dev' branch
ng deploy --branch=master # deploy to master branch (instead of dev branch)
```

Goto https://<username>.github.io/, you should see your  angular project deployed

## edit your projects in projects.json
