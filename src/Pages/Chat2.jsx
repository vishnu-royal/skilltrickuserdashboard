import React, { useState } from 'react';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';

const Chat2 = () => {
  const [displayChat, setDisplayChat] = useState('today');
  const [showNewChat, setShowNewChat] = useState(false);

  const handleCloseChat = () => {
    setShowNewChat(true);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <main id="content" role="main" className="main">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col-lg-2">
                <h1 className="page-header-title mb-3">New Chat</h1>
              </div>
            </div>
          </div>

          <div className="row chat-sec align-items-center">
            <div className="col-md-4">
              <div className="sidebar">
                
                <div className="sidebar-section">
                    <h3 className="sidebar-title">Today</h3>
                    <div className="px-3 today">
                      <div className="chat-card">
                        <div className="d-flex flex-column justify-content-between">
                          <h5 className="ttl">Visual Representation</h5>
                          <div className="card-date">Today • 07 December</div>
                          <button onClick={() => { setDisplayChat('today'); setShowNewChat(false); }} className="expand-icon btn-today">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.4799 1.43211C15.4834 0.64635 14.8482 0.0111225 14.0624 0.0145857L4.00464 0.0589123C3.21888 0.0623751 2.57803 0.703226 2.57457 1.48899C2.5711 2.27475 3.20633 2.90998 3.9921 2.90652L10.6208 2.87416L0.935423 12.5595C0.376652 13.1183 0.372689 14.0172 0.926558 14.5711C1.48043 15.125 2.37934 15.121 2.93811 14.5622L12.6203 4.88L12.5943 11.5024C12.5908 12.2882 13.2261 12.9234 14.0118 12.9199C14.7976 12.9165 15.4384 12.2756 15.4419 11.4898L15.4862 1.43208L15.4799 1.43211Z" fill="#36839B"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="mt-3">
                          <img src="assets/img/visual-img.png" className="chart-image" alt="Chart visualization" />
                        </div>
                      </div>
                    </div>
                  </div>

                
                <div className="sidebar-section">
                    <h3 className="sidebar-title">Yesterday</h3>
                    <div className="px-3 yesterday">
                      <div className="chat-card">
                        <div className="d-flex flex-column justify-content-between">
                          <h5 className="ttl">Visual Representation</h5>
                          <div className="card-date">Today • 07 December</div>
                          <button onClick={() => { setDisplayChat('yesterday'); setShowNewChat(false); }} className="expand-icon btn-yesterday">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.4799 1.43211C15.4834 0.64635 14.8482 0.0111225 14.0624 0.0145857L4.00464 0.0589123C3.21888 0.0623751 2.57803 0.703226 2.57457 1.48899C2.5711 2.27475 3.20633 2.90998 3.9921 2.90652L10.6208 2.87416L0.935423 12.5595C0.376652 13.1183 0.372689 14.0172 0.926558 14.5711C1.48043 15.125 2.37934 15.121 2.93811 14.5622L12.6203 4.88L12.5943 11.5024C12.5908 12.2882 13.2261 12.9234 14.0118 12.9199C14.7976 12.9165 15.4384 12.2756 15.4419 11.4898L15.4862 1.43208L15.4799 1.43211Z" fill="#36839B"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="mt-3">
                          <img src="assets/img/visual-img.png" className="chart-image" alt="Chart visualization" />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-md-8">
              <ul className="latest-chat-block px-0">
                {!showNewChat && (
                  <li className="chat-area" style={{ display: displayChat === 'today' ? 'block' : 'none' }}>
                    <div className="chat-header d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <button className="btn btn-outline-secondary me-2 px-0">
                          <img src="assets/img/skilltrick.svg" alt="" />
                        </button>
                        <div className="dropdown">
                          <button 
                            className="btn btn-outline-secondary dropdown-toggle" 
                            type="button" 
                            id="skillsButton" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false">
                            SkillTricks
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="skillsButton">
                            <li><a className="dropdown-item" href="#/">Option 1</a></li>
                            <li><a className="dropdown-item" href="#/">Option 2</a></li>
                          </ul>
                        </div>
                      </div>
                      <button className="btn btn-outline-secondary close" onClick={handleCloseChat}>
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </div>

                    <div className="chat-messages">
                        <div className="d-flex justify-content-end mb-3">
                            <div className="message-bubble" style={{ backgroundColor: '#36839b', color: '#fff' }}>
                                <p className="mb-0">1 Figma ipsum component variant main layer. Image style asset strikethrough blur Union hand shadow overflow distribute flatten select component rotate.</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-start mb-3">
                            <div className="message-bubble mx-100">
                                <p className="mb-0">Figma ipsum component variant main layer. Underline library plugin duplicate strikethrough. Union fill team pen rectangle underline flows pixel subtract style. Arrange mask spotting Italic image opacity select invite comment.</p>
                                
                                <div className="mt-3">
                                    <div className="row g-4">
                                        {/* Card 1 */}
                                        <div className="col-md-4">
                                            <div className="feature-card">
                                                <div className="feature-card__header">
                                                    <h3 className="feature-card__title">Drive Website Traffic</h3>
                                                    <div className="feature-card__icon">
                                                        <a href="CurrentChat">
                                                            <svg width="15" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.4799 1.43211C15.4834 0.64635 14.8482 0.0111225 14.0624 0.0145857L4.00464 0.0589123C3.21888 0.0623751 2.57803 0.703226 2.57457 1.48899C2.5711 2.27475 3.20633 2.90998 3.9921 2.90652L10.6208 2.87416L0.935423 12.5595C0.376652 13.1183 0.372689 14.0172 0.926558 14.5711C1.48043 15.125 2.37934 15.121 2.93811 14.5622L12.6203 4.88L12.5943 11.5024C12.5908 12.2882 13.2261 12.9234 14.0118 12.9199C14.7976 12.9165 15.4384 12.2756 15.4419 11.4898L15.4862 1.43208L15.4799 1.43211Z" fill="#36839B"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="feature-card__content">
                                                    <div className="feature-card__item">
                                                        Figma ipsum component variant main layer. Group variant subtract connection boolean.
                                                    </div>
                                                    <div className="feature-card__item">
                                                        Figma ipsum component variant main layer. Group variant subtract connection boolean.
                                                    </div>
                                                    <div className="feature-card__item">
                                                        Figma ipsum component variant main layer. Group variant subtract connection boolean.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Card 2 */}
                                        <div className="col-md-4">
                                            <div className="feature-card">
                                                <div className="feature-card__header">
                                                    <h3 className="feature-card__title">Generate Signups for Demo</h3>
                                                    <div className="feature-card__icon">
                                                        <a href="/CurrentChat">
                                                            <svg width="15" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.4799 1.43211C15.4834 0.64635 14.8482 0.0111225 14.0624 0.0145857L4.00464 0.0589123C3.21888 0.0623751 2.57803 0.703226 2.57457 1.48899C2.5711 2.27475 3.20633 2.90998 3.9921 2.90652L10.6208 2.87416L0.935423 12.5595C0.376652 13.1183 0.372689 14.0172 0.926558 14.5711C1.48043 15.125 2.37934 15.121 2.93811 14.5622L12.6203 4.88L12.5943 11.5024C12.5908 12.2882 13.2261 12.9234 14.0118 12.9199C14.7976 12.9165 15.4384 12.2756 15.4419 11.4898L15.4862 1.43208L15.4799 1.43211Z" fill="#36839B"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="feature-card__content">
                                                    <div className="feature-card__item">
                                                        Figma ipsum component variant main layer. Group variant subtract connection boolean.
                                                    </div>
                                                    <div className="feature-card__item">
                                                        Figma ipsum component variant main layer. Group variant subtract connection boolean.
                                                    </div>
                                                    <div className="feature-card__item">
                                                        Figma ipsum component variant main layer. Group variant subtract connection boolean.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Card 3 */}
                                        <div className="col-md-4">
                                            <div className="feature-card">
                                                <div className="feature-card__header">
                                                    <h3 className="feature-card__title">Build Brand Awareness</h3>
                                                    <div className="feature-card__icon">
                                                        <a href="/CurrentChat">
                                                            <svg width="15" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.4799 1.43211C15.4834 0.64635 14.8482 0.0111225 14.0624 0.0145857L4.00464 0.0589123C3.21888 0.0623751 2.57803 0.703226 2.57457 1.48899C2.5711 2.27475 3.20633 2.90998 3.9921 2.90652L10.6208 2.87416L0.935423 12.5595C0.376652 13.1183 0.372689 14.0172 0.926558 14.5711C1.48043 15.125 2.37934 15.121 2.93811 14.5622L12.6203 4.88L12.5943 11.5024C12.5908 12.2882 13.2261 12.9234 14.0118 12.9199C14.7976 12.9165 15.4384 12.2756 15.4419 11.4898L15.4862 1.43208L15.4799 1.43211Z" fill="#36839B"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="feature-card__content">
                                                    <div className="feature-card__item">
                                                        Figma ipsum component variant main layer. Group variant subtract connection boolean.
                                                    </div>
                                                    <div className="feature-card__item">
                                                        Figma ipsum component variant main layer. Group variant subtract connection boolean.
                                                    </div>
                                                    <div className="feature-card__item">
                                                        Figma ipsum component variant main layer. Group variant subtract connection boolean.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="chat-input">
                      <div className="input-btn">
                        <input type="text" className="form-control" placeholder="Ask me anything..." />
                        <div className="d-flex justify-content-between bottom-btn">
                          <button className="btn btn-outline-secondary p-0 left" type="button">
                            <img src="assets/img/add-file.svg" alt="" />
                          </button>
                          <button className="btn btn-outline-secondary p-0 right" type="button">
                            <svg width="15" height="15" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.50013 0.41855C8.94696 -0.139517 8.04861 -0.139517 7.49545 0.41855L0.414877 7.56181C-0.138292 8.11987 -0.138292 9.02617 0.414877 9.58424C0.968046 10.1423 1.8664 10.1423 2.41957 9.58424L7.08389 4.87416L7.08389 18.5713C7.08389 19.3616 7.71671 20 8.5 20C9.28329 20 9.91611 19.3616 9.91611 18.5713V4.87862L14.5804 9.57978C15.1336 10.1378 16.032 10.1378 16.5851 9.57978C17.1383 9.02171 17.1383 8.11541 16.5851 7.55734L9.50456 0.414086L9.50013 0.41855Z" fill="#36839B"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                )}

                {!showNewChat && (
                  <li className="chat-area" style={{ display: displayChat === 'yesterday' ? 'block' : 'none' }}>
                      <div className="chat-header d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <button className="btn btn-outline-secondary me-2 px-0">
                            <img src="assets/img/skilltrick.svg" alt="" />
                          </button>
                          <div className="dropdown">
                            <button 
                              className="btn btn-outline-secondary dropdown-toggle" 
                              type="button" 
                              id="skillsButton" 
                              data-bs-toggle="dropdown" 
                              aria-expanded="false">
                              SkillTricks
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="skillsButton">
                              <li><a className="dropdown-item" href="#/">Option 1</a></li>
                              <li><a className="dropdown-item" href="#/">Option 2</a></li>
                            </ul>
                          </div>
                        </div>
                        <button className="btn btn-outline-secondary close" onClick={handleCloseChat}>
                          <i className="bi bi-x-lg"></i>
                        </button>
                      </div>

                      <div className="chat-messages">
                        <div className="d-flex justify-content-end mb-3">
                          <div className="message-bubble" style={{ backgroundColor: '#36839b', color: '#fff' }}>
                            <p className="mb-0">
                              2 Figma ipsum component variant main layer. Image style asset strikethrough blur Union hand
                              shadow overflow distribute flatten select component rotate.
                            </p>
                          </div>
                        </div>

                        <div className="d-flex justify-content-start mb-3">
                          <div className="message-bubble">
                            <p className="mb-0">
                              Figma ipsum component variant main layer. Underline library plugin duplicate strikethrough.
                              Union fill team pen rectangle underline flows pixel subtract style. Arrange mask spotting Italic
                              image opacity select invite comment.
                            </p>

                            <div className="mt-3">
                              <a href="/chat2" className="action-button">
                                Drive Website Traffic
                                <i className="bi bi-arrow-right"></i>
                              </a>
                              <a href="/chat2" className="action-button">
                                Generate Signups for Demo
                                <i className="bi bi-arrow-right"></i>
                              </a>
                              <a href="/chat2" className="action-button">
                                Build Brand Awareness
                                <i className="bi bi-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="chat-input">
                        <div className="input-btn">
                          <input type="text" className="form-control" placeholder="Ask me anything..." />
                          <div className="d-flex justify-content-between bottom-btn">
                            <button className="btn btn-outline-secondary p-0 left" type="button">
                              <img src="assets/img/add-file.svg" alt="" />
                            </button>
                            <button className="btn btn-outline-secondary p-0 right" type="button">
                              <svg width="15" height="15" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.50013 0.41855C8.94696 -0.139517 8.04861 -0.139517 7.49545 0.41855L0.414877 7.56181C-0.138292 8.11987 -0.138292 9.02617 0.414877 9.58424C0.968046 10.1423 1.8664 10.1423 2.41957 9.58424L7.08389 4.87416L7.08389 18.5713C7.08389 19.3616 7.71671 20 8.5 20C9.28329 20 9.91611 19.3616 9.91611 18.5713V4.87862L14.5804 9.57978C15.1336 10.1378 16.032 10.1378 16.5851 9.57978C17.1383 9.02171 17.1383 8.11541 16.5851 7.55734L9.50456 0.414086L9.50013 0.41855Z" fill="#36839B"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                  </li>
                )}

                {showNewChat && (
                  <div className="new-chat-container text-center d-flex align-items-center justify-content-center">
                    <a href="/new-chat" className="btn btn-primary">New Chat</a>
                  </div>
                )}
              </ul>
            </div>
          </div>

          <div className="footer">
            <p className="text-center">© 2025 Skill Tricks.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Chat2;
