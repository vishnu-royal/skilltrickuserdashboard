import React from "react";

const Header = () => {
  return (
    <header id="header" className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white">
      <div className="navbar-nav-wrap">

        {/* Logo */}
        <a className="navbar-brand" href="/" aria-label="Front">
          <img className="navbar-brand-logo" src="assets/img/logo.png" alt="Logo" />
          <img className="navbar-brand-logo-mini" src="assets/img/logo.png" alt="Logo" />
        </a>

        {/* Navbar Vertical Toggle */}
        <button type="button" className="navbar-aside-toggler">
          <i className="bi-arrow-bar-left navbar-toggler-short-align" title="Collapse"></i>
          <i className="bi-arrow-bar-right navbar-toggler-full-align" title="Expand"></i>
        </button>

        {/* Search Form */}
        <div className="dropdown ms-2">
          <div className="d-none d-lg-block">
            <div className="input-group input-group-merge navbar-input-group">
              <span className="input-group-text">
                <i className="bi-search"></i>
              </span>
              <input
                type="search"
                className="form-control"
                placeholder="Search in front"
                aria-label="Search in front"
              />
              <button className="input-group-text">
                <i className="bi-x-lg" style={{ display: "none" }}></i>
              </button>
            </div>
          </div>
          <button className="btn btn-ghost-secondary btn-icon d-lg-none" type="button">
            <i className="bi-search"></i>
          </button>
        </div>

        {/* Account Section */}
        <div className="navbar-nav-wrap-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="dropdown">
                <a
                  className="navbar-dropdown-account-wrapper"
                  href="/"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="avatar avatar-sm avatar-circle">
                    <img src="https://placehold.co/100" alt="User" />
                    <span className="avatar-status avatar-sm-status avatar-status-success"></span>
                  </div>
                </a>

                <div className="dropdown-menu dropdown-menu-end" style={{ width: "16rem" }}>
                  <div className="dropdown-item-text">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-sm avatar-circle">
                        <img src="https://placehold.co/100" alt="User" />
                      </div>
                      <div className="ms-3">
                        <h5 className="mb-0">User</h5>
                        <p className="text-body">user@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item" href="/settings">Profile & Account</a>
                  <a className="dropdown-item" href="/settings">Settings</a>

                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item" href="/logout">Sign out</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;