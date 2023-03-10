import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from '../src/Components/Home/Home'
import Navbar from '../src/Components/NavBar/Navbar'
import About from '../src/Components/About/About'
import Afrocusoul from '../src/Components/Afrocusoul/Mission'
import Service from '../src/Components/Afrocusoul/Service/Service'
import ArtistWork from '../src/Components/Afrocusoul/ArtistWork/ArtistWork'
import Galery from '../src/Components/Galery/Galery'
import Videos from '../src/Components/Galery/Videos'
import Contact from '../src/Components/Contact/Contact'
import Footer from '../src/Components/Footer/Footer'
import Events from '../src/Components/Events/UpcomingEvents'

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/Events' element={<Events/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path ='/afrocusoul' element={<Afrocusoul/> }/>
          <Route path='/afrocusoul/Service/Service' element={<Service />}/>
          <Route path='/afrocusoul/ArtistWork/ArtistWork' element={<ArtistWork />}/>
          <Route path ='/galery' element={<Galery/> }/>
          <Route path='/galery/videos' element={<Videos/>}/>
          <Route path ='/contact' element={<Contact/> }/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
