// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useStateValue } from 'StateProvider';
import './Payment.css'
import CheckoutProduct from '../Components/CheckoutProduct.js';
import { Link, useHistory } from 'react-router-dom';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer.js'
import axios from '../axios';
import { db } from '../firebase.js'




function Payment() {

    const [{ basket,user }, dispatch ] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();
    
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the stripe secret to charge a customer, render whenever the basket changes

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //times 100 to get the subunits -> dollars to cents
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])


    console.log("The secret is: ", clientSecret);
    console.log('person', user);

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            /* 
            Implementing the user orders to the database
             When the order comes back successful: reach into the collection of users, 
             to that user, to that order, create a document with the paymentId, and set the info.
            */
            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })

    }

        // client secret: tell secret to actually run the card for the transaction  

    const handleChange = event => {
        // listen for changes in the CardElement and display any errors as customer types the details
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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                                  {/* Errors */}
                                {error && <div>{error}</div>}
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Payment

