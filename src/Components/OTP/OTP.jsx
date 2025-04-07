import React from 'react'

const OTP = ({handleNext}) => {
  return (
    <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-900">Enter OTP</h2>
            <p className="text-gray-700 mt-1">
            Verify your number by entering the 4-digit code sent to <strong>+966 234234234</strong>
            </p>

            <div className="flex justify-between mt-4">
            {[...Array(4)].map((_, i) => (
                <input
                key={i}
                type="text"
                className="border border-gray-400 rounded-md w-12 h-12 text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
                maxLength="1"
                />
            ))}
            </div>

            <p className="text-sm text-gray-600 mt-3 text-center">
            OTP will expire in <strong className="text-gray-900">01:00</strong>
            </p>
            <p className="text-xs text-gray-600 mt-3 pt-5 text-center">
            By Signing in I agree to the{" "}
            <span className="font-semibold text-gray-900">Terms of Use</span> at DAN
            </p>

            <button
            onClick={handleNext}
            className="bg-teal-700 text-white font-medium py-2 w-full rounded-lg mt-5"
            >
            Next
            </button>
          </div>
  )
}

export default OTP
