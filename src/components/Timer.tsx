// arquivo: Timer.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Label from "./Label";

const Timer = () => {
  const [timerConfig, setTimerConfig] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleTimerConfig = () => {
    setTimerConfig(!timerConfig);
  };

  const resetButton = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setSeconds(0);
    setMinutes(0);
  };

  const stopButton = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const startButton = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  useEffect(() => {
    if (seconds < 0) {
      setSeconds(59);
      setMinutes((prevMinutes) => prevMinutes - 1);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      setIsRunning(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  }, [minutes, seconds]);

  return (
    <div className="w-full flex-1 flex items-center justify-center">
      {timerConfig ? (
        <div
          className="max-w-full  flex items-center justify-center
          text-[7rem] sm:text-[14rem] md:text-[16rem] lg:text-[22rem] xl:text-[20rem]"
          onClick={handleTimerConfig}
        >
          {minutes}:{seconds.toString().padStart(2, "0")}
        </div>
      ) : (
        <div className="w-full">
          <div className="w-full flex flex-col items-center justify-center gap-10 py-10">
            <Label title="minutes" state={minutes} setState={setMinutes} />
            <Label title="seconds" state={seconds} setState={setSeconds} />
          </div>
          <div className="flex flex-wrap  w-full items-center sm:justify-evenly justify-center gap-4 text-[1.5rem]">
            <Button text="Fechar" onClick={handleTimerConfig} />
            <Button text="Reset" onClick={resetButton} />
            <Button text="Parar" onClick={stopButton} />
            <Button text="Iniciar" onClick={startButton} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
