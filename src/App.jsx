import {useState } from 'react'

// import axios from "axios"

import './App.css'

import Header from './components/Header'
import Form2 from './components/Form2'
import Footer from './components/Footer'
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Form1 from './components/Form1';
import Cart from './components/Cart';



function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };
  


  return (
  <>
    
   <div className='flex flex-col min-h-screen'>
    <div className='mb-12'> 
      <Header cartItemCount={cartItems.length}/>
    </div>
    
    <div className='flex-grow mb-20'>  
     <Routes>
      <Route path='/' element = {<Welcome />} />
      <Route path='/signup' element ={<Form2 />} />
      <Route path='/login' element ={<Form1 />} />
      <Route path='/home' element ={<Home addToCart={addToCart} />} />
      <Route path='Cart' element = {<Cart cartItems={cartItems} removeFromCart={removeFromCart}  />} />

     </Routes>
    </div> 

    {/* <div className='px-6 py-4 bg-yellow-200 mt-4 items-center justify-center rounded  '> */}
    <div className='bg-footer-gradient text-[#505050] p-6 rounded-lg shadow-md fixed bottom-0 w-full'>
        <Footer /> 
    </div>
   </div>
  </>
  );
}
        
  

export default App



// // {users.forEach((user, index) => (
// //   <div key={index} className="user-card">
// //     <img src={user.photo} alt={`${user.name}'s photo`} />
// //     <h2>{user.name}</h2>
// //     <p>Age: {user.age}</p>
// //     <p>Profession: {user.profession}</p>
// //     <p>Location: {user.location}</p>
// //   </div>
// // ))}


// import React from 'react'
// import './App.css'
// import Form2 from './components/Form2'

// const App = () => {
//   return (
//     <div>
//       <Form2 />
//     </div>
//   )
// }

// export default App




// const users = 
  // [
//     {
//       "id": 1,
//       "name": "John Doe",
//       "age": 28,
//       "profession": "Software Engineer",
//       "location": "San Francisco, CA",
//       "photo": "https://www.shutterstock.com/image-photo/passport-photo-cute-well-dressed-260nw-1816206689.jpg"
//     },
//     {
//       "id": 2,
//       "name": "Jane Smith",
//       "age": 34,
//       "profession": "Marketing Manager",
//       "location": "New York, NY",
//       "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlhj6LteC68rQaGmPMYScwU0bvh20PCaPGv3VyJ3eyCXuoiF2ZHZf8XzOz3mIDrnuGsg&usqp=CAU"
//     },
//     {
//       "id": 3,
//       "name": "Robert Johnson",
//       "age": 41,
//       "profession": "Financial Analyst",
//       "location": "Chicago, IL",
//       "photo": "https://www.shutterstock.com/image-photo/passport-photo-serious-latin-american-260nw-1851940939.jpg"
//     },
//     {
//       "id": 4,
//       "name": "Emily Davis",
//       "age": 25,
//       "profession": "Graphic Designer",
//       "location": "Austin, TX",
//       "photo": "https://www.shutterstock.com/image-photo/passport-photo-portrait-man-on-260nw-2439037015.jpg"
//     },
//   {
//     "id":5,
//     "name":"san",
//     "age":22,
//     "profession":"student",
//     "location":"kuppam",
//     "photo":"https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-260nw-2437772333.jpg"
//   },
// {
//   "id":6,
//   "name":"tlakshmi",
//   "age":50,
//   "profession":"farmer",
//   "location":"srikalahasthi",
//   "photo":"https://www.shutterstock.com/shutterstock/photos/274128659/display_1500/stock-photo-passport-picture-of-a-smiling-turkish-businesswoman-274128659.jpg"
// }

// ]