import React, { useState } from 'react';

import useTshirt from '../../Hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tshirts, setTshirts] = useTshirt()
    const [cart, setcart] = useState([]);

    const handleAddCart = (selectedItem) => {
        // eke product 2 bar cart e add jate na hoy eta
        const exits = cart.find(tshirt => tshirt._id === selectedItem._id)
        if (!exits) {
            const newCart = [...cart, selectedItem];
            setcart(newCart)


        }
        else {
            alert('item is already in cart')
        }

    }
    // cart theke remove korar jonno eta
    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id);
        setcart(rest);

    }
    return (
        <div>
            <div className="home-container">
                <div className="tshirt-container">
                    {
                        tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt}
                            handleAddCart={handleAddCart}
                        ></Tshirt>)

                    }

                </div>
                <div className="cart-container">
                    <Cart cart={cart}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></Cart>

                </div>
            </div>


        </div>
    );
};

export default Home;
