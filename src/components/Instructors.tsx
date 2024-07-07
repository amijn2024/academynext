
"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'সানাউল হক',
      designation: 'চা, বাবুর্চি, ভাজা বিশেষজ্ঞ',
      image:
        'https://md-sanaul-haque-shanto.github.io/assets/images/profile.jpg',
    },
    {
      id: 2,
      name: 'সানাউল হক',
      designation: 'চা, বাবুর্চি, ভাজা বিশেষজ্ঞ',
      image:
        'https://md-sanaul-haque-shanto.github.io/assets/images/profile.jpg',
    },
    {
      id: 3,
      name: 'সানাউল হক',
      designation: 'চা, বাবুর্চি, ভাজা বিশেষজ্ঞ',
      image:
        'https://md-sanaul-haque-shanto.github.io/assets/images/profile.jpg',
    },
    {
      id: 4,
      name: 'সানাউল হক',
      designation: 'চা, বাবুর্চি, ভাজা বিশেষজ্ঞ',
      image:
        'https://md-sanaul-haque-shanto.github.io/assets/images/profile.jpg',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">আমাদের খাজানা খনিক</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">প্রতিভাবান পেশাদারদের আবিষ্কার করুন যারা আপনার যাত্রাকে গাইড করবে</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors