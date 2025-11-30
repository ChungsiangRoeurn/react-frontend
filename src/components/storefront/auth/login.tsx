import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white shadow-lg border border-slate-200 p-10 rounded-lg w-full max-w-lg">
      <h1 className="text-center text-2xl font-semibold mb-6">Sign In</h1>

      <div className="flex flex-col gap-4">
        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
        />

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="p-3 border rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-1 cursor-pointer">
            <input type="checkbox" />
            Remember Me
          </label>

          <a href="#" className="text-[#029FAE] hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Button */}
        <button className="bg-[#029FAE] text-white py-2 rounded-lg hover:opacity-90">
          Sign In
        </button>
      </div>

      <p className="text-center text-xs mt-4">
        Don&apos;t have an account?
        <a href="/sign-up" className="text-[#029FAE] ml-1 hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
