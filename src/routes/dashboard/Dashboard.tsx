import React, { useState } from "react";
import { Navbar } from "../../lib/components/Navbar";
import { Home } from "../../lib/components/home/Home";
import { InputTools } from "../../lib/components/inputTools/InputTools";

export const Dashboard: React.FC = () => {
  const [activeNavbar, setActiveNavbar] = useState("home");

  const handleSetActiveNavbar = (section: string): void => {
    setActiveNavbar(section);
  };

  return (
    <div className="w-full h-[100vh] overflow-hidden bg-[#F7FFE5] flex justify-center items-center">
      <Navbar section={handleSetActiveNavbar} />
      {activeNavbar === "home" && <Home />}
      {activeNavbar === "add" && <InputTools section={handleSetActiveNavbar}/>}
    </div>
  );
};
