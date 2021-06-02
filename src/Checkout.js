/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Subtotal from "./Subtotal";
import salephoto from "../src/Images/sale.jpg";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src={salephoto}
          alt=""
        />

        <div>
          <h3>Welcome, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>

          {/* <CheckoutProduct
            id='12345'
            title='Kooobee test'
            image="https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTgwOTY2MjUyMjg4NjgxMzIw/kobe_bryant_si_0001.webp"
            price={100}
            rating={5}
          /> */}
          
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              hideButton={false}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
