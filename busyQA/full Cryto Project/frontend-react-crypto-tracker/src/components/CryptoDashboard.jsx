import SearchPanel from "./SearchPanel";
import CryptoCard from "./CryptoCard";
import { useState, useEffect } from "react";
import { coinMarketCapApiKey, coinMarketCapApiUrl } from "../common/constants";

 
const CryptoDashboard = () => {
    // default the data to the coin array..
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

        //BUG!:
        //1. fix search text to lower case
        //2. set object, with .data property,
        //3. unhook static data and use default data
        const filterCoins = coinData?.filter(coin => coin.name.toLowerCase().includes(searchText.toLowerCase()))
            .sort((a, b) => {
                const aValue = a.quote.USD[sortType];
                const bValue = b.quote.USD[sortType];
                return bValue - aValue;
            });
        console.log(filterCoins)

        setFilterData(filterCoins)
    }
    // component mounted, fire once ==> empty dependency array
    useEffect(() => {
        console.log(`fetch data..`);
        fetchServerCoinData();
    }, [])

    const fetchServerCoinData = async() => {
        console.log(`fetching server data..`);
        try {
            const response = await fetch(`http://localhost:3001/cryptocoins`);
            if (!response.ok) {
                throw new Error(`There was an error Loading data..`)
            }
            const rawData = await response.json();
            console.log(`coin market data: ${JSON.stringify(rawData)}`)
            // set the initial default data, once on Load..
            setCoinData(rawData);

            // set the working filtered data
            setFilterData(rawData);
        } catch(error){
            setError(error);

        } finally {
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