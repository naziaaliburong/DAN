import React from 'react';
import CreateSearchTrade from "../Components/CreateSearchTrade/CreateSearchTrade";
import AuctionList from "../Components/AuctionList/AuctionList";

const MarketPlace = () => {
  return (
    <div>
      <CreateSearchTrade />
      <AuctionList />
    </div>
  )
}

export default MarketPlace;
