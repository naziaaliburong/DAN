import React from "react";
import supplier1 from "../../Assets/Images/supplier1.png"
import supplier from "../../Assets/Images/supplier.png";

export default function RoleSelection({handleNext, selectedRole, setSelectedRole}) {

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold text-gray-700">Welcome to DAN</h2>
      <p className="text-gray-500 mt-2">Please select one of the following</p>
      
      <div className="flex space-x-4 mt-6">
        <div
          className={`flex flex-col items-center justify-center p-6 w-36 border cursor-pointer transition-all ${selectedRole === 'Supplier' ? 'bg-teal-700 text-white' : 'border-gray-300 hover:border-teal-700'}`}
          onClick={() => setSelectedRole("Supplier")}
        >
          {selectedRole==="Supplier" ? (<img src={supplier} alt="supplier"/>) : (<img src={supplier1} alt="supplier"/>)}
          <span className="mt-2 font-medium">Supplier</span>
        </div>

        <div
          className={`flex flex-col items-center justify-center p-6 w-36 border cursor-pointer transition-all ${selectedRole === 'Trader' ? 'bg-teal-700 text-white' : 'border-gray-300 hover:border-teal-700'}`}
          onClick={() => setSelectedRole("Trader")}
        >
          <svg width="100" height="100" viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M144.283 87.1295C138.447 87.887 137.554 84.857 137.598 79.7893C137.775 58.4276 137.731 37.0583 137.598 15.6966C137.532 5.73534 132.788 0.879723 123.167 0.652471C109.886 0.341893 96.6061 -0.0217112 83.3257 0.00101405C64.8808 0.00101405 46.5022 0.387341 28.0942 0.614593C18.0601 0.735794 14.6368 3.58402 12.1209 13.7876L12.357 46.512L12.2684 46.7241C12.2684 58.0867 12.2094 69.4493 12.357 80.7664C12.4086 85.3645 11.2429 87.478 6.30704 87.2128C0.751422 86.9098 -0.488075 88.3567 0.153809 94.0304C0.832582 100.03 1.41544 109.181 5.50284 113.87C7.43587 116.097 10.1952 117.407 12.9841 118.271C21.4393 120.869 30.3445 119.786 39.021 119.725C47.9262 119.649 56.8536 119.892 65.7661 119.892H122.023C138.697 119.892 150.325 108.658 149.993 93.2274C149.882 89.1293 148.481 86.569 144.283 87.1295ZM20.8638 18.0448C20.8638 11.0909 22.4648 9.59106 29.4518 9.58348C44.6258 9.58348 59.8023 9.58348 74.9812 9.58348C90.3274 9.58348 105.674 9.58348 121.02 9.58348C127.217 9.58348 129.003 11.3409 129.025 17.6282C129.084 38.8384 128.951 59.9804 129.121 81.1604C129.121 85.8266 127.416 87.2204 123.063 87.1144C113.354 86.8795 103.63 87.1144 93.9131 87.0007C90.3053 86.9477 87.9665 88.1976 87.1992 91.9094C86.4318 95.6212 84.0488 96.5984 80.8098 96.568C77.9103 96.568 74.9886 96.3559 72.1112 96.6211C66.9466 97.0983 63.2576 95.9166 61.5681 90.0762C61.1475 88.6218 57.8791 87.2507 55.9018 87.1901C46.1924 86.8871 36.4756 86.8619 26.7514 87.1144C22.3246 87.228 20.7457 85.5993 20.7826 81.0543C20.9376 60.0562 20.8195 39.0505 20.8638 18.0448ZM125.542 110.218C91.7759 110.309 58.007 110.309 24.2355 110.218C16.6067 110.218 11.1544 105.075 9.82634 96.8029C11.7428 96.3806 13.6854 96.0946 15.6402 95.9469C26.3825 95.8636 37.1249 95.9469 47.8746 95.8711C51.5635 95.8333 54.0204 97.3862 56.6617 100.09C59.303 102.795 62.9846 105.158 66.5113 105.696C72.2359 106.546 78.0555 106.459 83.7536 105.438C87.2729 104.81 90.3938 101.734 93.6696 99.795C95.942 98.4694 98.2218 96.1817 100.553 96.1135C112.653 95.7424 124.768 95.9317 136.875 95.9848C137.966 96.1352 139.038 96.4096 140.07 96.8029C138.395 105.188 133.024 110.203 125.542 110.218Z" fill={`${selectedRole==="Trader" ? "#FFFFFF" : "#287D7A"}`}/>
          </svg>
          <span className="mt-2 font-medium">Trader</span>
        </div>
      </div>
      <button className="mt-6 px-6 py-2 bg-teal-700 text-white w-[87%] text-lg font-medium hover:bg-teal-800 transition" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}