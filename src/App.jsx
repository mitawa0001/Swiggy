import { Suspense, useEffect, useState, useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import CaseStudy from './components/CaseStudy/CaseStudy';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import About from "./pages/About/About";
import AboutClass from './pages/About/AboutClass';
import Layout from './components/layout/Layout';
import UserContext from './utils/UserContext';

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  useEffect(() => {
    setLoggedInUser("Swiggy User");
  }, []); 
  return (
    <Suspense fallback={<>Loading Page...</>}>
      <UserContext.Provider value={{ loggedInUser }}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="casestudy" element={<CaseStudy />} />
            <Route path="about" element={<About heading="About Swiggy" city="chandigarh" />} />
            <Route path="restaurant/:resid" element={<Restaurant />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </Suspense>
  );
}

export default App;
