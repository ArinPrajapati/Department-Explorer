import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const UserForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<number>();
  const [email, setEmail] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify({ name, phone, email }));
    setSent(sent);

    navigate("/page1");
  };

  return (
    <form className="user_form" onSubmit={(e) => handleSubmit(e)}>
      <span>Enter User Detials</span>
      <input
        type="text"
        placeholder="Enter Name "
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Phone Number "
        value={phone}
        required
        onChange={(e) => setPhone(e.target.valueAsNumber)}
      />
      <input
        type="email"
        placeholder="Enter Email "
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="btn" type="submit" value="submit" />
    </form>
  );
};

export default UserForm;
