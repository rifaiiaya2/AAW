import React from "react";
import hotell from '../../image/hotell.png'
import visa from '../../image/visa.png'
import card from '../../image/mastercard.png'
import paypal from '../../image/paypal.png'
import amex from '../../image/amex.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid top">
          <div className="box">
            <img src={hotell} />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <p>Accepted payment methods</p>
            <div className="payment grid">
              <img src= {visa} />
              <img src= {card} />
              <img src= {paypal} />
              <img src= {amex} />
            </div>
          </div>
          <div className="box">
            <h3>Recent News</h3>
            <ul>
              <li>Our Secret Island Boat Tour Is Just for You</li>
              <li>Chill and Escape in Our Natural Shelters</li>
              <li>September in Luviana Hotel</li>
              <li>Live Music Concerts at Luviana</li>
            </ul>
          </div>
          <div className="box">
            <h3>For Customers</h3>
            <ul>
              <li>About Luviana</li>
              <li>Customer Care/Help</li>
              <li>Corporate Accounts</li>
              <li>Financial Information</li>
              <li>Terms &amp; Conditions</li>
            </ul>
          </div>
          <div className="box">
            <h3>Contact Us</h3>
            <ul>
              <li>3015 Grand Ave, Cocount Grove, Merrick Way FL 123456</li>
              <li>
                <i className="far fa-envelope" />
                demoexample@gmail.com
              </li>
              <li>
                <i className="far fa-phone-alt" />
                123 456 7898
              </li>
              <li>
                <i className="far fa-phone-alt" />
                123 456 7898
              </li>
              <li>
                <i className="far fa-comments" />
                24/ 7 Customer Services
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
