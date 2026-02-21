import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ShareTestimonial from "./components/ShareTestimonial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestimonialCarousel />} />
        <Route path="/share" element={<ShareTestimonial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;