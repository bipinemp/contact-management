import React from "react";
import ContactCard from "./ContactCard";

function ContactList({
  data,
  id,
  contact,
  setContact,
  handleDelete,
  index,
  handleEdit,
}) {
  return (
    <>
      <ContactCard
        data={data}
        id={id}
        contact={contact}
        setContact={setContact}
        handleDelete={handleDelete}
        index={index}
        handleEdit={handleEdit}
      />
    </>
  );
}
export default ContactList;
