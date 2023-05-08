// use local storage to manage cart data

const getFoodCart = () => {
    let foodCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('food-cart');
    if (storedCart) {
        foodCart = JSON.parse(storedCart);
    }
    return foodCart;
}

const addToDb = id => {
    let foodCart = getFoodCart();
    // add quantity
    const quantity = foodCart[id];
    if (!quantity) {
        foodCart[id] = 1;
    }
    else {
        foodCart[id] = quantity + 1;
        // const newQuantity = quantity + 1;
        // shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('food-cart', JSON.stringify(foodCart));
}

const removeFromDb = id => {
    const foodCart = getFoodCart();
    if (id in foodCart) {
        delete foodCart[id];
        localStorage.setItem('food-cart', JSON.stringify(foodCart));
    }
}

const deleteFoodCart = () => {
    localStorage.removeItem('food-cart');
}

export {
    getFoodCart,
    addToDb,
    removeFromDb,
    deleteFoodCart
}
