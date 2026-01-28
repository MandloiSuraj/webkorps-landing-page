"use client";
import React, { useEffect, useState } from "react";
import Header from "../sharedComponents/Header";
import Footer from "../sharedComponents/footer";
import { Helmet } from "react-helmet-async";
import HeroSectionUI from "../sharedComponents/HeroSectionUI";
import AOS from "aos";
import { CoreValuesCards, Features, IndustryChallenges } from "../sharedComponents/IndustryChallenges";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import websiteCTAImage2 from "../../assets/images/website-cta-6.jpg";
import WebkorpsTeamImg from "../../assets/images/webkorps-team.jpg";
import ReviewSlider from "./ReviewSlider";
import FAQSection from "../sharedComponents/FAQSection";
import CTASection from "../sharedComponents/CTASection";


export default function JoinUs() {

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: true,
    });
  }, []);

  const storyData = [
    { para: "At Webkorps, we aren't just a workplace; we are a dynamic team of passionate innovators, problem-solvers, and tech enthusiasts dedicated to delivering exceptional results. Since our inception, we have forged strong partnerships with global organizations, providing cutting-edge solutions that drive significant impact." },
    { para: "We pride ourselves on cultivating a culture of continuous learning, collaboration, and growth. Whether you are an experienced professional or a fresh talent, we offer the right opportunities and challenges in a supportive environment where you can truly thrive." },
    { para: "If you are ready to work with a forward-thinking company that recognizes and values your skills, creativity, and ambition, look no further than Webkorps. Join us, and together, let's shape the future!" }
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };




  const valuesData = {
    heading: `What Drives Us at <span style="font-weight:700; color:#1887C9;">Webkorps</span>`,
    description: "At Webkorps, our values aren’t just words - they define who we are, how we work, and what we stand for. We believe in creating a workplace where innovation thrives, teamwork flourishes, and every individual is empowered to grow. Here’s what makes Webkorps an extraordinary place to build your career.",
    data: [
      {
        "icon": "🚀",
        "title": "Innovation at the Core",
        "description": "We not only adapt to change; we actively drive it. By embracing creativity and cutting-edge technology, we create solutions that make a meaningful impact. We encourage our team to think big, experiment boldly, and turn ideas into reality."
      },
      {
        "icon": "🤝",
        "title": "Stronger Together",
        "description": "Success is a collaborative effort. We thrive on teamwork, valuing diverse perspectives and fostering a culture where everyone is heard and appreciated. Together, we create an environment of trust, respect, and shared growth."
      },
      {
        "icon": "📚",
        "title": "Growth Mindset",
        "description": "Your development is our priority. We believe in continuous learning, mentorship, and skill enhancement. Whether through training programs, certifications, or challenging projects, we provide the resources you need to reach new heights in your career."
      },
      {
        "icon": "⚖️",
        "title": "Integrity & Accountability",
        "description": "Trust is the foundation of our work. We act with honesty, uphold our commitments, and take responsibility for our actions. This dedication to integrity fosters lasting relationships with both our clients and our team members."
      },
      {
        "icon": "🎯",
        "title": "Customer-First Approach",
        "description": "Our clients' success is our success. We go beyond merely delivering projects; we create solutions that address real problems, drive business growth, and add value. Every decision we make prioritizes providing the best experience for our clients."
      },
      {
        "icon": "⚖️",
        "title": "Balance & Well-Being",
        "description": "Work should empower, not exhaust. We believe in maintaining a healthy work-life balance by offering a flexible and supportive environment. Whether through personal development, mental well-being initiatives, or team-building activities, we ensure our employees feel motivated and fulfilled."
      },
      {
        "icon": "🌍",
        "title": "Diversity & Inclusion",
        "description": "We celebrate differences and believe that diverse backgrounds, perspectives, and ideas drive innovation. At Webkorps, everyone is welcomed, respected, and given equal opportunities to succeed."
      },
      {
        "icon": "🏆",
        "title": "Excellence in Execution",
        "description": "We don't settle for 'good enough.' From initial ideas to final delivery, we uphold the highest standards of quality, precision, and efficiency in everything we do. Excellence is not just a goal; it's our way of working."
      }
    ]
  }

  const hiringProcess = {
    heading: `A Simple & Transparent Hiring Process Just for You!`,
    description: "At Webkorps, we believe that the hiring process should be an exciting journey rather than a stressful one. Our approach is designed to be simple, transparent, and efficient, helping us find the right talent while giving you the best chance to showcase your skills. Here’s what you can expect:",
    Data: [
      {
        "title": "Apply Online",
        "content": "Find a role that aligns with your skills and career aspirations on our careers page. Submit your application along with your resume, and our hiring team will review your profile."
      },
      {
        "title": "Screening & Shortlisting",
        "content": "Our recruitment team carefully evaluates your application based on your experience, skills, and fit with our company culture. If you are shortlisted, you'll receive an invitation for the next steps."
      },
      {
        "title": "First Interview – HR Discussion",
        "content": "This initial conversation with our HR team helps us understand your background, career goals, and expectations. It’s also an opportunity for you to learn more about Webkorps, our culture, and the role."
      },
      {
        "title": "Technical Assessment",
        "content": "Depending on the role, you may be asked to complete a technical test or assignment to evaluate your problem-solving abilities and expertise."
      },
      {
        "title": "Technical/Managerial Interview",
        "content": "Engage in a discussion with our technical leads or managers to assess your technical skills, problem-solving approach, and how you might fit into our team and projects."
      },
      {
        "title": "Final Interview – Leadership Round",
        "content": "This final interaction with senior management ensures alignment with Webkorps’ vision, values, and long-term goals. It’s your chance to ask any questions about growth opportunities and our company culture."
      },
      {
        "title": "Offer & Onboarding",
        "content": "Congratulations! If selected, you will receive an offer letter containing all the details. Once you accept, our onboarding team will assist you through the joining process for a smooth transition into Webkorps. Are you excited to start your journey with Webkorps? Explore our open positions and apply today!"
      }
    ]


  }
  const benefitData = {
    heading: `Our Benefits & Perks - Empowering You to Thrive!`,
    description: "At Webkorps, we believe in taking care of our people. From career growth opportunities to a healthy work-life balance, we offer a range of benefits designed to keep you motivated, happy, and productive. Here’s what you can enjoy as part of our team:",
    Data: [
      {
        "icon": "💰",
        "title": "Competitive Salary",
        "description": "Be rewarded for your hard work with a compensation package that is competitive in the industry."
      },
      {
        "icon": "🎯",
        "title": "Performance Bonuses",
        "description": "Your contributions are valuable! Enjoy bonuses and rewards based on your performance."
      },
      {
        "icon": "📚",
        "title": "Learning & Development",
        "description": "Gain access to training programs, certifications, and workshops that will enhance your skills and advance your career."
      },
      {
        "icon": "⏳",
        "title": "Flexible Work Arrangements",
        "description": "We promote work-life balance by offering remote work options and flexible schedules."
      },
      {
        "icon": "❤️",
        "title": "Health & Wellness",
        "description": "Benefit from comprehensive health insurance and wellness programs designed to keep you and your family healthy."
      },
      {
        "icon": "🎉",
        "title": "Team Events & Celebrations",
        "description": "We believe in creating memorable moments as a team, from enjoyable outings to festive celebrations."
      },
      {
        "icon": "🚀",
        "title": "Career Growth Opportunities",
        "description": "Unlock your potential through mentorship, leadership programs, and opportunities for internal promotions."
      },
      {
        "icon": "🏢",
        "title": "Workplace Comfort",
        "description": "Enjoy a well-equipped workspace, free snacks, and a collaborative environment that fosters productivity."
      }
    ]



  }
  const faqData = {
    title: "Frequently Asked Questions (FAQs)",
    description: "We understand you may have questions about joining Webkorps. Here are some answers to the most common queries to help you navigate our hiring process and work culture.",
    data: [
      {
        "title": "How can I apply for a job at Webkorps?",
        "content": "You can explore our open positions on our careers page and apply directly. If you don’t find a suitable role, feel free to share your resume with us for future opportunities."
      },
      {
        "title": "What does the hiring process at Webkorps look like?",
        "content": "Our hiring process is simple and transparent:\n-Apply Online \n-HR Screening \n-Technical/Managerial Interview \n-Final Interview \n-Offer & Onboarding"
      },
      {
        "title": "How long does the hiring process take?",
        "content": "The timeline varies by role, but we strive to complete the process within 1-3 weeks. Our team will keep you informed at every step."
      },
      {
        "title": "Does Webkorps offer remote or hybrid work options?",
        "content": "Yes! Depending on the role, we offer remote, hybrid, or in-office work models to support flexibility and work-life balance."
      },
      {
        "title": "What career growth opportunities does Webkorps provide?",
        "content": "We invest in our employees' growth through training programs, mentorship, skill development initiatives, and internal promotions."
      },
      {
        "title": "What benefits and perks does Webkorps offer?",
        "content": "We provide competitive salaries, performance bonuses, health insurance, flexible work arrangements, professional development programs, and a vibrant work culture."
      },
      {
        "title": "Can I apply for multiple job positions at the same time?",
        "content": "Yes, you can apply for multiple roles if they align with your skills and experience. Our recruitment team will review your applications accordingly."
      },
      {
        "title": "What qualities does Webkorps look for in candidates?",
        "content": "We seek passionate, innovative, and team-oriented professionals who are eager to learn, adapt, and contribute to our mission of delivering excellence."
      },
      {
        "title": "How can I stay updated on job openings at Webkorps?",
        "content": "Follow us on our social media channels and regularly check our careers page for new opportunities!"
      },
      {
        "title": "Who can I contact for any hiring-related queries?",
        "content": "You can reach out to our HR team at hr@webkorps.com for any questions regarding our hiring process."
      }
    ],

  }
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelect = (index) => {
    setSelectedIndex(index);
  };
  const [jobOpenings, setJobOpenings] = useState([]);

  useEffect(() => {
    fetch("https://be.webkorps.com:4202/v1/career_jobs")
      .then((response) => response.json())
      .then((data) => setJobOpenings(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const departments = [
    "hr_and_recruitment",
    "support",
    "sales_and_marketing",
    "engineering",
  ];

  // Filter job openings based on the selected department
  const filteredJobs = jobOpenings.filter(
    (job) => job.job_title === departments[selectedIndex]
  );
  const jobCounts = departments.map(
    (dept) => jobOpenings.filter((job) => job.job_title === dept).length
  );
  const cardData = [
    {
      title: "Team Work",
      description:
        "Go to this step-by-step guideline process on how to certify for your weekly benefits:",
      linkText: "See our guideline",
      linkHref: "#",
      image: "https://webkorps-app.s3.us-east-1.amazonaws.com/team-work.webp",
      altText: "team-work",
      backgroundColor: "#E7F2FF",
    },
    {
      title: "Secured Future",
      description:
        "Learn how to effectively manage your projects with our comprehensive guide:",
      linkText: "Read more",
      linkHref: "#",
      image:
        "https://webkorps-app.s3.us-east-1.amazonaws.com/secured-future.webp",
      backgroundColor: "#F1F7E8",
      altText: "secured-future",
    },
    {
      title: "Learning Opportunity",
      description:
        "Explore the opportunities and tools available for advancing your career:",
      linkText: "Discover more",
      linkHref: "#",
      image:
        "https://webkorps-app.s3.us-east-1.amazonaws.com/learning-opportunity.webp",
      backgroundColor: "#EFF2F5",
      altText: "learning-opportunity",
    },
    {
      title: "Upgrade Skills",
      description:
        "Enhance your Upgrade skills with our expert tips and strategies:",
      linkText: "Get the tips",
      linkHref: "#",
      image:
        "https://webkorps-app.s3.us-east-1.amazonaws.com/data-analytics.webp",
      backgroundColor: "#FFEEED",
      altText: "data-analytics",
    },
  ];
  const [isModalOpen, setModalOpen] = useState(false);
  const handleApplyNow = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    reference_name: "",
    gender: "",
    resume: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const validateForm = () => {
    const newErrors = {};
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
    if (!formData.agree) {
      newErrors.agree = "You must accept the Terms and Conditions.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);

  };

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
      case 'phone_number':
        if (!trimmedValue) {
          errorMessage = 'Contact Number is required.';
        } else if (trimmedValue.length <= 10) {
          errorMessage = 'Phone numbers must be more than 10 digits.';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });
    setLoading(true);
    try {
      const url =
        "https://be.webkorps.com:4202/v1/job_applies/send_notifications";
      const response = await fetch(url, {
        method: "POST",
        body: formDataObj,
      });
      if (response.ok) {
        setLoading(false);
        console.log("Form submitted successfully!");

        closeModal();
        setFormData({
          full_name: "",
          email: "",
          phone_number: "",
          reference_name: "",
          gender: "",
          resume: "",
        });
        setShowThankYouPopup(true); // Show Thank You popup
      } else {
        setLoading(false);
        alert("Form submission failed!", response.statusText);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
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
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: 'https://webkorps-app.s3.us-east-1.amazonaws.com/life-at-webkorps-1.jpg',
      alt: "life at Webkorps",
    },
    {
      src: 'https://webkorps-app.s3.us-east-1.amazonaws.com/life-at-webkorps-2.jpg',
      alt: "life at Webkorps",
    },
    {
      src: "https://webkorps-app.s3.us-east-1.amazonaws.com/life-at-webkorps-3.jpg",
      alt: "life at Webkorps",
    },
  ];
  return (
    <div >
      <Helmet>
        <title>Job Openings and Career Opportunities at Webkorps</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Webkorps! Check out our latest job openings and join a dynamic team dedicated to innovation, growth, and success in the IT industry."
        />
        <meta property="og:url" content="https://www.webkorps.com/join-us" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Job Openings and Career Opportunities at Webkorps" />
        <meta property="og:description" content="Explore exciting career opportunities at Webkorps! Check out our latest job openings and join a dynamic team dedicated to innovation, growth, and success in the IT industry." />
        <meta property="og:image" content="https://webkorps-app.s3.us-east-1.amazonaws.com/job-openings-and-career-opportunities-at-webkorps.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="webkorps.com" />
        <meta property="twitter:url" content="https://www.webkorps.com/join-us" />
        <meta name="twitter:title" content="Job Openings and Career Opportunities at Webkorps" />
        <meta name="twitter:description" content="Explore exciting career opportunities at Webkorps! Check out our latest job openings and join a dynamic team dedicated to innovation, growth, and success in the IT industry." />
        <meta name="twitter:image" content="https://webkorps-app.s3.us-east-1.amazonaws.com/job-openings-and-career-opportunities-at-webkorps.webp" />
        <link rel="canonical" href="https://www.webkorps.com/join-us" />
      </Helmet>
      <Header />
      <div className="w-full text-center xl:text-left ipad-pro:text-left md:text-center  pt-[80px]">

        <HeroSectionUI title={'Be A Part of An Innovative, Dynamic, &<br/> Growth-driven Environment At Webkorps'}
          description={`At Webkorps, we don’t just build software - we build careers. Join a team of innovators, problem-solvers, and tech enthusiasts who are shaping the digital future. If you're ready to challenge yourself, grow, and make an impact, your journey starts here! Explore exciting career opportunities and grow with us!`}
          image={'https://webkorps-app.s3.us-east-1.amazonaws.com/career-empowering-businesses-with-our-cutting-edge-it-services-and-solutions.jpg'}
          imageAlt={'Join webkorps'}
          buttonText={'Explore Opportunities!'}
          link={'/contact'}
          leftSection={false} />

        <div className="py-[4rem] bg-white font-inter overflow-hidden">
          <div className="flex flex-col md:flex-row items-center px-[3%] md:px-[30px] xl:px-[30px] justify-center text-center lg:text-left mx-[7%] md:mx-[7%] xl:mx-[50px] p-6 md:p-10 xl:p-12 gap-6 shadow-custom-lg rounded-[20px] bg-white">
            <div className="w-full md:w-1/2">
              <h2
                className="font-inter text-[1.5625rem] md:text-[2rem] xl:text-[2.1875rem] leading-[2.4rem] md:leading-[2.5rem] font-bold text-center md:text-left text-[#072125] w-full"
                data-aos="fade-right"
              >
                Innovate, Grow & Thrive with
                <span className="text-[#1887C9]">Webkorps!</span>
              </h2>
              {storyData.map((des, index) => (
                <p
                  key={index}
                  className="text-[#072125] mt-[1.5rem] text-[1rem] md:text-[1.15rem] xl:text-[1.25rem] leading-[1.6rem] md:leading-[1.8rem] font-inter"
                  data-aos="fade-right"
                >
                  {des.para}
                </p>
              ))}
            </div>

            <div className="w-full md:w-1/2">

              <div className="!grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg shadow-md overflow-hidden">
                  <img
                    width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                    src={'https://webkorps-app.s3.us-east-1.amazonaws.com/career-1.jpg'}
                    alt={'career at webkorps'}
                    className="w-full h-auto min-h-[180px] aspect-[4/3] "
                  />
                </div>
                <div className="rounded-lg shadow-md overflow-hidden">
                  <img
                    width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                    src={'https://webkorps-app.s3.us-east-1.amazonaws.com/career-2.jpg'}
                    alt={'career at webkorps'}
                    className="w-full h-auto min-h-[180px] aspect-[4/3] "
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 rounded-lg shadow-md overflow-hidden">
                  <img
                    width="800" height="600" sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw" loading="lazy"
                    src={'https://webkorps-app.s3.us-east-1.amazonaws.com/career-3.jpg'}
                    alt={'career at webkorps'}
                    className="w-full h-auto min-h-[220px] aspect-[16/9] "
                  />
                </div>
              </div>
            </div>

          </div>
        </div>



        <CoreValuesCards heading={valuesData.heading} features={valuesData.data} description={valuesData.description} />
        <IndustryChallenges challenges={hiringProcess?.Data} description={hiringProcess?.description} heading={hiringProcess.heading} bgColor={'bg-white'} hiring={true} />

        <div
          id="career-openings"
          className=" overflow-hidden mt-[50px] bg-custom-blue-gradient py-16"
        >
          <div className={`text-center text-dark p-[2.5rem] px-[3%] xl:px-[30px] ipad-pro:px-[30px]  bg-white  h-auto shadow-custom-lg justify-center  font-inter mx-[7%] md:mx-[7%] xl:mx-[50px] rounded-[30px] ipad-pro:mx-[50px]`}
          >            <h2
            className="font-inter text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] font-bold text-center xl:text-center ipad-pro:text-center text-black w-full pb-12"
            data-aos="fade-right">
              Explore Exciting Career Opportunities and Grow with Webkorps!
            </h2>
            <div className="w-full">
              {jobOpenings.length !== 0 ? (
                <div className="flex flex-col xl:flex-row  text-white ipad-pro:flex-row md:flex-row  ipad-pro:gap-[10px] gap-[10px] md:gap-[10px] xl:gap-[10px]">
                  <div className="block md:relative xl:w-[30%] ipad-pro:w-[30%] w-full">
                    <ul className={`flex flex-col  border-r p-4 border-gray-300 shadow-custom-lg rounded-[20px] text-left bg-custom-blue-gradient justify-center`}>
                      <div className="overflow-y-auto max-h-[400px]">
                        {departments.map((item, index) => (
                          <motion.li
                            key={index}
                            onClick={() => handleSelect(index)}
                            className={`cursor-pointer p-4 m-[5px] mb-[10px] font-bold shadow-md rounded-[10px] ${selectedIndex === index ? 'bg-custom-blue-gradient text-white shadow-[0px_0px_3px_#707070]  border-white border-[0.0001px]' : 'bg-white text-black'}`}
                          >
                            {item
                              .replace(/_/g, " ")
                              .replace(/\b\w/g, (char) => char.toUpperCase())}{" "}
                            {jobCounts[index] > 0 && (
                              <span className="ml-2 text-gray-500">({jobCounts[index]})</span>
                            )}
                          </motion.li>

                        ))}
                      </div>
                    </ul>
                  </div>


                  <div
                    className={`max-h-[540px]  overflow-y-auto ${filteredJobs.length === 0 ? "content-center   w-[60%]" : "w-[100%] ipad-pro:w-[70%] xl:w-[70%] "
                      }`}
                  >
                    {filteredJobs.length > 0 ? (
                      filteredJobs.map((job) => (
                        <Link to={`/join-us/${job.id}`} key={job.id}>
                          <div className="bg-custom-blue-gradient font-inter text-white p-[8px] rounded-2xl flex flex-col xl:flex-row   ipad-pro:flex-row md:flex-row  justify-between xl:items-center ipad-pro:items-center md:items-center items-start w-full">
                            {/* Left Section - Job Title */}
                            <div className="flex flex-col text-left">
                              <h2 className="text-2xl font-bold text-white">{job.designation}</h2>
                              <div className="flex items-center gap-4 mt-2 text-gray-300">
                                <div className="flex items-center gap-2">
                                  <span className="text-lg">📍</span> {/* Replace with actual icon */}
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-lg">💼</span> {/* Replace with actual icon */}
                                  <span>{job.experience}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-gray-300 ">{job.type || "Full Time"}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <motion.button whileHover={{
                                backgroundColor: '#FFFFFF',
                                color: '#1887C9',
                                borderColor: '#1887C9',
                                transition: { duration: 0.1 },
                              }}
                                drag
                                className="px-[0.7rem] py-[0.3rem] rounded-[20px]    text-center  font-bold border-2 border-[#1887C9] bg-[#1887C9] text-white  transition-all duration-100">
                                Apply Now <span>➜</span>
                              </motion.button >
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="text-center w-full">NO JOBS AVAILABLE</div>
                    )}
                  </div>
                </div>
              ) : (
                <div>NO DATA AVAILABLE</div>
              )}
            </div>
          </div>
        </div>
        <CTASection
          title="Didn’t Find the Right Role? Share Your Resume With Us!"
          description="We’re always looking for talented individuals to join our team! If you don’t see a role that matches your skills, don’t worry - share your resume with us, and we’ll reach out when a suitable opportunity arises."
          buttonText="Share Your Resume"
          bgColor="bg-white"
          link="#"
          ctaImage={websiteCTAImage2}
          onClick={handleApplyNow}
        />

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-[95%] md:w-[50%] ">
              <button
                className="text-gray-500 hover:text-black text-lg font-bold float-right"
                onClick={closeModal}
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4 text-center">
                Job Application
              </h2>
              <form onSubmit={handleSubmit} encType="multipart/form-data" className="text-left">
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
                    accept="application/pdf" // only allow PDF files
                    onChange={handleChange}
                  />
                  {errors.resume && (
                    <p className="text-red-500 text-xs mt-1">{errors.resume}</p>
                  )}
                </div>
                <div className="mb-4 mt-[30px]">
                  <label className="block text-[#000000] text-[14px] leading-[16px] font-chivo  font-medium mb-2">
                    Gender
                  </label>
                  <div className="flex gap-[53px] items-center">
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
          </div>
        )}
        {showThankYouPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-[95%] md:w-[50%] text-center items-center flex flex-col">
              <img
                width="800"
                height="600"
                sizes="(max-width: 640px) 100vw,
         (max-width: 1280px) 50vw,
         33vw"
                loading="lazy"
                src="https://webkorps-app.s3.us-east-1.amazonaws.com/thankyouImage.webp"
                alt="Thank You"
                className="w-[100px] h-[100px] mb-5"
              />
              <h2 className="text-xl font-bold mb-4">Thank You!</h2>
              <p className="text-gray-700 mb-4">
                Your application has been submitted successfully.
              </p>
              <button
                className="bg-[#469FD4] text-white px-4 py-2 rounded-md"
                onClick={() => setShowThankYouPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="bg-custom-blue-gradient py-16 overflow-hidden">
          <div className="overflow-hidden items-center px-6 md:px-10 lg:px-12 xl:px-[30px] ipad-pro:px-[30px] justify-center text-center lg:text-left mx-4 md:mx-8 lg:mx-12 xl:mx-[50px] ipad-pro:mx-[50px] p-6 md:p-8 lg:p-12 gap-6 shadow-custom-lg rounded-2xl bg-white">

            <div className="w-full text-center" data-aos="fade-left">
              <h2
                className="font-inter text-[1.5625rem] xl:text-[2.1875rem] ipad-pro:text-[1.875rem] md:text-[2.1875rem] leading-[2.45rem] font-bold text-center xl:text-center ipad-pro:text-center text-[#072125] w-full mb-6"
                data-aos="fade-right">
                Life at Webkorps - Where Passion Meets Innovation!
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <img width="800"
                height="600"
                sizes="(max-width: 640px) 100vw,
         (max-width: 1280px) 50vw,
         33vw"
                loading="lazy" src={'https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-walking-drive.jpg'} alt="webkorps-walking-drive" className="rounded-lg  w-full h-auto aspect-[4/3]" />
              <img width="800"
                height="600"
                sizes="(max-width: 640px) 100vw,
         (max-width: 1280px) 50vw,
         33vw"
                loading="lazy" src={WebkorpsTeamImg?.src || WebkorpsTeamImg} alt="Webkorps Team Image" className="rounded-lg  w-full h-auto aspect-[4/3]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <img
                  width="800"
                  height="600"
                  sizes="(max-width: 640px) 100vw,
         (max-width: 1280px) 50vw,
         33vw"
                  loading="lazy"
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg w-full h-auto aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                />
              ))}
            </div>

            {selectedImage && (
              <div
                className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                onClick={() => setSelectedImage(null)}
              >
                <div
                  className="max-w-4xl w-full relative p-4"
                  onClick={(e) => e.stopPropagation()} // prevent close when clicking image
                >
                  <button
                    className="absolute top-2 right-2 text-white text-2xl font-bold"
                    onClick={() => setSelectedImage(null)}
                  >
                    &times;
                  </button>
                  <img
                    width="800"
                    height="600"
                    sizes="(max-width: 640px) 100vw,
         (max-width: 1280px) 50vw,
         33vw"
                    loading="lazy"
                    src={selectedImage}
                    alt="Full Size"
                    className="rounded-lg w-full h-auto max-h-[80vh] object-contain"
                  />
                </div>
              </div>
            )}

          </div>
        </div>
        <ReviewSlider />
        <Features heading={benefitData.heading} features={benefitData.Data} description={benefitData.description} bgColor='bg-[#1887C9]' />
        <FAQSection title={faqData?.title} faqData={faqData?.data} description={faqData.description} content={faqData.content} />
      </div>

      <Footer />
    </div>
  );
}
