import arrowUp from "../../images/icon-arrow-up.svg";
import arrowDown from "../../images/icon-arrow-down.svg";
import { useState } from "react";

const Company = () => {
  const [openCompany, setOpenCompany] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-2 text-[#696969]"
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
    <ul className={`pl-6 pt-4 ${!openCompany && "hidden"}`}>
      <li className="mb-6 text-[#696969]">
        <a href="#!">History</a>
      </li>
      <li className="mb-6 text-[#696969]">
        <a href="">Our Team</a>
      </li>
      <li className="mb-6 text-[#696969]">
        <a href="">Blog</a>
      </li>
    </ul>
  );
};

export default Company;
