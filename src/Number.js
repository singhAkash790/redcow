import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import count1 from './images/icon01.webp'
import count2 from './images/icon02.webp'
import count3 from './images/icon03.webp'
import count4 from './images/icon04.webp'
import count5 from './images/icon05.webp'
import count6 from './images/icon06.webp'

export const Number = (props) => {
    return (
            <>
               <section>
                <div className="bengal">
                    <div className="container">
                        <div className="row">
                            <div className="heading">
                                <h2 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">{props.numbers.about.number_heading}</h2>
                            </div>
                            
                            <div className="count" data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                            <div className="App">
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }) => (
            <div className="countnum">
             {isVisible ? <CountUp start={0} end={props.numbers.about.district_num} duration={3} /> : <CountUp start={props.numbers.about.district_num} end={props.numbers.about.district_num} duration={0} />}               
        <p>Districts</p>   
            </div>
          )}
        </VisibilitySensor>
        <img src={count1} alt="Redcow in numbers" width='278px' height='258px'/>
      </div>
      <div className="App">
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }) => (
            <div className="countnum">
             {isVisible ? <CountUp start={0} end={props.numbers.about.farmer_num} duration={2} /> : <CountUp start={props.numbers.about.farmer_num} end={props.numbers.about.farmer_num} duration={0} />} +                
          <p>Lakh Dairy <br/>Farmers </p> 
            </div>
          )}
        </VisibilitySensor>
        <img src={count2} alt="Redcow in numbers" width='278px' height='258px'/>
      </div>
      
      <div className="App">
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }) => (
            <div className="countnum">
             {isVisible ? <CountUp start={0} end={props.numbers.about.production_num} duration={3} /> : <CountUp start={props.numbers.about.production_num} end={props.numbers.about.production_num} duration={0}/>} +     
             <p>Lakh Litre/<br/>Day Production</p>
            </div>
          )}
        </VisibilitySensor>
        <img src={count3} alt="Redcow in numbers" width='278px' height='258px'/>
      </div>
      
      <div className="App">
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }) => (
            <div className="countnum">
             {isVisible ? <CountUp start={0} end={props.numbers.about.unit_num} duration={3} /> : <CountUp start={props.numbers.about.unit_num} end={props.numbers.about.unit_num} duration={0} />} 
             <p>Processing <br/>Units </p>   
            </div>
          )}
        </VisibilitySensor>
        <img src={count4} alt="Redcow in numbers" width='278px' height='258px'/>
      </div>
      <div className="App">
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }) => (
            <div className="countnum">
             {isVisible ? <CountUp start={0} end={props.numbers.about.plants_num} duration={3} /> : <CountUp start={props.numbers.about.plants_num} end={props.numbers.about.plants_num} duration={0} />} +
             <p>Milk Chilling <br/>Plants</p>   
            </div>
          )}
        </VisibilitySensor>
        <img src={count5} alt="Redcow in numbers" width='278px' height='258px'/>
       
      </div>
      
      <div className="App">
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }) => (
            <div className="countnum">
             {isVisible ? <CountUp start={0} end={props.numbers.about.distributor_num} duration={2} /> : <CountUp start={props.numbers.about.distributor_num} end={props.numbers.about.distributor_num} duration={0} />} +                  
        <p>Distributors</p>
            </div>
          )}
        </VisibilitySensor>
        <img src={count6} alt="Redcow in numbers" width='278px' height='258px'/>
      </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
};

export default Number;