import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NigthMode from '../Nightmode';

const Playlist = props =>{

    return(
        <>
            <NigthMode/>
            <PlaylistHeader/>
            <PlaylistItems/>
        </>
    )
}

export default Playlist;