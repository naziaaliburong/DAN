import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import MarketPlace from "./Pages/MarketPlace";
import CreateTrade from "./Pages/CreateTrade";
import BuyPage from "./Pages/BuyPage";
import ChatPage from "./Pages/ChatPage";
import TradePage from "./Pages/TradePage";
import { useState } from "react";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <>
    <Navbar onLoginClick={() => setIsLoginOpen(true)}/>
    <Routes>
          <Route path='/' element={
              <Home 
              isLoginOpen={isLoginOpen}
              setIsLoginOpen={setIsLoginOpen}
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
              />
          }
          />
          <Route path='/marketplace' element={
              <MarketPlace />
          }
          />
           <Route path='/createtrade' element={
              <CreateTrade />
          }
          />
          <Route path='/buy/:id' element={
              <BuyPage selectedRole={selectedRole} />
          }
          />
          <Route path='/chat' element={
              <ChatPage />
          }
          />
          <Route path='/mytrade' element={
              <TradePage />
          }
          />
    </Routes>
    </>
  );
}

export default App;