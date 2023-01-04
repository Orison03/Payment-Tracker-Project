import React from "react";
import { BiDownvote } from "react-icons/bi";
function Items({ items, removeTrack,editTrack }) {
  return (
    <div>
      {items.map((item) => {
        const { id, date, paymentName, payTo, amount, narration } = item;
        return (
          <>
            <h2 className="item-heading">Payment Track {id}</h2>
            <article className="payment-Item" key={id}>
              <section className="payment-List">
                <div className="payment-Item">
                  <p className="item-title">Date</p>
                  <p>{date}</p>
                </div>
                <div className="payment-Item">
                  <p className="item-title">Payment Name</p>
                  <p>{paymentName}</p>
                </div>
                <div className="payment-Item">
                  <p className="item-title">Pay To</p>
                  <p>{payTo}</p>
                </div>
                <div className="payment-Item">
                  <p className="item-title">Amount</p>
                  <p>${amount}.00</p>
                </div>
                <p className="narration-title">Narration indicated below <BiDownvote className="below"/></p>
                <textarea rows="4" cols="4" className="narration-textarea" readOnly>
                  {narration}
                </textarea>
                <div className="btn-container">
                     <button className="edit-btn" onClick={() => editTrack(id)}>edit</button>
                     <button className="delete-btn" onClick={()=> removeTrack(id)}>delete</button>
                </div>
              </section>
            </article>
          </>
        );
      })}
    </div>
  );
}

export default Items;
