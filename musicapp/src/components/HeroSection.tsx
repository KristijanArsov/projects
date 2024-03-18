import React, { useContext, useEffect } from "react";
import { MusicContext } from "../context/MusicContext";
import gsap from "gsap";
import { Link } from "react-router-dom";
import ArtistCards from "./ArtistCards";

const HeroSection = () => {
  const { musicData } = useContext(MusicContext);
  const quotes = [
    "Without music, life would be a mistake. - Friedrich Nietzsche",
    "Music can change the world because it can change people. - Bono",
    "Where words fail, music speaks. - Hans Christian Andersen",
    "Music is the divine way to tell beautiful, poetic things to the heart. - Pablo Casals",
    "Music is the strongest form of magic. - Marilyn Manson",
    "One good thing about music, when it hits you, you feel no pain.  - Bob Marley",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(`.preview-card`, {
      scrollTrigger: {
        trigger: `.bg-img`,
        start: `bottom 55%`,
        end: "+=1500",
        scrub: 4,
        toggleClass: {
          targets: `.preview-card`,
          className: `preview-card-show`,
        },
      },
    });

    gsap.to(".fade-out-gsap", {
      scrollTrigger: {
        trigger: `.progress-start`,
        start: `top 55%`,
        end: "+=900",
        scrub: 4,
        toggleClass: { targets: `.fade-out-gsap`, className: `fade-in-gsap` },
      },
    });
  }, []);

  return (
    <div className="row">
      <div className="container">
        <div className="row py-3 show-preview-card">
          {musicData.slice(0, 3).map((album) => {
            return <ArtistCards key={album.id} {...album} />;
          })}
        </div>
        <div className="row">
          <div className="col-12">
            <h4 className="text-center font-weight-bold text-light text-uppercase">
              Dive into a world of{" "}
              <span style={{ color: `#ff1493` }}>music</span>, where every note
              tells a <span style={{ color: `#ff1493` }}>story</span>.
            </h4>
            <p className="text-light text-center font-weight-bold m-0 ">
              Let's look at some famous quotes{" "}
            </p>
          </div>
        </div>
        <div className="row py-5 progress-start">
          <div className="col-md-6 offset-md-3 col-10 offset-1 text-light">
            {quotes.map((q, index) => (
              <section style={{ height: `80px` }} key={index}>
                <p className="fade-out-gsap">{q}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
