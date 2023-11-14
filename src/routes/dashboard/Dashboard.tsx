import React, { useState } from "react";
import { Navbar } from "../../lib/components/Navbar";

export const Dashboard: React.FC = () => {
  const [activeNavbar, setActiveNavbar] = useState("home");

  const handleSetActiveNavbar = (section: string) => {
    setActiveNavbar(section);
  };

  return (
    <div className="w-full h-[100vh] overflow-hidden bg-[#F7FFE5] flex justify-center align-middle">
      <Navbar section={handleSetActiveNavbar} />
    </div>
  );
};
