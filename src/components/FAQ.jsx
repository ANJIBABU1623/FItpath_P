

import React, { useState } from "react";

const faqs = [
  {
    question: "What is the BMI ?",
    answer: "BMI(Body Mass Index) is a simple calculation using a person's height and weight to estimate if they are underweight, normal, overweight, or obese.",
  },
  {
    question: "Can i track my fitness goals with this app",
    answer: "Yes,you can set,monitor,and update personalized fitness goals.",
  },
  {
    question: "Can i use this app without creating an account",
    answer: "No,login is required to securely store and track your data",
  },
  
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container" style={{ width: "600px", margin: "0 auto" }}>
      <h2>People Also Ask</h2>
      {faqs.map((faq, index) => (
        <div key={index} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
          <div
            onClick={() => toggle(index)}
            style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }}
          >
            <p>{faq.question}</p>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </div>
          {openIndex === index && (
            <p style={{ padding: "10px 0", color: "#555" }}>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}