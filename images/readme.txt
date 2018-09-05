# Save container state 
docker ps
docker commit c3f279d17e0a nlahlou/nodedemo:version3


docker run -v shared_volume:/var/jenkins_home:z -p 8080:8080 -p 50000:50000 --name nljenkins nlahlou/jenkins:version3
docker container stop nljenkins 
docker container start nljenkins
docker commit 939f5f7e5561 nlahlou/jenkins:version2



#Node JS
docker build -t nlahlou/nodedemo .
docker run -p 3000:3000 -d nlahlou/nodedemo
docker ps
docker exec -it d7beed96a1ba bash


# ref https://medium.com/@sunnykay/docker-development-workflow-node-express-mongo-4bb3b1f7eb1e

This step uses docker-compose to orchestrate our containers. It is a super cool tool and allows to start all our dependencies with just one command 
“docker-compose up”




#mongo
docker build -t nlahlou/mongodb .
docker run -p 27017:27017 -p 28017:28017 mongotest

docker ps
docker exec -it d7beed96a1ba bash
	#Ref https://codeforgeek.com/2015/08/restful-api-node-mongodb/
	# open mongo console
	mongo
	# create new database
	use db1