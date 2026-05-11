import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Stats from "@/components/sections/Stats";
import WhatToExpect from "@/components/sections/WhatToExpect";
import Pricing from "@/components/sections/Pricing";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />

        <div className="content-flow pb-6 sm:pb-10">
          <Problem />
          <About />
          <Stats />
          <WhatToExpect />
          <Pricing />
          <Contact />
        </div>
      </main>
    </>
  );
}
