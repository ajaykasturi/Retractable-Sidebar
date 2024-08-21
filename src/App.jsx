import React from "react";
import Sidebar from "./Components/sidebar/Sidebar";
import SidebarItem from "./Components/sidebar/SidebarItem";
import { LayoutDashboard } from "lucide-react";
import { Users } from "lucide-react";

function App() {
  return (
    <div className="">
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard />} text={"Dashboard"} alert />
        <SidebarItem icon={<Users />} text={"Users"} />
        <SidebarItem icon={<Users />} text={"Users"} active />
        <SidebarItem icon={<Users />} text={"Users"} />
        <SidebarItem icon={<Users />} text={"Users"} />
        <SidebarItem icon={<Users />} text={"Users"} />
      </Sidebar>
    </div>
  );
}

export default App;
