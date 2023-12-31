import Image from "next/image";

export default function Socials() {
  return (
    <div className="flex flex-row justify-between w-[200px] h-[125px] pt-[75px] pr-[2.5%]">
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <Image
          src="/IG.png"
          width={44}
          height={74}
          layout="fixed"
          alt="Picture of Instagram logo"
        />
      </a>

      <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
        <Image
          src="/TT.png"
          width={50}
          height={80}
          alt="Picture of Tik-Tok logo"
        />
      </a>

      <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
        <Image
          src="/YT.png"
          width={50}
          height={80}
          alt="Picture of Youtube logo"
        />
      </a>
    </div>
  );
}
