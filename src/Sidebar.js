import React from 'react';
import "./Sidebar.scss";
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";


function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="./spotify2019-830x350.jpg" alt="Spotify Logo"/>
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            <SidebarOption title="Hip Hop"/>
            <SidebarOption title="Pop"/>
            <SidebarOption title="Chill"/>
        </div>
    )
}

export default Sidebar
