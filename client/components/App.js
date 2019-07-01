import React from 'react'
import Header from './header';

export default function App({ children }) {
    return (
        <div className="container">
            <Header />
            {children}
        </div>
    )
}
