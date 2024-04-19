"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ArrowAcc from "../public/assets/arrow.svg";

const FaqAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heightEls, setHeightEls] = useState([]);
  const refHeights = useRef([]);

  useEffect(() => {
    const newHeights = refHeights.current.map((ref) => ref.scrollHeight + "px");
    setHeightEls(newHeights);
  }, [faqs]);

  const toggleState = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index} className="accordion">
          <button
            onClick={() => toggleState(index)}
            className="accordion-visible"
          >
            <span>{faq.question}</span>
            <Image
              className={activeIndex === index ? "active" : ""}
              src={ArrowAcc}
              alt={`ArrowAcc-${activeIndex === index ? "up" : "down"}`}
            />
          </button>

          <div
            className={`accordion-toggle ${
              activeIndex === index ? "animated" : ""
            }`}
            style={{ height: activeIndex === index ? heightEls[index] : "0px" }}
            ref={(el) => (refHeights.current[index] = el)}
          >
            <p aria-hidden={activeIndex === index ? "true" : "false"}>
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
