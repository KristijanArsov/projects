import React from 'react'

const AnnouncementBar:React.FC = () => {
  return (
    <div style={{ position: `relative` }}>
    <div className="announcement-bar">
      <p className="scrolling-text m-0 p-1">
        Нова колекција <img src="/images/star-black.png" alt="" />{" "}
        Valentines Winter Collection{" "}
        <img src="/images/star-black.png" alt="" /> Valentines Winter
        Collection <img src="/images/star-black.png" alt="" /> Valentines
        Winter Collection
      </p>
    </div>
  </div>
  )
}

export default AnnouncementBar
