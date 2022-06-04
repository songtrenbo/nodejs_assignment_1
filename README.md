## Installation app with cli

install app-cli use:
Some basic Git commands are:
```
npm i -g .
```
Then use command line to use app-cli
```
cli help: to show all command line
cli create-all: to create project
cli create-mvc: to create mvc structure
cli create-database: to create database (you must run cli create-mvc first)
```
To create a mvc:
 1. Create your folder with project name
 2. cd project_name
 3. Run cli
 4. Choose database (mysql or mongodb) 
 5. run seed data
    ```
       npm run seed 
    ```   
 6. run project
    ```
       npm start
    ```    
 7. access http://localhost:3000
### Web Change Salary from Gross to Net
 1. cd salary_change
 2. Run
    ```
       npm i
    ```  
 3. run docker
    ```
       docker compose up
    ```  
 4. run seed data
    ```
       npm run seed 
    ```   
 5. run project
    ```
       npm start
    ```    
 6. access http://localhost:3000
 7. Run unit test
    ```
       npm run test
    ```    
 8. Run coverage test
    ```
       npm run coverage
    ```  