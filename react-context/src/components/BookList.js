import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

export default class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={ {background: theme.bg, color: theme.syntax} }>
                <ul>
                    <li style={ {background: theme.ui} }>book1</li>
                    <li style={ {background: theme.ui} }>book2</li>
                    <li style={ {background: theme.ui} }>book3</li>
                </ul>
            </div>
        )
    }
}
