pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // Command untuk melakukan build, misalnya: 'npm install' atau 'mvn clean package'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                // Command untuk melakukan pengujian, misalnya: 'npm test' atau 'mvn test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Command untuk melakukan deployment, misalnya: 'docker-compose up -d' atau 'kubectl apply -f deployment.yaml'
            }
        }
    }
    post {
        success {
            echo 'Pipeline successful!'
        }
        failure {
            echo 'Pipeline failed!'
        }
        always {
            echo 'Pipeline finished!'
        }
    }
}
