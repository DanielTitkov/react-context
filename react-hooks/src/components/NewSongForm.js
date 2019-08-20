import React, { useState } from 'react';

export default function NewSongForm({ addSong }) {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    }
    return (
        <form onSubmit={ handleSubmit }>
            <label>Song name:</label>
            <input 
                value={ title } 
                onChange={ e => setTitle(e.target.value) } 
                type="text" 
                required 
            />
            <input type="submit" value="add song" />
        </form>
    )
}
