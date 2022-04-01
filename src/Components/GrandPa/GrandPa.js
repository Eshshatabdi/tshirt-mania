import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css'

export const RingContext = createContext('diamond')
const GrandPa = () => {
    const [house, setHouse] = useState(1);
    const handleBuyAHouse = () => {
        const newHouse = house + 1
        setHouse(newHouse)
    }

    return (
        <RingContext.Provider value='diamond'>
            <div className='grandpa' >
                <h4>Grand Pa</h4>

                <p>House:{house}  <button onClick={handleBuyAHouse}>buy A House</button></p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>

                </section>

            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;
