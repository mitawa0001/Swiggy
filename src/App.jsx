import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import CaseStudy from './components/CaseStudy/CaseStudy';
import Home from './pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<>Loding Page...</>}>
          <Routes>
            <Route index element={<Home />} />
            <Route exect path="casestudy" element={<CaseStudy />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
