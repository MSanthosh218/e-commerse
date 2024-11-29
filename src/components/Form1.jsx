import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Form1 = () => {
  const { register, handleSubmit,  formState: { errors }, reset} = useForm();
  const navigate = useNavigate()


  const onSubmit = (data) => {
    console.log(data);
    
    reset();
    navigate("/home")
}
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col items-center justify-center p-20'>
        <h2 className='text-2xl font-bold mb-6 underline underline-offset-8'>Login form</h2>
        <div className='flex flex-col items-center mb-6'>
          <label htmlFor="EmailId" className='font-bold text-xl'  >Email_Id : </label>
          <input
           {...register("EmailId", {required:{
            value:true,
            message:"*Email is Required"
        },pattern:{
            value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
          message: "*Invalid email address format"
        } 
        })}
        className='rounded-xl px-3 py-2 border border-black' 
        placeholder='Enter ur EmailId' />
        {errors.EmailId && (<p className='text-red-700'>{errors.EmailId.message}</p>)}
         


      
          <label htmlFor="password" className='font-bold text-xl'>password : </label>
          <input 
            {...register("password", {required:{
              value:true,
              message:"*password is required"
          },
          maxLength:{
              value:20,
              message: "*It should contain at most 20 letters"
          },
          minLength:{
              value:3,
              message:"*Password should contain atleast 3 letters"

          },})} 
          type="password" 
          id='passwords'
          placeholder='Enter ur Password' 
          className='rounded-xl px-3 py-2 border border-black' />
          {errors.password && (<p className='text-red-700'>{errors.password.message}</p>)}

          


          <button type="submit" className='border border-black  bg-emerald-400 w-24 mt-6 p-2 rounded-xl hover:bg-emerald-500 active:scale-95'>submit</button>

        </div>
      </form>
    </div>

  )
}

export default Form1