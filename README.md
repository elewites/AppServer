# AppServer
Social media API

The server is currently deployed with heroku [here](https://social-api.herokuapp.com/). 
- If you want to run the server locally checkout the instructions below

This server is built with the following technologies:

- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- jsonwebtoken 
- bcryptjs

## Purpose/Learning Goals

1. Create a Social Media API to gain valuable experience in developing full-stack applications and implementing RESTful APIs.
2. Gain experience developing with cloud databases, MongoDB in this case and the object data modeling library Mongoose.
3. Design an authentication system for user registration and login, utilizing JSON Web Tokens and bcryptjs to hash and salt passwords. 


## Installation

The server is currently deployed but you clone and run it in your local machine. 

The server connects to one my cloud clusters MongoDB but if you wish to use the code with your own cluster you must change
the `database_URI` variable in the `server.js` file.
- Yet you should be able to run the server locally and use my MongoDB cluster. 

Once you clone the repo run `npm install` on the main directory

Then run the following command to spin up the server `nodemon index.js` and if it runs succesfully and connects to the database 
should output `Server is running on port 3001`
- If it does not connect to the database it will output on command line `connected to server but not to db`

Once the server is running, clone the client side repository [ChatAppClient](https://github.com/elewites/ChatAppClient.git). 
- Checkout the client side repository for detail instructions on running the frontend application locally.

But in short, you need to: 

Install the the packages in client side with `npm install`

Then run `npm start`

Now both the frontend and backend sides of the application should be running. 

This should allow for proper use of the app, registration, login in, making posts and making comments on the posts. 

