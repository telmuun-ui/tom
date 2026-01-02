import React from "react";
import { Rubik_Mono_One } from "next/font/google";

const rubik = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
});

export const Header = () => {
  return (
    <header className="w-full flex justify-center pt-6">
      <div className="w-full max-w-[1440px] flex items-center justify-between px-24">
        <div className={`text-3xl ${rubik.className}`}>Telmuun</div>

        <nav className="flex items-center gap-8 text-base text-gray-700">
          <div>About</div>
          <div>Work</div>
          <div>Testimonials</div>
          <div>Contact</div>

          <img src="Icon Button.png" alt="icon" />

          <button className="flex items-center px-5 py-2 bg-black text-white rounded-2xl">
            Download CV
          </button>
        </nav>
      </div>
    </header>
  );
};
