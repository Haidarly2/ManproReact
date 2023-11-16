import React from "react";
import { homeCardInterface } from "../../../type";
import eclipse from "../../../assets/Ellipse 8.svg";
import eclipse2 from "../../../assets/Ellipse8.svg";
import { ToggleSwitch } from "../../button/ToggleButton";

export const HomeCard: React.FC<homeCardInterface> = ({
  id,
  name,
  status,
  TimerOff,
  TimerOn,
  rak,
}) => {
  return (
    <section className="flex flex-col w-full h-full justify-start border border-gray-400 bg-green-200 gap-16 p-10 laptop2:p-8">
      <div className="flex justify-around gap-[40%] laptop3:gap-[30%]" key={id}>
        <div className="flex flex-col">
          <h1 className="font-preahvihear text-[2.25rem]">{name}</h1>
          <p className="font-preahvihear text-[1rem]">ID{id}</p>
          <span className="flex gap-2 font-poppins text-xl">
            <img src={status === "Stop" ? eclipse2 : eclipse} alt="eclipse" />
            {status}
          </span>
        </div>
        <div className="flex justify-center gap-16">
          <div className="textTimer">
            <p className="text-2xl">Timer set Off</p>
            <p className="text-xl">{TimerOff} Menit</p>
          </div>
          <div className="textTimer">
            <p className="text-2xl">Timer set On</p>
            <p className="text-xl">{TimerOn} Menit</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 justify-center items-center">
        {rak.map((rak) => (
          <div className="flex flex-col gap-6 items-center" key={rak.idRak}>
            <ToggleSwitch />
            <div className="grid grid-rows-5 grid-cols-1 items-center">
              {rak.bak.map((bak) => (
                <div
                  className="border border-gray-300 bg-[#A0C49D] w-[9rem] p-1"
                  key={bak.idBak}>
                  <p className="font-preahvihear text-sm">
                    id {bak.idBak}
                  </p>
                  <p className="font-preahvihear text-xl text-center">
                    {bak.suhu} ℃
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
