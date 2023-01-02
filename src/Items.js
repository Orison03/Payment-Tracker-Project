import React from "react";

function Items({ items }) {
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
                <p className="narration-title">Narration is indicated below</p>
                <textarea rows="6" cols="3" className="narration-textarea">
                  {narration}
                </textarea>
              </section>
            </article>
          </>
        );
      })}
    </div>
  );
}

export default Items;
