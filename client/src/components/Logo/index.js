import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import mobileLogo from "../../assets/images/mobile-logo.png";
import { GlobalState } from "../../GlobalState";

const Logo = () => {
  const globalState = useContext(GlobalState);

  const [mobileView] = globalState.userAPI.isMobile;
  console.log(mobileView, "-----------------------------");
  return (
    <>
      <Link to="/">
        <img src={mobileView ? mobileLogo : logo} alt="logo" />
      </Link>
    </>
  );
};

export default Logo;
