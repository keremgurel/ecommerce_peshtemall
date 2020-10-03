import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.pinimg.com/originals/36/a9/9f/36a99f74625db4d993210adcb7234120.jpg"
          alt=""
        />

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
            image="https://i.hizliresim.com/6JRd67.png"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="2345678"
            title='"Cam Yesili"'
            price={99.99}
            image="https://saunahut.de/media/image/d2/1d/ab/_MG_9600DgKesNe5k9sSU.png"
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
            title="100% Cotton Navy Pestemal with white lining set"
            price={99.99}
            image="https://cdn.turkishtowelsaustralia.com/wp-content/uploads/2020/07/Turkish-Hand-Towels-with-Fringe-Sultan-Peshtemal-Peshkir-Navy-Blue-1-510x341.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="123456"
            title="Organic Bamboo Pestemal"
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71rkW5TiRTL._AC_SX522_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
