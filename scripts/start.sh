#!/bin/bash

cd /home/ec2-user/devops-assignment

pm2 describe devops-assignment > /dev/null

if [ $? -ne 0 ]
then
    pm2 start index.js --name devops-assignment
else
    pm2 restart devops-assignment
fi

pm2 save

