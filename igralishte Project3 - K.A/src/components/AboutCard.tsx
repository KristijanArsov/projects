import React from "react";

interface Props {
  imageSrc: string;
  title: string;
  paragraphs: string[];
}

const AboutCard:React.FC<Props> = ({imageSrc,title,paragraphs}) => {
  return (
    
      <div className="col-12 pt-5">
        <img
          src={imageSrc}
          alt=""
          className="w-100 d-block"
          style={{ height: "340px" }}
        />
        <h4 className="pt-3">{title}</h4>
        {paragraphs.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

  );
};

export default AboutCard;
