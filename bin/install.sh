#!/bin/bash

# Common
echo "\nInstalling packages..."
sleep 3
bundle i
npm i

# Dev Environment
echo "\nInstalling databases..."
rails db:drop
rails db:create
rails db:migrate
rails db:seed

# Test Environment
rails db:reset RAILS_ENV=test

echo "\nRunning Unit Tests TDD..."
sleep 3
npm run test

echo "\nRunning Automation Tests BDD..."
sleep 3
npm run it
