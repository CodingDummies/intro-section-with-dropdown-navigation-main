import todo from "../../images/icon-todo.svg";
import calendar from "../../images/icon-calendar.svg";
import reminders from "../../images/icon-reminders.svg";
import planning from "../../images/icon-planning.svg";
import arrowUp from "../../images/icon-arrow-up.svg";
import arrowDown from "../../images/icon-arrow-down.svg";
import { useState } from "react";

const Features = () => {
  const [openFeatures, setOpenFeatures] = useState(false);

  return (
    <>
      <button
        className={`flex items-center gap-2 text-[#696969] hover:text-[#141414]`}
        onClick={() => setOpenFeatures(!openFeatures)}
      >
        Features <img src={openFeatures ? arrowUp : arrowDown} alt="Arrow" />
      </button>
      <FeaturesList openFeatures={openFeatures} />
    </>
  );
};

const FeaturesList = ({ openFeatures }) => {
  return (
    <ul className={`features ${openFeatures ? "active" : ""}`}>
      <li className="mb-2 flex items-center gap-4">
        <div>
          <img src={todo} alt="Todo List" />
        </div>
        <a
          href="#!"
          className="text-[1rem] text-[#696969] hover:text-[#141414]"
        >
          Todo List
        </a>
      </li>
      <li className="mb-2 flex items-center gap-4">
        <div>
          <img src={calendar} alt="Calendar" />
        </div>
        <a
          href="#!"
          className="text-[1rem] text-[#696969] hover:text-[#141414]"
        >
          Calendar
        </a>
      </li>
      <li className="mb-2 flex items-center gap-4">
        <div>
          <img src={reminders} alt="Reminders" />
        </div>
        <a
          href="#!"
          className="text-[1rem] text-[#696969] hover:text-[#141414]"
        >
          Reminders
        </a>
      </li>
      <li className="flex items-center gap-4">
        <div>
          <img src={planning} alt="Planning" />
        </div>
        <a
          href="#!"
          className="text-[1rem] text-[#696969] hover:text-[#141414]"
        >
          Planning
        </a>
      </li>
    </ul>
  );
};

export default Features;
