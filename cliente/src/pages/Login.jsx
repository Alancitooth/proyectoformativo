import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {

  const {register, handleSubmit, formState: {errors} } = useForm()

  const onSubmited = handleSubmit(async(values) =>{
  console.log(data);
})
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md ">
        <form className="space-y-4" onSubmit={onSubmited}>
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

export default Login
