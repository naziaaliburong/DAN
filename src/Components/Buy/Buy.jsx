import React from "react";
import { useParams } from "react-router-dom";
import { auctionItems } from "../../Assets/AuctionCardObject/AuctionCardObject";
import BuySeller from "../BuySeller/BuySeller";
import BuyTrader from "../BuyTrader/BuyTrader";

const Buy = ({selectedRole}) => {
  const { id } = useParams();
  const item = auctionItems.find((item) => item.id === Number(id));
  
  return (
    <>
        {selectedRole==="Supplier" && <BuySeller item={item}/>}
        {selectedRole === "Trader" && <BuyTrader item={item} />}
    </>
  );
};

export default Buy;