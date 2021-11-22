import React, { useState } from 'react';
import NavBar from './components/NavBarComponent';
import Portfolio from './components/Portfolio';
import PostComponent from './components/PostComponent';
import About from './components/About';
import AddPostComponent from './components/AddPostComponent';

import Contact from './components/Contact';
import Facebook from './components/Facebook';
import TestGoogle from './components/TestGoogle';
//import GoogleFacebook from './components/GoogleFacebook';
import Paypal from './components/PayPal';
import Crud from './components/Crud';

import Footer from './components/footer';
import Home from './components/home';
import Booking from './components/Booking';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** Types of Components **/
//Hooks - Functions
//Class based
//JSX

//Main Component.
function App() {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div>
      <NavBar />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />

            {/* <GoogleFacebook /> */}
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/add-post" exact>
            <AddPostComponent />
            <br />
            <PostComponent />
          </Route>

          <Route path="/Sign-in" exact>
            <TestGoogle />
          </Route>
          <Route path="/FacebookSign-in" exact>
            <Facebook />
          </Route>
          <Route path="/PayPal" exact>
            {/* <Paypal /> */}

            <div className="Center">
              {checkout ? (
                <div>
                  <Paypal />
                  <Portfolio />
                </div>
              ) : (
                <button
                  onClick={() => {
                    setCheckOut(true);
                  }}
                >
                  Checkout
                </button>
              )}
            </div>
          </Route>
          <Route path="/User" exact>
            <Crud />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>
          <Route path="/Booking" exact>
            <Booking />
          </Route>
        </Switch>
      </BrowserRouter>

      <br />
      <Footer />
    </div>
  );
}
//Publishing the component.
export default App;
