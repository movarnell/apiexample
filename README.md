# React API Demo
This is a simple React application that demonstrates the use of the HTTP methods GET, PUT, POST, and DELETE with an API using async/await. This application is a great tool to teach students about how API works with a React app.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
Node.js and npm: You will need Node.js and npm installed on your computer to run this app. 
An editor like VS Code

## Installation
### Clone the repo:
```shell
git clone https://github.com/movarnell/apiexample.git
```
### Navigate into the directory:
```shell
cd apiexample
```
## Install the dependencies:
```shell
npm install
```
This command will install all the necessary packages for the project which are defined in package.json.

Start the application:
```shell
npm start
```
The application should now be running on localhost:3000 (unless you have changed the default port) and you can access it with your browser.

## Usage
After you have successfully started the application, you should see a form where you can enter a name and an email.

#### When you submit the form, the application will create a new user object and will perform the following operations:

**GET:** Retrieves the current list of users from the MockAPI.

**PUT:** Updates the first user in the MockAPI. **<- Not used, but example code is present.**

**POST:** Adds a new user to the MockAPI.

**DELETE:** Deletes the first user from the MockAPI.

## Notes
This application uses the MockAPI for the API calls. The API URL is https://6470f94a3de51400f72530fe.mockapi.io/Example.

### The application is also set up to use the Comment Anchors extension in VS Code to mark comments. If you have the extension, you will see the marker colors. If you don't, you can still see the comments and the code will run fine, but you will see the anchor tags in the comments.

