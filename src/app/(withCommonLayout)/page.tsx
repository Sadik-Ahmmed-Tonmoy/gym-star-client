"use client";


import { useEffect } from "react";
import StickyScroll from "../../components/ui/StickyScroll/StickyScroll";
import HorizontalScroll from "@/components/ui/HorizontalScroll/HorizontalScroll";
import Footer from "@/components/ui/Footer/Footer";
import { RandomizedTextEffect } from "@/components/ui/text-randomized";
import Card2 from "@/components/ui/ProductCardWithColorAndSize";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 

  return (
    <div>
      <Card2/>
      <Card2/>
      <HorizontalScroll />
      <div className="bg-primary-foreground py-10 rounded-md">
        <h1 className="font-departure text-4xl relative z-10 text-center h-[120px] md:h-auto leading-tight">
          <RandomizedTextEffect text="Production ready code" />
        </h1>
      </div>

      <StickyScroll />
      <Footer />
    </div>
  );
};

export default HomePage;
