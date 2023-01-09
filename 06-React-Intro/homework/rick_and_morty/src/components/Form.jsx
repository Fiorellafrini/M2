
import React from "react";
// import { Form } from "react-router-dom"
// import { Link } from "react-router-dom";
// import styled from "styled-components";
import Validate from './Validate'

// className={styled.card}
export default function Form(props) {

    const [userData, setUserData] = React.useState({
    username: '',
    password: ''
});

    const [errors, setErrors] = React.useState({
        username:'',
        password:''
    })

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value
    
    setUserData ({
    ...userData,
    [property]: value
    })
    
    setErrors(Validate({
        ...userData,
        [property]: value
    }))
    }
    
    function handleSubmit (event){
        event.preventDefault()
        props.login(userData)

    }


 return(
    <div>
        <form onSubmit={handleSubmit}>
            <label> Username: </label>
            {/* htmlFor="username" */}
            <input
                type= 'text'
                name= 'username'
                placeholder="Enter username"
                onChange= {handleInputChange}
            
                // (event)=> handleInputChange(event)
                // value={userData.username} 
                className={errors.username}
            /> 
       {/* htmlFor="password" */}
            <label>Password: </label>
            <input
                type= 'text'
                name= 'password'
                placeholder="Enter password"
                onChange= {handleInputChange}

                // onChange={}
                    // (event)=> handleInputChange(event)}
                // value={userData.password} 
                className={errors.password}

            /> 
            <button type='submit'>Log In</button>
        
        </form>
    </div>
    )
 }
