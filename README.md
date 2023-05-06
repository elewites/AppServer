# AppServer
Social media API

## Installation

The server is not currently deployed but you clone and run it in your local machine. 

The server connects to one my cloud clusters MongoDB but if you wish to use the code with your own cluster you must change
the `database_URI` variable in the `server.js` file.

Once you clone the repo run `npm install` on the main directory

Then run the following command to spin up the server `nodemon server.js` and if it runs succesfully the command line
should output `Server is running on port 3001`

Once the server is running, clone the client side repository [ChatAppClient](https://github.com/elewites/ChatAppClient.git). 

Install the the packages in client side with `npm install`

Then run `npm start`

Now both the frontend and backend sides of the application should be running. 

This should allow for proper use of the app, registration, login in, making posts and making comments on the posts. 

