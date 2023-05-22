import React from 'react';

const Form = (props) => {
    
const handleChange = evt => {
    const {name , values} = evt.target;
    props.change(name, values)
}

 const handleSubmit = evt => {
    evt.preventDefault();
    props.submit();
}

    return (
        <form onSubmit={handleSubmit}>
            <label>Name
           <input 
            placeholder='Enter your name here!'
            value={props.values.name}
            name="name"
            onChange={handleChange}
            /> 
            </label>
            <label>Email
                <input 
                   placeholder='Enter your Email!'
                   value={props.values.email}
                   name='email'
                   onChange={handleChange}
                />
            
            </label>
            <label>Role
             <input 
                placeholder='Enter your Role!'
                value={props.values.role}
                name='role'
                onChange={handleChange}
             />

            </label>
            <input type='submit' value='Create your team! ' />
        </form>
    )
}

export default Form;