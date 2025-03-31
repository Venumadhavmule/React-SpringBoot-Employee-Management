# React-SpringBoot-Employee-Management

This is a full-stack Employee Management System built using **React** for the frontend and **Spring Boot** for the backend. The system allows CRUD operations for employee data, including adding, updating, viewing, and deleting employee records.

## Technologies Used

- **Frontend:** React, React Router, Axios, Bootstrap
- **Backend:** Spring Boot, Spring Data JPA, Hibernate, MySQL
- **Database:** MySQL
- **Other Tools:** Postman (for API testing), Maven, Git

## Project Structure

```
React-SpringBoot-Employee-Management/
│── employee-management-frontend/   # React Frontend
│── employee-management-backend/    # Spring Boot Backend
│── README.md  # Main repository README
```

## Setup Instructions

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd employee-management-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

For detailed instructions, check the [Frontend README](employee-management-frontend/README.md).

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd employee-management-backend
   ```
2. Configure the database in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/yourdab_name
   spring.datasource.username=yourusername
   spring.datasource.password=yourpassword
   ```
3. Build and run the backend:
   ```sh
   mvn spring-boot:run
   ```

For detailed instructions, check the [Backend README](employee-management-backend/README.md).

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/{id}` | Get employee by ID |
| POST | `/api/employees` | Add new employee |
| PUT | `/api/employees/{id}` | Update employee |
| DELETE | `/api/employees/{id}` | Delete employee |
