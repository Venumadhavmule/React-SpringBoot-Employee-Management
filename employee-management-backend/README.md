# Employee Management Backend

## Setup Instructions
1. Navigate to the project directory:
   ```sh
   cd employee-management-backend
   ```
2. Configure the database in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/yourdb_name
   spring.datasource.username=yourusername
   spring.datasource.password=yourpassword
   ```
3. Build and run the application:
   ```sh
   mvn spring-boot:run
   ```
4. The API will be available at `http://localhost:8080/api/employees`.

## Features
- CRUD operations for employees
- MySQL database integration
- RESTful API endpoints

## Dependencies
- Spring Boot
- Spring Data JPA
- MySQL Driver
- Lombok
- Hibernate
