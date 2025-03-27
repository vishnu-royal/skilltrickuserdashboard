import React from 'react';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
const NewChat = () => {
  return (
<>

    <Header />
    <Sidebar/>

    
    <main id="content" role="main" className="main">
      {/* Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            {/* Header Content can be added here if needed */}
          </div>
          {/* End Row */}
        </div>
        {/* End Page Header */}

        {/* Stats */}
        <div className="row chat-sec align-items-center">
          {/* Right Chat Area */}
          <div className="col-md-12 mx-auto">
            <div className="chat-area">
              <div className="chat-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <button className="btn btn-outline-secondary me-2 px-0">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="25" height="25" fill="url(#pattern0_196_359)" />
                      <defs>
                        <pattern
                          id="pattern0_196_359"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_196_359"
                            transform="scale(0.02)"
                          />
                        </pattern>
                        <image
                          id="image0_196_359"
                          width="50"
                          height="50"
                          preserveAspectRatio="none"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD90lEQVR4nO1Z3asVVRQfS/uwHvowI4vIniIfKgr79kEDhT6EoKBAffDBoj+gTEKtNBILRIx6URHEj6ACKcqXMLGgFLRHKYSL586sj5m15txE8WvLnjtz7r63OefOmXPm3hHOD9bLOmevNb/Ze69Z+7c9b4ABBugaPsdPA+tvyPKVMebGlt8fmYusPwDLIcT/7sv8xpgbgGQbkh6FKHrBjYUsq5HkdyB9t6ocbYEkh5HVWAtYX2r5WT/M/EDySeaHsPl85reJ3OTIciH9/6UzZ8wt/c7REUiyeTSQxsz8QOaHUJcByRUguRpQtDzzB8HIvUAapWO+nBDrWOJnPVFVjrYwxswIOH7GndoMRM1HmJuPTvQnicL4OTvW9TcajdmI0Yu+799WVY4Brhv4/shcIPkYQ33TqxGA5XUg+TRvOeYCSQ9mFYJIn/RqAD8MF9gCMFo45FChQcCyNy1/VwGix/rxIENDQ7cS6Rogfb+dIes6RH0rbzPbAmCrWVp+vyuUVFXvBNIPEOOXvT4h+Zhl34FJjEjfzo0R6lJgXdtoNud40wUk3VmUCLKu9+qKs3F8N7J8BqzfZIaku4Dk4kQiQLKhL0ltaxGQLPFFHupLwPwcN9meKm9GoA2RKIoetO2M25t1BJB+kQY9VwWZPBJAcrkTESKaB6zN0f/IjkKJkOTnsY0ni6smkXa7SaVsRyQI42dbv7MeKZQMQB5PyWyxy6xqEomfdFcnIrYkA8kmJPmFSJ/ypgvGmFnI+v245cTy4+nT5mb7+2RE+tq2BIE+XNSY+f5sNjvNRBa/UiKqehewbkUW6OIb4JicR9JvgeSnTiQSIqyftw5apO+0eyb3cFYI9q0i67/lCHS0/5HIXhqS7rQdQN7DAsDtSHrKVrdORMfBGDMTSf/uNwm7J/JIFAFitKgVi+SPQoOA4hXOerUd5zq7R7ptEhHjV4BleOwB9KBXEg170kyOzXIeOFpVkIgccJLv9noAUfSqu2d6Leemm/FWvhlbDtHKXhInMzOus6V53lQBWP5sJQ/1jV7juUSq7N+uCyKmjEBXRyJQRqCrI5GgjEBXRyKlBLq6EukaAyIVzwh0K9DVcUb8kgJd7YhQGYGujkRKCXTA+utY96vveT3AlkyXyJSqhMiywzlD/GXP2+Vj6UdO9+tP6SWNby8q0401SkaP25mxy6yo2a4ZWfa4cexxtogIiChP5CklXQt0FsDydX9PiPKPiNwxmQhIFL3WIu/cz5QS6NI3NivRaMe/0XJGetIXmV9EBATWtc7pdGNPAp0LZl2IJNttAUiWWEFL7tZZ9tkrAqsBFBUBNVFuZC+Q7B8ebt5TO4FugAEG8KYV1wDxpQDAl3WS3AAAAABJRU5ErkJggg=="
                        />
                      </defs>
                    </svg>
                  </button>
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      id="skillsButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      SkillTricks
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="skillsButton">
                      <li>
                        <a className="dropdown-item" href="#/">
                          Option 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#/">
                          Option 2
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="btn btn-outline-secondary close">
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              <div className="">
                <div className="col-lg-8 mx-auto">
                  <div className="chat-messages">
                    <div className="d-flex justify-content-end mb-3">
                      <a href="#/" className="btn btn-sm btn-theme">
                        Drive Website Traffic
                      </a>
                    </div>

                    <div className="d-flex justify-content-start mb-3">
                      <div className="message-bubble mx-100">
                        <div className="traffic-card">
                          <div className="content-section">
                            <ol>
                              <li>
                                <strong>Scenario:</strong> Component variant main layer.
                                Pen create subtract shadow strikethrough text scale scale.
                                Variant move select outline prototype edit variant. Shadow
                                figma flows team font arrange. Asset boolean create team
                                vertical pen community underline.
                              </li>
                              <li>
                                <strong>Variables:</strong> Component variant main layer.
                                Pen create subtract shadow strikethrough text scale scale.
                                Variant move select outline prototype edit variant. Shadow
                                figma flows team font arrange. Asset boolean create team
                                vertical pen community underline.
                              </li>
                              <li>
                                <strong>Predicted Outcomes:</strong>
                                <ol>
                                  <li>
                                    Component variant main layer. Pen create subtract shadow
                                    strikethrough text scale scale. Variant move select outline
                                    prototype edit variant.
                                  </li>
                                  <li>
                                    Component variant main layer. Pen create subtract shadow
                                    strikethrough text scale scale. Variant move select outline
                                    prototype edit variant.
                                  </li>
                                  <li>
                                    Component variant main layer. Pen create subtract shadow
                                    strikethrough text scale scale. Variant move select outline
                                    prototype edit variant.
                                  </li>
                                </ol>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-start mb-3">
                      <a href="/search" className="btn btn-sm btn-orange">
                        Show Challenges &nbsp; &nbsp; &nbsp;
                        <span>
                          <svg
                            width="20"
                            height="17"
                            viewBox="0 0 20 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.5814 9.50013C20.1395 8.94696 20.1395 8.04861 19.5814 7.49544L12.4382 0.414875C11.8801 -0.138294 10.9738 -0.138294 10.4158 0.414875C9.85769 0.968044 9.85769 1.86639 10.4158 2.41956L15.1258 7.08389L1.42865 7.08389C0.638427 7.08389 -2.38419e-06 7.71671 -2.38419e-06 8.5C-2.38419e-06 9.28329 0.638427 9.91611 1.42865 9.91611L15.1214 9.91611L10.4202 14.5804C9.86216 15.1336 9.86216 16.032 10.4202 16.5851C10.9783 17.1383 11.8846 17.1383 12.4427 16.5851L19.5859 9.50456L19.5814 9.50013Z"
                              fill="#EAECF0"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="chat-input">
                    <div className="input-btn">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ask me anything..."
                      />
                      <div className="d-flex justify-content-between bottom-btn">
                        <button className="btn btn-outline-secondary p-0 left" type="button">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <rect
                              width="30"
                              height="30"
                              fill="url(#pattern0_197_747)"
                            />
                            <defs>
                              <pattern
                                id="pattern0_197_747"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                              >
                                <use
                                  xlinkHref="#image0_197_747"
                                  transform="scale(0.02)"
                                />
                              </pattern>
                              <image
                                id="image0_197_747"
                                width="50"
                                height="50"
                                preserveAspectRatio="none"
                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsUlEQVR4nO2aTYhOURjHz2BB+crnzteCQsmKYsEG2ZAVCxYWUlgYiki//7lvd3pnMaWmlA01y3eHhVhQmlBSwoaMhZJJjWHh2wwdc6dep/N+0Xvfk+6/zube55z7/N/zf55z7/O8xhT4jwGsBMrAoKQh4IWkG8BpYJGJHcBM4JKkMUk/QwP4JOkEMMXEiJ6envmSntQiEBiXoyNTqVSmZjL62eI4Z2ICcCggofeSUmAnsBu4IOmrZ/fdxZOJBcBzz8E3wFrfzlq7QdIHz/aiiQFJkqwJSGZfLXvgqLdzw8aYrny9DgDY45EYredYuVyeA4xXzymVSstNpwEc9n7h+43mSBrx5mzMx9s6kHTE25HbpgGAtx6RLSZmIsDsbMf2A9OaIQJslnQcWB0FEXfYSXpY5exAIyJZmp6Mn8+5kqlDZIX/atIEkQFvrVMdJxJKy00QqXjXVRBpFcWOqJBWe1BIS4W02oNCWiqk1R4U0lIhrfagkJYKaeX+hbgsUH2cB0yX9DFURYnyw6oyUQ9+5917Bjz2ro2labowWiIOwPkmCtnXfxtHTmQu8LIOidEkSVZFQQQ44D18sPp+qVRaCtwNxMvTJEnWV9tKuuLZnc2NiLV2u/fwoRp2m4Bu162y1m4NNXkkPfDIHjR5wc9OwI80TRe3uk5vb+8s4Ju31jaTJ1w28hzo/tdYA764yn17PK7tROrJa6SVXcnOl2FvjWsmbzins27tH+0FV8RuNNcdkMCtQDLYYToBSTaUmVy7rdYcV6T2A7xjuzEJ1zaQdC9AZhy4A5y01u5yFXdJx4CrLjEESLwGlphOwv2rIfAK0vRwneAkSdaZGAAsAG7+BYlH1ad8LOhyvXfgVRMEhoEzLuhNrKhMvAG7mOjP4mcoGy7A+4G9fX19MzrtZwHTRvwCN9vyf5EqwbYAAAAASUVORK5CYII="/>
                              </defs>
                            </svg>
                        </button>
                        <button className="btn btn-outline-secondary p-0 right" type="button">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 17 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.50013 0.41855C8.94696 -0.139517 8.04861 -0.139517 7.49545 0.41855L0.414877 7.56181C-0.138292 8.11987 -0.138292 9.02617 0.414877 9.58424C0.968046 10.1423 1.8664 10.1423 2.41957 9.58424L7.08389 4.87416L7.08389 18.5713C7.08389 19.3616 7.71671 20 8.5 20C9.28329 20 9.91611 19.3616 9.91611 18.5713V4.87862L14.5804 9.57978C15.1336 10.1378 16.032 10.1378 16.5851 9.57978C17.1383 9.02171 17.1383 8.11541 16.5851 7.55734L9.50456 0.414086L9.50013 0.41855Z"
                              fill="#36839B"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Stats */}

          {/* Footer */}

          <div className="footer">
            <div className="row justify-content-between align-items-center">
              <div className="col text-center">
                <p className="fs-6 mb-0">
                  &copy;{" "}
                  <span className="d-none d-sm-inline-block">2025 Skill Tricks.</span>
                </p>
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
          {/* End Footer */}
        </div>
      </div>
    </main>

</>
  );
};

export default NewChat;
