import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Timer.propTypes = {

};

function Timer(props) {
    const [countDown, setCountDown] = useState(180)

    // setInterval(() => {
    //     setCountDown(countDown - 1)
    // }, 1000);

    useEffect(() => {
        setInterval(() => {
            setCountDown(prevState => prevState - 1)
            console.log("count down");
        }, 1000);
    }, [])
    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    );
}

export default Timer;