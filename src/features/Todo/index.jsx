import React, { useEffect, useState } from 'react';
import './style.scss';
import data from '../../users.json'
import api from '../../api/api';

Todo.propTypes = {

};

function Todo(props) {
    // array chứa số lượng user
    const arrayNumber = [
        { id: 1, title: "10 user", number: 10 },
        { id: 2, title: "50 user", number: 50 },
        { id: 3, title: "100 user", number: 100 },

    ]

    const [number, setNumber] = useState(0)
    const [checked, setChecked] = useState()

    const handleOnchange = (item) => {
        setNumber(item.number)
        setChecked(item.id)
    }

    return (
        <div className='wrap-todo' >

            <h1>Wellcome to Todo list</h1>
            {/* input */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                {arrayNumber.map(item => {
                    return <div style={{ fontSize: "20px", display: "flex", alignItems: "center" }}>
                        <input type="radio" style={{ width: "20px", height: "20px", cursor: "pointer" }}
                            onChange={() => handleOnchange(item)}
                            checked={checked === item.id}
                        />
                        <span>{item.title}</span>
                    </div>
                })}
            </div>

            {/* list user */}
            <ul className='list'>
                {data.slice(0, number).map(item => {
                    return <li className='list__item'><span>{item.user_name} - {item.birthday}</span></li>
                })}

            </ul>

        </div>
    );
}

export default Todo;