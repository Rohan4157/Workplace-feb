import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="section-51">
        <h3>
          Want Regular Job Updates? <br />
          Eager to Get Placed? <span>Dont Worry! We are here for you.</span>
          
<span></span>
         <span></span>
        </h3>
        <div className="newsletter">
          <input type="email" placeholder="Enter your email" />
          <button className='footerBtn'>Subscribe Us!</button>
        </div>
      </div>
      <div className="section-52">
          <div className="footers">
          <h3><span>Staffing</span> Solutions</h3>
            <h3>About</h3>
            <h3>Jobs</h3>
            <h3>Contact Us</h3>
            <h3>Terms</h3>
            <h3>Privacy Policy</h3>
          </div>
        <hr />
        <small>@staffingSolutions All right reserved.</small>
      </div>
    </div>
  );
};

export default Footer; 
