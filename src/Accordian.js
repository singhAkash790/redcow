import React, { useState } from "react";
import { questions } from "./API/accordianapi";
import { Myaccordian } from "./Myaccordian";

export const Accordian = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="accordians">
        <div className="container">
          <div className="product-container">
            <div className="accordian">
              {data.map((curElem) => {
                const { id } = curElem;
                return <Myaccordian key={id} {...curElem} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
