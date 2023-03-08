import React from "react";
import Song from "./Song";

const Table = ({songs})=>{
    
    const songItems = songs.map((song, index)=>{
        return <Song key={index} index={index} song={song}/>
    });

    return(
        <>
        <table>
            <tbody>
                <tr>
                    <th>Position</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Cover Art</th>
                    <th>Listen</th>
                </tr>
                {songItems}
            </tbody>
        </table>
        </>

)};

export default Table;