//NOTE: this is the form that will be used to get the user input.
import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"


export default function Entry({postMethod, setUsers}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    

    //NOTE - Below this is the function that will be used to handle the submit event
    // make sure to prevent the default behavior of the submit event
    // if you want to make sure you see the whole function you can click the arrow to the left of the function name
    // and it will collapse the function and you can expand it again by clicking the arrow again. 
    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name: name,
            email: email
        }
        
        //NOTE - Below this is the function that will be used to call the post method in the App.js
        // it takes the newUser object and passes it to the postMethod function in the App.js
        postMethod(newUser)
        
        //NOTE - Below this is the function that will be used to update the state in the App.js. 
        // it takes the previous state and adds the new user to it and then sets the state to the new array.
        setUsers(prevUsers => [...prevUsers, newUser])
        
        //NOTE - Below this is the function that will be used to clear the form after the user submits it.
        setName("")
        setEmail("")
    }
    
    //NOTE - Below this is the form that will be used to get the user input.
    // we use bootstrap to make it look nice. And we use the state variables to set the value of the inputs
    // if you want to avoid doing that you should look at the website for Formik. 
    // It is a library that will help you with forms so you can avoid using state variables to set the value of the inputs.
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
            <Form.Label className="fw-bold mt-2">Name</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </Form.Group>
    
        <Form.Group controlId="formBasicEmail">
            <Form.Label className="fw-bold mt-3">Email</Form.Label>
            <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </Form.Group>
    
        <Button variant="primary" type="submit" className="mt-3">
            Submit
        </Button>
        </Form>
    )
    }
