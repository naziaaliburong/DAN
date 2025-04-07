import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import CreateSearchTrade from "./Components/CreateSearchTrade/CreateSearchTrade";
import ImageCarousel from "./Components/ImageCarousal/ImageCarousal";
import AuctionList from "./Components/AuctionList/AuctionList";
import Faq from "./Components/FAQ/Faq";
import GetTheApp from "./Components/GetTheApp/GetTheApp";
import Footer from "./Components/Footer/Footer";
import LoginModal from "./Components/LoginModal/LoginModal";
import CommoditiesModal from "./Components/CommoditiesModal/CommoditiesModal";
import Buy from "./Components/Buy/Buy"; 
import Chat from "./Components/Chat/Chat";
import { useState } from "react";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <Routes>
          <Route path='/' element={
              <div>
                <Navbar onLoginClick={() => setIsLoginOpen(true)}/>
                <CreateSearchTrade />
                <ImageCarousel />
                <AuctionList />
                <Faq />
                <GetTheApp />
                <Footer />
                <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>
              </div>
          }
          />
          <Route path='/marketplace' element={
              <div>
                <Navbar onLoginClick={() => setIsLoginOpen(true)}/>
                <CreateSearchTrade />
                <AuctionList />
              </div>
          }
          />
           <Route path='/createtrade' element={
              <div>
                <Navbar onLoginClick={() => setIsLoginOpen(true)}/>
                  <CommoditiesModal />
              </div>
          }
          />
          <Route path='/buy/:id' element={
              <div>
                <Navbar onLoginClick={() => setIsLoginOpen(true)}/>
                <Buy selectedRole={selectedRole}/>
              </div>
          }
          />
          <Route path='/chat' element={
              <div>
                <Navbar onLoginClick={() => setIsLoginOpen(true)}/>
                <Chat />
              </div>
          }
          />
    </Routes>
  );
}

export default App;