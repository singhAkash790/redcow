import React, { useEffect } from 'react';
import Footer from './Footer';
import Navbar from './navbar';
import dealersimg from './images/form-banner.webp'
import Aos from 'aos';
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';
export const Tendor = () => {
      useEffect(() => {
        let mounted = true;
        Aos.init({ duration: 2000 });

        return () => {
          mounted = false;
        }
     }, []);
  return <>
            <Navbar/>
            <Helmet>
            <title>Red Cow Dairy: Tender Management</title>
      <meta name="description" content="Red Cow Dairy Tender Management | Welcom to Red Cow dairy's Tender Management System
High quality value added dairy products all over India"/>
            </Helmet>
            <section className="m-0">
        <div className="story-banner">
          <img src={dealersimg} alt="" />
          <div className="slidercont">
            <h3 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">Red Cow Dairy <em>Initiative</em></h3>
       </div>    
        </div>
      </section>
      <section id='tendor'>
          <div className='tendor'>
              <div className='container'>
                      <div className='web-container'>
                      <div className='heading'>
                          <h1>Tender Management</h1>
                      </div>
                      <div className="main">
      {/* <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          //pagination
        />
      </DataTableExtensions> */}
      <div className='tableresponsive'>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">S.No </th>
      <th scope="col">Tendor Title</th>
      <th scope="col">Reference Number</th>
      <th scope="col">Opening Date</th>
      <th scope="col">Closing Date</th>
      <th scope="col">Download</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">1</td>
      <td>Tender for Supply of Shirting and Suiting</td>
      <td>PUR/21-22/069</td>
      <td>05/01/2022</td>
      <td>27/01/2022</td>
      <td><a href="./images/dummy.pdf" target="_blank">Download PDF</a></td>
      
    </tr>
    <tr>
    <td scope="row">2</td>
      <td>Enquiry for Thermostat</td>
      <td>PUR/ENQ/0217</td>
      <td>05/01/2022</td>
      <td>27/01/2022</td>
      <td><a href="./images/dummy.pdf" target="_blank">Download PDF</a></td>
    </tr>
    <tr>
      <td scope="row">3</td>
      <td>Enquiry for Pipette</td>
      <td>PUR/21-22/069</td>
      <td>05/01/2022</td>
      <td>27/01/2022</td>
      <td><a href="./images/dummy.pdf" target="_blank">Download PDF</a></td>
    </tr>
    <tr>
      <td scope="row">4</td>
      <td>Enquiry for SKF Bearing</td>
      <td>PUR/ENQ/0225</td>
      <td>05/01/2022</td>
      <td>27/01/2022</td>
      <td><a href="./images/dummy.pdf" target="_blank">Download PDF</a></td>
    </tr>
  </tbody>
</table>
</div>
    </div>
    </div>
                  </div>
          </div>
      </section>
            <Footer/>
        </>;
};
