import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

ReUseEffect.propTypes = {};

// useEffect : nó là một cái hook của reacthook. và nó để sử lý side effect
// side effect: gọi api, xử lý Dom, setimeOut, setInterval, sub
// useEffect : gồm hai loại clean up (hàm dọn) : cần clearn up (etimeOut, setInterval, sub) , không cần , clearn up(gọi api, xử lý Dom)
// useEffect: thì nó có 3 loại : 1 là không có depencies, 2 là có depencies nhưng empty(rỗng), 3 là có depencies
let id = 0;

function ReUseEffect(props) {
  //   const [job, setJob] = useState();

  //   const [data, setData] = useState();

  // loai 1: khong co depenciese : hàm useEffect sẽ dược gọi liên tục khi có bất kì state nào
  // thay đổi dẫn đến component re-render
  // bước 1: component render : thì nó sẽ chạy từ trên xuống dươi tuy nhiên nó sẽ không chạy useEffect trước
  // mà nó sẽ render jsx vào dom trước .
  // bước 2: sẽ chạy callback trong useEffect
  // bước 3: khi component re-render : thì nó cũng chạy lại bước 1 trước
  // bước 4: chạy hàm clearn up trước nếu có . sau đó chạy callback

  //   useEffect(() => {
  //     console.log("useEffect đã gọi lại");

  //     // ham clearn up : không được gọi khi lần đầu tiên render
  //     return () => {};
  //   });
  // it xử dụng hoặc không xử dụng

  // loại 2: có depencies như nó empty (loại này thường dùng đễ gọi api)
  // nếu depencies rỗng thì nó chỉ gọi đúng một lần tại lúc render đầu tiên

  //   useEffect(() => {
  //     console.log("da chay trong useEffect");

  //     setTimeout(() => {
  //       setData({
  //         name: "tra",
  //         age: 20,
  //       });
  //     }, 2000);

  //     // ham clearn up
  //   }, []);

  // loại 3: có depencies và có biến truyền vào depencies
  // js nang cao : closure
  //   const [time, setTime] = useState(0);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       // time = 0;
  //       setTime(time + 1);
  //     }, 1000);

  //     // ham clearn up
  //     return () => {
  //       clearInterval(id);
  //     };
  //   }, [time]);

  //   const handleOffClock = () => {
  //     clearInterval(id);
  //   };

  // ví dụ useEffect sử dụng timmer và hàm clearn up
  // js nâng cao : closure (hàm đóng) : là một hàm được gọi trong một hàm khác và nó sử dụng biến ngoại phạm vi
  //   const [count, setCount] = useState(60);

  // useEffect(() => {
  //     // count = 60

  //     let id = setTimeout(() => {
  //         setCount(count - 1)
  //         console.log("dang chay setinterval");
  //     }, 1000);
  //     //

  //     return () => {
  //         clearTimeout(id)
  //     }

  // }, [count])

  //   const handleOnchange = (e) => {
  //     setJob(e.target.value);
  //   };
  //   console.log("truoc khi useEffect chạy");

  // console.log(data);

  const [listPost, setListPost] = useState([]);

  useEffect(() => {
    async function fechApi() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setListPost(data);
      console.log("check data api", data);
    }
    fechApi();
  }, []);

  return (
    <div>
      {/* <input type="text" value={job} onChange={(e) => handleOnchange(e)} />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <h1>Time: {time}</h1>
      <button onClick={handleOffClock}>stop clock</button> */}
      <div>
        <ul>
          {listPost &&
            listPost.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default ReUseEffect;
