import React, { useState } from 'react'
import SelectedCommodity from '../SelectedCommodity/SelectedCommodity';
import SelectedSubCommodity from '../SelectedSubCommodity/SelectedSubCommodity';
import TradeCreated from '../TradeCreated/TradeCreated';

const SelectedCommodityModal = ({selectedCommodity, commodityType, handleBack}) => {
     const [selectedFruit, setSelectedFruit] = useState(null);
     let [step, setStep] = useState(1);
      
        const handleSelectFruit = (type) => {
          setSelectedFruit(type);
        };
        
  return (
            <>
              {step===1 && (
                  <SelectedCommodity selectedCommodity={selectedCommodity} commodityType={commodityType} handleBack={handleBack} selectedFruit={selectedFruit} handleSelectFruit={handleSelectFruit} setStep={setStep}/>
                  )}
                  {step===2 && (
                  <SelectedSubCommodity selectedFruit={selectedFruit} setStep={setStep}/>
                )}
                {step===3 && (
                  <TradeCreated setStep={setStep}/>
                )}
              </>
  )
}

export default SelectedCommodityModal
