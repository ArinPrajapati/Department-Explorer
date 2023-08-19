import React, { useState, useRef } from "react";
import "./style.css";

const UserForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<number>();
  const [email, setEmail] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify({ name, phone, email }));
    setSent(sent);
    
  };

  return (
    <form className="user_form" onSubmit={(e) => handleSubmit(e)}>
      <span>Enter User Detials</span>
      <input
        type="text"
        placeholder="Enter Name "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Phone Number "
        value={phone}
        onChange={(e) => setPhone(e.target.valueAsNumber)}
      />
      <input
        type="email"
        placeholder="Enter Email "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
