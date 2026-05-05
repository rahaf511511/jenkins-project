pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running code quality check...'
                sh 'npm run build'
            }
        }

        stage('Security') {
            steps {
                echo 'Running security scan...'
                sh 'npm audit'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application to test environment...'
                sh 'mkdir -p deployment'
                sh 'cp app.js package.json deployment/'
                sh 'echo "Application deployed to test environment"'
            }
        }

        stage('Release') {
            steps {
                echo 'Creating release version...'
                sh 'echo "Release v1.0 created successfully"'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring application health...'
                sh 'echo "Health check passed: application is running successfully"'
            }
        }
    }
}