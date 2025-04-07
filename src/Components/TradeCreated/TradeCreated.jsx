import React from 'react'
import SuccessLogin from '../SuccessLogin/SuccessLogin'

const TradeCreated = ({setStep}) => {
  return (
        <>
            <button className="text-teal-700 text-lg font-semibold mb-4 text-left" onClick={()=>setStep((prevStep)=>prevStep-1)}>← Back</button>
            <div className="flex flex-col items-center p-6">
                <div className="bg-white py-6 px-16 rounded-lg shadow-top-bottom-lg w-[550px] max-sm:w-full text-left">
                    <SuccessLogin heading="Trade has been created" display={false}/>
                </div>
            </div>
        </>
  )
}

export default TradeCreated
