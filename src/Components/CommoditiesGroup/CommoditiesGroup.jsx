import React from 'react'
import CommodityCard from '../CommodityCard/CommodityCard'
import { commodities } from '../../Assets/CommoditiesObject/CommoditiesObject'

const CommoditiesGroup = ({ selectedCommodity, handleSelect, handleNext }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-top-bottom-lg mx-28 my-10 max-lg:mx-12">
            <h2 className="text-gray-600 text-3xl max-sm:text-xl font-semibold text-left pl-16 max-lg:pl-8 max-sm:pl-0">
                Commodities Group
            </h2>
            <p className="text-gray-600 mb-4 text-left pl-16 text-xl max-sm:text-sm max-lg:pl-8 max-sm:pl-0">
                Select commodities groups of your interest
            </p>
            <div className="h-[450px] overflow-hidden flex justify-center">
                <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 max-lg:gap-14 max-sm:gap-5 px-14 w-full justify-items-center max-lg:px-8 max-sm:px-0">
                    {commodities.map((item, index) => (
                        <CommodityCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            onClick={() => handleSelect(item)}
                            isSelectedOne={selectedCommodity === item} // Check by object reference
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <button
                    className="bg-teal-700 text-white py-1 px-20 hover:bg-teal-800 text-2xl font-semibold"
                    onClick={handleNext}
                    disabled={!selectedCommodity}
                >
                    Next
                </button>
            </div>
        </div>
  )
}

export default CommoditiesGroup
