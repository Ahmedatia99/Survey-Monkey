import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import signinBackground from '@/assets/images/background-signin.png'
import signupBackground from '@/assets/images/background-signup.png';
import logo from '@/assets/images/logo.png';
import { Link } from 'react-router';

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center min-h-screen overflow-hidden bg-white">
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center bg-white p-6 sm:p-8 lg:p-10 order-2 lg:order-1">
        
        {/* Logo and Brand */}
        <div className='flex items-center justify-center mb-6 sm:mb-8 gap-2'>
          <img src={logo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg" />
          <div className='flex items-center gap-1 sm:gap-2'>
            <p className='text-xl sm:text-2xl font-bold text-[#6441A5]'>
              Survey
            </p>
            <span className='text-xl sm:text-2xl font-bold text-black'>Infinity</span>
          </div>
        </div>

        {/* Shadcn Tabs */}
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8 bg-gray-100 p-1 rounded-lg max-w-xs mx-auto">
            <TabsTrigger 
              value="login"
              className="data-[state=active]:bg-white data-[state=active]:text-[#6441A5] data-[state=active]:shadow-sm text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base transition-all duration-200"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger 
              value="signup"
              className="data-[state=active]:bg-white data-[state=active]:text-[#6441A5] data-[state=active]:shadow-sm text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base transition-all duration-200"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          {/* Login Form */}
          <TabsContent value="login" className="mt-0">
            <form className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6441A5] focus:ring-1 focus:ring-[#6441A5] transition-all duration-200 placeholder:text-gray-400 text-sm sm:text-base"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6441A5] focus:ring-1 focus:ring-[#6441A5] transition-all duration-200 placeholder:text-gray-400 text-sm sm:text-base"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#6441A5] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#5a3a94] transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  Sign In
                </button>
                <Link href="#" className="text-sm text-[#6441A5] hover:text-[#5a3a94] font-medium text-center sm:text-left">
                  Forgot password?
                </Link>
              </div>
              
              <div className="text-center pt-2">
                <p className="text-gray-600 text-sm sm:text-base">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setActiveTab('signup')}
                    className="text-[#6441A5] hover:text-[#5a3a94] font-semibold"
                  >
                    Sign up here
                  </button>
                </p>
              </div>
            </form>
          </TabsContent>

          {/* Signup Form */}
          <TabsContent value="signup" className="mt-0">
            <form className="space-y-4 sm:space-y-5">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6441A5] focus:ring-1 focus:ring-[#6441A5] transition-all duration-200 placeholder:text-gray-400 text-sm sm:text-base"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6441A5] focus:ring-1 focus:ring-[#6441A5] transition-all duration-200 placeholder:text-gray-400 text-sm sm:text-base"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6441A5] focus:ring-1 focus:ring-[#6441A5] transition-all duration-200 placeholder:text-gray-400 text-sm sm:text-base"
                  placeholder="Create a password"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#6441A5] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#5a3a94] transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base">
                Sign Up
              </button>
              
              <div className="text-center pt-2">
                <p className="text-gray-600 text-sm sm:text-base">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setActiveTab('login')}
                    className="text-[#6441A5] hover:text-[#5a3a94] font-semibold"
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-screen overflow-hidden relative order-1 lg:order-2">
        <img
          src={activeTab === 'signup' ? signupBackground : signinBackground}
          alt={activeTab === 'signup' ? "Decorative background for signup" : "Decorative background for login"}
          className="w-full h-full object-cover transition-opacity duration-500"
          key={activeTab}
        />
      </div>
    </div>
  );
};

export default Login;