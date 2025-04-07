import React, { useState } from 'react'
import AuctionList from "../AuctionList/AuctionList";
import { useNavigate } from "react-router-dom";
import { backIcon, chatIcon } from '../../Assets/SVGs/SvgIcons';

const BuyTrader = ({item}) => {

    const [activeTab, setActiveTab] = useState("details");
    const navigate = useNavigate();
    const buyInfo = [
      {bidder: "Bidder1", price: 13, quantity: "800KG", time: "11-01-2023 11:00AM"},
      {bidder: "Bidder2", price: 11, quantity: "600KG", time: "11-01-2023 10:50AM"},
      {bidder: "Bidder3", price: 10, quantity: "200KG", time: "11-01-2023 11:00AM"},
      {bidder: "Bidder4", price: 16, quantity: "100KG", time: "11-01-2023 11:00AM"},
      {bidder: "Bidder5", price: 13, quantity: "800KG", time: "11-01-2023 11:00AM"},
    ];
    const buyNow = [
        {quantity: "1000KG", price: 10},
        {quantity: "1000KG", price: 10},
        {quantity: "1000KG", price: 10},
        {quantity: "1000KG", price: 10},
        {quantity: "1000KG", price: 10},
        {quantity: "1000KG", price: 10},
    ];

    const bids = [
        {buyer: "Buyer1", time: "03-29-2024 10:42:00AM", price: 12},
        {buyer: "Buyer2", time: "03-29-2024 10:32:00AM", price: 10},
        {buyer: "Buyer3", time: "03-29-2024 10:42:00AM", price: 12},
        {buyer: "Buyer4", time: "03-29-2024 10:32:00AM", price: 10},
        {buyer: "Buyer5", time: "03-29-2024 10:42:00AM", price: 12},
        {buyer: "Buyer6", time: "03-29-2024 10:32:00AM", price: 10},
        {buyer: "Buyer7", time: "03-29-2024 10:42:00AM", price: 12},
      ];

  return (
    <div className="relative bg-white py-14 w-full px-5">
           
            <div className="absolute top-4 left-10 flex items-center cursor-pointer text-teal-600 font-semibold text-lg" onClick={()=>navigate("/marketplace")}>
              {backIcon}
              <span className="ml-2">Back</span>
            </div>
      
            <div className="w-full bg-white overflow-hidden shadow-top-bottom-lg p-6 grid grid-cols-5 gap-6 max-lg:grid-cols-2 max-lg:grid-rows-3 max-lg:gap-y-0 max-md:grid-cols-2 max-md:grid-rows-5">
            
              <div className="flex flex-col w-full col-span-2 h-[550px] overflow-hidden border-r max-lg:border-r-0 border-gray-300 pr-6 max-lg:col-span-1 max-lg:row-span-2 max-md:col-span-2">
                <div className='flex items-center justify-between'>
                <p className='text-gray-700 text-2xl font-normal'>Buy</p>
                <div className="flex justify-end py-3">
                  {chatIcon}
                  <p className="font-medium text-gray-700 text-medium pl-2">Admin</p>
                </div>
                </div>
                <div className="relative w-full h-40 mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-t from-black to-transparent bg-opacity-0 text-white p-5 pt-16">
                    <p className="text-2xl font-bold">{item.name}</p>
                    <p className="text-xl">{item.code}</p>
                  </div>
                </div>
                <div className="text-center">
                {item.status==="COMING SOON" && (
                    <p className="text-gray-700 text-2xl font-semibold pb-4">Bid Start Time: {item.time}</p>
                )
                }
                </div>
                <div className="space-y-1 text-gray-700">
                  <div className="flex justify-between bg-gray-100 p-4 rounded-sm">
                    <span className="font-semibold">Available Quantity</span>
                    <span>{item.quantity} KG</span>
                  </div>
                  <div className="flex justify-between bg-gray-100 p-4 rounded-sm">
                    <span className='font-semibold'>Bid Increment</span>
                    <span>10 SAR</span>
                  </div>
                  <div className="flex justify-between bg-gray-100 p-4 rounded-sm">
                    <span className='font-semibold'>Bid Start Time</span>
                    <span>03/29/2024, 10:00:00 AM</span>
                  </div>
                  <div className="flex justify-between bg-gray-100 p-4 rounded-sm">
                    <span className='font-semibold'>Bid End Time</span>
                    <span>03/29/2024, 04:00:00 PM</span>
                  </div>
                  {item.status==="BID NOW" && (
                    <div className='flex flex-col text-center'>
                        <span className='text-red-600 text-2xl font-semibold pb-3'>00:08</span>
                        <button className='bg-teal-700 text-white text-xl font-semibold py-2'>Bid for 19 SAR</button>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-span-2 !m-0 overflow-hidden h-[550px] border-r max-md:border-r-0 border-gray-300 pr-6 max-lg:col-span-1 max-lg:row-span-2 max-md:col-span-2">
                <div className="flex border-b text-2xl font-semibold cursor-pointer">
                  <p 
                    className={`w-1/2 text-center py-2 ${
                      activeTab === "details" ? "border-b-2 border-teal-600 text-black" : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("details")}
                  >
                    {item.status==="COMING SOON" ? "Buy Now" : "All Bids"}
                  </p>
                  <p 
                    className={`w-1/2 text-center py-2 ${
                      activeTab === "bids" ? "border-b-2 border-teal-600 text-black" : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("bids")}
                  >
                    {item.status==="COMING SOON" ? "Buy Info" : "My Bids"}
                  </p>
                </div>
      
                <div className="mt-4 space-y-2">
                  {activeTab === "details" ? (
                    <div className="pt-3 space-y-3 text-gray-700 text-md">
                    {item.status==="COMING SOON" ? (
                        <>
                      <div className="flex justify-start gap-24 pl-4">
                        <span className="font-semibold">Quantity</span>
                        <span className='font-semibold'>Price</span>
                      </div>
                    {buyNow.map((item, index)=>(
                      <div key={index} className="flex justify-between bg-gray-100 p-4 rounded-md">
                        <span>{item.quantity}</span>
                        <span>{item.price}</span>
                        <button className='bg-teal-700 text-white px-10 py-1 rounded-md'>Buy</button>
                      </div>
                    ))} </>
                ) : (<>
                    {bids.map((bid, index) => (
                        <div key={index} className="flex justify-between bg-gray-100 p-4 items-center">
                          <span className="font-semibold text-2xl">{bid.buyer}</span>
                          <span className="text-xs">{bid.time}</span>
                          <span className="font-semibold text-2xl">{bid.price} SAR/KG</span>
                        </div>
                      ))}</>
                )}
                    </div>
                  ) : (
                    <div className="pt-3 space-y-3 text-gray-700 text-lg pb-5">
                      
                      {item.status==="COMING SOON" ? (<>
                      {buyInfo.map((info, index)=>(
                        <div className="flex flex-col bg-gray-100 p-4 items-center gap-2">
                            <div className='flex justify-between w-full text-2xl font-semibold'>
                                <span>{info.bidder}</span>
                                <span>SAR {info.price}/KG</span>
                            </div>
                            <div className='flex justify-between w-full text-sm'>
                                <span>{info.quantity}</span>
                                <span>{info.time}</span>
                            </div>
                        </div>
                      ))}</>
                    ) : (
                        <>
                    {bids.map((bid, index) => (
                        <div key={index} className="flex justify-between bg-gray-100 p-4 items-center">
                          <span className="font-semibold text-2xl">{bid.buyer}</span>
                          <span className="text-xs">{bid.time}</span>
                          <span className="font-semibold text-2xl">{bid.price} SAR/KG</span>
                        </div>
                      ))}</>
                    )}
                    </div>
                  )}
                </div>
              </div>
      
              <div className="overflow-hidden h-[550px] max-lg:col-span-2 max-lg:row-span-1 max-lg:h-[300px]">
                <h1 className="text-2xl text-gray-700 pl-3 pt-2 pb-10 max-lg:pb-2 max-lg:pl-0 max-lg:pt-0">Explore More</h1>
                <AuctionList/>
              </div>
            </div>
          </div>
  )
}

export default BuyTrader