import React from 'react';

function Footer() {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <address>
              <strong className="h3 font-weight-normal">Phone Chicken</strong> <br />
              1234 Sample Street <br />
              Philippines, Example 0987
              Phone: (043) 332-7889
            </address>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer-title">
              <h5>Our Mission</h5>
              <span className="custom-border"></span>
            </div>
            
            <ul className="footer-list">
              <li>
                <a href="test" className="footer-link">Company Values</a>
              </li>
              <li>
                <a href="test" className="footer-link">Careers</a>
              </li>
            </ul>
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer-title">
              <h5>Customer Service</h5>
              <span className="custom-border"></span>
            </div>
            
            <ul className="footer-list">
              <li>
                <a href="test" className="footer-link">Shipping Rates & Policies</a>
              </li>
              <li>
                <a href="test" className="footer-link">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="w-100 d-md-flex justify-content-between align-items-center text-center">
            <div className="order-2">
              <a href="test" className="footer-link ml-3">About</a>
              <a href="test" className="footer-link ml-3">Help & Info</a>
              <a href="test" className="footer-link ml-3">Privacy Policy</a>
            </div>
            <div>
              <p className="m-0 text-sm order-1">
                &copy; 2019 Phone Stores. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;