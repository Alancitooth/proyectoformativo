import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
   const {register, handleSubmit, formState : {errors}} = useForm();
   const {singup, isAuthenticated, errors: RegisterErrors} = useAuth();
   const  navigate = useNavigate();

  useEffect (() =>{
    if(isAuthenticated) navigate('/tasks');
  }, [isAuthenticated, navigate])

  const onSubmited = handleSubmit(async(values) =>{
            // console.log(values);
            singup(values);
  })
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md "> 

      {
        RegisterErrors.map((error, i) =>(
          <div className="bg-red-500 text-white p-2" key={i}>
            {error}
          </div>
        ))
      }
      <form className="space-y-4" onSubmit={onSubmited}>
        <input className="w-full bg-zinc-600 text-white px-4 py-4 rounded-md" type="text" {...register("username", {required: true})} placeholder="Username"  />
        {
          errors.username && <p className="text-red-500">Username is required</p>
        }
        <input className="w-full bg-zinc-600 text-white px-4 py-4 rounded-md" type="email"  {...register("email", {required: true})} placeholder="Email"/>

        {
          errors.email && <p className="text-red-500">Email is required</p>
        }

        <input className="w-full bg-zinc-600 text-white px-4 py-4 rounded-md" type="password"  {...register("password", {required: true})} placeholder="Password"/>
        {
          errors.password && <p className="text-red-500">Password is required</p>
        }
        <button className=" bg-blue-500 hove:bg-slate-700 text-white font-bold py-2 rounded px-4">Register</button>
      </form>
    </div>
  )
}

export default Register
