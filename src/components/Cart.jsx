import React, { useState } from 'react'

const Cart = ({ cartItems, removeFromCart }) => {
  const [data, setData] = useState(cartItems.map(() => 1))
  const min =(index)=>{
    setData(data.map((q, i) => (i === index && q > 1 ? q - 1 : q)))
  }
  const max = (index)=>{
    setData(data.map((q, i) => (i === index ? q + 1 : q)))
  }
  return (
    <div className='p-4'>
        <h2 className='text-2xl font-bold mb-4'>Shopping Cart</h2>
        {cartItems.length === 0 ? (<p>Your cart item is empty</p>):(
            <ul>
                {cartItems.map((item,index) => (
                    <li key={index} className='flex flex-col items-center text-center w-fit py-2'>
                        <div>
                        <img className='w-36 h-36 ml-24 rounded-xl' src={item.image} alt="" />
                           <h3 className='text-lg font-semibold'>{item.title}</h3>
                           <p>${item.cost*data[index]}</p>
                        </div>
                        <div>
                          <button   onClick={() => min(index)} className='font-bold w-9 bg-slate-500 border border-black rounded hover:bg-slate-800 active:scale-50'> - </button>
                          <input className='w-16' type="number" value={data[index]} />
                          <button onClick={() => max(index) } className='font-bold w-9 bg-slate-500 border border-black rounded  hover:bg-slate-800 active:scale-50'> + </button>
                        </div>
                        <div className='flex'>
                         <button onClick={()=>{removeFromCart(index)}} 
                          className='px-3 py-1 bg-red-500 text-white rounded-xl mt-4 font-bold hover:bg-red-700  active:scale-95 '
                         >remove

                         </button>
                         <button onClick={() => alert(`Total item cost: $${item.cost * data[index]}`)} 
                          className='px-3 py-1 bg-green-500 hover:bg-green-600  mt-4 font-bold rounded-xl active:scale-95 text-white '
                         >buy now

                        </button>
                        </div>
                    </li>
                ))}
            </ul>
        )}
    </div>
    
  )
}

export default Cart