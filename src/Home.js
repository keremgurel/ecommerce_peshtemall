import React from "react";
import "./Home.css";
import Product from "./Product";
import anam from "../src/Images/anam.jpg";
import anam2 from "../src/Images/anam2.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={anam} alt="" />

        <div className="home__row">
          <Product
            id="2345678"
            title='"Gokkusagi" (Set of 4) Bamboo Pestemal'
            price={399.99}
            image="https://jasmintextile.com/wp-content/uploads/2020/02/pestemal_1490489084.png"
            rating={5}
          />
          <Product
            id="2345678"
            title='"Kargasa" 100% Cotton Navy Pestemal'
            price={89.99}
            image={anam2}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="2345678"
            title='"Gunes"'
            price={99.99}
            image="https://cdn.shopify.com/s/files/1/0666/9977/products/Turkish_Towel__Turkish-T__Basic_Bath_Hand_Towel_Yellow_grande_96db5330-ec98-4512-858c-452ce16dfbda_529x.png?v=1583855900"
            rating={3}
          />
          <Product
            id="2345678"
            title='"Akvaryum" Cotton Pestemal'
            price={39.99}
            image="https://www.decorist.com/static/finds/product_images/full_size/178259-towel.608c0ed164673fac8a1d599450e7c445.png"
            rating={5}
          />
          <Product
            id="123456"
            title="XL Cotton Beach Set"
            price={99.99}
            image="https://cdn11.bigcommerce.com/s-59b7e/images/stencil/1280x1280/products/2583/14482/Beach_Pool_Towel_5__38435.1560252640.png"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="123456"
            title='Bamboo Pestemal "Colors" Set '
            price={399.99}
            image="https://lh3.googleusercontent.com/proxy/8KFoOuI3S1M84VEnRGI8jieXp2an4323n_tf_myEfLcWQkbFkGR3oVVzdKm3OPOVWgBnWKX7Sbw_UL2iXq5XrV9qSVD-XhcFzfSp7qLrTlaIwuVN-gYq6g"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
