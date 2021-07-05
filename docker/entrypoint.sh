#!/bin/bash

echo '----------------------------------------'
echo '> Run IU Fan Site'
echo '----------------------------------------'

echo '----------------------------------------'
echo '> Install node modules'
echo '----------------------------------------'
npm install --prefix ./back-end/

echo '----------------------------------------'
echo '> Start Service'
echo '----------------------------------------'
nginx && npm run start --prefix ./back-end/