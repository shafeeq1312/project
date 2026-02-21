import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ShareTestimonial from "./components/ShareTestimonial";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <About/>
      <Routes>
        <Route path="/" element={<TestimonialCarousel />} />
        <Route path="/share" element={<ShareTestimonial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;