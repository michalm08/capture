import React from 'react';

//Global Style
import GlobalStyle from './components/GlobalStyle';

//Import pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
import MovieDetail from './pages/MovieDetail';

//Router
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={AboutUs} />

          <Route path='/work' exact>
            <OurWork />
          </Route>

          <Route path='/contact'>
            <ContactUs />
          </Route>

          <Route>
            <MovieDetail path='/work/:id' />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
