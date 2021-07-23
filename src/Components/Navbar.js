import React from 'react';

function Navbar(props) {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                {
                                    props.countries.map((country,i)=> <li key={country + i}><a className="dropdown-item" href="/">{country}</a></li>)

                                }
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="/">All</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link active" href="/">Financials</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link active" href="/">Teams</a>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )

}

export default Navbar;