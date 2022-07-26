import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {


    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=
    1000&page=1&sparkline=false`)  
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        setCoins(data)
        
        
    })  
        

    }, [])

    return (
        <div>
            <h1>Coins page {coins.length}</h1>
            {
                coins.map((coin)=><CoinCard  coin={coin}  key={coin.id}></CoinCard> )
            }

        </div>
    );
};

export default Coins;