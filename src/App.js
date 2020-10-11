import React from 'react';
import NavMenu from './components/NavMenu/NavMenu'
import Main from './components/Main/Main'
import CardLayout from './components/Card/CardLayout'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
     <NavMenu/>
     <Main/>
     <CardLayout/>
     <Footer/>
    </div>
  );
}

export default App;
