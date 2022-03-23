// use local storage to manage data

const addToDataBase=id=>{

    let shoppingCart={};

    // get shopping cart

    const storedCart=localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart=JSON.parse(storedCart);
    }
    else{
        shoppingCart={};
    }
    

    const quantity=shoppingCart[id];
    const quantityinNum=parseInt(quantity);

    if(quantityinNum){
        
        const newQuantity=parseInt(quantityinNum+1);
        shoppingCart[id]=newQuantity;
        // localStorage.setItem(id,newQuantity);
    }
    else{
        shoppingCart[id]=1;
        // localStorage.setItem(id,1);
    }

    localStorage.setItem('shopping-cart',JSON.stringify (shoppingCart));
    
}


const removeFromDatabase=(id)=>{
    
    const storedCart=localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart=JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify (shoppingCart));
        }
    }
}

const deleteShoppingCart=()=>{
    localStorage.removeItem('shopping-cart');
}

export {addToDataBase,removeFromDatabase,deleteShoppingCart}