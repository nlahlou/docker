# latest official node image
FROM node:latest

MAINTAINER Neil LAHLOU

WORKDIR /data/app_node/

# Bundle app source
COPY . .
COPY models/* models/
RUN ls -la models/*

#install vim
RUN apt-get update
RUN apt-get install -y vim
RUN apt-get install -y default-jre

# Install nodemon
RUN npm install -g nodemon 
RUN npm install --save mongoose
RUN npm install
#npm install express

# Expose port
EXPOSE  3000

COPY jenkins-slave /usr/local/bin/jenkins-slave

ENTRYPOINT ["jenkins-slave"]



# Run app using nodemon
#CMD ["nodemon", "server.js"]

CMD [ "npm", "start" ]