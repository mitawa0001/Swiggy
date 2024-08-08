import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import CaseStudy from './components/CaseStudy/CaseStudy';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import About from "./pages/About/About";
import AboutClass from './pages/About/AboutClass';

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<>Loding Page...</>}>
          <Routes>
            <Route index element={<Home />} />
            <Route exect path="casestudy" element={<CaseStudy />} />
            <Route exect path="about" element={<AboutClass heading="About Swiggy"/>} />
            <Route exect path="restaurant/:resid" element={<Restaurant />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
