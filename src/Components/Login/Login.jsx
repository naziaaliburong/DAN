import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import React from 'react'

const Login = ({handleNext}) => {
const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-900">Welcome to DAN</h2>
      <p className="text-gray-600 mt-1 mb-4">Enter your mobile number to continue</p>
      <div className="border border-gray-300 flex items-center px-3 py-2">
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
            alt="KSA Flag"
            className="w-6 h-4 rounded-sm"
          />
          <span className="text-gray-700 font-medium">+966</span>
          <FaChevronDown className="text-gray-500" />
        </div>
        <div className="border-l border-gray-400 h-5 mx-2"></div>
        <input
          type="text"
          placeholder="234234234"
          className="ml-3 flex-1 outline-none text-gray-900"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <p className="text-xs text-gray-600 mt-3 pt-10">
        By Signing in I agree to the{" "}
        <span className="font-semibold text-gray-900">Terms of Use</span> at DAN
      </p>
      <button
        onClick={handleNext}
        className="w-full bg-teal-700 hover:bg-teal-800 text-white py-2 mt-4"
      >
        Next
      </button>
    </div>
  )
}

export default Login