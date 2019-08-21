import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, setBooks] = useState([
        { title: "Book of hoe", id: 1 },
        { title: "Thel is the best", id: 2 },
        { title: "Waning to grews", id: 3 },
        { title: "Bloody fields", id: 4 },
    ]);
    return (
        <BookContext.Provider value={ {books} }>
            {props.children}
        </BookContext.Provider>
    );
}
