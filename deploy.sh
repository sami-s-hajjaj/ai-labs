vuepress build

cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ricwtk/ai-labs.git master:gh-pages

cd -