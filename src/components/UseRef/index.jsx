import React, { useRef, useState } from 'react';

UseRef.propTypes = {

};
// useRef: nó là một hook của reactjs
// nó tạo một biến gọi là ngoại phạm vi của component nó sẽ không khởi tạo lại giá trị ban đầu khi component re-render
// let id


function UseRef(props) {
    const [count, setCount] = useState(60)
    const id = useRef(90)

    const handleStart = () => {
        id.current = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000)
        console.log("check id: ", id);
    }

    const handleEnd = () => {
        clearInterval(id.current)
    }

    console.log("check id ngoai:", id);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>start</button>
            <button onClick={handleEnd}>finish</button>
        </div>
    );
}

export default UseRef;