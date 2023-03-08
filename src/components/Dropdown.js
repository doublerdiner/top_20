import React from "react";

const Dropdown = ({onGenreSelected})=>{
    
    const handleChange = (e)=>{
        onGenreSelected(e.target.value);
    };
    
    return(
        <>
        <p>Genre: </p>
        <select onChange={handleChange}>
            <option value="https://itunes.apple.com/gb/rss/topsongs/limit=20/json" key="0">All</option>
            <option value="https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json" key="1">Rock</option>
            <option value="https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json" key="2">Dance</option>
            <option value="https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json" key="3">Country</option>
        </select>
        </>
    )
};

export default Dropdown;