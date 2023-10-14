# Nest.js, MongoDB, and Docker API

This is a Node.js API built with the Nest.js framework, which connects to a MongoDB database and is Dockerized for easy containerization and management.

## Requirements

Before you get started, make sure you have the following requirements installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- Docker: [Download and Install Docker](https://www.docker.com/get-started)
- Git: [Download and Install Git](https://git-scm.com/)

## Setup

1. Clone this repository to your local machine:
  ```bash
  git clone https://github.com/your-username/your-repo.git
  cd your-repo

2. Install the project dependencies:
  ```bash
  npm install

3. Create a .env file at the root of the project and configure the necessary environment variables. Be sure to define the MongoDB connection URL.
  MONGODB_URI=mongodb://localhost/your-database
  PORT=3000

## Running
### Development

To run the application in development mode, use the following command:
  ```bash
  npm run start:dev
  ```
The API will be available at http://localhost:3000.

### Production
To run the application in production mode, use the following command:
  ```bash
  npm run start:prod
  ```

## Dockerization
To run the application in a Docker container alongside a MongoDB instance, follow these steps:
Make sure Docker is installed.
Run the following command to build the images and create the containers:
  ```bash
  docker-compose up
  ```
This will create two containers: one for the Node.js application and another for MongoDB.

## API Usage
The API provides the following endpoints:

- POST /users: Create a new user.
- GET /users: Retrieve a list of users.
- PUT /users/:id: Update an existing user.

You can use tools like Postman or cURL to interact with the API.