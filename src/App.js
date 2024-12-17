import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Error from "./pages/Error";
import "../src/stylesheet.css";
import "../src/font/stylesheet.css";
import Our_story from "./Our-story";
import Our_products from "./Our-products";
import ScrollToTop from "./ScrollToTop";
import { Infrastructure } from "./Infrastructure";
import Csr from "./Csr";
import Career from "./Career";
import Contact from "./Contact";
import Dealers from "./Dealers";
import FeedbackForm from "./FeedbackForm";
import Suppliers from "./Suppliers";
import Vendor from "./Vendor";
import { Tendor } from "./Tendor";
import { ProductDetails } from "./pages/ProductDetails";
import { Helmet } from "react-helmet";
import { Content } from "./Content";
import { Privacy } from "./Privacy";
import ThnakYou from "./ThnakYou";
import { Terms } from "./Terms";
import { Sitemap } from "./Sitemap";
import Home2 from "./Home2";
import Accordians from "./pages/Accordians";
// import Icecream from "./icecream/Home";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Helmet>
          <title>Redcow</title>
          <meta name="description" content="Redcow Dairy" />
          <meta name="Keyword" content="Redcow Dairy" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/our-story" component={Our_story}></Route>
          <Route path="/our-infrastructure" component={Infrastructure}></Route>
          <Route path="/our-csr" component={Csr}></Route>
          <Route path="/career" component={Career}></Route>
          <Route path="/contact-us" component={Contact}></Route>
          <Route path="/dealers-enquiry" component={Dealers}></Route>
          <Route path="/customer-feedback" component={FeedbackForm}></Route>
          <Route path="/suppliers-enquiry" component={Suppliers}></Route>
          <Route path="/vendor-registration" component={Vendor}></Route>
          <Route path="/tender-management" component={Tendor}></Route>
          <Route
            exact
            path="/our-products/:slug"
            component={ProductDetails}
          ></Route>
          <Route exact path="/our-products" component={Our_products}></Route>
          <Route path="/cookies-policy" component={Content}></Route>
          <Route path="/privacy-policy" component={Privacy}></Route>
          <Route path="/terms-of-use" component={Terms}></Route>
          <Route path="/sitemap" component={Sitemap}></Route>
          <Route path="/home" component={Home2}></Route>
          <Route path="/enquiry-submitted" component={ThnakYou}></Route>
          <Route path="/accordians" component={Accordians}></Route>
          {/* <Route path="/icecream" component={Icecream}></Route> */}
          <Route component={Error}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
