import React from "react";

import "./HomePage.scss";

import reels from "../../assets/reels.png";
import midbg from "../../assets/middlebg.png";
import singUp from "../../assets/signUp.png";
import phones from "../../assets/phones.png";

const HomePage = () => {
  return (
    <div className="grid">
      <div className="homepageContainer">

        
          <div className="titleLine">
            A platform to visualise <br /> your life's <span>memory lanes</span>
          </div>
          <div className="subTitle">
            Capture memories in an ever more inclusive, immersive & innovative
            style.
          </div>
          <img className="signupButton" src={singUp} alt="" />
        

        {/* <div className="page-middle">
          <div className="pagemidTitle">
            Create cool visual <br />
            <span>memory lanes!</span>
          </div>
          <div className="pagemidSubtitle">
            'A walk down the memory lane' is no longer just in your head. You
            can now actually go on a vitual walk down your memory lanes.
          </div>
        </div> */}

        {/* <div className="points">
          <ul>
            <li>
              <p>Lorem Ipsum</p>
              Lorem ipsum dolor sit amet, consectetur adi.
            </li>
            <li>
              <p>Lorem Ipsum</p>
              Lorem ipsum dolor sit amet, consectetur adi.
            </li>
          </ul>
        </div> */}

        {/* <div className="page-overview">
          <div className="overviewTitle">Overview of what it will be</div>
        </div> */}

        {/* <div className="form-section">
          <img />
          <div className="form">
            <div className="formTitle">Get Early access</div>
            <input type="text" placeholder="Your Name" />
            <div className="otherinputs">
              <input type="text" placeholder="+91" />
              <input type="text" />
            </div>
            <div className="submitBtn">Submit</div>
          </div>
        </div> */}

        {/* <div className="page-end">
          <div className="endTitle">SHARE YOUR STORY</div>
          <div className="end-points">
            <ul>
              <li>
                <p>Lorem Ipsum</p>
                Lorem ipsum dolor sit amet, consectetur adi.
              </li>
              <li>
                <p>Lorem Ipsum</p>
                Lorem ipsum dolor sit amet, consectetur adi.
              </li>
            </ul>
          </div>
          <img />
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
