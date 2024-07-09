import React, { useState } from 'react';
import { auth, provider } from '../firebase/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login Successful')
      navigate('/tracking');
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success('Login Successful')
      navigate('/tracking');
    } catch (error) {
      console.error("Error logging in with Google: ", error);
    }
  };

  return (
    <>

      <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <div className="w-[375px] max-w-md bg-white p-8 shadow-lg">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2 w-[280px]">Login to your account</h1>
            <p className="text-gray-600">Please sign in to your account</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 pb-3">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 pb-3">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
              />
            </div>
            <p className='text-end text-[#FE8C00] text-[14px]'>Forgot password?</p>
            <button
              type="submit"
              className="w-full py-2 h-[52px] bg-orange-500 text-white font-semibold rounded-[100px] hover:bg-[#FE8C00] transition-colors"
            >
              Sign in
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className='w-20 h-[1px] bg-gray-300'></div>
            <span className="text-gray-600">Or sign in with</span>
            <div className='w-20 h-[1px] bg-gray-300'></div>
          </div>
          <div
            onClick={handleGoogleLogin}
            className="mt-4  py-2 bg-white text-[#FE8C00] border font-semibold rounded-[100px] transition-colors flex items-center justify-center cursor-pointer"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M24 9.5c3.14 0 5.58 1.06 7.67 2.78l5.65-5.65C33.58 3.92 29.07 2 24 2 14.89 2 7.28 7.48 4.1 15.07l6.75 5.24C12.77 14.45 18.02 9.5 24 9.5z" />
              <path fill="#34A853" d="M46.45 24.28c0-1.65-.15-3.23-.42-4.75H24v9h12.75c-.55 3-2.2 5.5-4.68 7.25l7.35 5.7C44.06 36.4 46.45 30.73 46.45 24.28z" />
              <path fill="#FBBC05" d="M10.85 28.23C10.17 26.5 9.8 24.65 9.8 22.75c0-1.9.37-3.75 1.05-5.48l-6.75-5.24C2.58 15.85 1.55 19.22 1.55 22.75c0 3.52 1.03 6.9 2.9 9.72l6.4-4.24z" />
              <path fill="#EA4335" d="M24 45.5c5.52 0 10.14-1.82 13.52-4.93l-6.67-5.18c-1.87 1.28-4.25 2.05-6.85 2.05-5.98 0-11.22-4.95-12.45-11.47L4.1 32.93C7.28 40.52 14.89 46 24 46z" />
            </svg>
          </div>
          <p className='text-center text-[14px] mt-8'>Don't have an account? <Link to={'/signup'} className='text-[#FE8C00]'> Register</Link></p>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Login;
