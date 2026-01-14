import { Header } from "@/components/Header";
import { Lineone } from "@/components/Lineone";
import { LineTwo } from "@/components/LineTwo";
import { Third } from "@/components/Third";
import { Fourth } from "@/components/Fourth";
import { Fifth } from "@/components/Fifth";
import { Sixth } from "@/components/Sixth";
import { Seventh } from "@/components/Seventh";
import { Footer } from "@/components/Footer";
import React from "react";

const Home = () => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full  px-4 sm:px-6 md:px-8">
        <Header />
        <Lineone />
        <LineTwo />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
        <Seventh />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
