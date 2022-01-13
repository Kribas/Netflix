import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import netflixLogo from './logo/netflix.png';
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate('/')}
          className="nav__logo"
          src={netflixLogo}
          alt="Netflix Logo"
        />
        <img
          onClick={() => navigate('/profile')}
          className="nav__avatar"
          src="https://avatars.githubusercontent.com/u/32868850?v=4"
          alt="Nav Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
