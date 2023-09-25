import React, { useState } from 'react';
import './style.scss'

LuckyWheel.propTypes = {

};

function LuckyWheel(props) {
    const arrayGift = ["Mobile Phone", "Laptop", "Car", "Ipad"]

    const [gift, setGift] = useState()// khởi tao state
    

    const handleOnClick = () => {
        let indexRandom = Math.floor(Math.random() * arrayGift.length) // 0,1,2,3,4

        setGift(arrayGift[indexRandom])
    }
    return (
        <div className='wrap-lucky'>
            <h1>{gift ? `${gift}` : `you don't have a gift`}</h1>
            <button className='spin-button' onClick={handleOnClick}>Snipping</button>
        </div>
    )

}

export default LuckyWheel;