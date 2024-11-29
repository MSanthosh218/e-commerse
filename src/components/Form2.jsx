import React from 'react'
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';



const Form2 = () => {
    const { register, handleSubmit,  formState: { errors }, reset} = useForm();
    const navigate = useNavigate();
    // const validateForm = () => {
    //     trigger("EmailId");  // Triggers validation for all fields
    //   };
      
    const onSubmit = (data) => {
        console.log(data);
        
        reset();
        navigate("/login")
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className='items-center flex flex-col justify-center h-screen'>
            <h2 className='font-bold text-2xl p-4 underline underline-offset-8 '>Sign up form</h2>
            <label htmlFor="firstname" className='font-bold text-xl mb-4' >FirstName : </label>
            <input 
            {...register("firstName", {required:{
                value:true,
                message:"*first name is required"
            },
            maxLength:{
                value:20,
                message: "*It should contain at most 20 letters"
            },
            minLength:{
                value:3,
                message:"*FirstName should contain atleast 3 letters"

            },})} 
            type="text" 
            id='firstname'
            placeholder='Enter ur First Name' 
            className='border border-black  px-3 py-2 rounded-xl mb-4' />
            {errors.firstName && (<p className='text-red-700'>{errors.firstName.message}</p>)}





            <label htmlFor="lastname" className='font-bold text-xl mb-2' >LastName : </label>
            <input 
             {...register("lastName", {required :{
                value:true,
                message: "*This LastName is Required",
             },
            maxLength:{
                value:20,
                message: "*It should contain at most 20 letters"
            },
            minLength:{
                value:3,
                message:"*LastName should contain atleast 3 letters"

            },
            })} 
            type="text" 
            id='lastname'
            placeholder='Enter ur Second Name' 
            className='border border-black px-3 py-2 rounded-xl mb-4' />
            {errors.lastName && (<p className="text-red-700">{errors.lastName.message}</p>
            )}
            



            <label htmlFor="EmailIds" className='font-bold text-xl mb-4' >EmailId : </label>
            <input type="email" name="EmailId" id="EmailIds"
            {...register("EmailId", {required:{
                value:true,
                message:"*Email is Required"
            },pattern:{
                value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
              message: "*Invalid email address format"
            } 
            })}
            className='border border-black  px-3 py-2 rounded-xl mb-4' 
            placeholder='Enter ur EmailId' />
            {errors.EmailId && (<p className='text-red-700'>{errors.EmailId.message}</p>)}




            
            <label htmlFor="passwords" className='font-bold text-xl mb-4'>Password : </label>
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
            className='border border-black  px-3 py-2 rounded-xl mb-4' />
            {errors.password && (<p className='text-red-700'>{errors.password.message}</p>)}


            
            <button type="submit" className='font-bold bg-emerald-400 hover:bg-emerald-500 active:scale-95 rounded-xl px-3 py-2 w-32'>submit</button> 
        </form>
        

    </div>
  )
}

export default Form2