import arrowUp from "../../images/icon-arrow-up.svg";
import arrowDown from "../../images/icon-arrow-down.svg";
import { useState } from "react";

const Company = () => {
  const [openCompany, setOpenCompany] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-2 text-[#696969] hover:text-[#141414]"
        onClick={() => setOpenCompany(!openCompany)}
      >
        Company <img src={openCompany ? arrowUp : arrowDown} alt="Arrow" />
      </button>
      <CompanyList openCompany={openCompany} />
    </>
  );
};

const CompanyList = ({ openCompany }) => {
  return (
    <ul className={`company ${openCompany ? "active" : ""}`}>
      <li className="mb-1">
        <a
          href="#!"
          className="text-[#696969] hover:text-[#141414] text-[1rem]"
        >
          History
        </a>
      </li>
      <li className="mb-1">
        <a
          href="#!"
          className="text-[#696969] hover:text-[#141414] text-[1rem]"
        >
          Our Team
        </a>
      </li>
      <li>
        <a
          href="#!"
          className="text-[#696969] hover:text-[#141414] text-[1rem]"
        >
          Blog
        </a>
      </li>
    </ul>
  );
};

export default Company;
