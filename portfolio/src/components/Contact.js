import React, { Component } from 'react';
//components
//UI
import {FaEnvelope, FaFacebookSquare, FaLinkedinSquare, FaInstagram} from 'react-icons/lib/fa';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: " "
    }
  }

  handleClick = () => {
    this.setState({email: 'singlerstephanie@gmail.com'});
  }
  render() {
    return (
      <div className="contact">
        <div className="contact-info">
          <p className="about-title">Contact Me</p>
          <a href="https://www.linkedin.com/in/stephanie-singler-397948bb/" target="_blank">
            <FaLinkedinSquare size={50} style={{color: '0074B8'}}/> &nbsp; Connect on Linkedin
          </a><br /><br />
          <FaEnvelope size={45} style={{color: 'FF862B'}}/> &nbsp; &nbsp; <button onClick={this.handleClick}>
            Send me an Email!
          </button><br /><br />
          <p className="email">{this.state.email}</p>
          <a href="https://www.instagram.com/stephsingler/" target="_blank">
            <FaInstagram size={50} style={{color: 'ED007C'}}/> &nbsp; Follow me on Instagram
          </a><br /><br />
          <a href="https://www.facebook.com/stephanie.singler.1" target="_blank">
            <FaFacebookSquare size={50} style={{color: '425FB4'}}/> &nbsp; Like me on Facebook
          </a>
        </div>
        <img src={require("../images/contact2.jpg")} alt="" className="contact-img" />
      </div>
    );
  }
}

export default Contact;
