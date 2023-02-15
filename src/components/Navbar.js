import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Link className="navbar-brand mt-lg-0" to="/">
                    {props.title}
                </Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Editor</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">NoteBooks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </div>

            <div className="d-flex align-items-center">
                <form className="d-flex input-group w-auto">
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <span className="input-group-text border-0" id="search-addon">
                        {props.mode === 'dark'?<i className="fas fa-search text-white"></i>:<i className="fas fa-search"></i>}
                    </span>
                </form>
                {props.mode === 'dark'?<i class="fa-sharp fa-regular fa-sun text-light"></i>:<i className="fa-solid fa-sun"></i>}
                <div className="form-check form-switch">
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                </div>
                {/* bell */}
                <div className="dropdown">
                    <a
                        className="text-reset me-3 dropdown-toggle hidden-arrow"
                        href="/"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {props.mode === 'dark'?<i className="fas fa-bell text-white"></i>:<i className="fas fa-bell"></i>}
                        <span className="badge rounded-pill badge-notification bg-danger">26</span>
                    </a>
                    <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                    >
                        <li>
                            <Link className="dropdown-item" to="/">Remainder</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/">Important Dates</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/">Collaboration invite From Rock10578</Link>
                        </li>
                    </ul>
                </div>
                {/* Profile */}
                <div className="dropdown">
                    <a
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href="/"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                    <img
                        src="https://avatars.githubusercontent.com/u/84198247?v=4"
                        className="rounded-circle"
                        height="25"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                    />
                    </a>
                    <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                    >
                    <li>
                        <Link className="dropdown-item" to="/">My profile</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/">Settings</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/">Logout</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar