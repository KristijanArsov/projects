import React, { useContext, useEffect } from "react";
import { MusicContext } from "../context/MusicContext";
import gsap from "gsap";

const FeaturedMusic = () => {
  const { musicData } = useContext(MusicContext);

  useEffect(() => {
    const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.custom-screen`,
          start: `top 70%`,
          end:`+=1000`,
          toggleClass: {
            targets: `.hide-music-cards-gsap`,
            className: `show-music-cards-gsap`,
          },
        },
      });
      
      timeline.to(`.hide-music-cards-gsap`, {
        opacity: 1,
        x: 0,
        duration: 0,
      });
    
      
      
  }, []);

  return (
    <>
      <div className="row pt-5">
        {musicData.slice(0, 3).map((music) => {
          return (
            <div className="col-md-4 col-12 custom-screen">
              <div className="ml-auto mr-auto card-custom d-flex flex-column justify-content-end align-items-center hide-music-cards-gsap">
                <img
                  src={`../img/covers/${music.cover}.jpg`}
                  alt=""
                  className="position-absolute"
                />
                <div className="pb-4 w-75 text-secondary d-flex flex-column align-items-center">
                  <p className="m-0">{music.name}</p>
                  <audio controls>
                    <source src={music.url} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row py-3">
        <div className="col-12 text-center text-light">
          <h4 className="font-weight-bold">Sample <span style={{ color: `#ff1493` }}>Music</span></h4>
        </div>
      </div>
    </>
  );
};

export default FeaturedMusic;
