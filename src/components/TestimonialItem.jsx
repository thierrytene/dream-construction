import React from "react";
import ImageTestimonial from "../assets/images/testimonial/img-1.jpg";

function TestimonialItem() {
  return (
    <div
      className="owl-item active"
      style={{width: '405.833px', marginRight: '40px'}}
    >
      <div className="testimonials-item">
        <div className="testimonials-item-top">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form,typesetting
            industry. has been the industry's standard dummy text ever since.
          </p>
        </div>
        <div className="testimonials-item-bottom">
          <div className="testimonials-item-bottom-author">
            <img src={ImageTestimonial} alt="image client" />
          </div>
          <div className="testimonials-item-bottom-author-text">
            <h3>Henry Barton</h3>
            <span>Business Man</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;
