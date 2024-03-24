# Hotel Management API Implementation

This is a RESTful API for a hotel management system, built using Node.js and Express.js, with MongoDB as the database.

## Features

- Create, read, update, and delete room types
- Create, read, update, and delete rooms
- Fetch all rooms with optional filters

## Installation

1. Clone the repository:

```bash
# Clone the repository
git clone https://github.com/Ken-Obieze/learnable-node-api2.git

# Navigate to the project directory
cd learnable-node-api1
cd project-root
```
2. Set up environment variables:
* Create a .env file in the root directory.
* Define the following environment variables:
    +  PORT: Port number for the server (default is 3000).
    + MONGODB_URI: MongoDB connection URI.

3. Install dependencies
```bash
npm install
```

4. Start Server
```bash
npm start
```

## Testing Endpoints
### Using Postman
* Open Postman.
* Set the request method to the appropriate HTTP method (e.g., GET, POST, DELETE).
* Enter the URL for the desired endpoint.
* Add request parameters or a request body if necessary.
* Click on the "Send" button to make the request.
* Review the response in the Postman interface.

#### Example Queries
Fetch all room types
* Method: GET
* URL (Localhost): http://localhost:3000/api/v1/types
* URL:(live link): https://learnable-hotel-management-api.onrender.com/api/v1/rooms/types

Create a new room type
* Method: POST
* URL (Localhost): http://localhost:3000/api/v1/types
* URL (live link): https://learnable-hotel-management-api.onrender.com/api/v1/rooms/types
* Request Body:
```bash
{
    "name": "Standard Room"
}
```

Delete a room by ID
* Method: DELETE
* URL (localhost): localhost:3000/api/v1/rooms/65f9e733a2c04a41b2fb874f (http://localhost:3000/api/v1/rooms/{roomId})
* URL (live link): https://learnable-hotel-management-api.onrender.com/api/v1/rooms/65f9e733a2c04a41b2fb874f

### Using CURL
1. Fetch all room types (GET request):

```bash
curl -X GET http://localhost:3000/api/v1/types
```

2. Create a new room type (POST request):

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "Deluxe Room"}' http://localhost:3000/api/v1/rooms-types
```
3. Fetch all rooms (GET request):

```bash
curl -X GET http://localhost:3000/api/v1/rooms
```

4. Delete a room by ID (DELETE request):
```bash
curl -X DELETE http://localhost:3000/api/v1/rooms/65f9e733a2c04a41b2fb874f
```
