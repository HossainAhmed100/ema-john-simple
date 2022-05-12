import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faTrashCan} from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart}) => {
    let total =0;
    let shipping =0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    let tax = (total * 0.1).toFixed(2);
    let grandTotal = total + shipping + parseFloat(tax);
    return (
        <div>
                        <nav>
                <ul>
                    <li><h3 className='text-center'>Order Summary</h3></li>
                    <li><small>Selected Items : {quantity}</small></li>
                    <li><small>Total Price : ${total}</small></li>
                    <li><small>Shipping Charge : ${shipping}</small></li>
                    <li><small>Tax : ${tax}</small></li>
                    <li className='mt-4'><h3>Grand Total : ${grandTotal}</h3></li>
                    <div className="d-grid gap-2 col-12 mx-auto">
                    <button className="btn btn-danger btn-lg mt-4" type="button">Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
                    <button className="btn text-white btn-lg btn-warning" type="button">Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </ul>
            </nav>

        </div>
    );
};

export default Cart;