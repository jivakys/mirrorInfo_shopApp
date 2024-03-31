## Description :

MirrorInfo_shopApp project is a RESTful API built using Node.js and Express for managing tasks. It allows users to perform basic CRUD operations on tasks with attributes such as title, description, status, and timestamps. The API is designed to facilitate task management functionalities with MongoDB storage, and validation/error handling.

## Table of Contents

-  [Getting Started](#getting-started)
   -  [Prerequisites](#prerequisites)
   -  [Installation](#installation)
   -  [Configuration](#configuration)
-  [Usage](#usage)
-  [Presentation](#presentation)
-  [Cointab server](#eksaq-server)
-  [Contributing](#contributing)
-  [License](#license)

## Endpoints :

### 1.User Router (`userRouter`)

1. Signup

<aside>
💡 URL: `/users/register`
Method: `POST`

</aside>

- Adds a new user to the database.
- Allows users registration with name, email, and password.

2. Login

<aside>
💡 URL: `/users/login`
Method: `POST`

</aside>

- Allows user login with email and password, generates a JWT token for authentication.

### **2.Task Router (`taskRouter`)**

1. **Fetch All Tasks**

<aside>
💡 **URL: `tasks/dashboard`
Method: `GET`**

</aside>

- Fetches all Tasks from the Database.
- Returns an array of tasks objects with properties: id, title, description, status, timestamp

2.  **Create Task**

<aside>
💡 **URL: `/tasks/addTask`
Method: `POST`**

</aside>

- Adds a new task to the database.
- Expects a JSON object with Task information in the request body.
- Returns a success message upon successful addition.

3.  **Update Task**

<aside>
💡 **URL: `/update/:id`
Method: `PUT`**

</aside>

- Updates an existing task with the specified ID using the provided details.

1. **Delete Task**

<aside>
💡 **URL: `/delete/:id`
Method: `DELETE`**

</aside>

- Deletes the task with the specified ID from the database.
