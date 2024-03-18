import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MusicContext } from "../context/MusicContext";
import { ArtistType } from "../type/type";
import ArtistDetailCards from "./ArtistDetailCards";
import Banner from "./Banner";

const ArtistDetails = () => {
  const { musicData } = useContext(MusicContext);
  const { id } = useParams();

  let findArtist: ArtistType | undefined = undefined;

  if (id) {
    findArtist = musicData.find((artist) => artist.id == +id);
  }

  if (!findArtist) {
    return <p>Error 404 Artist Not Found</p>;
  }
  return (
    <div
      className="container-fluid"
    >
      <Banner/>
      <div className="row">
        <div className="col-12 text-center text-light">
        <h4 className="py-4">Enjoy Some of The Most Valuable Albums from <span style={{color:`#ff1493`}}>{findArtist.name}</span></h4>
        </div>
      </div>
      <div className="row py-3 d-flex justify-content-center align-items-center">
        <ArtistDetailCards key={findArtist.id} {...findArtist} />
        <div className="col-6 text-center text-light">
          <div className="w-100 ml-auto mr-auto d-flex justify-content-center flex-wrap">
            {findArtist.albums.map((albums) => {
              return (
                <img
                className="w-50 d-block"
                  src={`/img/albums/${albums.cover}.jpg`}
                  key={albums.albumId}
                />
              );
            })}
          </div>
        </div>
      </div>
        
    </div>
  );
};

export default ArtistDetails;
