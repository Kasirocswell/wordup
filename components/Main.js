import logo from "../public/wordup.png";
import Image from "next/image";
import Socials from "./Socials";
import Mic from "./ThreeScene";

export default function Main() {
  return (
    <div
      className="bg-opacity-0 w-screen overflow-x-clip"
      style={{ height: "10vh" }}
    >
      <div className="pl-[2.5%] mt-[-100px] flex justify-between">
        <Image
          src="/wordup.png"
          width={250}
          height={250}
          alt="Picture of WORDUP logo"
        />
        <Socials />
      </div>
    </div>
  );
}
