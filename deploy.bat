call npm run docs:build

call cd .vuepress\dist

call git init
call git add -A
call git commit -m 'deploy'

call git push -f https://github.com/ricwtk/ai-labs.git master:gh-pages

call cd ../../