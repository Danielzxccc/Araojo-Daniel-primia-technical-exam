
**Prerequisites:**

- Docker installed ([https://www.docker.com/](https://www.docker.com/))
- Docker Compose installed ([https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/))
- Node.js and npm installed ([https://nodejs.org/en/download](https://nodejs.org/en/download))

**Steps:**

1. **Clone the Repository:**

   Open your terminal and run:

     ```bash
     git clone https://github.com/Danielzxccc/Araojo-Daniel-primia-technical-exam.git
     ```

2. **Start the Database:**

   Navigate to the project's root directory in your terminal and run:

     ```bash
     docker-compose up -d
     ```

   This creates and starts the PostgreSQL database container in detached mode.

3. **Set Up Backend Environment:**

   - Open a new terminal window.
   - Navigate to the `backend` folder:

     ```bash
     cd backend
     ```

   - Copy the `.env.example` file to `.env`.
   - Edit the `.env` file to configure database connection details and other environment variables as needed.
   - Install dependencies:

     ```bash
     npm install
     ```

   - Start the backend development server:

     ```bash
     npm run dev
     ```

4. **Set Up Frontend Environment:**

   - Open another terminal window.
   - Navigate to the `frontend` folder:

     ```bash
     cd frontend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Start the frontend development server:

     ```bash
     npm run dev
     ```

## Accessing the Application

- **Frontend:** Visit `http://localhost:5173` in your web browser.
- **API Documentation:** Visit `http://localhost:3000/docs` to view the Swagger documentation for the backend API.

## Tech Stack

- Backend: Express, Node.js, PostgreSQL, Kysely, Zod, Swagger
- Frontend: React, React Query, Zod, OpenAPI Generator, Axios

## Explanation

This project utilizes a relational database design with PostgresSQL to manage relationships between positions and candidates using joining tables. The backend is built with Express.js and Node.js, providing a solid foundation for the API. Kysely facilitates efficient database interactions, and Zod ensures data validity throughout the application. Swagger is integrated to generate comprehensive API documentation, enhancing developer experience.

The frontend is constructed using React and React Query for seamless data fetching and management. Zod upholds data validation on the frontend as well. OpenAPI Generator automates the creation of type definitions from the Swagger spec, streamlining the development workflow. Axios serves as the primary HTTP client in the frontend.

## Planned Features (with Increased Time)

- **Pagination:** Implement mechanisms to handle large datasets efficiently.
- **Authentication:** Integrate user authentication and authorization to secure the API and manage user access.
- **Enhanced User Interface:** Refine the UI design for improved user experience and usability.
- **Server-Side Search:** Implement server-side search functionality to enable efficient search capabilities.
- **File Uploads:** Integrate features to handle resumes and other file attachments.
- **Data Migration with ORM:** Utilize an ORM (Object-Relational Mapper) to streamline data migration processes, ensuring data integrity and consistency during schema changes.
