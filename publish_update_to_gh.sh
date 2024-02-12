#!/bin/sh

git push origin master

npm run build
npm run deploy
