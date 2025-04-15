import React from 'react';
import Buy from '../Components/Buy/Buy';

const BuyPage = ({ selectedRole }) => {
  return (
    <div>
      <Buy selectedRole={selectedRole} />
    </div>
  )
}

export default BuyPage;