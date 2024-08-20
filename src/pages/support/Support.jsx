import React, { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <div 
        onClick={toggleAccordion} 
        style={{ 
          padding: "10px", 
          cursor: "pointer", 
          backgroundColor: "#f1f1f1", 
          fontWeight: "bold" 
        }}
      >
        {question}
      </div>
      {isOpen && (
        <div style={{ padding: "10px", borderTop: "1px solid #ccc" }}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default function Support() {
  return (
    <>
      <div style={{ padding: "0 30px 20px 30px" }}>
        <h2>Support</h2>
        <p>
          At Tech & Trendz, we are committed to providing exceptional support
          to our customers. Whether you have questions about our products or 
          need assistance with your order, our dedicated support team is here 
          to help.
        </p>

        <h2>Contact Us</h2>
        <p>
          You can reach our support team via email at support@techandtrendz.com 
          or by calling our toll-free number. We aim to respond to all inquiries 
          within 24 hours.
        </p>

        <h2>FAQs</h2>
        <p>
          We understand that you may have questions. Visit our FAQ page to find 
          answers to commonly asked questions regarding orders, shipping, and 
          returns.
        </p>
        
        <FAQ 
          question="What payment methods do you accept?" 
          answer="We accept all major credit cards, PayPal, and Apple Pay." 
        />
        <FAQ 
          question="How can I track my order?" 
          answer="Once your order has shipped, you will receive an email with a tracking number that you can use to check the status of your delivery." 
        />
        <FAQ 
          question="What should I do if I receive a defective item?" 
          answer="If you receive a defective item, please contact our support team within 7 days of receiving the product for instructions on how to return it." 
        />
        <FAQ 
          question="Can I change or cancel my order?" 
          answer="Order changes or cancellations can be made within 1 hour of placing your order by contacting our support team." 
        />
        <FAQ 
          question="Do you offer international shipping?" 
          answer="Yes, we offer international shipping to select countries. Please check our shipping policy for more details." 
        />
        <FAQ 
          question="How do I initiate a return?" 
          answer="You can initiate a return by logging into your account and selecting the order you wish to return, or by contacting our support team for assistance." 
        />

        <h2>Return Policy</h2>
        <p>
          We want you to be completely satisfied with your purchase. If you are 
          not satisfied, our easy return policy allows you to return your item 
          within 30 days for a full refund.
        </p>

        <h2>Join Us</h2>
        <p>
          Follow us on social media to stay updated with news and announcements. 
          We appreciate your feedback and suggestions as we continue to improve 
          our services.
        </p>
      </div>
    </>
  );
}
