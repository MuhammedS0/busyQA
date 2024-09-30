
import { useState } from "react";

const SearchPanel = (props) => {

    const [searchText, setSearchText] = useState("");

    const handleClick = () => {
        props.searchCallback(searchText);
    }

    const handleSortTypeChange  = (event) => {
        alert(`select change`);
        props.sortTypeCallback(event.target.value)
    }

    const handleKeyPress = (event) => {
        if (event.keyCode === 13){
            props.searchCallback(searchText);
        }
    }

    const handleOnChange = (event) => {
        setSearchText(event.target.value);
    }
    
    return  <>
            <input
                onKeyDown={handleKeyPress} 
                type="text"   
                placeholder="Search CryptoCurrency"
                value={searchText}
                onChange={handleOnChange}
            />
            <select onChange={handleSortTypeChange}>
                <option value="market_cap">Market Cap</option>
                <option value="current_price">Price</option>
                <option value="total_volume">24h Volume</option>
                <option value="price_change_percentage_24h">24h Change</option>
            </select>
            <button style={{ height: 40, width: 100}} onClick={handleClick}>Search</button>
    </>








}
export default SearchPanel;