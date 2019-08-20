import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

export default function SongList() {
    const [songs, setSongs] = useState([
        { title: "home", id: 1},
        { title: "gospel", id: 2},
        { title: "dark", id: 3},
    ]);
    const [age, setAge] = useState(20);
    const addSong = (title) => { 
        setSongs([
            ...songs,
            { title: title, id: uuid() }
        ]);
    }
    useEffect(() => {
        console.log("Used effect", songs);
    }, [songs])
    useEffect(() => {
        console.log("Used effect for age", age);
    }, [age])
    return (
        <div className='song-list'>
            <ul>
                { songs.map(song => {
                    return (
                        <li key={ song.id }>
                            { song.title }
                        </li>
                    )
                }) }
            </ul>
            <NewSongForm addSong={ addSong } />
            <button 
                onClick={() => setAge(age+1)}
            >
                { age }
            </button>
        </div>
    )
}
