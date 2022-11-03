import React from "react";

export const NavBar = () => {
  return (
    <ul className="flex">
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">
          Active
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">
          Link
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">
          Link
        </a>
      </li>
      <li className="mr-6">
        <a className="cursor-not-allowed text-gray-400" href="#">
          Disabled
        </a>
      </li>
    </ul>
  );
};
