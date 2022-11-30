pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent1_1"
                    }
                    steps {
                        git url: 'https://github.com/l0g0l/cypress-jenkins-pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key ddb3101e-5431-4955-8134-f6f02763511c  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent1_2"
                    }
                   steps {
                        git url: 'https://github.com/l0g0l/cypress-jenkins-pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key ddb3101e-5431-4955-8134-f6f02763511c  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent1_3"
                    }
                  steps {
                        git url: 'https://github.com/l0g0l/cypress-jenkins-pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key ddb3101e-5431-4955-8134-f6f02763511c  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent1_4"
                    }
                steps {
                        git url: 'https://github.com/l0g0l/cypress-jenkins-pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key ddb3101e-5431-4955-8134-f6f02763511c  --parallel'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}