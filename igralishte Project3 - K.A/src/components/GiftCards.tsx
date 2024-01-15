import React from 'react'

interface Props {
    src: string;
    name: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  }
  

const GiftCards:React.FC<Props> = ({src, name, top, bottom, left, right }) => {
  return (
    <div className="card position-relative">
              <img
                src={src}
                alt=""
                style={{ opacity: `0.8` }}
              />
              <div
                className="position-absolute d-flex align-items-center justify-content-between w-100 giftCard_banner p-1"
                style={{ top, bottom }}
              >
                {left ? (
          <>
            <img
              src="/images/Star.png"
              alt=""
              className="mr-3 position-absolute"
              style={{ left: '0', width: `44px`, height: `44px` }}
            />
            <p className="m-0 ml-auto pr-3">{name}</p>
          </>
        ) : (
          <>
            <p className="m-0 pl-3">{name}</p>
            <img
              src="/images/Star.png"
              alt=""
              className="mr-3 position-absolute"
              style={{ right: '0', width: `44px`, height: `44px` }}
            />
          </>
        )}
              </div>
            </div>
  )
}

export default GiftCards
