import React from "react";
import { navbarInterface } from "../type";
import home from "../assets/Home.svg";
import add from "../assets/ButtonAdd.svg";
import list from "../assets/List.svg";

export const Navbar: React.FC<navbarInterface> = ({ section }) => {
  return (
    <nav className="fixed w-full bottom-0 bg-[#618264] rounded-t-[2rem] border border-black flex justify-center p-4 pb-0">
      <ul className="flex gap-[10rem] justify-center relative">
        <li className="cursor-pointer" onClick={() => section("home")}>
          <img src={home} alt="home" />
        </li>
        <li
          className="absolute bottom-1/4 cursor-pointer"
          onClick={() => section("add")}>
          <img
            src={add}
            alt=""
            className="bg-[#B0D9B1] rounded-full p-4 border border-black"
          />
        </li>
        <li className="cursor-pointer" onClick={() => section("list")}>
          <img src={list} alt="list" />
        </li>
      </ul>
    </nav>
  );
};
