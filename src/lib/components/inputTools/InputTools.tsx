import React, { useState } from "react";
import { navbarInterface } from "../../type";

export const InputTools: React.FC<navbarInterface> = ({ section }) => {
  const [alat, setAlat] = useState("");
  const [idAlat, setIdAlat] = useState(0);
  const [timerOn, setTimerOn] = useState(0);
  const [timerOff, setTimerOff] = useState(0);

  const handleAlatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlat(event.target.value);
  };

  const handleIdAlatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdAlat(parseInt(event.target.value));
  };

  const handleTimerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimerOn(parseInt(event.target.value));
  };

  const handleTimerOffChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimerOff(parseInt(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(alat, idAlat, timerOn, timerOff);
  };

  return (
    <section
      className="flex flex-col justify-center items-stretch rounded-lg
    border border-[#8AB560] bg-[#F7FFE5] w-[70%] h-fit px-24 py-10 gap-10 -mt-[5%] laptop2:-mt-[10%]">
      <h1 className="font-preahvihear text-2xl text-center">Tambah Alat</h1>
      <form
        className="flex flex-col justify-center gap-20"
        onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-x-20 gap-y-6 justify-center items-center">
          <div className="input-container">
            <label htmlFor="alat">Nama Alat</label>
            <input
              type="text"
              name="alat"
              id="alat"
              className="input"
              value={alat}
              onChange={handleAlatChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="idAlat">Id Alat</label>
            <input
              type="number"
              name="idAlat"
              id="idAlat"
              className="input"
              value={idAlat}
              onChange={handleIdAlatChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="timerOn">Set Timer Nyala</label>
            <input
              type="number"
              name="timerOn"
              id="timerOn"
              className="input"
              value={timerOn}
              onChange={handleTimerOnChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="timerOff">Set Timer Mati</label>
            <input
              type="number"
              name="timerOff"
              id="timerOff"
              className="input"
              value={timerOff}
              onChange={handleTimerOffChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="rak" className="-mb-2">
              Set Banyak Rak
            </label>
            <div className="radio-container">
              <span className="input-radio">
                <input type="radio" name="rak" id="rak1" />1
              </span>
              <span className="input-radio">
                <input type="radio" name="rak" id="rak2" />2
              </span>
              <span className="input-radio">
                <input type="radio" name="rak" id="rak3" />3
              </span>
              <span className="input-radio">
                <input type="radio" name="rak" id="rak4" />4
              </span>
              <span className="input-radio">
                <input type="radio" name="rak" id="rak5" />5
              </span>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="bak" className="-mb-2">
              Set Banyak Bak per Rak
            </label>
            <div className="radio-container">
              <span className="input-radio">
                <input type="radio" name="bak" id="bak1" />1
              </span>
              <span className="input-radio">
                <input type="radio" name="bak" id="bak2" />2
              </span>
              <span className="input-radio">
                <input type="radio" name="bak" id="bak3" />3
              </span>
              <span className="input-radio">
                <input type="radio" name="bak" id="bak4" />4
              </span>
              <span className="input-radio">
                <input type="radio" name="bak" id="bak5" />5
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#A0C49D] border border-black border-opacity-30 rounded-[0.625rem] px-16 py-2 font-preahvihear text-lg"
            onClick={() => section("home")}>
            Tambah
          </button>
        </div>
      </form>
    </section>
  );
};
