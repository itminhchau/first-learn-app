import React, { useEffect, useState } from "react";
import Timer from "../Timer";
import UseEffectDomeEvent from "../UseEffectDomEvent";
import {
  useNavigate,
  redirect,
  useLocation,
  useParams,
  useRoutes,
} from "react-router-dom";

HomePage.propTypes = {};

function HomePage(props) {
  // const navigation = useNavigate()
  // const location = useLocation()
  // const param = useParams()

  // const [show, setShow] = useState(false)
  // const handleOnclick = () => {

  // }
  // console.log("location", location);
  // console.log("param", param);

  // const handleNavigation = () => {

  //     navigation("/timer")

  // }

  const [count, setCount] = useState(() => {
    const total = 12 + 24;
    console.log("total dang tinh lai");
    return total;
  });

  const handleOnclick = () => {
    setCount((prev) => {
      return prev + 1;
    });

    // setCount(count + 1)
  };

  return (
    <div>
      {/* <button onClick={handleNavigation}>navigation</button> */}
      {/* {true && redirect("/timer")} */}
      <button onClick={() => handleOnclick()}>click</button>
      <h1>{count}</h1>
    </div>
  );
}

export default HomePage;

// useEfect : không có depencise
/* 1. render jsx vao dom
    2. callback duoc goi
    3. chay lai khi moi lan component re-render
*/
// useEfect : co denpencies nhung emty
/*
    1. render jsx vao dom
    2. callback duoc goi
    3. khong  chay lai khi moi lan component re-render
*/
// useEffect : co depencies .

/* 
 1. render jsx vao dom 
    2. callback duoc goi
    3. chay lai khi moi lan component re-render ma chinh cai depenci thay doi


*/
