import React, {useEffect, useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Entry from './Entry';

//REVIEW - This is written with the Comment Anchors extension in vsCode marking the comments. If you download the extension you will see the marker colors. If you don't have the extension, you can still see the comments and the code will run fine you will just see the anchor tags in the comments.

function App() {
//NOTE - We are going to hold the State for Users In App.js
const [users, setUsers] = useState([]);

//NOTE: writing a basic async and await function set to show GET, PUT, POST, DELETE methods using MockAPI at : https://6470f94a3de51400f72530fe.mockapi.io/Example for the URL with try catch blocks to handle errors and comments after each method to explain what is happening
const URL= "https://6470f94a3de51400f72530fe.mockapi.io/Example"

//REVIEW - We will use a useEffect hook to call the GET method when the page loads, We will display them below the entry form. 
useEffect(() => {
  getMethod()
}, []);


//NOTE: GET method which uses async and await to get the data from the API and set the state to the data it gets back.
// this is the method we will use to get the users from the database and display them on the page.
const getMethod = async () => {
  try {
    const response = await fetch(URL)
    const data = await response.json()
    setUsers(data)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

//NOTE: PUT method is typically used to update a user. 
// We don't have a form for that in this example but I will show you how to do it.
const putMethod = async (updateUser) => {
  try {
    const response = await fetch(URL, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      // NOTE - Below this we pass what we would be using to update in the body of the request.
      // we use JSON.stringify to convert the object to a string for the API to read it.
      // make sure to practice JSON formatting. It is very picky about the format.
      body: JSON.stringify({
        name: updateUser.name,
        email: updateUser.email
      })
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}



//NOTE: POST method which will be used to add a new user to the database through the form.
// we pass the newUser object to the body of the request and use JSON.stringify to convert it to a string.
// make sure to practice JSON formatting. It is very picky about the format.
// you will need to deconstruct the newUser object to get the name and email from it.
const postMethod = async (newUser) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: newUser.name,
        email: newUser.email
      })
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

//NOTE: DELETE method will be used to delete a user from the database based on the id of the user.
const deleteMethod = async (id) => {
  try {
    //TODO - make sure to pass the id of the user you want to delete to the URL
    // we used template literals to pass the id to the URL so we can use the id variable in the URL.
    const response = await fetch(`${URL}/${id}`, {
      method: "DELETE"
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// NOTE: calling the functions works just like any other function, you just pass the function name and the parameters it needs.
// you can even pass them down as props to other components and call them from there. You can pass parameters to them the same
// way you would pass them to any other function. You can even name them whatever you want. I just used names that were
// easy to understand.
// getMethod()
// putMethod()
// postMethod()
// deleteMethod()

//NOTE: To delete a user we will use a deleteUser function for the onClick event.
// that will call the deleteMethod and pass it the id of the user we want to delete.
function deleteUser(user) {
deleteMethod(user.id)
  //NOTE - Then we will use setUsers to update the state and filter out the user we just deleted.
  // That way the user will be removed from the page without having to refresh the page.
  // if you don't do that the user will be removed from the database but will still be on the page until you refresh the page.
  setUsers(prevUsers => prevUsers.filter(prevUser => prevUser.id !== user.id))
}






//NOTE - Below this is the return statement for the App.js
// in a normal app you could break this up into components and import them here.
// but for this example we will just put everything in the App.js to keep it all easier for you to see.
  return (
    <div>
      <div className="container">
        <h1 className="display-3 text-center">Simple CRUD Example</h1>
        <h2 className="lead fw-bold text-center">Using MockAPI with lots of comments in code.</h2>
        <div className="row">
          <h1 className="display-3">Necessary Form</h1>
          <div className="col-6 m-1 border border-2 shadow rounded-2 p-3">
            <Entry postMethod={postMethod} setUsers={setUsers} />
          </div>
        </div>
        <div className="row">
          
            <h1 className="display-5">Users</h1>
            <h2 className="lead fw-bold">These users are currently stored in Mock API</h2>
            {users.map((user) => {
              return (
                <div className='col-3'>
                <div className="card shadow rounded-4 p-1" key={user.id}>
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email}</p>
                    <button className="btn btn-danger" onClick={() => deleteUser(user)}>Delete</button>
                  </div>
                </div>
                </div>

              );
            })}
          </div>
        </div>
      </div>
    
  );
}
export default App;