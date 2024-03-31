<h1> MirrorInfo_shopApp </h1>

| `DESCRIPTION ` |
| :------------: |

MirrorInfo_shopApp project is a RESTful API built using Node.js and Express for managing tasks. It allows users to perform basic CRUD operations on tasks with attributes such as title, description, status, and timestamps. The API is designed to facilitate task management functionalities with MongoDB storage, and validation/error handling.

## Table of Contents

-  [Getting Started](#Description)
   -  [Installation](#installation)
   -  [Configuration](#configuration)
-  [Demo](#demo)
-  [Endpoints](#endpoint)
   -  [User Router](#user-router)
   -  [Task Router](#task-router)
-  [Features](#features)
-  [TECH STACKS](#teck-stacks)
-  [NPM Packages](#npm-packages)
   


### Installation

Follow these steps to install and run the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/jivakys/mirrorInfo_shopApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mirrorInfo_shopApp
   ```

3. Set up your environment variables by creating a `.env` file in the root directory. Example content:

   ```env
   MONGODB_URL=your server url
   ```

4. Start your application:

   ```bash
   npm run start
   ```

5. Open the app in your browser at http://localhost:4000.

### Configuration

Before running the application, make sure to configure the necessary environment variables in the `.env` file.


| `Demo` |
| :----: |

[FRONTEND - VERCEL LINK](https://mirrorinfoshopapp.vercel.app/)

[BACKEND - CYCLIC LINK](https://pleasant-pig-hospital-gown.cyclic.app/)

| `Endpoints` |
| :---------: |

## 1.User Router (`userRouter`)

1. Signup

``` 
URL: /users/register
Method: POST
```
- Adds a new user to the database.
- Allows users registration with name, email, and password.

2. Login

```
URL: /users/login
Method: POST
```
- Allows user login with email and password, generates a JWT token for authentication.

## 2.Task Router (`taskRouter`)

1. Fetch All Tasks

```
URL: tasks/dashboard
Method: GET
```
- Fetches all Tasks from the Database.
- Returns an array of tasks objects with properties: id, title, description, status, timestamp

2.  Create Task

```
URL: /tasks/addTask
Method: POST
```
- Adds a new task to the database.
- Expects a JSON object with Task information in the request body.
- Returns a success message upon successful addition.

3.  Update Task

```
URL: /update/:id
Method: PUT
```
- Updates an existing task with the specified ID using the provided details.
- Returns a success message upon successful Update.

4. Delete Task

```
URL: /delete/:id
Method: DELETE
```
- Deletes the task with the specified ID from the database.
- Returns a success message upon successful Delete.

| `FEATURES` |
| :--------: |
- Authentication: The project includes JWT-based authentication to secure user data.
- Hashing: User passwords are securely hashed to protect against unauthorized access.
- dotenv: The project uses dotenv to manage environment variables and sensitive configuration data.
- Relationship: The project includes database schema relationships between collections to support complex data structures.
- Aggregation: The project uses MongoDB's aggregation framework to perform advanced queries and data manipulations.

| `TECHSTACKS USED` |
| :---------------: |

<p align = "center">
<img src="https://github.com/PrinceCorwin/Useful-tech-icons/blob/main/images/HTML.png" alt="html" width="55" height="55"/>
<img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" width="50" height="55"/>
<img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="js" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/nodejs.png" alt="nodejs" width="50" height="50"/>
<img src="https://res.cloudinary.com/kc-cloud/images/f_auto,q_auto/v1651772163/expressjslogo/expressjslogo.webp?_i=AA" alt="express" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/mongodb-leaf.png" alt="mongo" width="50" height="50"/> 
<img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" width="50" height="50"/>
</p>
<hr>

| `NPM PACKAGES` |
| :------------: |

<p align = "center">
<img src="https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0" alt="bcrypt.png" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/cors.png?raw=true" alt="cors" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/download.png?raw=true" alt="dotenv" width="60" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/JWT.png?raw=true" alt="jwt" width="70" height="50"/>
<img src="https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png" alt="mongoose.png" width="70" height="70"/>     
<img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="nodemon.png" width="50" height="50"/>
</p>

    mirrorInfo_shopApp
    |
    |----- Backend/
    |         |----- Config/
    |         |         |----- db.js
    |         |----- Middlewares/
    |         |         |----- authenticate.js
    |         |----- Models/
    |         |         |----- taskModel.js
    |         |         |----- userModel.js
    |         |----- Routes/
    |         |         |----- taskRoute.js
    |         |         |----- userRoute.js   
    |         |----- .gitignore
    |         |----- .env
    |         |----- index.js
    |         |----- pakage-lock.json
    |         |----- package.json
    |  
    |----- Frontend/
    |         |         |----- index.html
    |         |         |----- login.html
    |         |         |----- signup.html
    |         |         |----- tasks.html
    |         |----- CSS/
    |         |         |----- index.css
    |         |         |----- login.css
    |         |         |----- signup.css
    |         |         |----- tasks.css
    |         |----- IMAGES/
    |         |----- JS/
    |         |         |----- index.js
    |         |         |----- login.js
    |         |         |----- signup.js
    |         |         |----- tasks.js
    |----- README.md/
