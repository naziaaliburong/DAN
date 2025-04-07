import React, { useState } from 'react'

const ToggleButton = () => {
    const [selectedLang, setSelectedLang] = useState("ENG");

  return (
    <div className="flex bg-gray-200 rounded-full w-18 h-6 text-black">
      <button
        className={`flex-1 text-center px-3 py-1 rounded-full text-xs transition-all ${
          selectedLang === "ENG" ? "bg-white shadow-md" : "text-gray-600"
        }`}
        onClick={() => setSelectedLang("ENG")}
      >
        ENG
      </button>
      <button
        className={`flex-1 text-center px-3 py-1 rounded-full text-xs transition-all ${
          selectedLang === "AR" ? "bg-white shadow-md" : "text-gray-600"
        }`}
        onClick={() => setSelectedLang("AR")}
      >
        عربي
      </button>
    </div>
  )
}

export default ToggleButton
