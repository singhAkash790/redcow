import React, { useState } from "react";
import { Accordion, AccordionItem } from "react-light-accordion";
export const Myaccordian = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Accordion atomic={true}>
        <AccordionItem title={props.question}>
          <div class="answer">
            <ul>
              {props.questionhelper ? (
                <li>
                  <span>Nutrients</span>
                  <span>{props.questionhelper}</span>
                </li>
              ) : null}
              {props.answer.map((ans, index) => {
                return props.id != 2 ? (
                  <li key={index}>
                    {ans[0]} <span className="acordionschild">{ans[1]}</span>
                  </li>
                ) : (
                  <li key={index}>
                    <span>{ans[0]}</span>
                    <span>{ans[1]}</span>
                    {ans[2] ? <span>{ans[2]}</span> : null}
                    {ans[3] ? <span>{ans[3]}</span> : null}
                    {ans[4] ? <span>{ans[4]}</span> : null}
                    {ans[5] ? <span>{ans[5]}</span> : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
};
