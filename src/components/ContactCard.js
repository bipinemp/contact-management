import React from "react";
import user from "../images/user.png";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

function ContactCard({ data, id, handleDelete, handleEdit }) {
  const { email, name } = data;

  return (
    <div className="contact" key={id}>
      <div className="contact-desc">
        <div className="contact-avatar">
          <img src={user} alt="avatar" />
        </div>
        <div className="contact-info">
          <div className="desc-name">{name}</div>
          <div className="desc-email">
            <a href="/">{email}</a>
          </div>
        </div>
      </div>
      <div className="contact-update">
        <div>
          <FaEdit className="edit" onClick={() => handleEdit(id)} />
        </div>
        <div>
          <FaTrashAlt className="delete" onClick={() => handleDelete(id)} />
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
