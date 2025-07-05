import React from "react";
import { BsCircleFill, BsHourglassSplit } from "react-icons/bs";

const CountdownTimer = ({ endingAt }) => {
  const [timeLeft, setTimeLeft] = React.useState("");

  React.useEffect(() => {
    const end = new Date(endingAt).getTime();

    const updateTimer = () => {
      const now = Date.now();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft("00h 00m 00s");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const paddedHours = hours.toString().padStart(2, "0");
      const paddedMinutes = minutes.toString().padStart(2, "0");
      const paddedSeconds = seconds.toString().padStart(2, "0");

      setTimeLeft(`${paddedHours}h ${paddedMinutes}m ${paddedSeconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [endingAt]);

  return (
    <div className="flex items-center gap-1">
      <BsHourglassSplit className="text-gray-400" />
      <span>{timeLeft}</span>
    </div>
  );
};

export default CountdownTimer;