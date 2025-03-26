import React from 'react';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
const Index = () => {
  return (
<>

    <Header />
    <Sidebar/>

    
    <main id="content" role="main" className="main">
      <div className="content container-fluid search-page">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="dropdown">
                <h1 className="page-header-title text-dark dropdown-toggle" id="chatMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  New Chat
                </h1>
                <ul className="dropdown-menu" aria-labelledby="chatMenuButton">
                  <li><a className="dropdown-item" href="#">Rename</a></li>
                  <li><a className="dropdown-item" href="#">Delete</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row chat-container-box">
          <div className="chat-container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="text-center">
                  <div className="plan-badge">Professional Plan</div>
                </div>

                <div className="text-center">
                  <h1 className="greeting">Good Evening, Alex</h1>
                </div>

                <div className="chat-inputs">
                  <div className="input-btn">
                    <input type="text" className="form-control" placeholder="How can SkillTricks help you today?" defaultValue="How can SkillTricks help you today?" />
                    <div className="d-flex justify-content-between bottom-btn">
                      <button className="btn btn-outline-secondary p-0 left" type="button">
                        <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="30" height="30" fill="url(#pattern0_197_747)" />
                        </svg>
                      </button>
                      <button className="btn btn-outline-secondary p-0 right" type="button">
                        <svg width="15" height="15" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.5 0.42C8.95 -0.14 8.05 -0.14 7.5 0.42L0.41 7.56C-0.14 8.12 -0.14 9.03 0.41 9.58C0.97 10.14 1.87 10.14 2.42 9.58L7.08 4.87V18.57C7.08 19.36 7.72 20 8.5 20C9.28 20 9.92 19.36 9.92 18.57V4.88L14.58 9.58C15.13 10.14 16.03 10.14 16.59 9.58C17.14 9.02 17.14 8.12 16.59 7.56L9.5 0.42Z" fill="#36839B" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="suggestions">
                  <div className="row align-items-center w-100">
                    <div className="col-11">
                      <div className="row">
                        {Array(3).fill("Generate some scenarios").map((text, index) => (
                          <div className="col-md-4" key={index}>
                            <button className={`suggestion-btn ${index !== 0 ? 'alt' : ''}`}>{text}</button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-1">
                      <div className="ms-auto d-flex flex-column align-items-center">
                        <div className="close-btn">X</div>
                        <div className="refresh-btn">
                          <i className="bi bi-arrow-repeat"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="row justify-content-between align-items-center">
            <div className="col text-center">
              <p className="fs-6 mb-0">&copy; <span className="d-none d-sm-inline-block">2025 Skill Tricks.</span></p>
            </div>
          </div>
        </div>

      </div>
    </main>
</>
  );
};

export default Index;
