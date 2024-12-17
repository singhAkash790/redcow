import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./navbar";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { useAlerterContext } from "./Context/AlerterContext";
import { useHistory } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

// Form validation schema using Yup
const FeedbackSchema = Yup.object().shape({
  parlour: Yup.string().required("Parlour selection is required"),
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[6-9]\d{9}$/, "Invalid phone number"),
  feedback: Yup.string().max(500, "Feedback must be at most 500 characters"),
  rating: Yup.number()
    .required("Rating is required")
    .min(0.5, "Rating must be at least 0.5")
    .max(5, "Rating must be at most 5"),
});

const FeedbackForm = () => {
  const [parlours, setParlours] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);
  const { showAlert } = useAlerterContext();
  const history = useHistory();

  // Effect to show validation errors in alerter
  useEffect(() => {
    if (validationErrors.length > 0) {
      // Combine all validation error messages
      const errorMessage = validationErrors.join(". ");

      // Show the combined error message
      showAlert(errorMessage, "error");

      // Clear the errors after showing
      setValidationErrors([]);
    }
  }, [validationErrors, showAlert]);

  // Fetch parlours on component mount
  useEffect(() => {
    const fetchParlours = async () => {
      try {
        const response = await axios.get(
          "https://redcowdairy.in/api/fetch_locator_data.php"
        );
        const parloursList = Object.keys(response.data).flatMap((city) =>
          response.data[city].map((parlour, index) => ({
            id: `${city}-${index}`,
            name: parlour.tabData.storeName,
          }))
        );
        setParlours(parloursList);
      } catch (error) {
        showAlert("Failed to load parlours. Please try again later.", "error");
      }
    };

    fetchParlours();
  }, [showAlert]);

  // Form submission handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Validate all fields

      const response = await axios.post(
        "https://triverseadvertising.com/redcow/api/insert_feedback_form.php",
        values
      );
      const resData = response.data;
      console.log(response.data);

      if (resData.status == "success") {
        // showAlert("Feedback submitted successfully!", "success");

        // Push data to GTM data layer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "formSubmission",
          formName: "FeedbackForm",
          formValues: values,
        });

        history.push("/thank-you");
        resetForm();
      } else {
        showAlert("Failed to submit feedback. Please try again.", "error");
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        // Set validation errors state
        setValidationErrors(error.errors);
      } else {
        showAlert(
          "An error occurred during submission. Please try again.",
          "error"
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <Helmet>
        <title>{"Feedback"}</title>
        <meta
          name="description"
          content={"Share your experience and help us improve at Red Cow Dairy"}
        />
      </Helmet>
      <section id="forms">
        <div className="forms feedback_form ">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="heading">
                  <h1>Feedback Form</h1>
                </div>

                <Formik
                  initialValues={{
                    parlour: "",
                    name: "",
                    email: "",
                    phone: "",
                    feedback: "",
                    rating: 0,
                  }}
                  validationSchema={FeedbackSchema}
                  onSubmit={handleSubmit}
                  validateOnChange={false}
                  validateOnBlur={false}
                >
                  {({
                    errors,
                    touched,
                    isSubmitting,
                    values,
                    setFieldValue,
                  }) => (
                    <Form>
                      <ul>
                        {/* Parlour Dropdown */}
                        <li className="w-100">
                          <label className="block mb-2">
                            Choose Your Ice Cream Parlour *
                          </label>
                          <Field
                            as="select"
                            name="parlour"
                            className={`form-Feilds ${
                              errors.parlour && touched.parlour ? "error" : ""
                            }`}
                          >
                            <option value="">Choose Parlour</option>
                            {parlours && parlours.length > 0 ? (
                              parlours.map((parlour) => (
                                <option key={parlour.id} value={parlour.name}>
                                  {parlour.name}
                                </option>
                              ))
                            ) : (
                              <option disabled>Loading parlours...</option>
                            )}
                          </Field>
                        </li>

                        {/* Name */}
                        <li className="w_50">
                          <label className="block mb-2">Your Good Name *</label>
                          <Field
                            type="text"
                            name="name"
                            placeholder="e.g., Aarav Sharma"
                            className={`form-Feilds ${
                              errors.name && touched.name ? "error" : ""
                            }`}
                          />
                        </li>

                        {/* Email */}
                        <li className="w_50">
                          <label className="block mb-2">
                            Your Email Address *
                          </label>
                          <Field
                            type="email"
                            name="email"
                            placeholder="e.g., aarav.sharma@example.com"
                            className={`form-Feilds ${
                              errors.email && touched.email ? "error" : ""
                            }`}
                          />
                        </li>

                        {/* Phone */}
                        <li className="w_50">
                          <label className="block mb-2">
                            Your Contact Number
                          </label>
                          <Field
                            type="tel"
                            name="phone"
                            placeholder="e.g., 98765 43210"
                            className={`form-Feilds ${
                              errors.phone && touched.phone ? "error" : ""
                            }`}
                          />
                        </li>

                        {/* Rating */}
                        <li className="w_50">
                          <label className="block mb-2">
                            Rate Your Experience *
                          </label>
                          <div className="flex items-center">
                            <Rating
                              size={50}
                              transition
                              allowFraction
                              showTooltip
                              fillColor={"#ffdd66"}
                              onClick={(rate) => setFieldValue("rating", rate)}
                              initialValue={values.rating}
                            />
                          </div>
                        </li>

                        {/* Feedback */}
                        <li className="w-100">
                          <label className="block mb-2">
                            Share Your Sweet Thoughts
                          </label>
                          <Field
                            as="textarea"
                            name="feedback"
                            placeholder="Let us know about your favorite flavors or how we can improve your experience!"
                            maxLength="500"
                            className={`w-100 form-Feilds ${
                              errors.feedback && touched.feedback ? "error" : ""
                            }`}
                          />
                        </li>

                        {/* Submit Button */}
                        <li>
                          <input
                            type="submit"
                            value={isSubmitting ? "Submitting..." : "Submit"}
                            disabled={isSubmitting}
                          />
                        </li>
                      </ul>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FeedbackForm;
