/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
    // dispatch for change of information
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt=""/>

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
    {/* for the rating, create an array of five, and fill the empty indexes with the amount of stars the index has */}
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐️</p>
                    ))}
                </div>
                    <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct