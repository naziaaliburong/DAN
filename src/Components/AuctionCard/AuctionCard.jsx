import React from "react";


const AuctionCard = ({ name, price, quantity, remaining, time, code, image, status, click }) => {


  // Define colors based on status
  const statusColors = {
    "COMING SOON": "text-amber-500 border-amber-500",
    "SOLD!": "text-gray-400 border-gray-400",
    "EXPIRED": "text-red-600 border-red-500",
    "BID NOW": "text-teal-600 border-teal-600",
  };

  return (
    <div className="relative bg-white shadow-lg overflow-hidden w-48 max-lg:w-64 max-md:w-72 max-sm:w-full max-sm:mx-10" onClick={click}>
      <div className="relative h-40 w-full">
        <img src={image} alt={name} className="h-full w-full object-cover" />
        
        {status === "SOLD!" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-white text-2xl font-bold pb-5">SOLD</span>
          </div>
        )}
        
        {status === "EXPIRED" && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-transparent bg-opacity-50">
            <span className="text-white text-2xl font-bold pb-5">EXPIRED</span>
          </div>
        )}

        <div className="absolute inset-0 top-20 bg-gradient-to-t from-black to-transparent bg-opacity-30">
          <div className="absolute bottom-2 left-4 text-white font-semibold">
            <h2 className="text-lg">{name}</h2>
            <p className="text-[10px] font-bold">SAR {price}/KG</p>
            <p className="text-[10px]">{time}</p>
          </div>
          <div className="absolute bottom-4 right-4 text-white text-[10px]">{code}</div>
        </div>
      </div>

      <div className="px-4">
        <p className="text-[10px] text-gray-600 mt-2">Quantity: {quantity} KG</p>
        <p className="text-[10px] text-gray-600">Remaining Quantity: {remaining} KG</p>
      </div>

      <div className="px-4 pb-3 flex flex-col items-center">
        <span className="text-xl font-bold text-gray-900">{time}</span>
        <button
          className={`mt-1 w-full rounded-[4px] text-lg font-bold border-[1.25px] ${
            statusColors[status] || "text-gray-600 border-gray-400"
          }`}
        >
          {status}
        </button>
      </div>
    </div>
  );
};

export default AuctionCard;
