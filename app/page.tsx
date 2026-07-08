"use client";

import { useState } from "react";
import eventData from "@/data/event.json";
import { Envelope } from "@/components/Envelope/Envelope";
import { Hero } from "@/components/Hero/Hero";
import { Countdown } from "@/components/Countdown/Countdown";
import { EventDetails } from "@/components/EventDetails/EventDetails";
import { RSVPForm } from "@/components/RSVP/RSVPForm";
import { ButterflyField } from "@/components/Decor/ButterflyField";
import { FloralCorners } from "@/components/Decor/FloralCorners";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden px-4">
      <ButterflyField />

      {!isOpen ? (
        <section className="relative mx-auto flex min-h-screen w-full max-w-[520px] flex-col items-center justify-center gap-4 py-10 text-center">
          <FloralCorners />
          <p className="kicker">Tienes una invitación</p>

          <h1 className="grid leading-none">
            <span className="font-serif text-[clamp(2.15rem,10vw,4.1rem)] font-semibold tracking-wide text-[#5B4646]">
              Cumpleaños
            </span>
            <em className="-mt-1 font-script text-[clamp(3.7rem,17vw,6.8rem)] not-italic text-[#B37A7A]">
              Inolvidable
            </em>
          </h1>

          <p className="mb-4 font-serif text-[1.34rem] tracking-[0.08em] text-[#7B6159]">
            Jessica & Claudia
          </p>

          <Envelope onOpen={() => setIsOpen(true)} />

          <button className="primary-button" onClick={() => setIsOpen(true)}>
            🦋 Abrir invitación
          </button>
        </section>
      ) : (
        <section className="mx-auto w-full max-w-[540px] animate-[pageIn_1s_ease_both] py-6 pb-16">
          <Hero event={eventData.event} invitationName={eventData.project.invitationName} />
          <Countdown date={eventData.event.date} time={eventData.event.time} />
          <section className="panel">
            {eventData.event.message.map((line) => (
              <p key={line} className="mx-auto mb-3 max-w-[400px] font-serif text-[1.35rem] leading-snug">
                {line}
              </p>
            ))}
          </section>
          <EventDetails event={eventData.event} location={eventData.location} />
          <RSVPForm options={eventData.rsvp.options} />
        </section>
      )}
    </main>
  );
}
