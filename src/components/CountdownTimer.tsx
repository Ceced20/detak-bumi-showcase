
import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date
    const target = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      // Get current time
      const now = new Date().getTime();
      
      // Calculate the time difference
      const difference = target - now;
      
      // Check if the target date has passed
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
      
      // Calculate days, hours, minutes, and seconds
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    // Set initial time
    setTimeLeft(calculateTimeLeft());
    
    // Update the countdown every second
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    // Clear interval on component unmount
    return () => clearInterval(timerId);
  }, [targetDate]);

  // Format numbers to always have two digits
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="countdown-item">
        <div className="text-4xl font-bold" id="days">{formatNumber(timeLeft.days)}</div>
        <div className="text-sm">Days</div>
      </div>
      <div className="countdown-item">
        <div className="text-4xl font-bold" id="hours">{formatNumber(timeLeft.hours)}</div>
        <div className="text-sm">Hours</div>
      </div>
      <div className="countdown-item">
        <div className="text-4xl font-bold" id="minutes">{formatNumber(timeLeft.minutes)}</div>
        <div className="text-sm">Minutes</div>
      </div>
      <div className="countdown-item">
        <div className="text-4xl font-bold" id="seconds">{formatNumber(timeLeft.seconds)}</div>
        <div className="text-sm">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
