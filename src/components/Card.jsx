import React from 'react'

const Card = ({ username, cost, title, image, addToCart }) => {
  const handleAddToCart =() =>{
    const item = { title, cost, image
  };
  addToCart(item)
}
  
  return ( 
    <div className='relative h-96 w-80 bg-gradient-to-r from-blue-200 to-indigo-100 text-gray-800 shadow-2xl rounded-2xl ml-14 mt-7 p-4 flex flex-col items-center  text-center"'>
        <h2 className='text-3xl text-black'>{username}</h2>
        <img className=' h-32 w-32 rounded-xl border border-black mt-4 active:scale-150 transition-transform duration-200' src={image} alt="" />
       
        <h5 className='text-cyan-700 mt-2'>{title}</h5>
        <h3 className='text-black font-semibold'>cost :${cost}</h3>
        <button onClick={()=>{alert("order placed")}} className='py-2 px-3 absolute ml-9 mb-4 bottom-0 left-0 h-14 w-28 ... bg-green-500 hover:bg-green-600  mt-4 font-bold rounded-xl active:scale-95 '>Buy now</button>
        <button onClick={handleAddToCart} className='py-2 px-3 absolute mr-9 mb-4 bottom-0 right-0 h-14 w-28 ...  mt-4 font-bold rounded-xl active:scale-95 bg-blue-500 hover:bg-blue-600 '>add to cart</button>
    </div>
    
  )
}

export default Card