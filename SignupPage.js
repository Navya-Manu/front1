import React,{useState} from 'react';

const SignupPage=()=>{

    const[formData,setFormData]=useState({
        empName:'',
        email:'',
        role:'',
        password:''
    
    });
    // this method takes an event e as its parameter (e-event object)
    //setformstate updates form data state
    //handleChange func updates the formdata when user types in the textbox
    const handleChange=(e)=>{
        setFormData({ ...formData,[e.target.name]:e.target.value });
    };


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch('http://localhost:8085/api/employees/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            });
            if(response.ok){
                window.location.href='./login';
            } else{
                console.error('signup failed');
            }
        } catch(error){
            console.error('Error',error);
        }
    };

    return (
        <div>
          <h2>Signup Page</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="empName"
              placeholder="Name"
    value={formData.name}
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
    value={formData.email}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    };
     
    export default SignupPage;