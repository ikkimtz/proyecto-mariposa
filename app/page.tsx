"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import eventData from "@/data/event.json";
import { Envelope } from "@/components/Envelope/Envelope";
import { Hero } from "@/components/Hero/Hero";
import { Countdown } from "@/components/Countdown/Countdown";
import { EventDetails } from "@/components/EventDetails/EventDetails";
import { RSVPForm } from "@/components/RSVP/RSVPForm";
import { ButterflyField } from "@/components/Decor/ButterflyField";
import { FloralCorners } from "@/components/Decor/FloralCorners";
export default function Home(){
 const [isOpen,setIsOpen]=useState(false); const [isOpening,setIsOpening]=useState(false);
 function startOpening(){ if(isOpening||isOpen)return; setIsOpening(true); window.setTimeout(()=>setIsOpen(true),2700); }
 return <main className="relative min-h-screen overflow-hidden px-4"><ButterflyField/>
 <AnimatePresence mode="wait">{!isOpen?
 <motion.section key="opening" className="relative mx-auto flex min-h-screen w-full max-w-[540px] flex-col items-center justify-center gap-4 py-10 text-center" animate={{scale:isOpening?1.045:1}} exit={{opacity:0,scale:1.06,filter:"blur(6px)"}} transition={{duration:.8,ease:"easeInOut"}}>
  <FloralCorners/>
  <motion.p className="kicker" animate={{opacity:isOpening?0:1,y:isOpening?-8:0}}>Tienes una invitación</motion.p>
  <motion.h1 className="grid leading-none" animate={{opacity:isOpening?0:1,y:isOpening?-8:0}}>
   <span className="font-serif text-[clamp(2.15rem,10vw,4.1rem)] font-semibold tracking-wide text-[#5B4646]">Cumpleaños</span>
   <em className="-mt-1 font-script text-[clamp(3.7rem,17vw,6.8rem)] not-italic text-[#B37A7A]">Inolvidable</em>
  </motion.h1>
  <motion.p className="mb-2 font-serif text-[1.34rem] tracking-[.08em] text-[#7B6159]" animate={{opacity:isOpening?0:1,y:isOpening?-8:0}}>Jessica & Claudia</motion.p>
  <Envelope isOpening={isOpening} onOpen={startOpening}/>
  <motion.button className="primary-button mt-2 animate-[buttonBreath_3.2s_ease-in-out_infinite]" onClick={startOpening} animate={{opacity:isOpening?0:1,scale:isOpening?.92:1,y:isOpening?12:0}}>🦋 Abrir invitación</motion.button>
 </motion.section>:
 <motion.section key="invitation" className="mx-auto w-full max-w-[540px] py-6 pb-16" initial={{opacity:0,y:22,scale:.985}} animate={{opacity:1,y:0,scale:1}} transition={{duration:.9,ease:"easeOut"}}>
  <Hero event={eventData.event} invitationName={eventData.project.invitationName}/><Countdown date={eventData.event.date} time={eventData.event.time}/>
  <section className="panel">{eventData.event.message.map((line)=><p key={line} className="mx-auto mb-3 max-w-[400px] font-serif text-[1.35rem] leading-snug">{line}</p>)}</section>
  <EventDetails event={eventData.event} location={eventData.location}/><RSVPForm options={eventData.rsvp.options}/>
 </motion.section>}</AnimatePresence></main>;
}
