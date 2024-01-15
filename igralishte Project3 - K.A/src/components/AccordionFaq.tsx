import React from "react";

interface Props {
  id: string;
  question: string;
  content: string;
  bgPickCard: boolean;
}
const AccordionFaq:React.FC<Props> = ({id,question,content,bgPickCard}) => {
  return (
    <div className="accordion" id="accordionExample">
      <div
        className={`faqCardCostume ${bgPickCard ? "bg-pickcard" : ""}`}
        key={id}
      >
        <div className="" id={`heading${id}`}>
          <h5 className="mb-0">
            <button
              className="btn collapsed"
              style={{ color: `#8a8328`, fontFamily: `Cormorant Infant` }}
              type="button"
              data-toggle={`collapse`}
              data-target={`#collapse${id}`}
              aria-expanded="false"
              aria-controls={`collapse${id}`}
            >
              {question}
            </button>
          </h5>
        </div>
        <div
          id={`collapse${id}`}
          className="collapse"
          aria-labelledby={`heading${id}`}
          data-parent="#accordionExample"
        >
          <div className={`p-4 w-100 ${bgPickCard ? "bg-pickcard" : ""}`}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionFaq;
