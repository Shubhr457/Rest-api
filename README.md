# Node.js REST API with Express.js and Postman

This README file provides detailed instructions on how to set up, run, and test a REST API built using Node.js and Express.js, along with testing it using Postman.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Project Structure](#project-structure)
4. [Setting Up the Server](#setting-up-the-server)
5. [Creating the Endpoints](#creating-the-endpoints)
    - [GET /items](#get-items)
    - [GET /items/:id](#get-item-by-id)
    - [POST /items](#post-item)
    - [PUT /items/:id](#put-item)
    - [DELETE /items/:id](#delete-item)
6. [Testing the API with Postman](#testing-the-api-with-postman)
7. [Running the Server](#running-the-server)
8. [Conclusion](#conclusion)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (version 12 or higher)
- npm (Node package manager, comes with Node.js)
- Postman (for testing the API)

## Project Setup

1. Create a new directory for your project.
2. Initialize a new Node.js project.
3. Install Express.js.
4. Optionally, you can install nodemon for easier development. Nodemon automatically restarts your server when file changes are detected.

## Project Structure

Your project directory should look like this:

```
nodejs-express-api/
├── node_modules/
├── package.json
├── package-lock.json
├── server.js
└── routes/
    └── items.js
```

## Setting Up the Server

Create a file named `server.js` in the root of your project to set up the Express server. Include middleware to parse JSON bodies and import routes from the `routes/items.js` file. Start the server on a specified port.

## Creating the Endpoints

Create a `routes` directory and inside it, create a file named `items.js` for the API endpoints.

### GET /items

Retrieves a list of all items.

### GET /items/:id

Retrieves a specific item by ID.

### POST /items

Creates a new item. Expects a JSON body with `name` and `description` properties.

### PUT /items/:id

Updates an existing item by ID. Expects a JSON body with `name` and `description` properties.

### DELETE /items/:id

Deletes an item by ID.

## Testing the API with Postman

1. Open Postman.
2. Create a new request.
3. Set the request method to GET, POST, PUT, or DELETE based on the endpoint you are testing.
4. Enter the URL (e.g., `http://localhost:8000/items`).
5. For POST and PUT requests, select the `Body` tab, choose `raw`, and set the type to `JSON` to enter the JSON data.
6. Click `Send` to execute the request.
7. Verify the response and status code.

## Running the Server

To run the server, use the following command:

- `node index.js`

If you are using nodemon, run:

- `npx nodemon index.js`

You should see output indicating the server is running.

## Conclusion

You have now set up a basic REST API using Node.js and Express.js, and you can test it using Postman. This setup can be extended and modified to fit your specific requirements, such as connecting to a database, adding authentication, or implementing more complex logic.
![Screenshot 2024-06-24 153824](https://github.com/Shubhr457/Rest-api/assets/136572711/f02f230e-e1b5-4d8b-aec3-5055adb5e767)
