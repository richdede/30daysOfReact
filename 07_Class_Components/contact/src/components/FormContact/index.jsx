/* eslint-disable react/prop-types */
import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const FormContact = ({ visible, onCloseClick, selectedContact, onSendForm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("Add contact");
  const nameRef = useRef(null);

  useEffect(() => {
    setName("");
    setPhone("");
    setTitle("Add contact");

    if (selectedContact) {
      setName(selectedContact.name);
      setPhone(selectedContact.phone);
      setTitle("Edit contact");
    }
  }, [selectedContact]);

  useEffect(() => {
    if (visible) {
      nameRef.current.focus();
    }
  }, [visible]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedContact) {
      onSendForm({ id: selectedContact.id, name, phone });
    } else {
      onSendForm({ id: Date.now(), name, phone });
    }

    handleCloseForm();
  };

  const handleCloseForm = () => {
    onCloseClick();

    setTimeout(() => {
      setName("");
      setPhone("");
      setTitle("Add contact");
    }, 300);
  };

  const handlePhone = (event) => {
    let value = event.target.value;

    if (!value) {
      value = "";
    }

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");

    setPhone(value);
  };

  return (
    <div className={visible ? "form-contact visible" : "form-contact"}>
      <div className="content">
        <div className="content-header">
          <h2>{title}</h2>
          <button onClick={() => handleCloseForm()}>
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" required ref={nameRef} />
          <input type="tel" value={phone} onChange={handlePhone} placeholder="Telephone" required maxLength={15} />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
