import React from 'react'
import { uploadIcon } from '../../Assets/SVGs/SvgIcons'

const RegistrationForm = ({handleNext}) => {
  return (
    <div className="px-4">
            <h1 className="text-3xl text-gray-700 font-medium pb-2">Registration</h1>
            <p className="text-gray-600 pb-1">Please fill out the following</p>
            
            <label className="block text-[10px] text-gray-700 ">Full name*</label>
            <input className="w-full border rounded-sm h-7 pl-2 text-xs mb-2" type="text" placeholder="Enter your name" />
            
            <label className="block text-[10px] text-gray-700">Email <span className="text-gray-400">(optional)</span></label>
            <input className="w-full border rounded-sm h-7 pl-2 text-xs mb-2" type="email" placeholder="Enter your email address" />
            
            <h2 className="text-[10px] font-semibold text-gray-700 ">Bank Details <span className="text-gray-400">(optional)</span></h2>
            
            <label className="block text-[10px] text-gray-700 ">Account Title</label>
            <input className="w-full border rounded-sm h-7 pl-2 text-xs mb-2" type="text" placeholder="Enter your account title" />
            
            <label className="block text-[10px] text-gray-700 ">IBAN Number</label>
            <input className="w-full border rounded-sm h-7 pl-2 text-xs mb-2" type="text" placeholder="Enter your IBAN number" />
            
            <h2 className="text-[10px] font-semibold text-gray-700 ">Upload Documents</h2>
            <div className="flex flex-col items-center w-full border border-gray-200 rounded-sm mb-2 p-4 cursor-pointer hover:bg-gray-50">
                {uploadIcon}
                <p className="text-xs text-gray-600">Click here to upload documents</p>
            </div>
            
            <button className="w-full bg-teal-700 text-white p-3 text-lg font-medium hover:bg-teal-800 mb-2" onClick={handleNext}>Register</button>
            
            <p className="text-center font-semibold text-gray-600 cursor-pointer hover:underline">Skip for Now</p>
    </div>
  )
}

export default RegistrationForm