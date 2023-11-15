import React, { useState } from "react";
import { Navbar } from "../../lib/components/Navbar";
import { Home } from "../../lib/components/home/Home";

export const Dashboard: React.FC = () => {
  const [activeNavbar, setActiveNavbar] = useState("home");

  const handleSetActiveNavbar = (section: string) => {
    setActiveNavbar(section);
  };

  return (
    <div className="w-full h-[100vh] overflow-hidden bg-[#F7FFE5] flex justify-center align-middle">
      <Navbar section={handleSetActiveNavbar} />
      {activeNavbar === "home" && <Home />}
    </div>
  );
};
