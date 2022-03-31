import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {

    // conditional randering
    // 1 Event variable
    // 2 ternary operater
    // 3 && operator
    // 4 ||
    let command;
    if (cart.length === 0) {
        command = <div>
            <p>add some product</p>
        </div>

    }
    else if (cart.length === 1) {
        command = <p>Add more item....</p>
    }
    else {
        command = <p>Thanks for Adding product</p>
    }

    return (
        <div>
            <h2>Selected item:{cart.length} </h2>
            {
                cart.map(tshirt => <p>{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button></p>)

            }
            {/* && (jodi sotti hoy tahole && er moddhe jabe) */}
            {cart.length === 3 && <p>triangle</p>}
            {/* jodi mittha hoy || er moddhe jabe */}
            {cart.length === 0 || <p>yay buy thing</p>}
            {cart.length === 4 && <button>Review order</button>}
            {cart.length !== 4 ? <p></p> : <button>clear all</button>}

            {command}

        </div>
    );
};

export default Cart;