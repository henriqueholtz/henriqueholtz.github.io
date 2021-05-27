# henriqueholtz.github.io
My custom page


How to add new pages with routes: (React)

1- Create new empty repository with path route;
2- Create new project with create-react-app or others;
3- In folder project: "npm install gh-pages --save-dev"
3- Add property "homepage" in package.json with my url of github-page
  "homepage": "https://henriqueholtz.github.io/henriqueholtz-page"
4- Add properies "predeploy" and "deploy"  inside scripts of package.json
    " predeploy": "npm run build",
    "deploy": "gh-pages -d build",
5- To deploy run command: "npm run deploy"

Maybe it is necessary "git init" + "git remote add origin ..."

References:
    https://github.com/gitname/react-gh-pages
    https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/