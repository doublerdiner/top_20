import React from "react";

const Song = ({song, index})=>{
    return(
        <tr>
            <td>{index+1}</td>
            <td>{song['im:name'].label}</td>
            <td>{song['im:artist'].label}</td>
            <td><img src={song['im:image'][0].label} alt="" /></td>
            <td><audio controls src={song.link[1].attributes.href}> </audio></td>
        </tr>
    )
};

export default Song;