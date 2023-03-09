import React from "react";
import { BuildingIcon } from "../Icons/BuildingIcon";
import { PhoneIcon } from "../Icons/PhoneIcon";
import { MailIcon } from "../Icons/MailIcon";

function ContactUs() {
  const address = {
    line1: "Los Angeles, CA",
    line2: "7609 Mckinley Ave",
    pincode: 90001,
  };
  const phone = "(323)751-1809";
  const email = "support@shopkart.com";
  return (
    <div className="contact-main">
      <div className="contact-block">
        <div className="contact-icon">
          <BuildingIcon />
        </div>
        <p className="contact-para">Address</p>
        <br />
        <div>
          <p className="contact-info-1">{address.line1}</p>
          <p className="contact-info-2">{address.line2}</p>
          <p className="contact-info-3">{address.pincode}</p>
        </div>
      </div>
      <div className="contact-block2">
        <div className="contact-icon2">
          <PhoneIcon />
        </div>
        <p className="contact-para">Phone</p>
        <br />
        <div>
          <p className="contact-info-1">{address.line1}</p>
          <p className="contact-info-2">{phone}</p>
        </div>
      </div>
      <div className="contact-block3">
        <div className="contact-icon3">
          <MailIcon />
        </div>
        <p className="contact-para">Email</p>
        <br />
        <div>
          <p className="contact-info-1">{email}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
