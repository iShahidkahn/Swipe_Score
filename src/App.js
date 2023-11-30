// src/frontend/App.js

import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import Card from "./components/pages/landing_page/SliderSection.jsx";
import LandingPage from "./components/views/LandingPage.js";
import Header from "./components/constants/Header.jsx";
import Footer from "./components/constants/Footer.jsx";


function App() {

  // Data for Slider  ********************************* //
  let cards = [

    {
      key: uuidv4(),
      content: (
        <Card imagen="images/ai_person.jpg" icon='images/heart2.png' />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="images/ai_person2.jpg" icon='images/heart2.png' />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="images/ai_person3.jpg" icon='images/heart2.png' />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="images/ai_person2.jpg" icon='images/heart2.png' />
      )
    }

  ];

  return (
    <Router>
      <div className="site-wrap">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage cards={cards} />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
