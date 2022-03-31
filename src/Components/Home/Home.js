import React from 'react';

import useTshirt from '../../Hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tshirts, setTshirts] = useTshirt()
    return (
        <div>
            <div className="home-container">
                <div className="tshirt-container">
                    {
                        tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt}></Tshirt>)

                    }

                </div>
                <div className="cart-container">
                    <Cart></Cart>

                </div>
            </div>


        </div>
    );
};

export default Home;
