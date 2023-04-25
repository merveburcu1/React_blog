import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { AuthContext } from "../context/authContext";
import Logo from "../images/logo.png";
import BasicModal from "./modal";

const Header = () => {
  // const { currentUser, logout } = useContext(AuthContext);

  const cat=useLocation().search


  const [open,setOpen]=useState(false)

  const handleOpen=()=>{
    setOpen(true)
  }

  const handleClose=()=>{
    setOpen(false)
  }

  return (
    <div className="navbar" >
      <div className="container" >
        <div className="logo">
          <Link to="/blog">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/blog/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/blog/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/blog/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/blog/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/blog/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/blog/?cat=food">
            <h6>FOOD</h6>
          </Link>
          {/* <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )} */}
          <span className="write">
            <Link className="link" onClick={handleOpen}>
              Write
            </Link>
          </span>
        </div>
      </div>
      <BasicModal open={open} handleClose={handleClose}/>
    </div>
  );
};

export default Header;