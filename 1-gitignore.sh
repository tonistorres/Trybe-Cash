GIT_IGNORE(){
  touch .gitignore
cat << EOF > .gitignore
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
/node_modules
/.pnp
.idea
.pnp.js
/coverage
/reports
/build
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.vscode
.stryker-tmp
*.test.js
EOF
}

GIT_IGNORE
