import React from 'react';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container my-5">
        <h1>Hello, world!</h1>
        <div className="col-lg-8 px-0">
          <p className="fs-5">
            You've successfully loaded up the Bootstrap starter example. It
            includes <a href="https://getbootstrap.com/">Bootstrap 5</a> via the{' '}
            <a href="https://www.jsdelivr.com/package/npm/bootstrap">
              jsDelivr CDN
            </a>{' '}
            and includes an additional CSS and JS file for your own code.
          </p>
          <p>
            Feel free to download or copy-and-paste any parts of this example.
          </p>

          <hr className="col-1 my-4" />

          <a href="https://getbootstrap.com" className="btn btn-primary">
            Read the Bootstrap docs
          </a>
          <a
            href="https://github.com/twbs/examples"
            className="btn btn-secondary">
            View on GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
