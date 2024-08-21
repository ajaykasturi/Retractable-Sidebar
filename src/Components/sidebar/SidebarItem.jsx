import React, { useContext } from "react";
import { SidebarContext } from "./Sidebar";

function SidebarItem({ icon, text, active, alert }) {
  const { isExpanded } = useContext(SidebarContext);
  return (
    <li
      className={`group relative flex items-center px-3 py-2 my-1 font-medium rounded-md cursor-pointer transition-colors  ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}

      <span
        className={`overflow-hidden transition-all ${
          isExpanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 bg-indigo-400 rounded-full ${
            isExpanded ? "" : "top-2"
          }`}
        />
      )}
      {!isExpanded && (
        <div
          className={`absolute left-full px-2 py-1 ml-6 rounded-md bg-indigo-100 text-indigo-800 invisible text-sm opacity-20 transition-all -translate-x-3 group-hover:visible group-hover:opacity-100 group-hover:trans`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

export default SidebarItem;
