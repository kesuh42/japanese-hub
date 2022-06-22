import React from "react";

function Header () {
    const JishoSearch = event => {
        event.preventDefault();

        const searchTerm = event.target[0].value;

        window.open("google.com")
        // window.open = `jisho.org/search/${searchTerm}`;
    };

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Japanese Hub</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/search">Search</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/list">List</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/archive">Archive</a>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0" onSubmit={JishoSearch}>
                <input name="searchTerm" class="form-control mr-sm-2" type="search" placeholder="Search Jisho for a Word" aria-label="Search"></input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Go</button>
                </form>
            </div>
            </nav>
        </div>
    );
}

export default Header;