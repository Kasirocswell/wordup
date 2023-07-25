import { Howl, Howler } from "howler";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Inter, Orbitron } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });

const songList = [
  { file: "/song1.mp3", title: "Song Title 1 and Information Go Here" },
  { file: "/song2.mp3", title: "Song Title 2 and Information Go Here" },
  { file: "/song3.mp3", title: "Song Title 3 and Information Go Here" },
  // ...additional songs
];

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(null);
  const scrollDiv = useRef(null);

  useEffect(() => {
    let newSong = new Howl({
      src: [songList[currentSongIndex].file],
      html5: true,
      loop: isRepeat,
      onend: () => {
        if (!isRepeat && currentSongIndex < songList.length - 1) {
          setCurrentSongIndex((prevState) => prevState + 1);
        }
      },
    });

    setCurrentSong(newSong);

    return () => {
      newSong.unload();
    };
  }, [currentSongIndex, isRepeat]);

  useEffect(() => {
    let scrollInterval = null;
    if (isPlaying) {
      scrollInterval = setInterval(() => {
        if (scrollDiv.current) {
          if (
            scrollDiv.current.scrollLeft >=
            scrollDiv.current.scrollWidth / 2
          ) {
            scrollDiv.current.scrollLeft = 0;
          } else {
            scrollDiv.current.scrollLeft += 1;
          }
        }
      }, 100);
    }

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    if (!isPlaying) {
      currentSong.play();
    } else {
      currentSong.pause();
    }

    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    Howler.mute(!isMuted);
    setIsMuted(!isMuted);
  };

  return (
    <div className="w-screen bg-black flex mt-[-48px] overflow-clip">
      <div className="mx-[33%] flex overflow-y-clip">
        <div
          className="mr-8 pt-1"
          ref={scrollDiv}
          style={{
            display: "flex",
            overflowX: "scroll",
            whiteSpace: "nowrap",
            width: "200px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <h2 className={`${orbitron.className} text-lime-400`}>
            {songList[currentSongIndex].title}
          </h2>
          <h2
            style={{ marginLeft: "50px" }}
            className={`${orbitron.className} text-lime-400`}
          >
            {songList[currentSongIndex].title}
          </h2>
          <style jsx>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
            ::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
        <div className="pt-[4px] pr-2" onClick={() => setIsRepeat(!isRepeat)}>
          <Image
            src={isRepeat ? "/repeat-on.png" : "/repeat.png"}
            width={25}
            height={25}
            alt="Repeat song button"
          />
        </div>
        <div
          className="pt-[4px]"
          onClick={() =>
            setCurrentSongIndex((prevState) =>
              prevState > 0 ? prevState - 1 : songList.length - 1
            )
          }
        >
          <Image
            src="/previous.png"
            width={25}
            height={25}
            alt="Previous song button"
          />
        </div>
        <div className="pt-[4px] pr-2 pl-2" onClick={togglePlayPause}>
          <Image
            src={isPlaying ? "/pause.png" : "/play.png"}
            width={25}
            height={25}
            alt="Play button"
          />
        </div>
        <div
          className="pt-[4px] pr-2"
          onClick={() =>
            setCurrentSongIndex((prevState) =>
              prevState < songList.length - 1 ? prevState + 1 : 0
            )
          }
        >
          <Image
            src="/forward.png"
            width={25}
            height={25}
            alt="Next song button"
          />
        </div>
        <div className="pt-[4px]" onClick={toggleMute}>
          <Image
            src={isMuted ? "/unmute.png" : "/mute.png"}
            width={25}
            height={25}
            alt="Mute button"
          />
        </div>
      </div>
    </div>
  );
}
