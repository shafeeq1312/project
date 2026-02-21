import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShareTestimonial.css";

export default function ShareTestimonial() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    rating: 5,
    text: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for sharing your testimonial!");
    navigate("/");
  };

  return (
    <div className="form-page">
      <form className="testimonial-form" onSubmit={handleSubmit}>
        <h2>Share Your Story</h2>

        <input name="name" placeholder="Your Name" required onChange={handleChange} />
        <input name="role" placeholder="Your Role" required onChange={handleChange} />
        <textarea name="text" rows="4" placeholder="Your Experience" required onChange={handleChange} />

        <label className="label">Rating</label>
        <select name="rating" onChange={handleChange}>
          <option value="5">★★★★★ (5)</option>
          <option value="4">★★★★☆ (4)</option>
          <option value="3">★★★☆☆ (3)</option>
          <option value="2">★★☆☆☆ (2)</option>
          <option value="1">★☆☆☆☆ (1)</option>
        </select>

        <label className="label">Upload Image</label>
        <input type="file" accept="image/*" name="image" onChange={handleChange} />

        {formData.image && (
          <div className="image-preview">
            <img src={URL.createObjectURL(formData.image)} alt="Preview" />
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}