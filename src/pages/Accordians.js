import React from 'react'
import { Accordion, AccordionItem } from 'react-light-accordion';
export const Accordians = () => {
  return (
    <>
         <div>
    <Accordion atomic={true}>
 
      <AccordionItem title="NUTRITION">
      <div class="answer"><ul>
        <li>Energy  <span>897 kcal</span></li><li>Protein  <span>0g</span></li><li>Carbohydrate <span>0g</span></li><li>sugar <span>0g</span></li><li>Fat <span>99.7g</span></li><li>Vitamin A <span>700mcg</span></li></ul></div>
      </AccordionItem>
 
      <AccordionItem title="PACK QTY.">
      <div class="answer"><ul><li>Pack Quantity <span>5000ml, 1000ml, 500ml, 200ml, 100ml, 50ml</span></li></ul></div>
      {/* Gulab Jamun & Rasogulla */}
      <div class="answer">
        <ul className='threecol'>
            <li><span>Net Weight</span><span>1kg</span><span>500g</span></li>
            <li><span>Drained Weight</span><span>400g</span><span>200g</span></li>
            <li><span>No. of Pieces</span><span>20 Pcs.</span><span>10 Pcs.</span></li>
        </ul>
    </div>
      {/* Gulab Jamun & Rasogulla */}
      </AccordionItem>
 
      <AccordionItem title="INGREDIENTS">
      <div class="answer"><ul><li>Milk Fat <span></span></li></ul></div>
      </AccordionItem>
 
    </Accordion>
  </div>
    </>
  )
}

export default Accordians;
