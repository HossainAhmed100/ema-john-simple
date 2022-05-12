import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, getStrodCard } from '../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getStrodCard();
        const saveCart = [];
        for(const id in storedCart){
            const addedToCart = products.find(productt => productt.id === id);
            if(addedToCart){
                const quantity = storedCart[id];
                addedToCart.quantity = quantity;
                 saveCart.push(addedToCart);
            }
        }
        setCart(saveCart)
    }, [products])

    const handleAddToCard = (selectProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectProduct.id);
        if(!exists){
            selectProduct.quantity = 1;
            newCart = [...cart, selectProduct];
        }else{
           const rest = cart.filter(product => product.id !== selectProduct.id);
           exists.quantity = exists.quantity + 1; 
           newCart = [...rest, selectProduct]
        }
       
        setCart(newCart); 
        addToDb(selectProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
            <div className='container mt-4'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                products.map(product =>  <Product key={product.id} handleAddToCard={handleAddToCard} product={product}></Product>)
            }
            </div>
            </div>
            </div>
            <div className='cart-container'>
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;