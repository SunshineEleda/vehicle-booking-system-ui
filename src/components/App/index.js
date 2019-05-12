import React, { Component } from 'react';
import './style.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
       <header className="introduction">
         <h1>Hire a driver in Ghana</h1>
        </header>

       <main>
        <section className="workflow">
         <h3>How it works</h3>
          <ul>
           <li>Fill in the contact form below telling us details of what you require</li>
           <li>We will then reach out to contacts on the ground in Ghana for a price estimate</li>
           <li>Once details are finalised we will ask you to pay a non refundable deposit of £10 to secure your trip</li>
           <li>We will keep in touch with you in the run up to your trip with us</li>
          </ul>
        </section>

         <section className="contactUs">
          <h3>Send a Request</h3>
            <form className="contact-form" >
             <label className="message-name" htmlFor="message-name">First Name</label>
              <input id="formSection" name="name" className="message-name" type="text" required/>

              <label className="message-name" htmlFor="message-name">Surname</label>
              <input id="formSection" name="name" className="message-name" type="text" required/>

              <label className="message-email" htmlFor="message-email">Your Email</label>
              <input id="formSection" name="email" className="message-email" type="email" required/>

              <label className="message" htmlFor="message-input">Details of your request</label>
              <textarea id="formSection" name="message" className="message-input" type="text" required/>

              <button type="submit" className="button button-primary">Submit</button>

            </form>
         </section>
        </main>
      </div>
    );
  }
}

export default App;
