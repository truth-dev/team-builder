import React,{useState} from 'react';
import Form from "./Components/Form";
import './App.css';

function App() {
 const [team, setTeam] = useState([]);
 const [values, setValues] = useState({name:"", email:"", role:""})
/**
 * 
 */

const onSubmit = () =>{
  setTeam([values, ...team]);
  setValues({name:'', email:'', role:''})
}
const onChange = (name, value) => {
  setValues({...values, [name]: value})
}


   return (
   <div className='App'>
    <h1>Team Builder App!!</h1>
    <Form 
      values={values}
      change={onChange}
      submit={onSubmit}
      />
      {team.map((teams, idx) => {
        return (
          <div key={idx}>
            {teams.email} , {teams.name} , {teams.role}
           
          </div>
        )
      })}
   </div>
  );
}

export default App;