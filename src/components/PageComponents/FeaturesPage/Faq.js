import React, { useEffect, useState } from 'react';
import faqData from './faqData.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

gsap.registerPlugin(ScrollTrigger);

const Faqs = ({ featureName }) => {

  // Get the FAQs for the specific feature
  const filteredFaqData = faqData.find((item) => item.feature === featureName)?.faqs || [];
  const totalFaqs = filteredFaqData.length;
  const initialVisibleFaqs = Math.min(7, totalFaqs);
  const [visibleFaqs, setVisibleFaqs] = useState(initialVisibleFaqs);

  const handleViewMore = () => {
    setVisibleFaqs(prevVisibleFaqs => Math.min(prevVisibleFaqs + 7, totalFaqs));
  };

  useEffect(() => {
    const scaleAnims = document.querySelectorAll('.scaleAnim');

    let ctx = gsap.context(() => {
      scaleAnims.forEach((scaleAnim) => {
        gsap.fromTo(
          scaleAnim,
          {
            scale: 1.1,
            y: 40,
            opacity: 0,
            transformOrigin: 'bottom center'
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'Power4.out',
            scrollTrigger: {
              trigger: scaleAnim,
              start: 'top bottom',
              end: 'bottom 85%',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="faqs">
        <div className="container">
          <div className="content">
            <div className="section-head">
              <h2 className="title-4xl text-anim">
                <span>Frequently </span>
                <br />
                <span>Asked Questions</span>
              </h2>
            </div>

            <div className='faq-wrapper'>
              <span className='h-[1px] bg-[#1a1a1a] w-full lineDraw block' />
              <Accordion type="single" collapsible>
                {filteredFaqData.slice(0, visibleFaqs).map((item, index) => (
                  <AccordionItem value={`item-${item.id}`} key={index} className="faq-item-content scaleAnim">
                    <AccordionTrigger className="title-2xl pb-2 relative px-[2vw] py-[2vw] w-[90%]">
                      <div className='faq-number'>
                        <span className='aeonik'>
                          {item.id}{" "}
                        </span>
                      </div>
                      <div className='faq-main-content'>
                        {item.title}
                      </div>
                      <div className="feat-accordion-btn">
                        <span className="plus" />
                        <span className="minus" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="content-p faq-main-content ml-[7vw] features">
                      <span dangerouslySetInnerHTML={{ __html: item.content }} />
                    </AccordionContent>
                    <span className='h-[1px] bg-[#1a1a1a] w-full lineDraw block' />
                  </AccordionItem>
                ))}
              </Accordion>
              {visibleFaqs < totalFaqs && (
                <div className="w-full text-center mt-8">
                  <button aria-label="View More Faqs" onClick={handleViewMore} className="btn fadeUp">
                    <span data-primary className="btn-text">
                      View More FAQs
                    </span>
                    <div aria-hidden="true" className="btn-circle">
                      <div className="btn-circle-text">
                        View More FAQs
                        <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                          <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                          <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faqs;
