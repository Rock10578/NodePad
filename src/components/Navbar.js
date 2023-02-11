import React from 'react'

function Navbar(props) {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <a class="navbar-brand mt-2 mt-lg-0" href="/">
                    {props.title}
                </a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link" href="/">Editor</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/">NoteBooks</a>
                    </li>
                </ul>
            </div>

            <div class="d-flex align-items-center">
                <form class="d-flex input-group w-auto">
                    <input
                        type="search"
                        class="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </form>
                {/* bell */}
                <div class="dropdown">
                    <a
                        class="text-reset me-3 dropdown-toggle hidden-arrow"
                        href="/"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i class="fas fa-bell"></i>
                        <span class="badge rounded-pill badge-notification bg-danger">26</span>
                    </a>
                    <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                    >
                        <li>
                            <a class="dropdown-item" href="/">Remainder</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/">Important Dates</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/">Collaboration invite From Rock10578</a>
                        </li>
                    </ul>
                </div>
                {/* Profile */}
                <div class="dropdown">
                    <a
                        class="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href="/"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                    <img
                        src="https://avatars.githubusercontent.com/u/84198247?v=4"
                        class="rounded-circle"
                        height="25"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                    />
                    </a>
                    <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                    >
                    <li>
                        <a class="dropdown-item" href="/">My profile</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/">Settings</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/">Logout</a>
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