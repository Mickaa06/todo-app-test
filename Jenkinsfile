pipeline {
    agent any
    
    stages {
        stage('Deploy') {
            steps {
                sshagent(['github-ssh-key']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@51.178.86.203 "cd /home/ubuntu/todo-app && docker-compose down && docker-compose up -d --build"
                    '''
                }
            }
        }
    }
}