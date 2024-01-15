import React, { useState } from 'react';

interface Props {
  imageSrc: string;
  title: string;
  content: string;
  heading: string;
}

const AccordionItem: React.FC<Props> = ({ heading, imageSrc, title, content }) => {
  
  return (
    <div className="mb-3 accordionCostume accordion">
      <div>
        <button
          style={{ height: `100px` }}
          className="btn collapsed w-100 d-flex justify-content-between align-items-center"
          type="button"
          data-toggle={`collapse`}
          data-target={`#collapse${heading}`}
          aria-expanded="false"
          aria-controls={`collapse${heading}`}
        >
          <div>
            <img src={imageSrc} className="mr-4" alt="" />
            <span style={{ color: `#8a8328`, fontSize: `16px` }}>{title}</span>
          </div>
          <i aria-hidden className={`fa-solid fa-plus ml-4`}></i>
        </button>
      </div>
      <div
        id={`collapse${heading}`}
        className="collapse"
        aria-labelledby={`heading${heading}`}
        data-parent="#accordionExample"
      >
        <div className="card-body small">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
