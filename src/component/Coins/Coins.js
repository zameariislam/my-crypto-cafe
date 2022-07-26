import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {


        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=
    1000&page=1&sparkline=false`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setCoins(data)


            })


    }, [])

    return (
        <div className='px-4 pt-24 mx-auto  max-w-7xl md:px-2'>
            <p className='text-center text-3xl font-bold text-gray-500 '>Our Available Cryto Currencies</p>
            <p className='text-center mb-12 text-xl font-normal text-gray-500'>{coins.length}</p>
           

           <div className='grid gap-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
           justify-items-center'>
           {
                coins.map((coin) => <CoinCard coin={coin} key={coin.id}></CoinCard>)
            }

           </div>
        </div>
    );
};

export default Coins;