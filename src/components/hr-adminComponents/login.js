import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../sharedComponents/Header';
import Footer from '../sharedComponents/footer';
import { useAuth } from '../../Utility/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const isAuthenticated = username === 'hr@webkorps.com' && password === '123456';
  
    if (isAuthenticated) {
      localStorage.setItem('username', username);
      login();
      navigate('/job-openings');
    } else {
    console.error('Invalid credentials. Please try again.');
    alert('Invalid credentials. Please try again.')
    }
  };


  return (
    <>
      <Header />
      <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            <img
              width="800"
              height="600"
              sizes="(max-width: 640px) 100vw, 
         (max-width: 1280px) 50vw, 
         33vw"
              loading="lazy"
              alt="webkorps-logo"
              src="https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-logo.webp"
              className="mx-auto h-10 w-auto inline pr-4"
            />
            Sign in to your HR account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 pl-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 pl-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md primary-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
