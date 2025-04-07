import { useState } from 'react';
import { auctionItems } from '../../Assets/AuctionCardObject/AuctionCardObject';
import { callIcon, videoCallIcon, hamburgerDots, smileFace, microPhone, sendMessageIcon } from '../../Assets/SVGs/SvgIcons';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [admin, setAdmin] = useState(true);
  const [selectedChat, setSelectedChat] = useState({
    id: 'DAN-123',
  });

  return (
    <div className="flex font-sans p-5 border border-gray-200 m-5 shadow-top-bottom-lg max-md:flex-col max-md:gap-1">
      
      <div className="w-72 bg-white p-4 max-md:w-full">
        <div className="relative flex items-center justify-around border border-gray-300 rounded-sm">
            <svg className="ml-3" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6781 18.6444L15.9175 14.0119C17.0637 12.5272 17.6824 10.7199 17.6803 8.86297C17.6803 4.11973 13.7146 0.260742 8.84016 0.260742C3.96573 0.260742 0 4.11973 0 8.86297C0 13.6062 3.96573 17.4652 8.84016 17.4652C10.7485 17.4672 12.6057 16.8652 14.1315 15.7499L18.8921 20.3823C19.1331 20.5919 19.4474 20.7038 19.7705 20.695C20.0936 20.6862 20.401 20.5574 20.6295 20.335C20.8581 20.1126 20.9905 19.8135 20.9995 19.4991C21.0085 19.1847 20.8936 18.8789 20.6781 18.6444ZM2.52576 8.86297C2.52576 7.64771 2.89609 6.45975 3.58993 5.4493C4.28376 4.43885 5.26994 3.6513 6.42374 3.18624C7.57755 2.72118 8.84716 2.5995 10.072 2.83658C11.2969 3.07367 12.422 3.65887 13.3051 4.51819C14.1882 5.3775 14.7896 6.47234 15.0332 7.66425C15.2769 8.85615 15.1518 10.0916 14.6739 11.2143C14.196 12.3371 13.3867 13.2967 12.3483 13.9719C11.3099 14.647 10.089 15.0074 8.84016 15.0074C7.16609 15.0055 5.56117 14.3575 4.37742 13.2056C3.19368 12.0537 2.52777 10.492 2.52576 8.86297Z" fill="#444444" fill-opacity="0.5"/>
            </svg>
            <input
                type="text"
                placeholder="Search"
                className="outline-none border-none p-1 w-32"
            />
        </div>

        <div className="flex justify-around px-4 mb-4 font-semibold text-sm text-gray-600 p-4">
          <span className={admin && "text-teal-700 border-b-2 border-teal-700"} onClick={()=>setAdmin(true)}>Admin</span>
          <span className={!admin && "text-teal-700 border-b-2 border-teal-700"} onClick={()=>setAdmin(false)}>Drivers</span>
        </div>

        <div>
          {["DAN-123", 'DAN-124', 'DAN-125', 'DAN-126'].map((id, index) => (
            <div
              key={id}
              onClick={() =>
                setSelectedChat({
                  id: id,
                })
              }
              className={`${selectedChat.id===id && "bg-teal-700 text-white"} flex items-center gap-3 px-2 py-1 cursor-pointer border-b`}
            >
              <img
                src={auctionItems.find(item => item.code === id)?.image}
                alt="fruit"
                className="w-10 h-10 rounded-full"
              />
              <div className='flex flex-col '>
                <div className='flex justify-between items-center'>
                    <div className="font-semibold">{id}</div>
                    <span className="text-[9px]">{id === 'DAN-123' ? '09:15 AM' : '11:40 AM'}</span>
                </div>
                <span className='text-[9px]'>{auctionItems.find(item => item.code === id)?.name}</span>
                <div className="text-[10px]">Can you help me check this out?</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
      <div className="flex flex-col flex-1 shadow-top-bottom-lg h-fit">
     
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <div className="flex items-center gap-4">
            <img src={auctionItems.find(item => item.code === selectedChat.id)?.image} alt="avatar" className="w-10 h-10 rounded-full" />
            <div>
              <div className="font-semibold">{selectedChat.id} <span className="text-[10px] text-gray-400 font-normal">Admin</span></div>
              <div className="text-[10px] text-gray-500">Last Active : 05 min ago</div>
            </div>
          </div>
          <div className="flex gap-10 text-gray-500">
            {callIcon}
            {videoCallIcon}
            {hamburgerDots}
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          <div className="text-xs text-center text-gray-500">
            <span className='bg-gray-200 rounded-lg px-3 py-1'>The delivery task for DAN-123 has been started | Today 08:30 AM</span>
          </div>
          <div className="text-xs text-center text-gray-500">
            <span className="bg-gray-200 px-3 py-1 rounded-lg">Tomatoes | Quantity 1000KG</span>
          </div>

          <div className="text-right">
            <div className="inline-block px-4 py-2 bg-teal-700 text-white rounded-lg w-[300px] text-xs text-left rounded-tr-none">
              I am not at home, I will be there in 15 min. If driver arrives before I get home. Please ask him to call me.
            </div>
            <div className="text-xs text-gray-500 mt-1">11:24</div>
          </div>

          <div className="text-left text-gray-800">
            <div className="px-4 py-2 bg-gray-200 rounded-lg rounded-tl-none w-[300px] text-xs text-left">
              No worries! He is on his way. It will take him 45 minutes to get there. Just remind him so that he can call you after arriving.
            </div>
            <div className="text-xs text-gray-500 mt-1">11:26</div>
          </div>
          <div className="text-left text-gray-800">
            <div className="px-4 py-2 bg-gray-200 rounded-lg rounded-tl-none w-[100px] text-xs text-left">Typing...</div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 p-3 text-sm text-gray-600 bg-white">
          <span className='text-gray-400'>Reply Suggestions</span>
          <div className='flex justify-center gap-6'>
          <button className="px-4 py-1 border border-teal-700 rounded-xl hover:bg-teal-700 hover:text-white">I appreciate it</button>
          <button className="px-4 py-1 border border-teal-700 rounded-xl hover:bg-teal-700 hover:text-white">That's Great</button>
          <button className="px-4 py-1 border border-teal-700 rounded-xl hover:bg-teal-700 hover:text-white">Thank you!</button>
          </div>
        </div>

        <div className='flex justify-start items-center px-12 py-6 gap-5 max-sm:px-3'>
        <div className="flex items-center px-5 py-1 bg-white border border-gray-200 w-[90%]">
          {smileFace}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type Here"
            className="flex-1 px-4 py-2 mx-4 max-sm:w-24 border-l focus:outline-teal-700 placeholder-gray-800"
          />
          {microPhone}
        </div>
        <button className="bg-teal-700 h-full p-2">
            {sendMessageIcon}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;