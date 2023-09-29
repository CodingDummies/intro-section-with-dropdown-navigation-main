import logo from "../../images/logo.svg";
import menu from "../../images/icon-menu.svg";
import closeMenu from "../../images/icon-close-menu.svg";
import { useState } from "react";
import Features from "./Features";
import Company from "./Company";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="hidden max-lg:flex justify-between items-center w-[90%] mx-auto">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <button onClick={handleToggle}>
          <img src={menu} alt="Menu" />
        </button>
      </div>

      <nav className={`open-nav ${openMenu && "active"}`}>
        <div className="relative h-24">
          <button className="absolute right-6 top-4" onClick={handleToggle}>
            <img src={closeMenu} alt="Close Menu" />
          </button>
        </div>

        <ul className="pl-8 mb-12">
          <li className="mb-8">
            <Features />
          </li>
          <li className="mb-8">
            <Company />
          </li>
          <li className="mb-8">
            <a href="#!" className="text-[#696969]">
              Careers
            </a>
          </li>
          <li>
            <a href="#!" className="text-[#696969]">
              About
            </a>
          </li>
        </ul>

        <div className="flex flex-col px-8 gap-4">
          <button className="text-[#696969]">Login</button>
          <button className="border-2 py-2 px-5 rounded-xl  border-[#696969] text-[#696969]">
            Register
          </button>
        </div>
      </nav>
      <div
        onClick={handleToggle}
        className={`wrapper ${openMenu && "active"}`}
      ></div>
    </nav>
  );
};

export default MobileNav;
