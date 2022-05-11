import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    const handleAddToCard = (product) => {
        const newCart = [...cart, product];
        setCart(newCart); 
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
            <nav>
                <ul>
                    <li><h3 className='text-center'>Order Summary</h3></li>
                    <li><small>Selected Items : {cart.length}</small></li>
                    <li><small>Total Price : $</small></li>
                    <li><small>Shipping Charge : $</small></li>
                    <li><small>Tax : $</small></li>
                    <li className='mt-4'><h3>Grand Total : $</h3></li>
                    <div className="d-grid gap-2 col-12 mx-auto">
                    <button className="btn btn-danger btn-lg mt-4" type="button">Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
                    <button className="btn text-white btn-lg btn-warning" type="button">Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </ul>
            </nav>

            </div>
        </div>
    );
};

export default Shop;