(this["webpackJsonpecommerce-clone"]=this["webpackJsonpecommerce-clone"]||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/logo.ab7b5e53.png"},41:function(e,t,a){e.exports=a.p+"static/media/anam.7a13e08f.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/anam2.d8ebbd66.png"},44:function(e,t,a){e.exports=a.p+"static/media/sale.5468cfb7.jpg"},46:function(e,t,a){e.exports=a(72)},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(37),l=a.n(r),i=(a(51),a(38)),o=a(12),s=a(19),m=a(9),u=(a(52),a(53),a(25)),d=a.n(u),p=a(39),E=a.n(p),_=a(40),h=a.n(_),g=Object(n.createContext)(),f=function(e){var t=e.reducer,a=e.initialState,r=e.children;return c.a.createElement(g.Provider,{value:Object(n.useReducer)(t,a)},r)},v=function(){return Object(n.useContext)(g)},b=a(31),k=(b.a.initializeApp({apiKey:"AIzaSyD20uKa_jLLnvd6hY2iROVQEIOjpI1q4Uk",authDomain:"ecommerce-site-a3cf6.firebaseapp.com",databaseURL:"https://ecommerce-site-a3cf6.firebaseio.com",projectId:"ecommerce-site-a3cf6",storageBucket:"ecommerce-site-a3cf6.appspot.com",messagingSenderId:"505766389159",appId:"1:505766389159:web:aa24e67a2460b7066ac282",measurementId:"G-TFHJQE29PD"}).firestore(),b.a.auth());var N=function(){var e=v(),t=Object(o.a)(e,1)[0],a=t.basket,n=t.user;return c.a.createElement("div",{className:"header"},c.a.createElement(s.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:d.a,alt:""})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{className:"header__searchInput",type:"text"}),c.a.createElement(E.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(s.b,{to:!n&&"/login"},c.a.createElement("div",{onClick:function(){n&&k.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello!"),c.a.createElement("span",{className:"header__optionLineTwo"},n?"Sign Out":"Sign In"))),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Orders")),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Account")),c.a.createElement(s.b,{to:"/checkout"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(h.a,null),c.a.createElement("span",{className:"header_optionLineTwo header__basketCount"},null===a||void 0===a?void 0:a.length)))))};a(64),a(65);var O=function(e){var t=e.id,a=e.title,n=e.image,r=e.price,l=e.rating,i=v(),s=Object(o.a)(i,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,a),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e,t){return c.a.createElement("p",null,"\u2b50\ufe0f ")})))),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:t,title:a,image:n,price:r,rating:l}})}},"Add to Basket"))},w=a(41),j=a.n(w),S=a(42),T=a.n(S);var y=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement("img",{className:"home__image",src:j.a,alt:""}),c.a.createElement("div",{className:"home__row"},c.a.createElement(O,{id:"2345678",title:'"Gokkusagi" (Set of 4) Bamboo Pestemal',price:399.99,image:"https://jasmintextile.com/wp-content/uploads/2020/02/pestemal_1490489084.png",rating:5}),c.a.createElement(O,{id:"2345678",title:'"Kargasa" 100% Cotton Navy Pestemal',price:89.99,image:"https://www.katoendraad.nl/wp-content/uploads/2018/09/1536597684.png",rating:5})),c.a.createElement("div",{className:"home__row"},c.a.createElement(O,{id:"2345678",title:'"Gunes"',price:99.99,image:"https://cdn.shopify.com/s/files/1/0666/9977/products/Turkish_Towel__Turkish-T__Basic_Bath_Hand_Towel_Yellow_grande_96db5330-ec98-4512-858c-452ce16dfbda_529x.png?v=1583855900",rating:3}),c.a.createElement(O,{id:"2345678",title:'"Akvaryum" Cotton Pestemal',price:39.99,image:"https://www.decorist.com/static/finds/product_images/full_size/178259-towel.608c0ed164673fac8a1d599450e7c445.png",rating:5}),c.a.createElement(O,{id:"123456",title:"XL Cotton Beach Set",price:99.99,image:"https://cdn11.bigcommerce.com/s-59b7e/images/stencil/1280x1280/products/2583/14482/Beach_Pool_Towel_5__38435.1560252640.png",rating:3})),c.a.createElement("div",{className:"home__row"},c.a.createElement(O,{id:"123456",title:'Bamboo Pestemal "Colors" Set ',price:399.99,image:T.a,rating:5}))))},C=(a(66),a(43)),B=a.n(C),x=a(32),A=a(21),P=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},I=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(x.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(x.a)(e.basket);return a>=0?n.splice(a,1):console.warn("Can't remove product that is not in the basket. (id: ".concat(t.id,")")),Object(A.a)(Object(A.a)({},e),{},{basket:n});case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:t.user});default:return e}};var R=function(){var e=v(),t=Object(o.a)(e,1)[0].basket;return c.a.createElement("div",{className:"subtotal"},c.a.createElement(B.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.length," items): ",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:P(t),displayType:"text",thousandSeparator:!0,prefix:"CAD$"}),c.a.createElement("button",null,"Proceed to Checkout!"))},L=a(44),D=a.n(L);a(68),a(69);var K=function(e){var t=e.id,a=e.image,n=e.title,r=e.price,l=e.rating,i=v(),s=Object(o.a)(i,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutProduct__image",src:a,alt:""}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},n),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e,t){return c.a.createElement("p",null,"\u2b50\ufe0f")}))),c.a.createElement("button",{onClick:function(){m({type:"REMOVE_FROM_BASKET",id:t})}},"Remove from Basket")))};var U=function(){var e=v(),t=Object(o.a)(e,1)[0],a=t.basket,n=t.user;return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:D.a,alt:""}),c.a.createElement("div",null,c.a.createElement("h3",null,"Welcome, ",null===n||void 0===n?void 0:n.email),c.a.createElement("h2",{className:"checkout__title"},"Your shopping basket"),a.map((function(e){return c.a.createElement(K,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(R,null)))};a(70);var M=function(){var e=Object(m.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),p=u[0],E=u[1];return c.a.createElement("div",{className:"login"},c.a.createElement(s.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:d.a,alt:""})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign-In"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:p,onChange:function(e){return E(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),k.signInWithEmailAndPassword(r,p).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signinButton"},"Sign in")),c.a.createElement("button",{onClick:function(t){t.preventDefault(),k.createUserWithEmailAndPassword(r,p).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create an account")))};var W=function(){var e=v(),t=Object(o.a)(e,2);Object(i.a)(t[0]);var a=t[1];return Object(n.useEffect)((function(){k.onAuthStateChanged((function(e){console.log("The user is: ",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(s.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/login"},c.a.createElement(M,null)),c.a.createElement(m.a,{path:"/checkout"},c.a.createElement(N,null),c.a.createElement(U,null)),c.a.createElement(m.a,{path:"/"},c.a.createElement(N,null),c.a.createElement(y,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,{initialState:{basket:[],user:null},reducer:I},c.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.b01c5433.chunk.js.map