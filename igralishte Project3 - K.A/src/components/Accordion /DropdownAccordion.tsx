import React from "react";
import AccordionItem from "./AccordionItem";

const accordionData = [
  {
    id: "qualityControl",
    heading: `One`,
    imageSrc: "/images/checkMarkAccordion.png",
    title: "Контрола на квалитет",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, culpa ullam...",
  },
  {
    id: "returnPolicy",
    heading: `Two`,
    imageSrc: "/images/squareAccordionSymbol.png",
    title: "Политика на враќање",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro sunt impedit...",
  },
  {
    id: "delivery",
    heading: `Three`,
    imageSrc: "/images/truckAccordion.png",
    title: "Достава",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure nihil earum unde laudantium totam beatae nam laborum deleniti...",
  },
  {
    id: "help",
    heading: `Four`,
    imageSrc: "/images/questionMarkAccordion.png",
    title: "Помош",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, ad labore? Aspernatur ullam similique at. Ipsum aperiam, autem placeat ea natus pariatur...",
  },
];

const DropdownAccordion = () => {
  return (
    <div className="accordion" id="accordionExample">
      {accordionData.map((item) => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default DropdownAccordion;
