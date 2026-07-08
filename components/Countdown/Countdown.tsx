"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownProps = {
  date: string;
  time: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(target: Date): TimeLeft | null {
  const diff = target.getTime() - Date.now();

  if (diff <= 0) return null;

  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(totalSeconds / (3600 * 24)),
    hours: Math.floor((totalSeconds % (3600 * 24)) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60
  };
}

export function Countdown({ date, time }: CountdownProps) {
  const target = useMemo(() => new Date(`${date}T${time}:00-06:00`), [date, time]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() => calculateTimeLeft(target));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [target]);

  return (
    <section className="panel">
      <p className="kicker">Faltan</p>

      {timeLeft ? (
        <div className="mt-5 grid grid-cols-4 gap-2">
          <TimeBox value={timeLeft.days} label="días" />
          <TimeBox value={timeLeft.hours} label="horas" />
          <TimeBox value={timeLeft.minutes} label="min" />
          <TimeBox value={timeLeft.seconds} label="seg" />
        </div>
      ) : (
        <p className="mt-5 font-serif text-2xl">¡Hoy es la celebración!</p>
      )}
    </section>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-[20px] border border-[rgba(201,162,39,.12)] bg-gradient-to-b from-[#fff7f7] to-[#fffdfa] px-1 py-4">
      <strong className="block font-serif text-[clamp(1.55rem,7vw,2rem)] text-[#8b6d20]">
        {String(value).padStart(2, "0")}
      </strong>
      <span className="block text-[.7rem] uppercase tracking-[.09em] text-muted">{label}</span>
    </div>
  );
}
