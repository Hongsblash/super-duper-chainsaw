import React from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO, Example Company',
      testimonial: 'ABC Accounting Firm has provided excellent accounting services for our company. Their expertise and attention to detail are unmatched.',
    },
    {
      name: 'Jane Smith',
      title: 'Founder, Startup Inc.',
      testimonial: 'The team at ABC Accounting Firm has been invaluable in helping us navigate complex financial situations as a growing startup.',
    },
    {
      name: 'Alice Brown',
      title: 'CFO, TechCorp',
      testimonial: 'We have been extremely satisfied with the professionalism and personalized service from ABC Accounting Firm. Their team always goes above and beyond.',
    },
  ];

  return (
    <section className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <blockquote>{testimonial.testimonial}</blockquote>
            <p className="testimonial-author">
              {testimonial.name}, {testimonial.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
