import React from 'react';

import metaLogo from '../assetsDao/logo_meta.webp';

import saleLogo from '../assetsDao/logo.svg';

import heroInfoImage from '../assetsDao/hero_info.webp';
import heroInfoImage1 from '../assetsDao/hero_info1_1.webp';
import heroInfo1Image from '../assetsDao/hero_info1.webp';
import heroInfo2Image from '../assetsDao/hero_info2.webp';
import heroInfo3Image from '../assetsDao/hero_info3.webp';
import heroInfo4Image from '../assetsDao/hero_info4.webp';
import heroInfo5Image from '../assetsDao/hero_info5.webp';
import heroInfo6Image from '../assetsDao/hero_info6.webp';


import MainConnect from '../web3/MainConnect';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider } from '@tanstack/react-query';
import { config, queryClient } from '../web3/evm/WalletSetup';
import { MainConnectBtn } from '../web3/MainConnectBtn';

export const Dao: React.FC = () => {



  return (
    <div>



      <header>
        <div className="header-content">
          <div className="logo">
            <img src={saleLogo} alt="DAO Maker Logo" />
          </div>

          <div>
            <WagmiProvider config={config}>
              <QueryClientProvider client={queryClient}>
                <MainConnectBtn></MainConnectBtn>
              </QueryClientProvider>
            </WagmiProvider>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="live-badge">LIVE</div>
        <div className="hero-overlay">
          <div className="hero-content">
            <img src={metaLogo} alt="MetaVirus Logo" className="hero-logo" />
            <h1>Help Steps</h1>

            {/* Social Icons */}
            <div className="social-icons">
              {/* First Row */}
              <a href="https://helpsteps.io/" target="_self" className="icon active" aria-label="Website">
                <i className="fas fa-globe"></i>
              </a>
              <span className="icon inactive" aria-label="Location">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <a href="https://x.com/helpstepsglobal" target="_blank" rel="noopener noreferrer" className="icon active" aria-label="X">
                <i className="fab fa-x-twitter"></i>
              </a>

              <a href="https://t.me/hsxtoken" target="_blank" rel="noopener noreferrer" className="icon active" aria-label="Telegram">
                <i className="fab fa-telegram-plane"></i>
              </a>
              <span className="icon inactive" aria-label="Discord">
                <i className="fab fa-discord"></i>
              </span>
              <span className="icon inactive" aria-label="Medium">
                <i className="fab fa-medium"></i>
              </span>

              {/* Second Row */}

              <span className="icon inactive" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </span>
              <span className="icon inactive" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </span>
              <span className="icon inactive" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </span>
              <span className="icon inactive" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </span>
              <span className="icon inactive" aria-label="Reddit">
                <i className="fab fa-reddit-alien"></i>
              </span>
            </div>
          </div>
        </div>
      </section>




      <section className="project-details">
        <h2>Project Details</h2>
        <div className="separator">
          <div className="blue-line"></div>
          <div className="gray-line"></div>
        </div>
      </section>




      <MainConnect></MainConnect>

      <section className="section-wrapper">
        {/* Left Column */}
        <div className="left-column">
          {/* First Card */}
          <div className="card public-round-card">
            <h3>Public Round</h3>
            <p>Registrations are opened to anyone with more than $500 worth of tokens in their wallet.</p>
            <p className="status">Sale Open</p>
          </div>

          <div className="card second-round-card">
            <h3>Public Round</h3>
            <p>Registrations are opened to anyone with more than $500 worth of tokens in their wallet.</p>
            <p className="status">Sale Open</p>
          </div>
          <div className="card strong-hold-card">
            <h3>Strong Hold Offer</h3>
            <p>Premium round offerings for DAO holders only. Higher winning chances with lower fees.</p>
            <p>Registration ends in:</p>

            <button className="join-button">Participate</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* Existing content */}

          <h2 className="section-title">Terms of the Help Steps (HSX) Sale:</h2>
         
          <img src={heroInfoImage} alt="MetaVirus Banner" className="content-image" />




          {/* Game Basics Section */}
          <div className="content-section">
            <h2 className="section-title">What is Help Steps (HSX)?</h2>
            <img src={heroInfoImage1} alt="MetaVirus Banner" className="content-image" />
            <div className="section-paragraph">
              <p>Help Steps, the largest movement project of Web2 with over +2 community members, is now on Web3!</p>
              <br></br>
              <p>Help Steps is a <b>web3 move2earn</b> application to promote <b>health</b> and <b>charity</b>. Mobile application encourages users to help others while taking steps. Every day, tens of thousands of Help Steps users from around the world take steps to support social responsibility campaigns and make donations, earning off-chain HS points in the process.</p>
              <br></br>
              <p>With Help Steps' transition to Web3, off-chain $HS points accumulated within the mobile application can now be converted into on-chain $HSX tokens via a bridge. This allows users to earn tokens by staying active and taking steps.</p>
              <br></br>
              <p>Using on-chain $HSX assets, users can participate in global charity campaigns within the Web3 ecosystem. With this application, Help Steps aims to expand blockchain technology to Non-Governmental Organizations (NGOs). While assets are on the blockchain, this does not hinder donations to NGOs; instead, it allows donations to be accessed by different communities through $HSX.</p>
              <br></br>
              <p>Every day, tens of thousands of users acquire ownership of various combined NFT assets through the Marketplace, unlocking various benefits and earnings within the application. They leverage the ecosystem's partnerships and contribute to NFT developments within the platform, thereby increasing their $HSX earnings.</p>
            </div>

            <br></br>
            <h2 className="section-title">What makes Help Steps (HSX) unique?</h2>
            <div className="phase-details">
              {/* Phase 1 */}
              <div className="section-paragraph">
                <p>Help Steps stands out in the market for several reasons:</p>
                <br></br>
                <ul className="bullet-list">
                  <li>
                    <b>Integration of Health and Charity:</b> Help Steps uniquely combines health and charity in a single platform. While there are many fitness apps and charitable donation platforms individually, Help Steps seamlessly integrates both aspects, allowing users to pursue their fitness goals while making a positive impact on charitable causes.
                  </li>
                  <li>
                    <b>Web3 Move2Earn Model:</b> Help Steps leverages blockchain technology and the Move2Earn concept, making it distinct from traditional fitness or charity apps. Users earn tokens for their physical activity, which can then be converted into donations for charity, adding a new dimension to the way people engage with fitness and philanthropy.
                  </li>
                  <li>
                    <b>Anti-Inflationary Conversion:</b> The exchange rate between HS and HSX tokens is governed by a bonding curve mechanism. This means that as more and more HS is converted to HSX tokens, the exchange rate increases, making it harder to obtain HSX tokens. This helps to maintain the value of the HSX token by ensuring that it is always in demand.
                  </li>
                  <li>
                    <b>Incentivized Behavior:</b> By offering token rewards for physical activity, Help Steps incentivizes users to adopt healthier lifestyles. This incentive structure motivates users to be more active while also empowering them to contribute to charitable initiatives, creating a win-win situation for personal wellness and social impact.
                  </li>
                  <li>
                    <b>Community Engagement:</b> Help Steps fosters a sense of community among its users through features like leaderboards, challenges, and social sharing. This community-driven approach not only enhances user engagement but also amplifies the app's impact by encouraging collaboration and support among users pursuing common fitness and charitable goals.
                  </li>
                  <li>
                    <b>Transparency and Accountability:</b> With blockchain technology, Help Steps ensures transparency and accountability in the donation process. Users can track the journey of their earned tokens, from activity to donation, providing them with confidence that their contributions are making a tangible difference in the lives of others.
                  </li>
                  <li>
                    <b>Fansteps:</b> FanSteps is a revolutionary module within the HelpSteps ecosystem, designed for sports enthusiasts and fans who want to elevate their passion to new heights. It's a dynamic platform that allows users to align their physical activity with their favorite sports clubs, athletes, and celebrities in a way that actively contributes to their success.
                  </li>
                </ul><br></br>

                <p>Overall, Help Steps offers a unique proposition by merging fitness, blockchain technology, and philanthropy into a single, cohesive platform that empowers users to improve their health while actively supporting charitable causes.</p>
              </div>
            </div>
            <div>
              {/* Main Section Title */}
              <br></br>
              <h2 className="section-title">What is Help Steps (HSX) roadmap?</h2>
              <img src={heroInfo1Image} alt="MetaVirus Banner" className="content-image" />
            </div>
            <div>
              {/* Main Section Title */}
              <br></br>
              <h2 className="section-title">Help Steps (HSX) revenue streams</h2>
              <img src={heroInfo6Image} alt="MetaVirus Banner" className="content-image" />
              <div className="section-paragraph">
                <ul className="bullet-list">
                  <li><b className="title">Ad Revenue:</b> Revenue generated from ads shown within the application that capture users' attention.</li>
                  <li><b className="title">AdManager:</b> Revenue generated by managing and optimizing ad spaces.</li>
                  <li><b className="title">IAP (In-App Purchases):</b> Revenue from user spending on additional features or HS within the application.</li>
                  <li><b className="title">Subscriptions:</b> Revenue obtained from regular subscription fees paid by users.</li>
                  <li><b className="title">Marketplace E-Commerce:</b> Revenue generated through the sale of physical products listed on the Help Steps marketplace.</li>
                  <li><b className="title">Step to HS:</b> Ad revenue earned during the waiting period when users convert their steps into HS Points.</li>
                  <li><b className="title">On-Chain Bridge:</b> Commission revenue generated when users convert HS Points to on-chain $HSX tokens.</li>
                  <li><b className="title">HSX to NFT:</b> Commission revenue earned from NFTs purchased with accumulated $HSX tokens.</li>
                  <li><b className="title">NFT to HSX:</b> Commission and platform revenue generated when users sell their NFTs.</li>
                </ul>
              </div>
            </div>
            <div>
              <br></br>
              {/* Main Section Title */}
              <h2 className="section-title">What is Help Steps (HSX) marketing strategy?</h2>
              <img src={heroInfo2Image} alt="MetaVirus Banner" className="content-image" />
              <div className="section-paragraph">
                <ul className="bullet-list">
                  <li><b>KOL Marketing</b> Influencing users by collaborating with influencers from all over the world who serve for our team.</li>
                  <li><b>NFT Marketing</b> In NFT Marketing, we create artistic works and digital and physical impactful works in certain parts of the world, such as Time Square. In addition, cross-working with big projects in the NFT market to gain new targeted users.</li>
                  <li><b>Telegram Bot Marketing</b> With Telegram Mini-Apps, which have a market value of close to 3 billion dollars, to gain new users in accordance with the cost-per-user policy and to provide referrals towards our target.</li>
                  <li><b>Cross Marketing Activities with Web3 Partners</b> To increase the ecosystem value through technological, awareness, joint product or joint marketing activities with projects that add value to the ecosystem and to be a part of the user exchange between projects.</li>
                  <li><b>In-App marketing with +2M Community Members</b> To provide mutual benefit for our +2 million users who create value in the Help Steps ecosystem by giving them HS Points in exchange for performing in-app tasks.</li>
                  <li><b>Incentive Programs</b> Gaining new users by launching incentive programs and gradually upgrading and adjusting incentive programs. This will increase the number of active users and we will receive results and feedback more frequently.</li>
                  <li><b>Ask me Anything Events</b> Reaching out to new users and sharing with them our goals and what we want to do, our future roadmap and what awaits them. This will be done by a C-Level team member. This will increase focus and engagement in the community.</li>
                </ul>
              </div>
            </div><br></br>
            <div>
              {/* Main Section Title */}
              <h2 className="section-title">Who is Help Steps (HSX) team?</h2>
              <img src={heroInfo3Image} alt="MetaVirus Banner" className="content-image" />
              <br></br>
            </div><br></br>

            <div>
              {/* Section Title */}
              <h2 className="section-title">Who are the partners of Help Steps (HSX)?</h2>
              <img src={heroInfo4Image} alt="MetaVirus Banner" className="content-image" />
            </div><br></br>
            <div>
              {/* Section Title */}
              <h2 className="section-title">What are Help Steps (HSX) token metrics?</h2>

              <img src={heroInfo5Image} alt="Game Basics" className="content-image" />
            </div>


          </div>
        </div>
      </section>
      <footer className="footer">
  <div className="footer-bottom">

    
    <div className="footer-links">
      
      <a href="https://t.me/daomaker" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Telegram">
        <i className="fas fa-paper-plane"></i>
      </a>

      
      <a href="https://x.com/daomaker" target="_blank" rel="noopener noreferrer" className="footer-icon active" aria-label="X">
        <i className="fab fa-x-twitter"></i>
      </a>

      
      <a href="https://app.daomaker.com/toc" target="_blank" rel="noopener noreferrer" className="footer-link">
        Terms and Conditions
      </a>

      
      <a href="https://dao-maker-1.gitbook.io/dao-maker" target="_blank" rel="noopener noreferrer" className="footer-link">
        Docs
      </a>
    </div>

    
    <div className="footer-copyright">
      <p>&copy; 2024 DAO Maker. All rights reserved.</p>
    </div>

  </div>
</footer>



    </div>
  )
}
