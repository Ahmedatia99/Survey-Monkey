import signinBackground from '@/assets/images/background-signin.png';
import logo from '@/assets/images/logo.png';
import { Link } from 'react-router';

const Login = ({ onSwitchToSignup }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted');
  };

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

        {/* Login Form */}
        <div className="w-full max-w-md">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6441A5] focus:ring-1 focus:ring-[#6441A5] transition-all duration-200 placeholder:text-gray-400 text-sm sm:text-base"
                placeholder="Enter your email"
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
              />
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <button
                onClick={handleLogin}
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
                  onClick={onSwitchToSignup}
                  className="text-[#6441A5] hover:text-[#5a3a94] font-semibold"
                >
                  Sign up here
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-screen overflow-hidden relative order-1 lg:order-2">
        <img
          src={signinBackground}
          alt="Decorative background for login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;