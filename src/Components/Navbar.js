import React from 'react';

function Navbar(props) {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                {
                                    props.countries.map((country,i)=> <li key={country + i}><a class="dropdown-item" href="#">{country}</a></li>)

                                }
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">All</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link active" href="#">Financials</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link active" href="#">Teams</a>
                        </li>

                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )

}

export default Navbar;