import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { countryCodes } from '../../Assets/CountriesData/CountriesData';
import { sendOTP } from '../../API/authAPI';

const Login = ({ handleNext, setGeneratedOTP, phoneNumber, setPhoneNumber, setSelectedCountryCode }) => {
  const [selectedCode, setSelectedCode] = useState(countryCodes[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState('');

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleSendOTP = async () => {
    if (phoneNumber.length !== 10) {
      alert("Please enter exactly 10 digits.");
      return;
    }
    const otpData = {
      "mobileNumber": `${selectedCode.code}${phoneNumber}`,
      "deviceToken": " ",
      "isDevelopment": true
    };

    try {
      const otp = await sendOTP(otpData);
      setGeneratedOTP(otp);
      alert(`Your OTP is: ${otp}`);
      handleNext();
    } catch (error) {
      console.error(error.message);
      alert('Failed to send OTP');
    }
  };

  const filteredCountries = countryCodes.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-900">Welcome to DAN</h2>
      <p className="text-gray-600 mt-1 mb-4">Enter your mobile number to continue</p>

      <div className="relative border border-gray-300 flex items-center px-3 py-2 rounded">
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img src={selectedCode.flag} alt="flag" className="w-6 h-4 rounded-sm" />
            <span className="text-gray-700 font-medium">{selectedCode.code}</span>
            <FaChevronDown className="text-gray-500" />
          </button>

          {showDropdown && (
            <div className="absolute z-10 bg-white shadow-md mt-2 w-48 max-h-60 overflow-y-auto border border-gray-200">
              <input
                type="text"
                placeholder="Search country"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 border-b border-gray-300 outline-none text-sm"
              />
              {filteredCountries.map((country) => (
                <div
                  key={country.code}
                  onClick={() => {
                    setSelectedCode(country);
                    setSelectedCountryCode(country.code);
                    setShowDropdown(false);
                    setSearch('');
                  }}
                  className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  <img src={country.flag} alt={country.name} className="w-5 h-3 mr-2" />
                  <span className="text-sm">{country.name} ({country.code})</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-l border-gray-400 h-5 mx-2"></div>
        <input
          type="number"
          placeholder="Enter number"
          className="ml-3 flex-1 outline-none text-gray-900"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>

      <p className="text-xs text-gray-600 mt-3 pt-10">
        By Signing in I agree to the{" "}
        <span className="font-semibold text-gray-900">Terms of Use</span> at DAN
      </p>

      <button
        onClick={handleSendOTP}
        className="w-full bg-teal-700 hover:bg-teal-800 text-white py-2 mt-4"
      >
        Next
      </button>
    </div>
  );
};

export default Login;