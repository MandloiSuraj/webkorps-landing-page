import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../sharedComponents/Header';
import Footer from '../sharedComponents/footer';
import { useAuth } from '../../Utility/AuthContext';

function JobOpeningList() {
  const [jobOpenings, setJobOpenings] = useState([]);
const {logout}=useAuth()
  useEffect(() => {
    fetch('https://be.webkorps.com:4202/v1/career_jobs')
      .then(response => response.json())
      .then(data => setJobOpenings(data))
      .catch(error => console.error('Error:', error));
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('password');
    localStorage.removeItem('username');
    logout();
  };
  const handleDelete = async (id) => {
    try {
      await fetch(`https://be.webkorps.com:4202/v1/career_jobs/${id}`, { method: 'DELETE' });
      setJobOpenings(jobOpenings.filter(job => job?.id !== id));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="overflow-hidden ">
      <Header />
      <div className="justify-center p-4 md:p-8 lg:p-32 lg:px-[160px] pt-[80px]">
  <div className="relative justify-center">
    <div className="text-center mt-4 mb-4 flex flex-col md:flex-row md:justify-between items-center">
      <h2 className="text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight text-gray-900 mb-4 md:mb-0">
        Job Opening List
      </h2>
      <div className='text-center mt-4 mb-4 flex flex-col md:flex-row md:justify-between items-center gap-[20px]'>
      <button
        type="button"
        className="py-2.5 px-5 shadow primary-color hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold rounded"
      >
        <Link to="/job-openings/create">Create New Job Opening</Link>
      </button>
      <button
      onClick={()=>{handleLogout()}}
        type="button"
        className="py-2.5 px-5 shadow primary-color hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold rounded"
      >
        LogOut
      </button>
      </div>
    
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm  text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">Designation</th>
            <th scope="col" className="px-4 py-3">Department</th>
            <th scope="col" className="px-4 py-3">Experience</th>
            <th scope="col" className="px-4 py-3">Vacancy</th>
            <th scope="col" className="px-4 py-3">Deadline</th>
            <th scope="col" className="px-4 py-3">Location</th>
            <th scope="col" className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {jobOpenings.map((job) => (
            <tr
              className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 dark:bg-gray-800 text-center"
              key={job.id}
            >
              <td className="px-4 py-4 text-gray-900 dark:text-white">
                {job.designation}
              </td>
              <td className="px-4 py-4 text-gray-900 dark:text-white">
                {job.job_title
                          .replace(/_/g, " ") // Replace underscores with spaces
                          .replace(/\b\w/g, (char) => char.toUpperCase())}
              </td>
              <td className="px-4 py-4 text-gray-900 dark:text-white">
                {job.experience}
              </td>
              <td className="px-4 py-4 text-gray-900 dark:text-white">
                {job.number_of_vacancy}
              </td>
              <td className="px-4 py-4 text-gray-900 dark:text-white">
                {job.deadline}
              </td>
              <td className="px-4 py-4 text-gray-900 dark:text-white">
                {job.location}
              </td>
              <td className="px-4 py-4">
                <Link
                  to={`/job-openings/${job.id}`}
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                &nbsp;|&nbsp;
                <button
                  onClick={() => handleDelete(job.id)}
                  className="font-medium text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
}

export default JobOpeningList;