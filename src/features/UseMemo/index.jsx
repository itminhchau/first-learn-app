import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

UseMemo.propTypes = {

};

function UseMemo(props) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [products, setProducts] = useState([])

    const handlOnclickAdd = () => {
        if (name && price) {
            setProducts([
                ...products,
                {
                    name,
                    price: parseInt(price)
                }
            ])
        }

    }

    const total = useMemo(() => {

        return products && products.map((item) => item.price).reduce((a, b) => {
            console.log("dang tinh lai");
            return a + b
        }, 0)
    }, [products])

    // const total = products && products.map((item) => item.price).reduce((a, b) => {
    //     console.log("dang tinh lai");
    //     return a + b
    // }, 0)



    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
            <h1>Total: {total}</h1>
            <button onClick={handlOnclickAdd}>add</button>
            <ul>
                {products && products.map(item => {
                    return <li>{item.name} - {item.price}</li>
                })}
            </ul>

        </div>
    );
}

export default UseMemo;