import React, { useState } from 'react';
import SelectedCommodityModal from '../SelectedCommodityModal/SelectedCommodityModal';
import { commoditiesType } from '../../Assets/CommoditiesType/CommoditiesType';
import CommoditiesGroup from '../CommoditiesGroup/CommoditiesGroup';

const CommoditiesModal = () => {
   
    const [selectedCommodity, setSelectedCommodity] = useState(null);
    const [showSelectedCommodityCard, setShowSelectedCommodityCard] = useState(false);

    const handleSelect = (commodity) => {
        setSelectedCommodity(commodity);
    };

    const handleNext = () => {
        if (selectedCommodity) {
            setShowSelectedCommodityCard(true);
        }
    };
    const handleBack = () => {
        setShowSelectedCommodityCard(false);
        setSelectedCommodity(null);
    };

    return (
        <>
            {showSelectedCommodityCard && selectedCommodity ? (
                <SelectedCommodityModal selectedCommodity={selectedCommodity} commodityType={commoditiesType[selectedCommodity?.title.toLowerCase()] || []} handleBack={handleBack}/>
            ) : (
                <CommoditiesGroup selectedCommodity={selectedCommodity} handleSelect={handleSelect} handleNext={handleNext} />
            )}
        </>
    );
};

export default CommoditiesModal;