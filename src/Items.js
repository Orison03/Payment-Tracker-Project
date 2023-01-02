import React from "react";

function Items({ items }) {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, date, paymentName, payTo, amount, narration } = item;
        return (
          <article className="grocery-Item" key={id}>
            <section className="grocery-List">
              <div className="grocery-Item">
                <p className="item-title">Date</p>
                <p>{date}</p>
              </div>
              <div className="grocery-Item">
                <p>Payment Name</p>
                <p>{paymentName}</p>
              </div>
              <div className="grocery-Item">
                <p>Pay To</p>
                <p>{payTo}</p>
              </div>
              <div className="grocery-Item">
                <p>Amount</p>
                <p>${amount}.00</p>
              </div>
              <p className="narration-Item">Your narration is indicated below</p>
              <textarea rows="4" cols="3">{narration}</textarea>
            </section>
          </article>
        );
      })}
    </div>
  );
}

export default Items;
