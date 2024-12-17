import React, { useEffect } from 'react';
import Footer from './Footer'
import Navbar from './navbar'
import Aos from 'aos';
import "aos/dist/aos.css";

export const Terms = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
     }, []);
  return (
    <>
    <Navbar/>
        <section id='content'>
            <div className='container'>
                <div className='row'>
                    <div className='web-container'>
                        <div className='heading'>
                            <h1>Terms of Use</h1>
                        </div>
                        <div className='contents'>
                       <h3>Link: ACCESSING, BROWSING OR OTHERWISE USING THE WEBSITE INDICATES YOUR ACCEPTANCE TO ALL THE TERMS AND CONDITIONS HEREIN. PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE PROCEEDING. IF YOU DO NOT AGREE WITH THE SAME, PLEASE DO NOT USE THIS WEBSITE. For the purpose of these Terms of Use, wherever the context so requires “You” or “User” shall mean any natural or legal person visits our platform, either just for the purpose of browsing the Website or engages to buy our products & services. This Website allows the User to surf the Website. The term “We”, “Us”, “Our” shall mean Company.</h3>
                       <p>Your use of the Website and services and tools are governed by the following terms and conditions (“Terms of Use”) as applicable to the Website including the applicable policies which are incorporated herein by way of reference. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transaction. By mere use of the Website, You shall be contracting with Company and these terms and conditions including the policies constitute your   binding obligations, with the Website. Any new features or tools which are added to the current store shall also be subject to the Terms of Use. We reserve the right to update, change or replace any part of these Terms of Use by posting updates and/or changes to Our Website. It is your responsibility to check this page periodically for changes.</p>
            <p> 
        	Eligibility to use By agreeing to these Terms of Use, you represent that you are persons who can form legally binding contracts under Indian Contract Act, 1872. Persons who are “incompetent to contract” within the meaning of the Indian Contract Act, 1872 including minors, un-discharged insolvents etc. are not eligible to use the Website. As a minor, if you wish to use or transact on Website, such use or transaction may be made by your legal guardian or parents on the Website. Company reserves the  right to refuse You access to the Website if it is brought to Company’s notice or if it is discovered that you are under the age of 18 years. By visiting Company Website or accepting these Terms of Use, You represent and warrant to Company that You are 18 years of age or older and that You have the right, authority and capacity to use the Website and agree to and abide by these Terms of Use. You also represent and warrant to the Company that You will use the Website in a manner consistent with any and all applicable laws and regulations.
            </p>     	
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}
