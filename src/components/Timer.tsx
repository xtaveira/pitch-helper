"use client";

import React, { useState } from "react";
import Button from "./Button";
import Label from "./Label";

const Timer = () => {
  const [timerConfig, setTimerConfig] = useState(true);
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("00");

  const handleTimerConfig = () => {
    setTimerConfig(!timerConfig);
  };

  const resetButton = () => {};
  const stopButton = () => {};
  const startButton = () => {};

  return (
    <div className="w-full flex-1 flex items-center justify-center">
      {timerConfig ? (
        <div
          className="max-w-full  flex items-center justify-center
          text-[7rem] sm:text-[14rem] md:text-[16rem] lg:text-[22rem] xl:text-[20rem]"
          onClick={handleTimerConfig}
        >
          {minutes}:{seconds}
        </div>
      ) : (
        <div className="w-full">
          <div className="w-full bg-red-500 flex flex-col items-center justify-center gap-10 py-10">
            <Label title="minutes" state={minutes} setState={setMinutes} />
            <Label title="seconds" state={seconds} setState={setSeconds} />
          </div>
          <div className="flex flex-wrap  w-full items-center sm:justify-evenly justify-center gap-4 text-[1.5rem]">
            <Button text="Fechar" onClick={handleTimerConfig} />
            <Button text="Reset" onClick={resetButton} />
            <Button text="Reset" onClick={resetButton} />
            <Button text="Iniciar" onClick={handleTimerConfig} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
