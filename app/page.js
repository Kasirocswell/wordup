"use client";

import Image from "next/image";
import Main from "@/components/Main";
import Navabar from "@/components/Navbar";
import Socials from "@/components/Socials";
import Scene from "@/components/ThreeScene";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // disable the scrolling when the component mounts
    document.body.style.overflow = "hidden";

    return () => {
      // re-enable the scrolling when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="bg-no-repeat bg-center mt-[-25px] h-screen flex flex-col"
      style={{ backgroundImage: "url(/IMG_5003.jpg)" }}
    >
      <div className="pt-[65px] z-20">
        <Main />
      </div>

      <div className="mt-[-50px] z-10">
        <Scene />
      </div>
      <div className="bottom-0 pt-[25px] z-20">
        <Navabar />
      </div>
    </div>
  );
}
