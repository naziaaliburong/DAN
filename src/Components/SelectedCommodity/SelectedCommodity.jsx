import React from 'react'
import { tickIcon } from '../../Assets/SVGs/SvgIcons';

const SelectedCommodity = ({selectedCommodity, commodityType, handleBack, selectedFruit, handleSelectFruit, setStep}) => {
  return (
    <>
                    <button className="text-teal-700 text-lg font-semibold mb-4 text-left" onClick={handleBack}>← Back</button>
                    <div className="flex flex-col items-center p-6">
                    <div className="bg-white p-6 rounded-lg shadow-top-bottom-lg w-[400px] max-sm:w-full text-center">
                    <h2 className="text-gray-700 text-2xl font-semibold mb-4">{selectedCommodity.title}</h2>
                    <div className="grid grid-cols-3 gap-8 pb-5">
                      {commodityType.map((type, index) => (
                        <div
                          key={index}
                          className={`relative w-24 h-24 rounded-lg cursor-pointer border ${
                            selectedFruit === type.name ? "border-teal-700" : "border-gray-200"
                          }`}
                          onClick={() => handleSelectFruit(type)}
                        >
                          <img
                            src={type.image}
                            alt={type.name}
                            className="w-full h-full object-cover"
                          />
                          {selectedFruit === type && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                              <span className="text-white w-8 h-8">{tickIcon}</span>
                            </div>
                          )}
                          <p>{type.name}</p>
                        </div>
                      ))}
                    </div>
                    <button className="bg-teal-700 text-white py-2 px-6 mt-4 rounded hover:bg-teal-800 text-lg font-semibold">
                      See All
                    </button>
                  </div>
                  <button className="bg-teal-700 text-white py-3 px-20 mt-4 rounded hover:bg-teal-800 text-lg font-semibold" onClick={()=> setStep((prevStep) => prevStep + 1)}>
                    Next
                  </button>
                  </div>
                  </>
  )
}

export default SelectedCommodity
