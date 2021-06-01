import React, { useState } from 'react'
import { useStateValue } from 'StateProvider';
import './Payment.css'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';



function Payment() {

    const [{ basket,user }, dispatch ] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = event => {
        // stipe stuff

    }

    const handleChange = event => {
        // listen for changes in the cardelement and display when customer types the details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }


    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to='/checkout'>{basket?.length} items </Link>
                    )
                </h1>
                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 Random Street</p>
                        <p>Vancouver, Canada</p>
                    </div>

                </div>

                {/* Payment section - Review Items  */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {/* Reuse the Checkout product to display products in the basket*/}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                    
                </div>

                {/* Payment section - Payment Method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Payment methods */}
                        <form>
                            <CardElement onChange={handleChange} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment

