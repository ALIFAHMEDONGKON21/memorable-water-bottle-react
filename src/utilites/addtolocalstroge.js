const getSoredCard =()=>
{
    const sotoredCardString=localStorage.getItem('cart');
    if(sotoredCardString)
    {
        return JSON.parse(sotoredCardString);
    }
    return []
}

const savedCartToLs=cart =>
{
    const cartstringfiled=JSON.stringify(cart);
    localStorage.setItem('cart',cartstringfiled)
}



const addls =id =>
{
    const cart= getSoredCard();
    cart.push(id);
    savedCartToLs(cart)

}

export {addls};