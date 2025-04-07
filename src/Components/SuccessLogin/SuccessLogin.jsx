import React from 'react';
import successLoginIcon from "../../Assets/Images/successLoginIcon.png";
import { useNavigate } from 'react-router-dom';

const SuccessLogin = ({ heading, display }) => {
  const navigate = useNavigate();
  
  return ( 
    <div className="p-4 text-center">
      <div className="flex items-center justify-center mb-4">
        <img src={successLoginIcon} alt="success login icon" className='w-32 h-28'/>
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{heading}</h2>
      {display && (
        <p className="text-gray-600 mt-2 text-sm">
          Your account verification is in progress. You’ll receive a notification and/or Email once approved by the Admin.
        </p>
      )}
      <button onClick={() => navigate("/marketplace")} className={` ${!display ? "mt-16" : "mt-4"} w-full bg-teal-700 text-white py-2 text-lg font-medium hover:bg-teal-800 transition`}>
        Next
      </button>
    </div>
  );
}

export default SuccessLogin;