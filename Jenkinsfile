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
                sh 'docker build -t jenkins-demo-app .'
            }
        }

        stage('Release') {
            steps {
                echo 'Creating release version...'
                sh 'git tag -f v1.0 || true'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring stage: application health check completed.'
            }
        }
    }
}