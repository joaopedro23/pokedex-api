import React, { useState } from "react";

const SearchBar = (props) => {
    
    const [search, setSearch] = useState("dito")
    const {onSearch} = (props)
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

        const onButtonClickHandler = () => {
            onSearch(search)
            
        }



    return (
        <div className="Searchbar-container">
            <div className="searchbar">

                <input placeholder="busca Pokemo " onChange={onChangeHandler} />

            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>buscar</button>
            </div>
        
        </div>
    )
}
export default SearchBar;