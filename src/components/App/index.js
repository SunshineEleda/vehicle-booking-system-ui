import React, { Component } from 'react';
import './style.css';

import ReactContactForm from 'react-mail-form';

class App extends Component {
  render() {
    return (
      <div className="App">
      <section className="introduction">
       <h1>Hire a driver in Ghana</h1>
        </section>

       <section className="workflow">
       <h3>Let us know what you want and we will do the rest</h3>
       <h4>Whether you need a car or a minibus we gotchu!</h4>
       </section>

       <section className="contact us">
       <h3>Contact us</h3>
       <ReactContactForm to="adelekufour@gmail.com" />
       </section>
      </div>
    );
  }
}

export default App;
