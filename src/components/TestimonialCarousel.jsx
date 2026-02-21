import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TestimonialCarousel.css";

import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";

const testimonials = [
  {
    name: "Michael Carter",
    role: "Product Lead",
    rating: 5,
    image: user1,
    text: "Automation and reporting tools drastically improved our team productivity."
  },
  {
    name: "Sarah Williams",
    role: "Customer Success Manager",
    rating: 4,
    image: user2,
    text: "This CRM transformed the way we handle customer interactions."
  },
  {
    name: "David Kumar",
    role: "Operations Manager",
    rating: 4,
    image: user3,
    text: "Analytics insights help us make smarter business decisions every day."
  },
  {
    name: "Emma Brown",
    role: "Startup Founder",
    rating: 5,
    image: user4,
    text: "This platform helped us scale without increasing operational complexity."
  },
  {
    name: "John Smith",
    role: "Sales Director",
    rating: 4,
    image: user5,
    text: "Sales and support alignment became effortless with this system."
  }
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();
  const total = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % total);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + total) % total);
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % total);
      setFade(true);
    }, 300);
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-wrapper">
        <h2 className="testimonial-heading">OUR SUCCESS STORIES</h2>

        <p className="testimonial-subheading">
          Real transformations from our learners who've built careers,
          launched startups, and created impact in their communities.
        </p>

        <div className="avatar-container">
          {testimonials.map((item, i) => {
            let cls = "avatar";

            if (i === index) cls += " active";
            else if (i === (index - 1 + total) % total) cls += " left";
            else if (i === (index + 1) % total) cls += " right";
            else cls += " hidden";

            return (
              <img
                key={i}
                src={item.image}
                alt={item.name}
                className={cls}
              />
            );
          })}
        </div>

        <div className={`content ${fade ? "fade-in" : "fade-out"}`}>
          <p className="text">“{testimonials[index].text}”</p>
          <h4>{testimonials[index].name}</h4>
          <span className="role">{testimonials[index].role}</span>

          <div className="rating">
            {Array.from({ length: testimonials[index].rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>

        <div className="arrows">
          <button onClick={handlePrev}>‹</button>
          <button onClick={handleNext}>›</button>
        </div>

        <button className="share-btn" onClick={() => navigate("/share")}>
          Share Yours
        </button>
      </div>
    </section>
  );
}