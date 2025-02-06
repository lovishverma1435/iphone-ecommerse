import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-black flex gap-9  " style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>
      <div className="">
      <h2 className="font-p font-medium text-xs">Days</h2>
      <span className=" font-i font-bold text-[32px]">{timeLeft.days} </span>
      </div>
      <div className="">
      <h2 className="font-p font-medium text-xs">Hours</h2>
      <span className=" font-i font-bold text-[32px]">{timeLeft.hours} </span>
      </div>
      <div className="">
      <h2 className="font-p font-medium text-xs">Minutes</h2>
      <span className=" font-i font-bold text-[32px]">{timeLeft.minutes} </span>
      </div>
      <div className="">
      <h2 className="font-p font-medium text-xs">Seconds</h2>
      <span className=" font-i font-bold text-[32px]">{timeLeft.seconds}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
