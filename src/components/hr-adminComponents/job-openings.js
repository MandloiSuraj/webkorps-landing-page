import React, { useState, useEffect, Suspense } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import "react-quill/dist/quill.snow.css";
import Header from "../sharedComponents/Header";
import Footer from '../sharedComponents/footer';
import { Link } from 'react-router-dom';
const ReactQuill = React.lazy(() => import('react-quill'), { ssr: true });

export default function JobOpening() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isClient, setIsClient] = useState(false);  
  const [formData, setFormData] = useState({
    job_title: '',
    job_type: '',
    experience: '',
    deadline: '',
    location: '',
    working_days: '',
    designation: '',
    shift_start_time: '',
    shift_end_time: '',
    number_of_vacancy: '',
    skills_requirements: '',
    educational_requirements: '',
    additional_skills: ''
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setIsClient(true);

    if (id && id !=='create') {
      fetch(`https://be.webkorps.com:4202/v1/career_jobs/${id}`)
        .then(response => response.json())
        .then(data => {
          if (data) {
            setFormData({
              job_title: data.job_title || '',
              job_type: data.job_type || '',
              experience: data.experience || '',
              deadline: data.deadline || '',
              location: data.location || '',
              working_days: data.working_days || '',
              additional_skills: data.additional_skills || '',
              designation: data.designation || '',
              educational_requirements: data.educational_requirements || '',
              shift_start_time: data.shift_start_time || '',
              shift_end_time: data.shift_end_time || '',
              number_of_vacancy: data.number_of_vacancy || '',
              skills_requirements: data.skills_requirements || '',
            });
          }
        })
        .catch(error => console.error('Error fetching job data:', error));
    }
  }, [id]);
  const fieldsConfig = [
    { name: 'job_title', label: 'Department', type: 'text' },
    { name: 'designation', label: 'Designation', type: 'text' },
    { name: 'job_type', label: 'Job Type', type: 'text' },
    { name: 'experience', label: 'Experience', type: 'text' },
    { name: 'deadline', label: 'Deadline', type: 'date' },
    { name: 'location', label: 'Location', type: 'text' },
    { name: 'working_days', label: 'Working Days', type: 'number' },
    { name: 'number_of_vacancy', label: 'No. of Vacancy', type: 'number' },
    { name: 'shift_start_time', label: 'Shift Start Time', type: 'time' },
    { name: 'shift_end_time', label: 'Shift End Time', type: 'time' },
    { name: 'notice_period', label: 'Notice Period', type: 'number' },
    { name: 'skills_requirements', label: 'Who Are We Looking For', type: 'editor' },
    { name: 'educational_requirements', label: 'Educational Requirement', type: 'editor' },
    { name: 'additional_skills', label: 'Bonus Points for Familiarity with', type: 'editor' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'working_days' || name==='number_of_vacancy') {
      // Allow only positive integers
      const positiveIntegerPattern = /^[1-9]\d*$/;
      if (!value || positiveIntegerPattern.test(value)) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
  
        // Clear error for "working_days" if valid
        setErrors((prevErrors) => {
          const updatedErrors = { ...prevErrors };
          if (positiveIntegerPattern.test(value)) {
            delete updatedErrors[name];
          }
          return updatedErrors;
        });
      }
    } else {
      // For other fields, allow default handling
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
  
      // Clear errors for valid input
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        if (value.trim()) {
          delete updatedErrors[name];
        }
        return updatedErrors;
      });
    }
  };
  

  const validateForm = () => {
    const newErrors = {};
  
    fieldsConfig.forEach((field) => {
      // Skip validation for notice_period
      if (field.name !== 'notice_period' && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
  
    // Additional validation for shift_start_time and shift_end_time
    const startTime = formData.shift_start_time;
    const endTime = formData.shift_end_time;
  
    if (startTime && endTime) {
      if (new Date(`1970-01-01T${endTime}`) <= new Date(`1970-01-01T${startTime}`)) {
        newErrors.shift_end_time = "Shift End Time must be after Shift Start Time";
      }
    } else {
      if (!startTime) {
        newErrors.shift_start_time = "Shift Start Time is required";
      }
      if (!endTime) {
        newErrors.shift_end_time = "Shift End Time is required";
      }
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const isCreatePath = location.pathname.endsWith('/create');
    try {
      const method = isCreatePath || !id ? 'POST' : 'PUT';
      const url = !isCreatePath && id
        ? `https://be.webkorps.com:4202/v1/career_jobs/${id}`
        : 'https://be.webkorps.com:4202/v1/career_jobs';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/job-openings');
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center p-20 pt-[80px]" >
        <div className="max-w-screen-md mx-auto p-5">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Create Job Opening Form
            </h3>
          </div>

          <form className="w-full flex flex-wrap -mx-3 mb-6">
            <div className="flex flex-wrap -mx-3 mb-6">
              {fieldsConfig.map((field, index) => (
                <div
                  key={field.name}
                  className={field.type === 'editor' ? 'w-full px-3 mb-6' : 'w-full md:w-1/3 px-3 mb-6'}
                >
                  <label className="block uppercase tracking-wide text-gray-700 text-xs  font-bold mb-2">
                    {field.label}
                  </label>
                  {field.type === 'editor' ? (
                    isClient && (
                        <textarea
                          // placeholder={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className={`w-[100%] h-[100px] p-2 text-[19px] leading-[26px] border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500 overflow-y-auto resize-none`}
                          rows="1"
                          required
                        />
                    )
                  ) : field.name === 'job_type' ? (
                    <div>
                      <select
                        className="pl-2 appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                      >
                        <option value="">Select Job Type</option>
                        <option value="full_time">Full Time</option>
                        <option value="contractual">Contractual</option>
                      </select>
                    </div>
                  ) : field.name === 'job_title' ? (
                    <div>
                      <select
                        className="pl-2 appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                      >
                        <option value="">Select department</option>
                        <option value="hr_and_recruitment">HR and Recruitment</option>
                        <option value="support">Support</option>
                        <option value="sales_and_marketing">Sales & Marketing</option>
                        <option value="engineering">Engineering</option>
                      </select>
                    </div>
                  ) : (
                    <div>
                      <input
                        className="pl-2 appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        step={field.name === 'working_days' ? '1' : undefined}
                      />
                    </div>
                  )}


                  {errors[field.name] && <span className='text-red-500 text-xs'>{errors[field.name]}</span>}
                </div>
              ))}

            </div>


            <div className="flex justify-start w-full mt-4">
              <Link to="/job-openings" > <button
                class="shadow primary-color w-[100px] hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded mr-4"
                type="submit"

              >
                Back
              </button></Link>
              <button
                className="shadow primary-color w-[100px] hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}