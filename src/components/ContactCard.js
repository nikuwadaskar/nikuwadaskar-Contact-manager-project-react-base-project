import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import phoneIcon from "../images/phoneIcon.png";
import mail from "../images/mail.png";

const ContactCard = (props) => {
  const { id, name, phone, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" style={{margin: "10px 10px"}} />

      <div className="content" style={{margin: "0% 3%"}}>
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div style={{margin: "3px 0px"}}>
           <img className="ui avatar image" src={phoneIcon} alt="user" style={{marginRight: "5px", height: "15px", width: "15px"}} />
          {phone}
          </div>
          <div>
          <img className="ui avatar image" src={mail} alt="mail" style={{marginRight: "5px", height: "15px", width: "15px", color: "violet"}} />
            {email}
          </div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "16px", marginLeft: "20px", pointer: "cursor" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "violet", marginTop: "16px", pointer: "cursor" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
