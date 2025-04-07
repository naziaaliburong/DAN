import React, { useState } from 'react'

const SelectedSubCommodity = ({selectedFruit, setStep}) => {

    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("KG");

  return (
    <>
    <button className="text-teal-700 text-lg font-semibold mb-4 text-left" onClick={()=>setStep((prevStep)=>prevStep-1)}>← Back</button>
    <div className="flex flex-col items-center p-6">
    <div className="bg-white py-6 px-16 rounded-lg shadow-top-bottom-lg w-[550px] max-sm:w-full text-left">
    <h2 className="text-3xl text-gray-600">Create Trade</h2>
      <p className="text-gray-600 text-lg">Please fill out the following</p>
      <img
        src={selectedFruit.image}
        alt={selectedFruit.name}
        className="w-full h-48 object-cover mt-2 py-1"
      />
      <p className="font-semibold mt-2 text-gray-700">
          Sub-Commodity Name:<span className='font-normal'> {selectedFruit.name} </span>
      </p>
      <div className="text-left mt-4">
        <label className="block text-gray-700 font-medium">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter Quantity"
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
        />
      </div>
      <div className="text-left mt-4">
        <label className="block text-gray-700 font-medium">Unit</label>
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
        >
          <option value="KG">KG</option>
          <option value="LBS">LBS</option>
        </select>
      </div>
      <button className="bg-teal-700 text-white text-2xl font-bold w-full py-4 mt-7 hover:bg-teal-800" onClick={()=> setStep((prevStep) => prevStep + 1)}>
        Next
      </button>
    </div>
    </div>
    </>
  )
}

export default SelectedSubCommodity
