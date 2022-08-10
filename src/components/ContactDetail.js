import React from "react";
import { Link } from "react-router-dom";
import contactDetail from "../images/contactDetail.png";

const ContactDetail = (props) => {
  const { name, phone, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={contactDetail} alt="user" />
        </div>
        <div className="content">
          <div><h2 className="ui header">{name}</h2></div>
          <div><h4 className="ui header" style={{margin: "5px 0px"}}>{phone}</h4></div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
        <button className="ui violet button"> Back To Contact List <i className="arrow alternate circle left outline icon" style={{marginLeft: "5px"}}></i>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
