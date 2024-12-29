pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('prageethnj-dockerhub')
    }    

    stages {
        
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/PrageethNJ/stock-wise.git'
                }
            }
        }

        stage('Build Docker Image for Spring Boot Backend') {
            steps {
                script {
                    dir('backend') {
                        bat 'docker build -t prageethnj/springboot-backend-image:%BUILD_NUMBER% .'
                    }
                }
            }
        }

        stage('Build Docker Image for React Frontend') {
            steps {
                script {
                    dir('frontend') {
                        bat 'docker build -t prageethnj/react-frontend-image:%BUILD_NUMBER% .'
                    }
                }
            }
        }
        
        
        stage('Login to Docker Hub') {
            steps {
                retry(3) {
                    bat """
                        echo %DOCKERHUB_CREDENTIALS_PSW%| docker login -u %DOCKERHUB_CREDENTIALS_USR% --password-stdin
                    """
                }
            }
        }

        stage('Push Backend Image') {
            steps {
                bat 'docker push prageethnj/springboot-backend-image:%BUILD_NUMBER%'
            }
        }

        stage('Push Frontend Image') {
            steps {
                bat 'docker push prageethnj/react-frontend-image:%BUILD_NUMBER%'
            }
        } 
                  
        
    }

    post {
        always {
            steps {
                bat 'docker logout'
            }
        }
    }
}
