import React from 'react';
import CreateSearchTrade from '../Components/CreateSearchTrade/CreateSearchTrade';
import ImageCarousel from "../Components/ImageCarousal/ImageCarousal";
import AuctionList from "../Components/AuctionList/AuctionList";
import Faq from "../Components/FAQ/Faq";
import GetTheApp from "../Components/GetTheApp/GetTheApp";
import Footer from "../Components/Footer/Footer";
import LoginModal from "../Components/LoginModal/LoginModal";

const Home = ({ isLoginOpen, setIsLoginOpen, selectedRole, setSelectedRole }) => {
  return (
    <div>
        <CreateSearchTrade />
        <ImageCarousel />
        <AuctionList />
        <Faq />
        <GetTheApp />
        <Footer />
        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>
    </div>
  )
}

export default Home;
