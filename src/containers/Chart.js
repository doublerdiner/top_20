import React, {useState, useEffect} from "react";
import Dropdown from "../components/Dropdown";
import Head from "../components/Head";
import Table from "../components/Table";


const Chart = ()=>{
    const [songs, setSongs] = useState([]);
    
    useEffect(()=>{
        getAllSongs("https://itunes.apple.com/gb/rss/topsongs/limit=20/json");
    }, [])
    
    const getAllSongs = async function(link){
        const response = await fetch (link);
        const songs = await response.json();
        setSongs(songs.feed.entry);
    };

    const getRockSongs = async function(){
        const response = await fetch ("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json");
        const songs = await response.json();
        setSongs(songs.feed.entry);
    };

    const onGenreSelected = function(link){
        getAllSongs(link);
    };
    
    return(
        <>
        <Head/>
        <Dropdown onGenreSelected={onGenreSelected}/>
        <Table songs={songs}/>
        </>
    )

};

export default Chart;