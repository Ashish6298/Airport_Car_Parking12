import React from 'react'

const Header = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Airport</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Account</a>
          </li>
        </ul>
        <form className="d-flex mx-10" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav> */}

      <app-header>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><img src={require("./assets/navigation_logo.png")}
              alt="AIRPORT PARKING - RESERVATIONS.COM" itemProp="logo" height="40" /></a>

            <div className="col"></div>

            <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
              <ul className="navbar-nav">

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink"
                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    My Account
                  </a>
                  <div className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownMenuLink">

                    <a className="dropdown-item sign-in" href="/">Sign In</a>
                    <a className="dropdown-item sign-up" href="/">Register</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
            <section id="home_page">
              <div className="years-of-service">
                <div className="container">
                  For 20 years, we’ve helped travelers on their way. With free cancellations & a customer
                  service team in the US, we are committed to serving you.
                </div>
              </div>
            </section>
        </header>
      </app-header>
    </>
  )
}

export default Header