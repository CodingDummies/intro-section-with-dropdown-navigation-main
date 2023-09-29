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
        className="flex gap-4 items-center text-[#696969]"
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
    <ul className={`pl-6 pt-4 ${!openFeatures && "hidden"}`}>
      <li className="flex mb-6 gap-4 items-center text-[#696969]">
        <img src={todo} alt="Todo List" />
        <a href="#!">Todo List</a>
      </li>
      <li className="flex mb-6 gap-4 items-center text-[#696969]">
        <img src={calendar} alt="Calendar" />
        <a href="#!">Calendar</a>
      </li>
      <li className="flex mb-6 gap-4 items-center text-[#696969]">
        <img src={reminders} alt="Reminders" />
        <a href="#!">Reminders</a>
      </li>
      <li className="flex mb-6 gap-4 items-center text-[#696969]">
        <img src={planning} alt="Planning" />
        <a href="#!">Planning</a>
      </li>
    </ul>
  );
};

export default Features;
