import React from 'react'
import { ArtistType } from '../type/type'
import { Link } from 'react-router-dom'

const ArtistDetailCards: React.FC<ArtistType> = ({ id, cover, name }) => {
  return (
    <div className="col-md-6 mb-3 col-12" key={id}>
        <div className="card p-3 ">
          <img
            className="card-img-top"
            src={`../img/covers/${cover}.jpg`}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="m-0 text-center">Artist: {name}</p>
          </div>
        </div>
    </div>
  )
}

export default ArtistDetailCards
