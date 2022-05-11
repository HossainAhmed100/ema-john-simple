import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, seller, img, price, ratings} = props.product;
    return(
<div className="col">
    <div className="card h-100">
    <img src={img} className="card-img-top shadow-sm" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <h6 className="card-price">Price : ${price}</h6>
    <small className="text-muted">Manufacturer : {seller}</small>
    <br />
    <small className="text-muted">Rating : {ratings} Stars</small>
    </div>
    <div className="card-footer">
        <button onClick={() => props.handleAddToCard(props.product)} className='btn col-12 btn-primary'>Add To Cart <FontAwesomeIcon icon={faCartShopping} /></button>
    </div>
    </div>
</div>
 )
}

export default Product;
