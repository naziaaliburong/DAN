import React, { useState } from "react";
import AuctionCard from "../AuctionCard/AuctionCard";
import Pagination from "../Pagination/Pagination";
import { auctionItems } from "../../Assets/AuctionCardObject/AuctionCardObject";
import { useNavigate } from "react-router-dom";


const itemsPerPage = 20;

const AuctionList = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(auctionItems.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = auctionItems.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="relative flex gap-14 flex-wrap justify-center">
        {selectedItems.map((item) => (
          <AuctionCard key={item.id} {...item} click={()=>navigate(`/buy/${item.id}`)} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default AuctionList;