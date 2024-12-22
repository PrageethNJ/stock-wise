1. run this command in cmd to setup mysql database
	docker-compose up -d
2. open backend folder with intelliJ IDEA and run the project
	http://localhost:8090
3. go to frontend folder, open cmd in inside the folder, run this command 
	npm run dev
	http://localhost:5173
4. create docker image and run create a container for react frontend
	add "dev": "vite --host 0.0.0.0" to scripts in package.json
	create Dockerfile and .dockerignore
	create docker image -> docker build -t stockwise-react-frontend-image .
	create docker container -> docker run --name stockwise-react-frontend-container -p 3000:5173 stockwise-react-frontend-image
4. create docker image and run create a container for springboot backend
	add <finalName>stockwise_backend</finalName> to pom.xml
	run maven build by selecting clean and package
	create Dockerfile and .dockerignore
	create docker image -> docker build -t stockwise-springboot-backend-image .
	create docker container -> docker run --name stockwise-springboot-backend-container -p 8090:8090 stockwise-springboot-backend-image

