import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Footer from "./Footer";
import IceCream from "./Svg/IceCream";
import Navbar from "./navbar";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { useAlerterContext } from "./Context/AlerterContext";
import { useHistory } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Aos from "aos";

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

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
                            <option value="" disabled selected>
                              Choose Parlour
                            </option>
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
                              // customIcons={IceCream}
                              fillIcon={colorIceCream}
                              emptyIcon={outlineIcecream}
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

const outlineIcecream = [
  <svg
    width={50}
    height={50}
    x={0}
    y={0}
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    className=""
  >
    <g>
      <path
        d="M128 192v16a8 8 0 0 0 16 0v-16h16v16a24 24 0 0 1-48 0v-16ZM496 53.3a37.362 37.362 0 0 1-8.778 24.042L411.4 167.378a128.018 128.018 0 0 1 25.553 108.393A24.01 24.01 0 0 1 424 320h-1.017l-23.056 169.081A8 8 0 0 1 392 496H120a8 8 0 0 1-7.927-6.919L89.017 320H88a24 24 0 1 1 0-48h98.268A128.589 128.589 0 0 1 184 248a126.884 126.884 0 0 1 12.473-55.182 129.174 129.174 0 0 1 64.992-62.436A112.015 112.015 0 0 0 200 112a110.821 110.821 0 0 0-49.227 11.372 6.098 6.098 0 0 1-.231.109 112.193 112.193 0 0 0-58.517 130.39L76.6 258.129a128.052 128.052 0 0 1 63.8-147.424A127.988 127.988 0 0 1 383.767 98.87l40.839-65.34A37.118 37.118 0 0 1 456.24 16h2.46A37.341 37.341 0 0 1 496 53.3ZM200 96a127.972 127.972 0 0 1 79.957 28.055 128.407 128.407 0 0 1 83.79 6.846l8.876-14.2A111.994 111.994 0 0 0 264 32a110.772 110.772 0 0 0-69.937 24.518 112.811 112.811 0 0 0-34.024 45.839A127.17 127.17 0 0 1 200 96ZM88 304h192v-16H88a8 8 0 0 0 0 16Zm318.835 16H392a24 24 0 0 1-48 0v-24a8 8 0 0 0-16 0v8a23.986 23.986 0 0 1-41.869 16H105.165l21.818 160h258.034ZM432 296a7.985 7.985 0 0 0-8-8h-32v16h32a7.981 7.981 0 0 0 8-8Zm-8-48a112.2 112.2 0 0 0-60.882-99.682l-.019-.01A110.744 110.744 0 0 0 312 136a112.007 112.007 0 0 0-31.669 4.544 96.258 96.258 0 0 0-5.909 1.916 112.93 112.93 0 0 0-63.515 57.262A111 111 0 0 0 200 248a112.355 112.355 0 0 0 2.595 24H288a8 8 0 0 1 8 8v24a8.009 8.009 0 0 0 8.548 7.982 8.19 8.19 0 0 0 7.452-8.265V296a24.028 24.028 0 0 1 23.588-24c13.425-.224 24.412 11.119 24.412 24.546V320a8.009 8.009 0 0 0 8.548 7.982 8.19 8.19 0 0 0 7.452-8.265V280a8 8 0 0 1 8-8h37.408A112.419 112.419 0 0 0 424 248Zm56-194.7A21.324 21.324 0 0 0 458.7 32h-2.46a21.208 21.208 0 0 0-18.07 10.016l-60.195 96.308a125.974 125.974 0 0 1 22.5 17.189l74.513-88.486A21.365 21.365 0 0 0 480 53.3ZM140.586 342.919l-15.853 2.162 2.33 17.092 15.854-2.162Zm-11.1 37.015 10.52 77.147 15.853-2.162-10.52-77.147ZM368 200a8 8 0 0 1-16 0v-16h-16v16a24 24 0 0 0 48 0v-16h-16ZM248 64h16V48h-16Zm64 16h-16v16h16Zm-120 64h-16v16h16Zm56 72h16v-16h-16Zm40-32h16v-16h-16Zm24 200a8 8 0 0 1-16 0v-16h-16v16a24 24 0 0 0 48 0v-16h-16Z"
        fill="#000000"
        opacity={1}
        data-original="#000000"
        className=""
      />
    </g>
  </svg>,
];

const colorIceCream = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={50}
    height={50}
    x={0}
    y={0}
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512",
    }}
    xmlSpace="preserve"
    className=""
  >
    <g>
      <g data-name="Filled outline">
        <path
          d="M384 144a119.956 119.956 0 1 1-57.47-102.44A120.005 120.005 0 0 1 384 144Z"
          style={{}}
          fill="#ffb531"
          data-original="#ffb531"
        />
        <path
          d="M384 144a120.013 120.013 0 0 1-235.17 33.78 126.185 126.185 0 0 0 52.41 11.32A126.975 126.975 0 0 0 328.21 62.13a125.68 125.68 0 0 0-1.68-20.57A119.923 119.923 0 0 1 384 144Z"
          style={{}}
          fill="#ffa912"
          data-original="#ffa912"
        />
        <path
          d="M320 224a119.956 119.956 0 1 1-57.47-102.44A120.005 120.005 0 0 1 320 224Z"
          style={{}}
          fill="#f59898"
          data-original="#f59898"
          className=""
        />
        <path
          d="M320 224a120.013 120.013 0 0 1-235.17 33.78 126.973 126.973 0 0 0 179.38-115.65 125.68 125.68 0 0 0-1.68-20.57A119.923 119.923 0 0 1 320 224Z"
          style={{}}
          fill="#ed9191"
          data-original="#ed9191"
          className=""
        />
        <path
          d="M320 216 431.392 37.773A29.3 29.3 0 0 1 456.242 24h2.458A29.3 29.3 0 0 1 488 53.305a29.307 29.307 0 0 1-6.889 18.876L360 216Z"
          style={{}}
          fill="#f2dec2"
          data-original="#f2dec2"
        />
        <path
          d="M432 248a119.94 119.94 0 1 1-64.16-106.24A120.005 120.005 0 0 1 432 248Z"
          style={{}}
          fill="#7a432a"
          data-original="#7a432a"
        />
        <path
          d="M432 248a120.008 120.008 0 0 1-237.76 23.15 153.205 153.205 0 0 0 173.6-129.39A119.98 119.98 0 0 1 432 248Z"
          style={{}}
          fill="#6e3c26"
          data-original="#6e3c26"
        />
        <path
          d="m416 312-3.27 24L392 488H120L99.27 336 96 312h320z"
          style={{}}
          fill="#f2dec2"
          data-original="#f2dec2"
        />
        <path
          d="m416 312-3.27 24H99.27L96 312h320z"
          style={{}}
          fill="#ead7bc"
          data-original="#ead7bc"
        />
        <rect
          width={368}
          height={32}
          x={72}
          y={280}
          rx={16}
          ry={16}
          style={{}}
          fill="#f2dec2"
          data-original="#f2dec2"
        />
        <path
          d="M288 272v32a16 16 0 0 0 32 0v-8a16 16 0 0 1 32 0v24a16 16 0 0 0 32 0v-48Z"
          style={{}}
          fill="#6e3c26"
          data-original="#6e3c26"
        />
        <path
          d="M128 192v16a8 8 0 0 0 16 0v-16h16v16a24 24 0 0 1-48 0v-16ZM496 53.3a37.362 37.362 0 0 1-8.778 24.042L411.4 167.378a128.018 128.018 0 0 1 25.553 108.393A24.01 24.01 0 0 1 424 320h-1.017l-23.056 169.081A8 8 0 0 1 392 496H120a8 8 0 0 1-7.927-6.919L89.017 320H88a24 24 0 1 1 0-48h98.268A128.589 128.589 0 0 1 184 248a126.884 126.884 0 0 1 12.473-55.182 129.174 129.174 0 0 1 64.992-62.436A112.015 112.015 0 0 0 200 112a110.821 110.821 0 0 0-49.227 11.372 6.098 6.098 0 0 1-.231.109 112.193 112.193 0 0 0-58.517 130.39L76.6 258.129a128.052 128.052 0 0 1 63.8-147.424A127.988 127.988 0 0 1 383.767 98.87l40.839-65.34A37.118 37.118 0 0 1 456.24 16h2.46A37.341 37.341 0 0 1 496 53.3ZM200 96a127.972 127.972 0 0 1 79.957 28.055 128.407 128.407 0 0 1 83.79 6.846l8.876-14.2A111.994 111.994 0 0 0 264 32a110.772 110.772 0 0 0-69.937 24.518 112.811 112.811 0 0 0-34.024 45.839A127.17 127.17 0 0 1 200 96ZM88 304h192v-16H88a8 8 0 0 0 0 16Zm318.835 16H392a24 24 0 0 1-48 0v-24a8 8 0 0 0-16 0v8a23.986 23.986 0 0 1-41.869 16H105.165l21.818 160h258.034ZM432 296a7.985 7.985 0 0 0-8-8h-32v16h32a7.981 7.981 0 0 0 8-8Zm-8-48a112.2 112.2 0 0 0-60.882-99.682l-.019-.01A110.744 110.744 0 0 0 312 136a112.007 112.007 0 0 0-31.669 4.544 96.258 96.258 0 0 0-5.909 1.916 112.93 112.93 0 0 0-63.515 57.262A111 111 0 0 0 200 248a112.355 112.355 0 0 0 2.595 24H288a8 8 0 0 1 8 8v24a8.009 8.009 0 0 0 8.548 7.982 8.19 8.19 0 0 0 7.452-8.265V296a24.028 24.028 0 0 1 23.588-24c13.425-.224 24.412 11.119 24.412 24.546V320a8.009 8.009 0 0 0 8.548 7.982 8.19 8.19 0 0 0 7.452-8.265V280a8 8 0 0 1 8-8h37.408A112.419 112.419 0 0 0 424 248Zm56-194.7A21.324 21.324 0 0 0 458.7 32h-2.46a21.208 21.208 0 0 0-18.07 10.016l-60.195 96.308a125.974 125.974 0 0 1 22.5 17.189l74.513-88.486A21.365 21.365 0 0 0 480 53.3ZM140.586 342.919l-15.853 2.162 2.33 17.092 15.854-2.162Zm-11.1 37.015 10.52 77.147 15.853-2.162-10.52-77.147ZM368 200a8 8 0 0 1-16 0v-16h-16v16a24 24 0 0 0 48 0v-16h-16ZM248 64h16V48h-16Zm64 16h-16v16h16Zm-120 64h-16v16h16Zm56 72h16v-16h-16Zm40-32h16v-16h-16Zm24 200a8 8 0 0 1-16 0v-16h-16v16a24 24 0 0 0 48 0v-16h-16Z"
          fill="#000000"
          opacity={1}
          data-original="#000000"
          className=""
        />
      </g>
    </g>
  </svg>,
];
