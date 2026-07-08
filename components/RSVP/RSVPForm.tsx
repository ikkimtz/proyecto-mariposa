"use client";

import { useState } from "react";

type RSVPFormProps = {
  options: string[];
};

type RSVPData = {
  name: string;
  attendance: string;
  timestamp: string;
};

export function RSVPForm({ options }: RSVPFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(formData: FormData) {
    const data: RSVPData = {
      name: String(formData.get("name") || "").trim(),
      attendance: String(formData.get("attendance") || ""),
      timestamp: new Date().toISOString()
    };

    console.log("RSVP provisional:", data);
    setSubmitted(true);
  }

  return (
    <section className="panel">
      <p className="kicker">Confirma tu asistencia</p>

      {!submitted ? (
        <form action={handleSubmit} className="mt-5 text-left">
          <label className="mb-2 block font-medium" htmlFor="name">
            Nombre
          </label>
          <input
            className="min-h-[52px] w-full rounded-[18px] border border-[rgba(201,162,39,.30)] bg-[rgba(255,255,255,.82)] px-4 py-3 outline-none focus:border-coral focus:ring-4 focus:ring-coral/10"
            id="name"
            name="name"
            type="text"
            placeholder="Escribe tu nombre"
            autoComplete="name"
            required
          />

          <fieldset className="mt-5 border-0 p-0">
            <legend className="mb-2 font-medium">¿Nos acompañarás?</legend>

            {options.map((option) => (
              <label
                key={option}
                className="my-3 flex min-h-[52px] items-center gap-3 rounded-[18px] border border-[rgba(201,162,39,.20)] bg-white/60 p-4"
              >
                <input type="radio" name="attendance" value={option} required />
                <span>{option}</span>
              </label>
            ))}
          </fieldset>

          <button className="primary-button mt-4 w-full" type="submit">
            Confirmar
          </button>
        </form>
      ) : (
        <div className="py-6 text-center">
          <div className="mx-auto mb-3 h-12 w-14 animate-bounce rounded-full bg-gradient-to-br from-lavender to-coral opacity-80" />
          <h3 className="font-serif text-3xl">Gracias por confirmar</h3>
          <p className="mt-2 text-muted">Jessica & Claudia te esperan.</p>
        </div>
      )}
    </section>
  );
}
