import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from '../src/Components/Home/Home'
import Navbar from '../src/Components/NavBar/Navbar'
import About from '../src/Components/About/About'
import Afrocusoul from '../src/Components/Afrocusoul/Mission'
import Online from '../src/Components/Afrocusoul/Workshops/Online'
import Inperson from '../src/Components/Afrocusoul/Workshops/Inperson'
import Events from '../src/Components/Afrocusoul/Events/Sandunga'
import Galery from '../src/Components/Galery/Galery'
import Photos from '../src/Components/Galery/Photos'
import Videos from '../src/Components/Galery/Videos'
import Contact from '../src/Components/Contact/Contact'
import Footer from '../src/Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path ='/afrocusoul' element={<Afrocusoul/> }/>
          <Route path='/afrocusoul/workshops/online' element={<Online/>}/>
          <Route path='/afrocusoul/workshops/inperson' element={<Inperson/>}/>
          <Route path='/afrocusoul/workshops/events' element={<Events/>}/>
          <Route exact path ='/galery' element={<Galery/> }/>
          <Route path='/galery/photos' element={<Photos/>}/>
          <Route path='/galery/videos' element={<Videos/>}/>
          <Route exact path ='/contact' element={<Contact/> }/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
