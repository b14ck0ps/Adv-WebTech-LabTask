import React from 'react'
import ReactDOM from 'react-dom/client'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">AXIOS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/all">Show All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/create">Create</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

if (document.getElementById('navbar')) {
    ReactDOM.createRoot(document.getElementById("navbar")).render(
        <React.StrictMode>
            <Navbar />
        </React.StrictMode>
    )
}
