import SearchPanel from "./SearchPanel";
import CryptoCard from "./CryptoCard";
import { useState, useEffect } from "react";




const coinMarketCapApiKey = "d828f78d-9d58-4241-91a2-d42ede5c11de";
const coinMarketCapApiUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";




 
const CryptoDashboard = () => {

    const [coinData, setCoinData] = useState([]);
    // filtered data
    const [filterData, setFilterData] = useState([])
    // sort data
    const [sortType, setSortType] = useState("market_cap");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // pass to search panel component, to get selected value..
    const handleSortType = (sortType) => {
        console.log(`sort type changed.${sortType}`)
        setSortType(sortType);
    }

    const handleSearch = (searchText) => {
        if (searchText === ""){
            alert(`Enter a crypto coin to search`);
            // reseting the full list of crytos after empty search
            setFilterData(coinData);
            return;
        }
        const filterCoins = coinData?.filter(coin => coin.name.toLowerCase().includes(searchText));

        setFilterData(filterCoins)
    }

    useEffect(() => {
        fetchData();

    }, [])

    const fetchData = async() => {
        try {
            const response = await fetch(coinMarketCapApiUrl, {
                headers: {
                    'X-CMC_PRO_API_KEY': coinMarketCapApiKey
                },
                params: {
                    start: 1,
                    limit: 10,
                    convert: "USD"
                }
            });
            if (!response.ok) {
                throw new Error(`There was an error Loading data..`)
            }


            const rawData = await response.json();
            console.log(`coin market data: ${JSON.stringify(rawData)}`)
            // set the initial default data, once on Load..
            setCoinData(rawData.data);

            // set the working filtered data
            setFilterData(rawData.data);
        } catch (error) {
            setError(`There was an error Loading data..`)
        } finally{
            setIsLoading(false);
        }
       
    }

    if (isLoading){
        return <p style={{textAlign: "center"}}>Loading...</p>
    }

    if (error) {
        return <p style={{textAlign: "center"}}>{error.message}</p>
    }
    // renders the crypto currencies all on the dashboard
    return (
        <>
        <div style={{textAlign: "center"}}className = "app">
            <h1>Crypto Coin Tracker</h1>
            <SearchPanel 
                searchCallback={handleSearch}
                sortTypeCallback={handleSortType} 
                />
            <div className="crypto-container">
                {
                filterData?.map((currentCoin) => {
                    return <CryptoCard {...currentCoin}/>
                    })
                }
            </div>

        </div>
        </>
    );
}






export default CryptoDashboard;