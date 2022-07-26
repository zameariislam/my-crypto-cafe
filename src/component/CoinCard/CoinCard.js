import React from 'react';

const CoinCard = (props) => {
   const{name}=props.coin
   console.log(props)
    
    return (
        <div>
   <h3>{name}</h3>
            
        </div>
    );
};

export default CoinCard;