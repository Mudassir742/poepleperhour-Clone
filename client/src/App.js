import React from 'react';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import Projects from './component/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Projects/>
      <Footer/>      
    </div>
  );
}

export default App;
