import React, { useEffect, useState } from 'react';
import api from '../../api/api';


UseEffectDomeEvent.propTypes = {

};

function UseEffectDomeEvent(props) {
    const array = ["posts", "comments", "albums"]
    // const [time, setTime] = useState(0)
    const [listPost, setListPost] = useState()
    // const intervalRef = useRef(null);
    // const [timeString, setTimeString] = useState(null);

    const [type, setType] = useState("posts")
    const [input, setInput] = useState()


    // loại1 useEffect không sử dụng depencies
    // bước 1: component render add jsx vào dom
    // bước 2: gọi callback function trong useEffect
    // kể từ lần render tiếp theo thì callback luôn được gọi


    // loai 2 useEffect có sử dụng emty depencies
    // bước 1: component render add jsx vào dom
    // bước 2: gọi callback function trong useEffect


    // loại 3 : useEffect có sử dụng depencies
    // bước 1: component render add jsx vào dom
    // bước 2: gọi callback function trong useEffect
    // khi nó nhận thấy denpencies truyền vào mà thay đổi thì thì callback sẽ được chạy lại
    useEffect(() => {
        (async () => {
            let response = await api.getPostAll()
            console.log(response);
            // let data = await response.json()
            setListPost(response.data)
        })()
        // kể từ lần re-render 2 thì hàm cleanup func sẽ được gọi trước callback
        // return () => { // clearUp function
        //     clearTimeout(2)
        //     // lúc component chết đi thì nó sẽ thực thi logic 
        // }
        return () => {

        }
    }, [type])

    // useEffect(() => {
    //     let id = setInterval(() => {
    //         const now = new Date();
    //         const hours = `0${now.getHours()}`.slice(-2); const minutes = `0${now.getMinutes()}`.slice(-2); const seconds = `0${now.getSeconds()}`.slice(-2);
    //         const currentTimeString = `${hours}:${minutes}:${seconds}`;

    //         setTimeString(currentTimeString);
    //     }, 1000);

    //     return () => {
    //         clearInterval(id);
    //     };

    // }, [])
    const hanldeOnchage = (e) => {
        setInput(e.target.value) // nhap giu lieu tu ban phim truyen vao state input
    }

    const handleOnClick = (item) => {
        setType(item)
    }
    return (
        <div>
            <input type="text" value={input} onChange={(e) => hanldeOnchage(e)} />

            {
                array.map((item, index) => {
                    return <button key={index} onClick={() => handleOnClick(item)}>
                        {item}
                    </button>
                })
            }
            {/* <div style={{ fontSize: '48px' }}>{timeString}</div> */}
            <ul>
                {listPost && listPost.map((item, index) => {
                    return <li key={index}>{item.title || item.name}</li>
                })}
            </ul>
        </div>
    );
}

export default UseEffectDomeEvent;