#!/bin/bash
# set -e # stop on error

echo switch folder to deploy
cd .deploy
echo Remove all for .deploy
rm -rf *
echo copy dist folder to deploy
cp -R ../dist/ .
echo add new gh-pages files
git add .
echo commit changes
git commit -m "deploy to gh-pages"
echo push to remote gh-pages
git push -f
echo All done!
