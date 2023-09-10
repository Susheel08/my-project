import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="lg:flex lg:flex-row lg:justify-center lg:text-center text-white bg-[#120569] gap-[550px] p-5">
      <span className="font-bold text-2xl">Foundation</span>

      <ul className="flex justify-between gap-3">
        <li>Home</li>
        <li>
          Dropdwon <ArrowDropDownIcon />
        </li>
        <li>Services</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
