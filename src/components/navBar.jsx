import LogoIcon from "../assets/images/logo.svg";
import HamburgerMenuIcon from "../assets/images/icon-hamburger.svg";
import { useState } from "react";
const NavBar = () => {
  const [hamburgerMenuShow, setHamburgerMenuShow] = useState(false);
  return (
    <div className="flex items-center justify-between sm:p-3">
      <div>
        <img src={LogoIcon} alt="logo" />
      </div>
      <div>
        <img
          src={HamburgerMenuIcon}
          alt="hamburger icon"
          onClick={() => setHamburgerMenuShow(!hamburgerMenuShow)}
        />
      </div>
    </div>
  );
};

export default NavBar;
