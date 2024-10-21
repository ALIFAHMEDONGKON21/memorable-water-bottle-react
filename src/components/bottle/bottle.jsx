import './bottle.css'
const bottle = ({bottle,handlecartadd}) => {
    const {img,name,price,}=bottle
    console.log(bottle)
    return (
        <div className='bottle-continer'>
            
            <p>Name : {name}</p>;
            <img src={img} alt="" />
            <p> price :{price}</p>
            <button onClick={()=>handlecartadd(bottle)}>Buy Now</button>
        </div>
    );
};

export default bottle;