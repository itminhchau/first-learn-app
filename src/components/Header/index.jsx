import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";

Header.propTypes = {};

function Header(props) {
  return (
    <div>
      <div className="topnav">
        <Link className="active" to="/" >
          Home
        </Link>
        <Link to="/todo">ToDo</Link>
        <Link to="/lucky-wheel">Lucky Wheel</Link>
        <Link to="#about">About</Link>
        <Link to="/useEffect">UseEffect</Link>
        <Link to="/timer">Timer</Link>
        <Link to="/useRef">useRef</Link>
        <Link to="/useReducer">UseReducer</Link>
        <Link to="/reuseeffect">ReUseEffect</Link>
        <NavLink className={({ isActive, isPending }) => isActive ? "active" : ""} to="/useMemo">useMemo</NavLink>
      </div>
    </div>
  );
}

export default Header;
