import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

export default function Navbar() {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Reading list</h1>
            <p>Currently have { books.length } books</p>
        </div>
    )
}
