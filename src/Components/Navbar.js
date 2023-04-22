import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode === "light" ? "black" : "white"
      } bg-${props.mode === "light" ? "white" : "black"}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" >
          {props.title}
        </a>
        {/* <Link className="navbar-brand" to="/" >
          {props.title}
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-chrefontrols="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            {/* <Link
                className="nav-link active" aria-current="page" to="/"
              >
                Home
              </Link> */}
              <a
                className="nav-link active" aria-current="page" hre="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link
                className="nav-link active" aria-current="page" to="/about">
              About
              </Link> */}
              <a
                className="nav-link active" aria-current="page" href="#">
              About
              </a>
            </li>
           
           
            
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "black" : "white"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Enable darkmode
            </label>
          </div>
          {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = { title: PropTypes.string };
Navbar.defalutProps = {
  title: "Set title here",
};
export default Navbar;
