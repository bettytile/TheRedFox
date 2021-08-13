import React from 'react'
import './CartItem.css';
import { Link } from 'react-router-dom';
import food from '../assets/images/food4.jpeg';
const CartItem = ({item, qtyChangeHandler, removeHandler}) => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
            <img src={item.imageUrl} alt={item.name} />

            </div>
            <Link to={`/product/${item.product}`} className="cartitem__name">
                <p>{item.name}</p>
            </Link>
            <p className="cartitem__price">${item.price}</p>
            <select className="cartitem__select" value={item.qty} onChange={(e) => qtyChangeHandler(item.product,e.target.value)}>
                {[...Array(item.countInStock).keys()].map(x=> (
                    <option key={x+1} value={x+1}>{x+1}</option>
                ))}
            </select>
            <button onClick={()=> removeHandler(item.product)} className="cartitem__delete">
                <i className="fas fa-trash"></i>
            </button>

        </div>
    )
}

export default CartItem;