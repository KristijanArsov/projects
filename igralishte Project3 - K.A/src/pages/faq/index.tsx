import AccordionFaq from '@/components/AccordionFaq';
import BreadCrumbs from '@/components/BreadCrumbs';
import { NextPage } from 'next';
import React from 'react';

const FaqPage:NextPage = () => {
  const faqData = [
    {
      id: 'One',
      question: 'Ова е примерок за прашања кои би биле на страната?',
      content:
        'Life is a intricate dance of moments, weaving tales of joy and sorrow. In its symphony, whispers of resilience and fleeting serendipity echo. Embrace the mosaic, where time paints dreams on the canvas of existence, and each heartbeat narrates a unique saga of discovery and growth',
      bgPickCard: false,
    },
    {
      id: 'Two',
      question: 'Ова е примерок за прашања кои би биле на страната?',
      content:
        'Life is a intricate dance of moments, weaving tales of joy and sorrow. In its symphony, whispers of resilience and fleeting serendipity echo. Embrace the mosaic, where time paints dreams on the canvas of existence, and each heartbeat narrates a unique saga of discovery and growth',
      bgPickCard: true,
    },
    {
      id: 'Three',
      question: 'Ова е примерок за прашања кои би биле на страната?',
      content:
        'Life is a intricate dance of moments, weaving tales of joy and sorrow. In its symphony, whispers of resilience and fleeting serendipity echo. Embrace the mosaic, where time paints dreams on the canvas of existence, and each heartbeat narrates a unique saga of discovery and growth',
      bgPickCard: false,
    },
    {
      id: 'Four',
      question: 'Ова е примерок за прашања кои би биле на страната?',
      content:
        'Life is a intricate dance of moments, weaving tales of joy and sorrow. In its symphony, whispers of resilience and fleeting serendipity echo. Embrace the mosaic, where time paints dreams on the canvas of existence, and each heartbeat narrates a unique saga of discovery and growth',
      bgPickCard: true,
    },
  ];
  return (
    <div className='container'>
     <div className="row pt-3">
          <div className="col-12 d-flex">
          <BreadCrumbs />
          </div>
          </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
        <h4 className="text-center m-0">FAQ</h4>
        <img src="/images/sparks.png"/>
        </div>
      </div>
     <div className="row">
      <div className="col-12">
      {
        faqData.map((faqData)=> {
          return <AccordionFaq key={faqData.id} {...faqData}/>
        })
      }
      </div>
     </div>
    </div>
  );
};

export default FaqPage;
