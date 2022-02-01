# Basic Website Template

This is a template for static websites that includes

Vite | Vue 3 | Bootstrap 5 | Sass | Sweet Alert 2

# Deployment

1. In the Vite config folder add `base:GithubRepoName/`

2. Run `npm run build` to build static files to the dist folder.

3. Run `git add dist -f`

4. Run `git commit -m 'adding dist`

5. Finally run `git subtree push --prefix dist origin gh-pages` Now the dist folder is pushed to its own branch

6. Go to the dist branch and deploy with github pages :)
