import React from 'react';

const CoinDetails = (props) => {
   const{name}=props.coin
    
    return (
        <div>
   <h3>{name}</h3>
            
        </div>
    );
};

export default CoinDetails;