import { useState } from "react";
import Login from "../Login/Login";
import OTP from "../OTP/OTP";
import RoleSelection from "../RoleSelection/RoleSelection";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import SuccessLogin from "../SuccessLogin/SuccessLogin";
import { closeIcon } from "../../Assets/SVGs/SvgIcons";

export default function LoginModal({ isOpen, onClose, selectedRole, setSelectedRole }) {
  const [step, setStep] = useState(1);
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+92");
  const [phoneNumber, setPhoneNumber] = useState("");

  if (!isOpen) return null;
  const handleNext = () => setStep((prev) => prev + 1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 shadow-lg w-[400px] relative overflow-hidden">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
          {closeIcon}
        </button>

        {step === 1 && (
          <Login handleNext={handleNext} setGeneratedOTP={setGeneratedOTP} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} setSelectedCountryCode={setSelectedCountryCode}/>
        )}

        {step === 2 && (
          <OTP handleNext={handleNext} generatedOTP={generatedOTP} phoneNumber={phoneNumber} selectedCountryCode={selectedCountryCode}/>
        )}

        {step === 3 && (
          <RoleSelection handleNext={handleNext} selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>
        )}

        {step === 4 && (
          <RegistrationForm handleNext={handleNext}/>
        )}
        {step === 5 && (
            <SuccessLogin heading="Registration Successful!" display={true}/>
        )}
        </div>
    </div>
  );
}