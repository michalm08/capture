import React from 'react'
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
//Global Style

//Import pages
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AboutUs/>
    </div>
  );
}

export default App;
