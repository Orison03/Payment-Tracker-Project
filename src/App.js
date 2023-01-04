import React, { useEffect } from "react";
import { useState } from "react";
import Items from "./Items";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list")
  if(list){
    return JSON.parse(localStorage.getItem("list"))
  }
  else{
    return []
  }
}
function App() {
  const [payment, setPayment] = useState({
    date: "",
    amount: "",
    payTo: "",
    paymentName: "",
    narration: "",
  });
  // const [date, setDate] = useState("");
  // const [amount, setAmount] = useState("");
  // const [payTo, setPayTo] = useState("");
  // const [paymentName, setPaymentName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "" });

  const showAlert = (show = false, msg = "") => {
    setAlert({ show, msg });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !payment.paymentName &&
      !payment.amount &&
      !payment.date &&
      !payment.payTo &&
      !payment.narration
    ) {
      //  display alert
      showAlert(true, "please fill the form");
    } else if (
      payment.paymentName &&
      payment.amount &&
      payment.date &&
      payment.payTo &&
      payment.narration &&
      isEditing
    ) {
      setList(
        list.map((track) => {
          if (track.id === editID) {
            return {
              ...track, 
              date: payment.date,
              paymentName: payment.paymentName,
              payTo: payment.payTo,
              amount: payment.amount,
              narration: payment.narration,
            };
          }
          return track
        })
      ) 
       setPayment({
         date: " ",
         amount: " ",
         payTo: " ",
         paymentName: " ",
         narration: " "
       })
       setEditID(null)
       setIsEditing(false);
       showAlert(true,"payment track edited");
    } else {
      showAlert(true, "payment track added");
      const newItem = {
        id: new Date().getTime().toString(),
        date: payment.date,
        paymentName: payment.paymentName,
        payTo: payment.payTo,
        amount: payment.amount,
        narration: payment.narration,
      };
      setList([...list, newItem]);
      setPayment({
        date: "",
        amount: "",
        payTo: "",
        paymentName: "",
        narration: "",
      });
    }
  };

  const clearList = () => {
    showAlert(true, "payment tracks deleted");
    setList([]);
  };

  const removeTrack = (id) => {
    showAlert(true, "payment track deleted");
    const newItem = list.filter((track) => track.id !== id);
    setList(newItem);
  };

  const editTrack = (id) => {
    const specificTrack = list.find((track) => track.id === id);
    setIsEditing(true);
    setEditID(id);
    setPayment({
      date: specificTrack.date,
      amount: specificTrack.amount,
      payTo: specificTrack.payTo,
      paymentName: specificTrack.paymentName,
      narration: specificTrack.narration,
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPayment({...payment, [name]: value });
  };

 useEffect(()=>{
  localStorage.setItem("list",JSON.stringify(list))
 },[list])

  return (
    <>
      <section className="section-center">
        <form onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} tracks={list} />
          )}
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
              max="16"
            />
            <label htmlFor="payTo">Pay To</label>
            <input
              type="text"
              placeholder="enter the receiver name"
              id="payTo"
              name="payTo"
              value={payment.payTo}
              onChange={handleChange}
            />
            <label htmlFor="amount">Amount ($)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="enter your amount"
              value={payment.amount}
              onChange={handleChange}
            />
            <label htmlFor="narration">Narration</label>
            <textarea
              id="narration"
              name="narration"
              value={payment.narration}
              onChange={handleChange}
              rows="6"
            />
            <button className="btn">{isEditing ? "Edit" : "Submit"}</button>
          </div>
        </form>
      </section>
      {list.length > 0 && (
        <div className="grocery-container">
          <Items items={list} removeTrack={removeTrack} editTrack={editTrack} />
          <section className="clearBtn-container">
            <button className="clear-btn" type="button" onClick={clearList}>
              clear tracks
            </button>
          </section>
        </div>
      )}
    </>
  );
}

export default App;
