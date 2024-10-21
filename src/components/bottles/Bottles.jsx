import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../bottle/bottle";
import './bottles.css'



const Bottles = () => {

    const [bottles ,setbottles]=useState([]);
    const [cart,setcart]=useState([])
    useEffect(()=>
        {
            fetch('bottles.json')
            .then(res=>res.json())
            .then(data =>setbottles(data))
        },[])
        
    const handlecartadd=bottle=>
    {
        const newcard=[ ...cart ,bottle]
        setcart(newcard);

        console.log('add bottle here')
        console.log(bottle);
    }
    return (
        <div>
            <h2>Bottles here{bottles.length}</h2>
            <h2>cart {cart.length}</h2>

           <div className="bottles-continer">
            {
            bottles.map(bottle=><Bottle 
                key={bottle.id}
                handlecartadd={handlecartadd}
                bottle={bottle}></Bottle>)
            
            }
            </div>
        </div>
    );
};

export default Bottles;