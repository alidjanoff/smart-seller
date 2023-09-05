import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { registerUser } from '../db/services/authService';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [error,setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();
      const onSubmit = async (data) => {
        await registerUser(data).then((res)=>{
            if(res.data.succeeded){
                reset()
                navigate("/login")
                alert("Successfully registered")
            }else{
                for (const err of res.data.errors) {
                    setError(err)
                }
            }
        })
      }    

  return (
    <div>
        <h3>Register Page</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
           <div style={{ display: 'flex', flexDirection: 'column',width:"200px",marginLeft:"20px",gap:"5px",marginTop:"20px" }}>
           <input type="text" {...register("firstName")} autoComplete='off' placeholder='Enter your firstname' required />
            <input type="text" {...register("lastName")} autoComplete='off' placeholder='Enter your lastname' required />
            <input type="text" {...register("userName")} autoComplete='off' placeholder='Enter your username' required />
            <input type="email" {...register("email")} autoComplete='off' placeholder='Enter your email' required />
            <input type="password" {...register("password")} autoComplete='off' placeholder='Enter your password' required />
            <button type='submit'>Register</button>
            <span>{error}</span>
           </div>
        </form>
    </div>
  )
}

export default Register