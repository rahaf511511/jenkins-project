pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies and preparing application...'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running real automated Jest test...'
                sh 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running ESLint code quality check...'
                sh 'npm run lint'
            }
        }

        stage('Security') {
            steps {
                echo 'Running npm audit security scan...'
                sh 'npm audit'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application to local test environment...'
                sh '''
                if [ -f app.pid ]; then
                  kill $(cat app.pid) || true
                  rm app.pid
                fi

                nohup npm start > app.log 2>&1 &
                echo $! > app.pid
                sleep 5
                '''
            }
        }

        stage('Release') {
            steps {
                echo 'Creating local release tag...'
                sh 'git tag -f v1.0'
                sh 'git tag'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Running application health check...'
                sh '''
                node -e "const http=require('http'); http.get('http://localhost:3000', res => { if (res.statusCode !== 200) process.exit(1); console.log('Health check passed with status code:', res.statusCode); }).on('error', () => process.exit(1));"
                '''
            }
        }
    }

    post {
        always {
            sh '''
            if [ -f app.pid ]; then
              kill $(cat app.pid) || true
              rm app.pid
            fi
            '''
        }
    }
}