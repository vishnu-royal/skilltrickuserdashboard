import { useState } from "react";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isMiniMode, setIsMiniMode] = useState(false);
  const location = useLocation();

  const toggleMiniMode = () => {
    setIsMiniMode(!isMiniMode);
    document.body.classList.toggle("navbar-vertical-aside-mini-mode");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered bg-white">
      <div className="navbar-vertical-container">
        <div className="navbar-vertical-footer-offset">
          {/* Logo */}
          <a className="navbar-brand" href="/" aria-label="Front">
            <img className="navbar-brand-logo" src="assets/img/logo.png" alt="Logo" />
            <img className="navbar-brand-logo-mini" src="assets/img/logo.png" alt="Logo" />
          </a>

          <button
            type="button"
            className="navbar-aside-toggler"
            onClick={toggleMiniMode}
          >
            <i
              className={`${
                isMiniMode
                  ? "bi-arrow-bar-right navbar-toggler-full-align"
                  : "bi-arrow-bar-left navbar-toggler-short-align"
              }`}
              title={isMiniMode ? "Expand" : "Collapse"}
            ></i>
          </button>

          {/* Content */}
          <div className="navbar-vertical-content">
            <div id="navbarVerticalMenu" className="nav nav-pills nav-vertical card-navbar-nav">
              <div className="nav-item">
                <a
                  className={`nav-link ${isActive("/search") ? "active" : ""}`}
                  href="/search"
                  role="button"
                >
                  <i className="bi bi-plus nav-icon" style={{ width: "20px" }}></i>
                  <span className="nav-link-title">New Chat</span>
                </a>
              </div>

              <div className="nav-item">
                <a
                  className={`nav-link ${isActive("/chat") ? "active" : ""}`}
                  href="/chat"
                  role="button"
                >
                  <i className="bi bi-chat-dots nav-icon"></i>
                  <span className="nav-link-title">Current Chat</span>
                </a>
              </div>

              <div className="nav-item">
                <a
                  className={`nav-link ${isActive("/favorites") ? "active" : ""}`}
                  href="/favorites"
                  role="button"
                >
                  <i className="bi bi-star nav-icon"></i>
                  <span className="nav-link-title">Favorites</span>
                </a>
              </div>

              <div className="bottom-nav">
                <div className="nav-item">
                  <a
                    className={`nav-link ${isActive("/settings") ? "active" : ""}`}
                    href="/settings"
                    role="button"
                  >
                    <i className="bi bi-gear nav-icon"></i>
                    <span className="nav-link-title">Settings</span>
                  </a>
                </div>

                <div className="user-info p-2">
                  <div className="avatar-sm avatar-circle w-100">
                    <div className="d-flex align-items-center">
                      <img className="avatar-img" src="https://placehold.co/100" alt="Image Description" />
                      <div className="mx-2 nav-link-title">
                        <h6 className="ttl mb-0">Alex Morgan</h6>
                        <small>Free Plan</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Content */}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;