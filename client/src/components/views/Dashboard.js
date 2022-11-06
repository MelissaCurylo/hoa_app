import React from "react";
import styles from '../css/index.css';

const Dashboard = () => {
  return (
    <div className="wrapper">
      <nav className="nav-bar">
        <div className="nav-bar-hat">
          <a href="#" className="login-link">
            {" "}
            Member Login{" "}
          </a>
          <a href="#" className="chat-bot">
            {" "}
            Let's Talk!{" "}
          </a>
        </div>

        {/* <div className="grade-line"></div> */}

        <div className="nav-bar-main">
          <img src="" alt="image here" className="nav-bar-logo" />
          <div className="nav-bar-links">
              <div className="dropdown">
                <a href="#" classname="dropdown-listed">
                  {" "}
                  Welcome{" "}
                </a>
                <div className="dropdown-content">
                  <a href="#"> Major Events</a>
                  <a href="#"> Visit D.C. </a>
                  <a href="#"> Visit Purcellville </a>
                  <a href="#"> Visit One Loudoun </a>
                  <a href="#"> Visit Tysons Corner </a>
                </div>
            </div>


            <div className="dropdown">
                <a href="#" classname="dropdown-listed">
                  {" "}
                  Favorites {" "}
                </a>
                <div className="dropdown-content">
                  <a href="#"> Museums </a>
                  <a href="#"> Farmer Markets </a>
                  <a href="#"> Local Butchers </a>
                  <a href="#"> Restaurant Month </a>
                </div>
            </div>

            <div className="dropdown">
                <a href="#" classname="dropdown-listed">
                  {" "}
                  Relocate{" "}
                </a>
                <div className="dropdown-content">
                  <a href="#"> Services </a>
                  <a href="#"> Education </a>
                  <a href="#"> Hiring Companies </a>
                  <a href="#"> Local & State Government </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="grid-item">
        <> HOA Art here that scrolls automatically </>
      </div>

      <div>
        <fieldset> Message Board here</fieldset>
      </div>

      <div className="grid-item">
        <> footer </>
        <> Add the social links here </>
      </div>

      <div className="grid-item">
        <> Add the scroll up to top arrow </>
      </div>

      {/* 
                <div className="nav-bar-item-1"> 
                    <img src="" alt="Left Placement - Logo" className="nav-bar-logo"></img> 
                </div>
                <div className="nav-bar-item-2"> 
                    <a href="#"> Communities </a>
                    <a href="#"> Payments </a>
                    <a href="#"> Contact </a> 
                    <a href="#"> Resources</a>
                </div> */}

      {/* <> Navigation Pane that sticks</> */}
    </div>
  );
};

export default Dashboard;
