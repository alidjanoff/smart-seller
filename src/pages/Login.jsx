import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { googleLogin, loginUser } from '../db/services/authService';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from "@react-oauth/google";

function Login() {
    const navigate = useNavigate();
    const [error,setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();

      const onSubmit = async (data) => {
        await loginUser(data).then((res)=>{
            if(res.data.succeeded){
                localStorage.setItem("accessToken", res.data.token.accessToken);
                reset()
                navigate("/")
                alert("Welcome Back")
            }else{
                for (const err of res.data.errors) {
                    setError(err)
                }
            }
        })
      }    

      const googleLoginAsync = async (response) => {
        await googleLogin(response.credential)
          .then((res) => {
            if (res.data.succeeded) {
              localStorage.setItem("accessToken", res.data.token.accessToken);
              navigate("/");
              alert("Welcome Back")
            }else{
                for (const err of res.data.errors) {
                    setError(err)
                }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div>
        <h3>Login Page</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
           <div style={{ display: 'flex', flexDirection: 'column',width:"200px",marginLeft:"20px",gap:"5px",marginTop:"20px" }}>
            <input type="text" {...register("usernameOrEmail")} autoComplete='off' placeholder='Enter your username or email' required />
            <input type="password" {...register("password")} autoComplete='off' placeholder='Enter your password' required />
            <button type='submit'>Login</button>
            {/* <GoogleLogin onSuccess={googleLoginAsync} width="150px" /> */}
            <span>{error}</span>
           </div>
        </form>
    </div>
  )
}

export default Login