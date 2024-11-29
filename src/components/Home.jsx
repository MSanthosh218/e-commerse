import {  useEffect,useState } from 'react'

import axios from "axios"
import Card from './Card';




const Home = ({addToCart}) => {
  const [data, setData] = useState([])
  const usersData = async () => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products');
    setData(res.data); 
    console.log(data)
    
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
useEffect(() => {
  usersData(); 
}, []);


  return (
    <>
        <div className='text-white flex flex-wrap flex-row justify-evenly'>
          
          {data.map(function(user) {
            return <Card key={user.id}
              username={user.category}
              cost={user.price}
              title={user.title}
              image={user.image}
              description={user.description} 
              addToCart={addToCart} />;
              
          })}
        </div>
    
    </>
    
  )
}

export default Home