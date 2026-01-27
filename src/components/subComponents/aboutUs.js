import React, { useEffect, useRef, useState } from "react";
import Header from "../sharedComponents/Header";
import Footer from "../sharedComponents/footer";
import { Helmet } from "react-helmet-async";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Link, useNavigate } from 'react-router-dom';
import Select from "react-select";
import ReCAPTCHA from 'react-google-recaptcha'; // Import reCAPTCHA
import OfficeLocation from "../About/OfficeLocation";
import { motion } from "framer-motion";
import ClientCard from "../sharedComponents/ClientCard";
import AOS from 'aos';
import HeroSectionUI from "../sharedComponents/HeroSectionUI";
import websiteCTAImage2 from "../../assets/images/website-cta-1.jpg";
import CTASection from "../sharedComponents/CTASection";
import 'aos/dist/aos.css';

const AboutUs = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('experts'); // Add state for active tab
  useEffect(() => {
    AOS.init({
      duration: 500, easing: "ease",
      once: true,
    });
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    location: '',
    contact_number: '',
    message: '',
    recaptcha_token: ''

  });
  const [loading, setLoading] = useState(false)
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [careerFormData, setCareerFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    reference_name: '',
    gender: '',
    resume: null,
    declaration: false
  });

  const [careerFormErrors, setCareerFormErrors] = useState({});

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, contact_number: value }));
    // Only validate if value is not empty
    if (value) {
      validateField('contact_number', value);
    } else {
      setErrors((prev) => ({ ...prev, contact_number: 'Contact Number is required.' }));
    }
  };
  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null); // Store reCAPTCHA value

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "text conties")
        setCountries(data.countries.map((c) => ({ label: c.label, value: c.value })));
        setSelectedCountry(data.userSelectValue);
        setFormData((prev) => ({ ...prev, location: data.userSelectValue?.label }))

      });
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        const response = await fetch(
          `https://geocode.xyz/${latitude},${longitude}?geoit=json`
        );
        const locationData = await response.json();
        const userCountry = countries.find(
          (country) =>
            country.label.toLowerCase() === locationData.country.toLowerCase()
        );

        if (userCountry) {
          setSelectedCountry(userCountry);
          setFormData((prev) => ({ ...prev, location: userCountry?.label }))

        }
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [countries]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setFormData((prev) => ({ ...prev, recaptcha_token: value }));

  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    // Validate all fields except "company"
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (field !== 'company' && !formData[field]) {
        hasError = true;
      }
    });

    // Check for validation errors or other error messages
    if (hasError || Object.values(errors).some((error) => error !== '')) {
      return;
    }
    console.log("captcha value ", captchaValue)
    if (!captchaValue) {
      alert('Please verify you are human!');
      return;
    }

    // Prepare form data
    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });
    console.log(formDataObj, "formDataObj")
    setLoading(true);

    // Submit form data
    fetch('https://be.webkorps.com:4202/v1/contact_us', {
      method: 'POST',
      body: formDataObj,
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          navigate('/thankyou');
          // Reset form data
          setFormData({
            name: '',
            email: '',
            company: '',
            location: '',
            contact_number: '',
            message: '',
            recaptcha_token: ''
          });
        } else {
          alert('Failed to submit form. Please try again later.');
        }
      })
      .catch((err) => {
        console.error('Error submitting form:', err);
        setLoading(false);
      });
  };

  // Add handler for career form
  const handleCareerChange = (e) => {
    const { name, value } = e.target;
    setCareerFormData({ ...careerFormData, [name]: value });
  };

  const validateCareerForm = () => {
    const errors = {};
    const { full_name, email, phone_number, gender, resume, declaration } = careerFormData;

    if (!full_name.trim()) {
      errors.full_name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!phone_number) {
      errors.phone_number = 'Phone number is required';
    } else if (phone_number.length < 10) {
      errors.phone_number = 'Phone number must be at least 10 digits';
    }

    if (!gender) {
      errors.gender = 'Please select your gender';
    }

    if (!resume) {
      errors.resume = 'Please upload your CV';
    }

    if (!declaration) {
      errors.declaration = 'Please accept the terms and conditions';
    }

    setCareerFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCareerSubmit = async (e) => {
    e.preventDefault();
    if (!validateCareerForm()) return;

    const formDataObj = new FormData();
    Object.keys(careerFormData).forEach((key) => {
      if (careerFormData[key] !== null) {
        formDataObj.append(key, careerFormData[key]);
      }
    });

    setLoading(true);
    try {
      const url = "https://be.webkorps.com:4202/v1/job_applies/send_notifications";
      const response = await fetch(url, {
        method: "POST",
        body: formDataObj,
      });

      if (response.ok) {
        setLoading(false);
        console.log("Form submitted successfully!");
        setCareerFormData({
          full_name: '',
          email: '',
          phone_number: '',
          reference_name: '',
          gender: '',
          resume: null,
          declaration: false
        });
        setShowThankYouPopup(true);
      } else {
        setLoading(false);
        alert("Form submission failed! " + response.statusText);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      alert("An error occurred while submitting the form");
    }
  };

  useEffect(() => {
    if (showThankYouPopup) {
      const timer = setTimeout(() => {
        setShowThankYouPopup(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showThankYouPopup]);

  const validateField = (name, value) => {
    let errorMessage = '';
    const trimmedValue = value.trim();

    switch (name) {
      case 'name':
        if (!trimmedValue) {
          errorMessage = 'Name is required.';
        } else if (!/^[A-Za-z\s]+$/.test(trimmedValue)) {
          errorMessage = 'Name can only contain letters and spaces.';
        }
        break;
      case 'email':
        if (!trimmedValue) {
          errorMessage = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(trimmedValue)) {
          errorMessage = 'Email is invalid.';
        }
        break;
      case 'location':
        if (!trimmedValue) {
          errorMessage = 'Location is required.';
        }
        break;
      case 'contact_number':
        if (!trimmedValue) {
          errorMessage = 'Contact Number is required.';
        } else if (!trimmedValue.startsWith('+') || trimmedValue.length < 8) {
          errorMessage = 'Please enter a valid international phone number.';
        }
        break;
      case 'message':
        if (!trimmedValue) {
          errorMessage = 'Message is required.';
        }
        break;
      case 'recaptcha_token':
        if (!trimmedValue) {
          errorMessage = 'Please verify you are human!';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  return (
    <div className="overflow-hidden ">
      <Helmet>
        <title>Contact Us | Connect with Webkorps for IT Solutions and Services</title>
        <meta
          name="description"
          content="Have queries or need expert IT services? Reach out to Webkorps! Our team is ready to assist with tailored IT solutions for your business needs. Contact us today to get started!"
        />


        <meta property="og:url" content="https://www.webkorps.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | Connect with Webkorps for IT Solutions and Services" />
        <meta property="og:description" content="Have queries or need expert IT services? Reach out to Webkorps! Our team is ready to assist with tailored IT solutions for your business needs. Contact us today to get started!" />
        <meta property="og:image" content="https://webkorps-app.s3.us-east-1.amazonaws.com/contact-us.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="webkorps.com" />
        <meta property="twitter:url" content="https://www.webkorps.com/contact" />
        <meta name="twitter:title" content="Contact Us | Connect with Webkorps for IT Solutions and Services" />
        <meta name="twitter:description" content="Have queries or need expert IT services? Reach out to Webkorps! Our team is ready to assist with tailored IT solutions for your business needs. Contact us today to get started!" />
        <meta name="twitter:image" content="https://webkorps-app.s3.us-east-1.amazonaws.com/contact-us.webp" />
        <link rel="canonical" href="https://www.webkorps.com/contact" />
      </Helmet>
      <Header />
      <div className="w-full text-center xl:text-left ipad-pro:text-left md:text-center  pt-[80px]">

        <HeroSectionUI
          title="Get in Touch with Webkorps - Let's Build the Future Together"
          subtitle="Your trusted IT partner for innovation, growth, and digital transformation"
          description="At Webkorps, we are committed to delivering cutting-edge IT solutions tailored to your business needs. Whether you require expert software development, cloud solutions, managed IT services, enterprise solutions, or emerging tech expertise, our team is here to help. Have a project in mind? Let's discuss how we can bring your vision to life."
          image={'https://webkorps-app.s3.us-east-1.amazonaws.com/get-in-touch-with-webkorps.jpg'}
          imageAlt={'get in touch with webkorps'}
        // buttonText={buttonText}
        // link={link}
        />
      </div>

      <div className="py-[4rem] mx-[7%] md:mx-[7%] xl:mx-[50px] ipad-pro:mx-[50px]">
        <div className="flex flex-col justify-center text-center md:text-center xl:text-left ipad-pro:text-left  relative w-full border border-gray-300 rounded-[40px] shadow-custom-lg  ">
          <div
            className="flex  gap-[10%] items-start justify-center min-h-[500px] lg:min-h-[600px]  px-[3%] xl:px-[30px] ipad-pro:px-[30px] my-[48px] flex-col sm:flex-col md:flex-col xl:flex-row ipad-pro:flex-row"
          >
            <motion.div
              className="flex flex-col text-start w-full"
            >
              <p className="text-[28px] leading-[39px] font-bold mb-4">
                We're Just One Click Away from Making Magic Happen!
              </p>
              <p className="text-[19px] leading-[26px] font-normal mb-6 w-[90%] md:w-[70%] xl:w-[60%]">
                Let us know your story, and we'll craft a tailored solution just for you.
              </p>
            </motion.div>

            <div className="relative z-20 w-full max-w-lg mx-auto rounded-2xl border border-gray-300 shadow-custom-lg bg-white p-6">
              {/* Tabs */}
              <div className="flex justify-evenly border-b  border-gray-200 mb-4">
                <button
                  className={`px-4 py-2 font-medium  text-[1.2rem] ${activeTab === 'experts'
                      ? 'border-b-2 border-[#1887C9] text-[#1887C9]'
                      : 'text-gray-500 hover:text-gray-700'
                    }`}
                  onClick={() => setActiveTab('experts')}
                >
                  Business Inquiry
                </button>
                <button
                  className={`px-4 py-2 font-medium text-[1.2rem] ${activeTab === 'career'
                      ? 'border-b-2 border-[#1887C9] text-[#1887C9]'
                      : 'text-gray-500 hover:text-gray-700'
                    }`}
                  onClick={() => setActiveTab('career')}
                >
                  Apply for Job
                </button>
              </div>

              {/* Experts Form */}
              {activeTab === 'experts' && (
                <>
                  <div className="bg-gray-100 border-b border-gray-500 p-6 rounded-t-2xl text-center">
                    <p className="text-xl md:text-2xl font-semibold">Connect With Our Experts Today!</p>
                  </div>
                  <form className="bg-white p-4 space-y-4" onSubmit={handleSubmit}>
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name*"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full border-b p-2 text-lg ${errors.name ? "border-red-600" : "border-gray-500"}`}
                          required
                        />
                        {errors.name && <p className="text-red-600 text-xs">{errors.name}</p>}
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full border-b p-2 text-lg ${errors.email ? "border-red-600" : "border-gray-500"}`}
                          required
                        />
                        {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Company & Country */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="company"
                          placeholder="Company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full border-b p-2 text-lg ${errors.company ? "border-red-600" : "border-gray-500"}`}
                        />
                        {errors.company && <p className="text-red-600 text-xs">{errors.company}</p>}
                      </div>
                      <div>
                        <Select
                          options={countries}
                          value={selectedCountry}
                          onChange={(selectedOption) => {
                            setSelectedCountry(selectedOption);
                            setFormData((prev) => ({ ...prev, location: selectedOption?.label }));
                          }}
                          placeholder="Country*"
                          isSearchable
                          className="w-full"
                          styles={{
                            control: (base) => ({
                              ...base,
                              height: "40px",
                              borderColor: "#6B7280",
                              borderTop: 0,
                              borderRight: 0,
                              borderLeft: 0,
                            }),
                            menu: (base) => ({
                              ...base,
                              zIndex: 999,
                            }),
                          }}
                        />
                        {errors.country && <p className="text-red-600 text-xs">{errors.country}</p>}
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <PhoneInput
                        international
                        defaultCountry={selectedCountry?.value}
                        value={formData.contact_number}
                        onChange={handlePhoneChange}
                        placeholder="Contact Number*"
                        className="w-full border-b p-2 text-lg border-gray-500"
                        required
                      />
                      {errors.contact_number && <p className="text-red-600 text-xs">{errors.contact_number}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        name="message"
                        placeholder="About your requirement*"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full border-b p-2 text-lg resize-none ${errors.message ? "border-red-600" : "border-gray-500"}`}
                        rows="3"
                        required
                      />
                      {errors.message && <p className="text-red-600 text-xs">{errors.message}</p>}
                    </div>

                    {/* reCAPTCHA */}
                    <div className="recaptcha-wrapper">
                      <div className="recaptcha-container">
                        <ReCAPTCHA
                          sitekey="6LdEkZoqAAAAAPn6MpmkLFjte5HUZlw2n6fctOKR"
                          onChange={handleCaptchaChange}
                        />
                      </div>
                      {errors.recaptcha_token && <p className="text-red-600 text-xs">{errors.recaptcha_token}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className={`bg-[#1887C9] w-full py-3 text-white text-lg rounded-md flex justify-center items-center ${loading ? "cursor-wait opacity-50" : "cursor-pointer"
                        }`}
                      disabled={loading}
                    >
                      {loading ? <div className="w-5 h-5 border-4 border-t-4 border-white rounded-full animate-spin"></div> : "Submit"}
                    </button>
                  </form>
                </>
              )}

              {/* Career Form */}
              {activeTab === 'career' && (
                <>
                  <div className="bg-gray-100 border-b border-gray-500 p-6 rounded-t-2xl text-center">
                    <p className="text-xl md:text-2xl font-semibold">Join Our Team!</p>
                  </div>
                  <form className="bg-white p-4 space-y-4" onSubmit={handleCareerSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="full_name"
                          placeholder="Full Name*"
                          value={careerFormData.full_name}
                          onChange={handleCareerChange}
                          className={`w-full border-b p-2 text-lg ${careerFormErrors.full_name ? "border-red-600" : "border-gray-500"}`}
                        />
                        {careerFormErrors.full_name && <p className="text-red-600 text-xs mt-1">{careerFormErrors.full_name}</p>}
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          value={careerFormData.email}
                          onChange={handleCareerChange}
                          className={`w-full border-b p-2 text-lg ${careerFormErrors.email ? "border-red-600" : "border-gray-500"}`}
                        />
                        {careerFormErrors.email && <p className="text-red-600 text-xs mt-1">{careerFormErrors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <PhoneInput
                          international
                          defaultCountry={selectedCountry?.value}
                          value={careerFormData.phone_number}
                          onChange={(value) => setCareerFormData(prev => ({ ...prev, phone_number: value }))}
                          placeholder="Phone Number*"
                          className={`w-full border-b p-2 text-lg ${careerFormErrors.phone_number ? "border-red-600" : "border-gray-500"}`}
                        />
                        {careerFormErrors.phone_number && <p className="text-red-600 text-xs mt-1">{careerFormErrors.phone_number}</p>}
                      </div>
                      <div>
                        <input
                          type="text"
                          name="reference_name"
                          placeholder="Reference Name"
                          value={careerFormData.reference_name}
                          onChange={handleCareerChange}
                          className="w-full border-b p-2 text-lg border-gray-500"
                        />
                      </div>
                    </div>

                    <div>
                      <select
                        name="gender"
                        value={careerFormData.gender}
                        onChange={handleCareerChange}
                        className={`w-full border-b p-2 text-lg ${careerFormErrors.gender ? "border-red-600" : "border-gray-500"}`}
                      >
                        <option value="">Select Gender*</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      {careerFormErrors.gender && <p className="text-red-600 text-xs mt-1">{careerFormErrors.gender}</p>}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Upload your CV</p>
                      <input
                        type="file"
                        name="resume"
                        onChange={(e) => setCareerFormData(prev => ({ ...prev, resume: e.target.files[0] }))}
                        className={`w-full border-b p-2 text-lg ${careerFormErrors.resume ? "border-red-600" : "border-gray-500"}`}
                        accept=".pdf,.doc,.docx"
                      />
                      {careerFormErrors.resume && <p className="text-red-600 text-xs mt-1">{careerFormErrors.resume}</p>}
                    </div>

                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        name="declaration"
                        checked={careerFormData.declaration}
                        onChange={(e) => setCareerFormData(prev => ({ ...prev, declaration: e.target.checked }))}
                        className="mt-1"
                      />
                      <label className="text-sm text-gray-600">
                        I hereby accept all the Terms and Conditions as well as the Privacy Policy of the company.
                      </label>
                      {careerFormErrors.declaration && <p className="text-red-600 text-xs mt-1">{careerFormErrors.declaration}</p>}
                    </div>

                    <button
                      type="submit"
                      className={`bg-[#1887C9] w-full py-3 text-white text-lg rounded-md hover:bg-blue-600 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </form>

                  {showThankYouPopup && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                      {/* Overlay */}
                      <div
                        className="absolute inset-0 bg-black opacity-40"
                        onClick={() => setShowThankYouPopup(false)}
                      />
                      {/* Popup */}
                      <div className="relative bg-white p-10 rounded-2xl shadow-2xl z-10 min-w-[350px] max-w-[95vw] text-center flex flex-col items-center">
                        {/* Close Icon */}
                        <button
                          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
                          onClick={() => setShowThankYouPopup(false)}
                          aria-label="Close"
                        >
                          &times;
                        </button>
                        {/* Checkmark Icon */}
                        <div className="mb-4">
                          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="28" cy="28" r="28" fill="#22C55E"/>
                            <path d="M17 29.5L25 37.5L39 21.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-800">Thank You!</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Thank you for your application!<br />
                          Our HR team will get back to you soon.
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Clients Section */}
      <ClientCard bgColor="bg-[#11608F]" heading={'Trusted by Industry Leaders Worldwide'} description={'We take pride in collaborating with leading global brands and industry experts to deliver innovative IT solutions that promote success. Our commitment to excellence and customer sat isfaction has earned us the trust of businesses across various sectors, enabling them to achieve digital transformation and sustainable growth.'} />

      {/* contact career */}

      <CTASection title={'Looking for Career Opportunities'} description={'Join a workplace that values creativity, collaboration, and career growth to help you achieve your dreams. Explore exciting roles, unlock your potential, and grow your career with us.'} buttonText={' Explore Exciting Opportunities'} bgColor='bg-white' link={'/join-us'} ctaImage={websiteCTAImage2} />
      <OfficeLocation />

      {/* </div> */}
      <Footer />
    </div>
  );
};
export default AboutUs;