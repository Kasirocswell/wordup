import Image from "next/image";

export default function Socials() {
  return (
    <div className="flex flex-row justify-between w-[200px] h-[125px] pt-[75px] pr-[2.5%]">
      <Image
        src="/IG.png"
        width={50}
        height={80}
        layout="fixed"
        alt="Picture of Instagram logo"
      />

      <Image
        src="/TT.png"
        width={50}
        height={80}
        alt="Picture of Tik-Tok logo"
      />

      <Image
        src="/YT.png"
        width={50}
        height={80}
        alt="Picture of Youtube logo"
      />
    </div>
  );
}
