import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ChildUseCallback from '../ChildUseCallback';

UseCallback.propTypes = {

};

function UseCallback(props) {
    const [input, setInput] = useState()
    const [count, setCount] = useState(0)
    const handleOnClick = useCallback(() => {
        //closure: count = 0
        setCount(prev => prev + 1)
    }, [])
    // const handleOnClick = () => {
    //     setCount(count + 1)
    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <h1>{count}</h1>

            <ChildUseCallback fcOnclick={handleOnClick} />
        </div>
    );
}

export default UseCallback;