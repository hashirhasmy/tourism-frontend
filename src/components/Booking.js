import './Booking.css';

import React, { Component } from 'react';
import axios from 'axios';

class Booking extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
  };

  onFirst_nameChange = (e) => {
    //console.log("Author name --->" +e.terget.value);
    this.setState({
      first_name: e.target.value,
    });
  };
  onLast_nameChange = (e) => {
    this.setState({
      last_name: e.target.value,
    });
  };

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const API_URL_ENDPOINT = 'http://localhost:8081/api/v1/bookings/add';

    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
    };

    axios
      .post(API_URL_ENDPOINT, data)
      .then((res) => console.log('Response ---> ' + res))
      .catch((err) => console.log('Error : ' + err));
  };

  render() {
    return (
      <main
        style={{
          marginTop: '15rem',
        }}
      >
        <h2
          className="font-cinzel"
          style={{
            textAlign: 'center',
            fontSize: '40px',
          }}
        >
          Reservations
        </h2>
        <h4
          style={{
            textAlign: 'center',
            fontSize: '25px',
            color: '#aaa4a4',
          }}
        >
          Reserve your Booking here
        </h4>
        <br />
        <section className="booking font-nunito" style={{backgroundColor : "#1e1c34"}}>
          <div className="container">
            {/* php file will be attached here in action attribute */}
            <form
              action="#"
              className="book-form1"
              onSubmit={this.handleSubmit}
            >
              <div className="input-group">
                <label htmlFor="fname" className="input-label">
                  First Name
                </label>
                <input
                  name="fname3"
                  type="text"
                  onChange={this.onFirst_nameChange}
                  className="input"
                  id="name"
                  placeholder="Enter your First Name"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="lname" className="input-label">
                  Last Name
                </label>
                <input
                  name="lname3"
                  type="text"
                  onChange={this.onLast_nameChange}
                  className="input"
                  id="name"
                  placeholder="Enter your Last Name"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  Email Address
                </label>
                <input
                  name="email3"
                  type="email"
                  onChange={this.onEmailChange}
                  className="input"
                  id="email"
                  placeholder="Enter your Email Address"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="check-in" className="input-label">
                  Check in
                </label>
                <input
                  name="check-in3"
                  type="date"
                  className="input"
                  id="check-in"
                  placeholder="check-in"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="check-out" className="input-label">
                  Check out
                </label>
                <input
                  name="check-out3"
                  type="date"
                  className="input"
                  id="check-out"
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="roomno" className="input-label">
                  No. of Rooms
                </label>
                <select name="roomno3" className="options" id="guest" required>
                  <option value={0}>No. of Rooms</option>
                  <option value={0}>1</option>
                  <option value={0}>2</option>
                  <option value={0}>3</option>
                  <option value={0}>4</option>
                  <option value={0}>5</option>
                  <option value={0}>6</option>
                  <option value={0}>7</option>
                  <option value={0}>8</option>
                  <option value={0}>9</option>
                  <option value={0}>10</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="guestno" className="input-label">
                  No. of Guests
                </label>
                <select name="guestno3" className="options" id="guest" required>
                  <option value={0}>No. of Guests</option>
                  <option value={0}>1</option>
                  <option value={0}>2</option>
                  <option value={0}>3</option>
                  <option value={0}>4</option>
                  <option value={0}>5</option>
                  <option value={0}>6</option>
                  <option value={0}>7</option>
                  <option value={0}>8</option>
                  <option value={0}>9</option>
                  <option value={0}>10</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="message" className="input-label">
                  Messsage
                </label>
                {/* <input name="message3" type="text" class="input" id="name" placeholder="Message" required> */}
                <textarea
                  name="message3"
                  className="input"
                  cols={30}
                  rows={8}
                  placeholder="Message"
                  required
                  defaultValue={''}
                />
              </div>

              <a href="/Paypal" className="btn btn-bg-yellow">
                Make Payment!
              </a>
            </form>
          </div>
        </section>
      </main>
    );
  }
}

export default Booking;
