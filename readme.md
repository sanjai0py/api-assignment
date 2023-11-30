# API with user registration, user authentication, and rate limiting

## Base URL

https://api-assignment-243c.onrender.com/


## Core Packages

1. [Express](https://expressjs.com/) - Web framework
2. [PostgreSQL](https://www.postgresql.org/) - Database
3. [Sequelize](https://sequelize.org/) - ORM
4. [JWT](https://jwt.io/) - Token generation and validation
5. [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit) - Rate limiting
6. [Bcrypt](https://www.npmjs.com/package/bcrypt) - Password hashing
7. [Dotenv](https://www.npmjs.com/package/dotenv) - Environment variables
8. [Nodemon](https://www.npmjs.com/package/nodemon) - Development

## Setup

1. Clone the repository `git clone`
2. Install dependencies `npm install`
3. Create a `.env` file in the root directory and add the following environment variables: `DATABASE_URL`, `PORT`, `JWT_SECRET`, `JWT_EXPIRE`
4. Run `npm run dev` to start the server in development mode
5. Run `npm start` to start the server in production mode

## API Endpoints

### `POST /api/auth/signup`

- Creates a new user
- Request body:
  - `username`
  - `email`
  - `password`
  - `secretImg`
- Response:
  - `200 OK` on success
  - `400 Bad Request` if username or email already exists
  - `500 Internal Server Error` on server error
  - Response body:
    - `success`
    - `data`

### `POST /api/auth/login`

- Authenticates a user
- Request body:
  - `username`
  - `password`
- Response:
  - `200 OK` on success
  - `400 Bad Request` if username or password is incorrect
  - `500 Internal Server Error` on server error
  - Response body:
    - `success`
    - `data`

### - `GET /api/secret`

- Returns a secret message
- Request Headers:
    - `authorization` - Bearer token
- Response:
  - `200 OK` on success
  - `401 Unauthorized` if token is invalid
  - `429 Too Many Requests` if rate limit is exceeded
  - `500 Internal Server Error` on server error
  - Response body:
    - `success`
    - `data`

## Rate Limiting

- Rate limiting is implemented using the [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit) package
- The rate limit is set to 10 requests per minute
- The rate limit is applied to the `/api/secret` endpoint


