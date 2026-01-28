import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import Header from "../sharedComponents/Header";
import Footer from "../sharedComponents/footer";
import { motion } from 'framer-motion';
import FAQSection from "../sharedComponents/FAQSection";

export default function JoinUsDetails() {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false)

  const faqData = {
    title: `Everything You Need to Know: <span style="font-weight:700; color:#1887C9;">Job Application FAQs</span>`,
    description: "Got questions about applying or our hiring process? We've got you covered.",
    data: [
      {
        "title": "How do I apply for this position?",
        "content": "To apply, simply fill out the application form on this page with your full name, email, phone number, and attach your resume in PDF format. Once submitted, our HR team will review your application."
      },
      {
        "title": "Can I apply for multiple positions at Webkorps?",
        "content": "Yes, you can apply for multiple roles if your skills and experience align with the job requirements. Each application will be reviewed independently."
      },
      {
        "title": "What does the typical hiring process look like?",
        "content": "Our hiring process generally includes an initial HR screening, one or more technical interview rounds, and a final discussion with management. The process is designed to be transparent and efficient."
      },
      {
        "title": "How long will it take to hear back after I apply?",
        "content": "We strive to review all applications promptly. You can typically expect to hear back from our recruitment team within 1 to 2 weeks regarding the status of your application."
      },
      {
        "title": "What if I don't see a role that matches my skills?",
        "content": "If you don't find a currently open role that fits your profile, you can still share your resume with us via our main Careers page. we'll keep your details in our talent pool for future opportunities."
      }
    ]
  };

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      fetch(`https://be.webkorps.com:4202/v1/career_jobs/${id}`)
        .then(response => response.json())
        .then(data => {
          if (data) {
            setJobDetails(data);
          }
        })
        .catch(error => console.error('Error fetching job data:', error))
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  const items = [
    { name: 'Location', key: 'location', image: 'https://webkorps-app.s3.us-east-1.amazonaws.com/locationIcon.webp', alt: 'location Icon' },
    { name: 'Job Type', key: 'job_type', image: 'https://webkorps-app.s3.us-east-1.amazonaws.com/jobTypeIcon.webp', alt: "location Icon" },
    { name: 'Date posted', key: 'created_at', image: 'https://webkorps-app.s3.us-east-1.amazonaws.com/calendarIcon.webp', alt: 'calendar Icon' },
    { name: 'Experience', key: 'experience', image: 'https://webkorps-app.s3.us-east-1.amazonaws.com/ExperienceIcon.webp', alt: 'location Icon' },
    { name: 'Working Hours', key: 'shift_start_time', image: 'https://webkorps-app.s3.us-east-1.amazonaws.com/Hoursicon.webp', alt: 'location Icon' },
    { name: 'Working Days', key: 'working_days', image: 'https://webkorps-app.s3.us-east-1.amazonaws.com/WorkingIcon.webp', alt: 'location Icon' },
    { name: 'Vacancy', key: 'number_of_vacancy', image: 'https://webkorps-app.s3.us-east-1.amazonaws.com/vacancyIcon.webp', alt: 'location Icon' },
  ];

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    reference_name: '',
    gender: '',
    job_location: '',
    agree: false
  });
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  const [loading, setLoading] = useState(false);




  const validateForm = () => {
    const newErrors = {};

    // Validation rules for each field
    if (!formData.full_name.trim()) {
      const trimmedValue = formData.full_name.trim();

      newErrors.full_name = "Full Name is required.";
      if (!trimmedValue) {
        newErrors.full_name = 'Name is required.';
      } else if (!/^[A-Za-z\s]+$/.test(trimmedValue)) {
        newErrors.full_name = 'Name can only contain letters and spaces.';
      }
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone Number is required.";
    } else if (!/^\d{10}$/.test(formData.phone_number)) {
      console.log(formData.phone_number, "formData.phone_number")
      newErrors.phone_number = "Phone Number must be 10 digits.";
    }
    if (!formData.gender.trim()) {
      newErrors.gender = "Gender is required.";
    }
    if (!formData.resume) {

      newErrors.resume = "Resume is required.";
      const file = formData.resume;
      if (file && file.type !== "application/pdf") {
        newErrors.resume = "Only PDF files are allowed.";
        return;
      }
    }
    if (!formData.job_location.trim()) {
      newErrors.job_location = "Job Location is required.";
    }
    if (!formData.agree) {
      newErrors.agree = "You must accept the Terms and Conditions.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    if (name === "resume") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else if (type === "radio") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value, // <- Use the actual value of the radio button, not `checked`
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: type === "file" ? files[0] : value,
      }));
    }

    if (name === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is invalid.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => {
      formDataObj.append(key, formData[key]);
    });
    setLoading(true);

    try {
      const url = 'https://be.webkorps.com:4202/v1/job_applies/send_notifications';
      setFormLoading(true)
      const response = await fetch(url, {
        method: 'POST',
        body: formDataObj,
      });
      if (response.ok) {
        setLoading(false);
        setFormData({
          full_name: '',
          email: '',
          phone_number: '',
          reference_name: '',
          gender: '',
          job_location: '',
          agree: false
        });
        setFormLoading(false)
        setShowThankYouPopup(true); // Show Thank You popup
      } else {
        setLoading(false);

        alert('Form submission failed!', response.statusText);
        setFormLoading(false)
      }
    } catch (error) {
      setLoading(false);
      setFormLoading(false)
      console.error('Error:', error);
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
  return (
    <div className="overflow-hidden ">
      <Header />
      <div className="w-full text-center xl:text-left ipad-pro:text-left md:text-center  pt-[80px]">
        <div className="flex overflow-hidden items-center relative w-full h-[55rem] xl:h-[32rem] ipad-pro:h-[55rem] md:h-[55rem]  ">
          <img
            width="800"
            height="600"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading="lazy"
            src={'https://webkorps-app.s3.us-east-1.amazonaws.com/mobile-app-development-company.jpg'}
            className="w-full h-full object-fill s"
            alt="Mobile App Development Company"
          />
          <div className="absolute inset-0 flex  justify-center items-center xl:flex-row ipad-pro:flex-row flex-col gap-2    px-[5%] xl:px-[50px] ipad-pro:px-[50px] " >
            <div className='flex xl:items-start ipad-pro:items-start items-center  justify-center xl:pt-[40px] xl:pb-[40px] ipad-pro:pt-[40px] ipad-pro:pt-[40px] pb-0 ipad-pro:pb-0 pt-[40px]  flex-col w-[100%]'>
              <h1 className="text-[1.5625rem] xl:text-[3.3rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] xl:leading-[3.4rem] ipad-pro:leading-[3.4rem] leading-[2.4rem] text-white font-bold " data-aos="fade-left" dangerouslySetInnerHTML={{ __html: jobDetails?.designation }}></h1>
              <h3 className="text-[1rem] xl:text-[1.3rem] ipad-pro:text-[1.35rem] md:text-[1.5rem]  text-white font-semibold  mt-[1.2rem] w-[95%]" data-aos="fade-left">Job Type: {jobDetails?.job_type
                .replace(/_/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())} <span className="ml-2">No of Vacancies: {jobDetails?.number_of_vacancy}</span></h3>
              {/* <p className="xl:text-left ipad-pro:text-left text-center text-white mt-[2.5rem]  text-[0.9375rem] xl:text-[1.1rem] ipad-pro:text-[1.125rem] md:text-[1.15rem] leading-[1.5875rem] font-inter w-[94%] " data-aos="fade-left">{description}</p> */}
              <motion.button
                type="button"
                whileHover={{
                  backgroundColor: '#FFFFFF',
                  color: '#1887C9',
                  borderColor: '#1887C9',
                  transition: { duration: 0.1 },
                }}
                onClick={() => document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden inline-flex items-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base text-center md:text-lg px-3 md:px-4 py-3 sm:py-5 md:py-2 border-2 border-[#1887C9] bg-[#1887C9] transition-all duration-300 mt-[30px]"
              >
                Apply Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <section className="content px-[7%] xl:px-[50px] ipad-pro:px-[50px] w-full text-center text-dark job-section-blog p-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <div className="loader">Loading...</div>
          </div>
        ) : (
          <div className="grid  grid-cols-1 md:grid-cols-3 ipad-pro:gap-4 md:gap-4 gap-0  xl:gap-4 mt-3 md:mt-10">
            <div className="col-span-2 ipad-pro:w-[90%] xl:w-[90%] md:w-[90%] w-full   ">
              <h1 className=" basic-black  text-[33px] md:text-[33px] leading-[46px] font-bold md:text-left">
                {jobDetails?.designation}
              </h1>
              <div className="md:mt-10">
                <p className="text-[23px] leading-[32px] basic-black mt-1 md:mt-4 md:text-left font-bold">
                  Who Are We Looking For
                </p>
                <div className="pt-2 md:pt-5 text-[16px] leading-[23px] md:text-left break-words">

                  {jobDetails?.skills_requirements}
                </div>
              </div>
              <div className="md:mt-1 md:pt-2">
                <p className="text-[23px] leading-[32px]  basic-black mt-3 md:mt-4 md:text-left font-bold">
                  Bonus Points for Familiarity with
                </p>
                <div className="pt-2 md:pt-5  text-[16px] leading-[23px] md:text-left break-words" >
                  {jobDetails?.additional_skills}
                </div>
              </div>
              <div className="mt-1 pt-2">
                <p className="text-[23px] leading-[32px]  basic-black mt-4 md:text-left font-bold ">
                  Educational Requirement
                </p>
                <div className="pt-3 md:text-left  text-[16px] leading-[23px] break-words">
                  {jobDetails?.educational_requirements}
                </div>
              </div>
            </div>
            <div className="bg-[#F9F9F9] border-[#D4D4D4] h-[960px] md:h-[920px] ipad-pro:h-[920px] xl:h-[920px] border-[0.25px] mt-3 md:mt-0 md:p-0 pb-5">
              <div className="mt-4 job-details justify-center items-center flex flex-col md:block">
                <button className="text-white ipad-pro:apply-button  apply-button  md:apply-button-mini md:w-[150px] xl:apply-button mt-4  text-[19px] leading-[26px] font-bold md:mb-5" onClick={() => document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' })}>Apply Now</button>
                <h1 className=" text-[#000000] p-4 font-bold font-rubik text-[18px] leading-[24px] text-left pt-8 md:pb-3">
                  Job Summary
                </h1>
                {items.map((item, index) => (
                  <div key={index} className="p-4 flex flex-col md:flex-row justify-center md:justify-start items-center relative   pt-0 md:pb-10">
                    <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy" src={item.image} alt="text" className="mb-2 w-[30px] w-[38px] text-center md:text-left md:mb-0" />
                    <div className="xl:ml-5 ml-0 ipad-pro:ml-5 md:ml-5 ">
                      <h2 className="  text-[17px] leading-[24px]  md:text-left font-rubik  items-name text-center text-[#D4D4D4]">{item.name}
                      </h2>
                      <span className="block font-medium text-[17px] leading-[24px] md:text-left font-rubik  text-center text-[#001833]">{` ${item.name === 'Date posted' ? jobDetails?.[item.key]?.split('T')[0] : jobDetails?.[item.key]
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (char) => char.toUpperCase())}\n`}</span>
                    </div>
                  </div>
                ))}
                <Link to={`/join-us`} className="text-left float-left text-[17px] leading-[24px] font-rubik  font-medium pt-8 md:ml-5 underline">View all job</Link>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="application-form mt-10 px-[7%] md:px-0 py-[4rem]">
        <div id='apply-form' className="w-full md:w-[720px] ipad-pro:w-[920px] xl:w-[920px] md:mx-[20px] ipad-pro:m-auto xl:m-auto  h-auto  m-auto shadow-custom-lg p-6  order-[0.8px] border-neutral-500 border-opacity-40 rounded-[20px] ">

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-[#000000] text-[14px] leading-[16px] font-chivo  font-medium mb-2"
                  htmlFor="fullname"
                >
                  Name
                </label>
                <input
                  className={`shadow h-[48px] text-[14px] leading-[16px] appearance-none border-[1px] border-b-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${errors.full_name ? "border-red-500" : "border-black"
                    }`}
                  id="fullname"
                  type="text"
                  placeholder="Enter your full name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                />
                {errors.full_name && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.full_name}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="block text-[#000000] text-[14px] leading-[16px] font-chivo  font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className={`shadow h-[48px] text-[14px] appearance-none border-[1px] border-b-4  rounded w-full py-2 px-3 text-gray-700 focus:outline-none ${errors.email ? "border-red-500" : "border-black"
                    }`}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-2">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="mb-4 mt-[30px]">
                <label
                  className="block text-[#000000] text-[14px] leading-[16px] font-chivo  font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <div className="flex">
                  <input
                    className={`shadow h-[48px] text-[14px] appearance-none border-[1px] border-b-4  rounded w-full py-2 px-3 text-gray-700 focus:outline-none ${errors.phone_number ? "border-red-500" : "border-black"
                      }`}
                    id="phone_number"
                    type="number"
                    placeholder="Enter your phone number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      handleChange({ target: { name: "phone_number", value } });
                    }}
                  />


                </div>
                {errors.phone_number && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.phone_number}
                  </p>
                )}
              </div>
              <div className="mb-4 mt-[30px]">
                <label
                  className="block text-[#000000]  text-[14px] leading-[16px] font-chivo  font-medium mb-2"
                  htmlFor="reference"
                >
                  Reference Name
                </label>
                <input
                  className={`shadow h-[48px] text-sm appearance-none border-[1px] border-b-4  rounded w-full py-2 px-3 text-gray-700 focus:outline-none ${errors.reference_name ? "border-red-500" : "border-black"
                    }`}
                  id="reference_name"
                  type="text"
                  placeholder="Enter reference name if any"
                  name="reference_name"
                  value={formData.reference_name}
                  onChange={handleChange}
                />
                {errors.reference_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.reference_name}
                  </p>
                )}
              </div>
            </div>
            <div className="grid xl:grid-cols-2 ipad-pro:grid-col-2 md:grid-col-2 grid-col-1 gap-4 mb-4">
              <div className="mb-4 mt-[30px]">
                <label className="block text-[#000000] text-[14px] leading-[16px] font-chivo  font-medium mb-2" htmlFor="jobLocation">
                  Job Location
                </label>
                <input
                  className={`shadow h-[48px] text-sm appearance-none border-[1px] border-b-4  rounded w-full py-2 px-3 text-gray-700 focus:outline-none ${errors.job_location ? "border-red-500" : "border-black"
                    }`}
                  id="job_location"
                  type="text"
                  placeholder="Enter Job Location"
                  name="job_location"
                  value={formData.job_location}
                  onChange={handleChange}
                />
                {errors.job_location && (
                  <p className="text-red-500 text-xs mt-1">{errors.job_location}</p>
                )}
              </div>
              <div className="mb-4 mt-[30px]">
                <label className="block text-[#000000] text-[14px] leading-[16px] font-chivo  font-medium mb-2">
                  Gender
                </label>
                <div className="flex gap-[53px] items-start justify-start">
                  <div className="flex  items-center">
                    <input
                      id="male"
                      type="radio"
                      name="gender"
                      value="Male"
                      className="mr-2 h-[24px] w-[24px]"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="male"
                      className="mr-4 font-chivo  font-medium text-[14px] leading-[16px]"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex  items-center">
                    <input
                      id="female"
                      type="radio"
                      name="gender"
                      value="Female"
                      className="mr-2 h-[24px] w-[24px]"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="female"
                      className="font-chivo  font-medium text-[14px] leading-[16px]"
                    >
                      Female
                    </label>
                  </div>
                </div>
                {errors.gender && (
                  <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                )}
              </div>
            </div>
            <div className="mb-4 mt-[30px]">
              <label
                className="block text-[#000000] text-[14px] leading-[16px] font-chivo  font-medium mb-2"
                htmlFor="resume"
              >
                Attach Resume
              </label>
              <input
                className={`shadow h-[48px] text-sm appearance-none border-[1px] border-b-4  rounded w-full py-2 px-3 text-gray-700 focus:outline-none ${errors.resume ? "border-red-500" : "border-black"
                  }`}
                id="resume"
                type="file"
                name="resume"
                accept="application/pdf"
                onChange={handleChange}
              />
              {errors.resume && (
                <p className="text-red-500 text-xs mt-1">{errors.resume}</p>
              )}
            </div>

            <div className="mb-4  mt-[30px]">
              <div className="flex  items-center">
                <input
                  id="agree"
                  type="checkbox"
                  className=" mr-2 h-[24px] w-[24px] leading-tight"
                  name="agree"
                  checked={formData.agree}
                  onChange={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      agree: e.target.checked,
                    }));
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      agree: "",
                    }));
                  }}
                />
                <label
                  className="text-[#000000] font-chivo  font-normal text-[14px] leading-[16px] "
                  htmlFor="agree"
                >
                  I hereby accept all the Terms and Conditions as well as the
                  Privacy Policy of the company.{" "}
                </label>
              </div>

              {errors.agree && (
                <p className="text-red-500 text-xs mt-1">{errors.agree}</p>
              )}
            </div>

            <button
              type="submit"
              className={`bg-[#469FD4] w-full  text-white px-4 py-3 mt-6 rounded-md text-center justify-center items-center flex ${loading ? "cursor-wait opacity-50" : "cursor-pointer"
                }`}
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-4 border-t-4 border-white rounded-full animate-spin"></div> // Spinner
              ) : (
                " Submit Application"
              )}
            </button>
          </form>
        </div>
      </section>
      {showThankYouPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[95%] md:w-[50%] text-center items-center flex flex-col">
            <img width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
              src="https://webkorps-app.s3.us-east-1.amazonaws.com/thankyouImage.webp"
              alt="Thank You"
              className="w-[100px] h-[100px] mb-5"
            />
            <h2 className="text-xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-4">Your application has been submitted successfully.</p>
            <button
              className="bg-[#469FD4] text-white px-4 py-2 rounded-md"
              onClick={() => setShowThankYouPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <FAQSection title={faqData.title} faqData={faqData.data} description={faqData.description} />
      <Footer />
    </div>
  );
}
