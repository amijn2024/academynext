"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

 function infiniteCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

export default infiniteCards

const testimonials = [
    {
      quote:
        "মুই ধোন অন্বেষণ কইরাই চায়ের দোকান দিছি",
      name: "কালাম মামা",
      title: "A Tale of a cha wayala.",
    },
    {
      quote:
        "বেকারদের খাজানা থেকে ধোন অন্বেষণ কোরেই আজ আমি ভাজা ওয়ালআ",
      name: "সালাম মামা",
      title: "A Tale of a Bhaza wayala.",
    },
    {
      quote:
        "মুই ধোন অন্বেষণ কইরাই চায়ের দোকান দিছি",
      name: "কালাম মামা",
      title: "A Tale of a cha wayala.",
    },
    {
      quote:
        "বেকারদের খাজানা থেকে ধোন অন্বেষণ কোরেই আজ আমি ভাজা ওয়ালআ",
      name: "সালাম মামা",
      title: "A Tale of a Bhaza wayala.",
    },
    {
      quote:
        "মুই ধোন অন্বেষণ কইরাই চায়ের দোকান দিছি",
      name: "কালাম মামা",
      title: "A Tale of a cha wayala.",
    },
    {
      quote:
        "বেকারদের খাজানা থেকে ধোন অন্বেষণ কোরেই আজ আমি ভাজা ওয়ালআ",
      name: "সালাম মামা",
      title: "A Tale of a Bhaza wayala.",
    },
  ];