## Objective:

Design and implement a secure backend API using any programming language of your choice (e.g., Node.js, Python, Java)
with PostgreSQL as the database. The API should provide user registration (sign up) and authentication (login)
endpoints. Additionally, implement rate limiting on a specific secure endpoint to enhance security.

## Requirements:

### User Registration (Sign Up):

- [x] Create an API endpoint for user registration.
- [x] Collect and validate user information, including username, email, and password.
  Hash and securely store passwords in the PostgreSQL database.
- [x] Implement validation to ensure unique usernames and emails.

### User Authentication (Login):

- [x] Develop an API endpoint for user authentication (login).
- [x] Verify user credentials against the stored information in the database.
- [x] Generate and return a secure authentication token upon successful login.
- [x] Use industry-standard practices for token generation and validation.

### Secure API Endpoint with Rate Limiting:

- [x] Create a secure API endpoint that requires authentication.
- [x] Implement rate limiting on this endpoint to prevent abuse and enhance security.
- [x] Choose a reasonable rate limit (e.g., X requests per minute) and clearly document the rate-limiting strategy.

### Improvements:

- [] Create swagger API documentation
- [] Improve rate limiting
