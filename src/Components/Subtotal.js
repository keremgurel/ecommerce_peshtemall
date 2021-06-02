import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useHistory } from 'react-router-dom';

function Subtotal() {
    // Router feature useHistory gives the browser history
    const history = useHistory();
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
         <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"CAD$"}
      />

      {/* push a page into the browser. using link changes the styling of the button with an underline */}
      <button onClick={e => history.push('/payment')}>Proceed to Checkout!</button>
        </div>
    )
}

export default Subtotal;
