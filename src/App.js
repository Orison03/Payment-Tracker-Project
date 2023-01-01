import React from "react";
import { useState } from "react";
import Items from "./Items";
import Alert from "./Alert";

function App() {
  const [payment, setPayment] = useState({
    date: "",
    amount: "",
    payTo: "",
    paymentName: "",
  });
  // const [date, setDate] = useState("");
  // const [amount, setAmount] = useState("");
  // const [payTo, setPayTo] = useState("");
  // const [paymentName, setPaymentName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPayment({...payment,[name]:value})
  }
  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3 className="title">Payment Tracker</h3>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={payment.date}
            name="date"
            onChange={handleChange}
          />
          <label htmlFor="paymentName">Payment Name</label>
          <input
            type="text"
            placeholder="enter payment name"
            id="paymentName"
            value={payment.paymentName}
            name="paymentName"
            onChange={handleChange}
          />
          <label htmlFor="date">Pay To</label>
          <input
            type="text"
            placeholder="enter the receiver name"
            id="payTo"
            name="payTo"
            value={payment.payTo}
            onChange={handleChange}
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="enter your amount"
            value={payment.amount}
            onChange={handleChange}
          />
          <button className="btn">{isEditing ? "Edit" : "Submit"}</button>
        </div>
      </form>
      <div className="grocery-container">
        <Items />
        <button className="btn" type="submit">
          clear items
        </button>
      </div>
    </section>
  );
}

export default App;
