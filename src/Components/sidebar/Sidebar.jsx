import React, { useState, createContext } from "react";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
export const SidebarContext = createContext();
function Sidebar({ children }) {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <aside className="h-screen">
      <nav className="h-full w-fit flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={
              "https://neuspaarx.com/wp-content/uploads/2023/01/Website-HeaderFooter-Logo-New-768x165.png"
            }
            className={`overflow-hidden transition-all ${
              isExpanded ? "w-32" : "w-0"
            }`}
          />
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {isExpanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{ isExpanded }}>
          <ul className="flex-1 px-3 ">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3 items-center">
          <div className="w-10 h-10 rounded-full bg-blue-300 flex justify-center items-center font-semibold shrink-0">
            JD
          </div>
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              isExpanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Michael Coel</h4>
              <span className="text-xs text-gray-600">michiel@gmail.com</span>
            </div>
            <EllipsisVertical size={24} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
