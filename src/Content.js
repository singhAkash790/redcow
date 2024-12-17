import React, { useEffect } from 'react';
import Footer from './Footer'
import Navbar from './navbar'
import Aos from 'aos';
import "aos/dist/aos.css";

export const Content = () => {
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
                            <h1>Cookies Policy</h1>
                        </div>
                        <div className='contents'>
                            <h3>What Are Cookies?</h3>
                            <p>Cookies are small pieces of data (memory files) stored on your computer or device via your browser by sites you visit. As is common practice with almost all websites, this site uses cookies to improve your experience by remembering your preferences and enable other cookie-based features (e.g. analytics), either for a single visit (through a "session cookie") or for multiple repeat visits (using a "persistent cookie").</p>
                            <h3>Our Cookies</h3>
                            <p>We use cookies for a number of different purposes.</p>
                            <p>If you submit data through a form such as those found on contact pages, comment forms, or blog subscription, cookies may be set to remember your user details for future correspondence.</p>
                            <p>If you submit information through a live chat widget, cookies may be set to remember your user detail so you can continue a conversation the next time you return to the site.</p>
                            <p>If you purchase items via ecommerce, cookies may be set to allow you to add products to your basket, display the correct page for the device you are using, verify your details when you make an order, and allow us to process payment for an order.</p>
                            <h3>Third-Party Cookies</h3>
                            <p>In special cases, we also use cookies provided by trusted third parties like Google Analytics. Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content.</p>
                            <h3>Managing Cookies</h3>
                            <p>When you first access the site, you may receive a message advising you that cookies and similar technologies are in use. By clicking "accept all", you signify that you understand and agree to the use of these technologies, as described in this Cookie Policy. By clicking "settings", you can choose to accept or reject specific cookies.</p>
                            <p>You may withdraw consent at any time. Most browsers allow you to refuse to accept cookies. You can also remove cookies from your browser settings. Be aware that disabling cookies may affect the functionality of this and many other websites you visit. Therefore, it is recommended that you do not disable cookies.</p>
                            <p>Please see the following links for information on how to manage, block, or delete cookies for the most popular browsers:</p>
                            <ul>
                                <li>Microsoft Internet Explorer:<a href='https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies' target='_blank' rel="noreferrer">https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
                                <li>Google Chrome:<a href='https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en' target='_blank' rel="noreferrer">https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en</a></li>
                                <li>Mozilla Firefox:<a href='https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences' target='_blank' rel="noreferrer">https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences</a></li>
                                <li>Apple Safari:<a href='https://support.apple.com/en-gb/guide/safari/sfri11471/mac' target='_blank' rel="noreferrer">https://support.apple.com/en-gb/guide/safari/sfri11471/mac</a></li>                                    
                            </ul>
                            <h4>To find out more on how to manage and delete cookies, visit aboutcookies.org. For more details on your choices regarding use of your web browsing activity for interest-based advertising you may visit the following sites:</h4>
                            <ul>
                                <li><a href='http://networkadvertising.org/' target='_blank' rel="noreferrer">www.networkadvertising.org</a></li>
                                <li><a href='https://optout.aboutads.info/?c=2&lang=EN/' target='_blank' rel="noreferrer">www.optout.aboutads.info</a></li>
                                <li><a href='http://youradchoices.com/' target='_blank' rel="noreferrer">www.youradchoices.com</a></li>
                                <li><a href='https://youronlinechoices.eu/' target='_blank' rel="noreferrer">www.youronlinechoices.eu</a></li>
                            </ul>
                            <h3>General</h3>
                            <p>We may edit this policy from time to time. Please check this policy regularly for any changes. Our site is hosted on Strikingly Inc. They provide us with the website design templates that allows us to create free website.</p>
                            <p>Cookies are one way we comply with GDPR guidelines. To learn more about Strikingly, the following links may be helpful: Youtube Facebook Twitter SXL</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}
