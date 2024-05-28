// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './page/home'
import Contact from './page/Contact/contact';
import Creationpage from './page/Creation/creation';
import SeoPage from './page/Seo/seo';
import CommunicationPage from './page/Communication/communication';
function App() {


  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/creation" element={<Creationpage/>}/>
            <Route path="/seo" element={<SeoPage/>}/>
            <Route path="/communication" element={<CommunicationPage/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
