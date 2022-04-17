import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";

function AddContact() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const getLocalData = () => {
    let localData = localStorage.getItem("contact");
    if (localData) {
      return JSON.parse(localStorage.getItem("contact"));
    } else {
      return [];
    }
  };

  const [contact, setContact] = useState(getLocalData());

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!data.name || !data.email) {
      alert("fill the blanks");
    } else if (data.name.length < 6) {
      alert("Name should 6 characters long");
    } else if (!regex.test(data.email)) {
      alert("Invalid Email");
    } else {
      const newData = { ...data, id: new Date().getTime().toString() };
      setContact([...contact, newData]);
      setData({ name: "", email: "" });
    }
  };

  const handleDelete = (id) => {
    const filteredItems = contact.filter((val, index) => {
      return index !== id;
    });
    setContact(filteredItems);
  };
  const handleEdit = (id) => {
    console.log(contact);
    const newEditItem = contact.find((ele) => {
      return ele.id === id;
    });
    console.log(newEditItem);
  };
  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contact));
  }, [contact]);

  const [searchTerm, setSearchTerm] = useState("");

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(
      contact.filter(
        (Elem) =>
          Elem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          Elem.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, contact]);

  return (
    <>
      <div className="add-contact">
        <div className="add-contact-title">
          <h2>Add Contact</h2>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="name">
            <label>Name : </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Name..."
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <label>Email : </label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="Email..."
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <button>Add</button>
        </form>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredData.length === 0 ? (
        <div className="no-contacts">No Contacts Available</div>
      ) : (
        filteredData.map((value, index) => {
          return (
            <ContactList
              handleDelete={handleDelete}
              key={index}
              id={index}
              data={value}
              contact={contact}
              setContact={contact}
              handleEdit={handleEdit}
            />
          );
        })
      )}
    </>
  );
}

export default AddContact;
