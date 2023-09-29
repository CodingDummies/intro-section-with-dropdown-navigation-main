import logo from "../../images/logo.svg";
import Features from "./Features";
import Company from "./Company";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex gap-12 items-center w-[90%] mx-auto">
      <div>
        <img src={logo} alt="Logo" />
      </div>

      <div className="flex justify-between w-full items-center">
        <div className="flex gap-8">
          <div className="relative">
            <Features />
          </div>
          <div className="relative">
            <Company />
          </div>
          <a href="#!" className="text-[#696969] hover:text-[#141414]">
            Careers
          </a>
          <a href="#!" className="text-[#696969] hover:text-[#141414]">
            About
          </a>
        </div>

        <div className="flex gap-12">
          <button className="text-[#696969] hover:text-[#141414]">Login</button>
          <button className="border-2 py-2 px-5 rounded-xl border-[#696969] hover:border-[#141414] text-[#696969] hover:text-[#141414]">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
