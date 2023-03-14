import React from "react";
import logo from "../../image/logo.png";
import { NavLink } from "react-router-dom";
import "../../components/Contact/Contact.css";
const Contact = () => {
  return (
    <>
      <section className="contactt">
        <div className="content">
          <NavLink to={"/"}>
          <h2>Contact Us</h2>
          </NavLink>
          <p>
            Please feel free to contact us with any questions, comments, or
            concerns using the form below.
          </p>
        </div>
        <div className="containert">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i className="fa fa-map-marker" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  1234 Pachora Road,
                  <br />
                  Pune,India,
                  <br />
                  14568
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-phone" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>12345678</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>abc@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <br></br>
                <input type="text" required="required" />

                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" required="required" />
                <span>Eamil</span>
              </div>
              <div className="inputBox">
                <textarea name id required="required" defaultValue={""} />
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" defaultValue="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>

      <div>
        <section className="map_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="map_inner">
                  <h4>Find Us on Google Map</h4>
                  <p>
                    Our map section provides an interactive view of our
                    location, making it easy to find your way to us. You can
                    zoom in, zoom out, and even get directions right from the
                    map.
                  </p>
                  <div className="map_bind">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin"
                      width="100%"
                      height={450}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen
                      aria-hidden="false"
                      tabIndex={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
