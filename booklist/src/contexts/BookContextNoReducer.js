import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1';

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, setBooks] = useState([
        { title: "Focker strikes back", author: "John Focker", id: 1},
        { title: "Many fatter tunes", author: "Quibishka", id: 2},
    ]);
    const addBook = (title, author) => {
        setBooks([
            ...books, 
            { title: title, author: author, id: uuid() }
        ])
    };
    const removeBook = id => {
        setBooks(books.filter(book => book.id !== id))
    };
    return (
        <BookContext.Provider value={ {books, addBook, removeBook} }>
            { props.children }
        </BookContext.Provider>
    )
}
