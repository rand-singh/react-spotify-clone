import React from 'react';
import "./Sidebar.scss";
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from './DataLayer';


function Sidebar() {
    // pull from the datalayer
    const [{playlists}, dispatch] = useDataLayerValue();
    console.log(playlists);

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="./spotify2019-830x350.jpg" alt="Spotify Logo"/>
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption key={playlist.id} title={playlist.name}/>
            ))}
        </div>
    )
}

export default Sidebar
