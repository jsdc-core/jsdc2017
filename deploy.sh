#!/bin/bash
# set -e # stop on error

echo copy dist folder to deploy
cp -R dist .deploy
echo switch folder to deploy
cd .deploy
echo commit changes
git commit -m "deploy to gh-pages"
echo push to remote gh-pages
git push -f
echo All done!
