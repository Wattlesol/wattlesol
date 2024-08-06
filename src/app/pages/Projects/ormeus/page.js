import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <>
      <div className="mil-banner-sm mil-deep-bg">
        <img
          src="img/deco/map.png"
          alt="background"
          className="mil-background-image"
        />
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: '47%', right: '10%', transform: ' rotate(90deg)' }}
        ></div>
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <Link
              href="/pages/allCaseStudies"
              className="mil-link link-left mil-mb-30"
            >
              <i className="fas fa-arrow-left"></i>
              <span>All Cases</span>
            </Link>
            <h2 className="mil-uppercase">
              ORMEUS – Enhancing Crypto Mining Transparency and Investor Profits
            </h2>
          </div>
        </div>
      </div>
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between">
            <div className="col-lg-4 col-xl-3">
              <div className="mil-project-info mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Project Info</h5>

                <p className="mil-mb-10">Client</p>
                <h6 className="mil-mb-15">ORMEUS</h6>
                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                <p className="mil-mb-10">Service</p>
                <h6 className="mil-mb-15">
                  Global Marketing, Software Development
                </h6>
                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                <p className="mil-mb-10">Industry</p>
                <h6 className="mil-mb-15">Cryptocurrency Mining</h6>
                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                <p className="mil-mb-10">Stack</p>
                <h6>Solidity, Node.js, React.js</h6>
              </div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Overviews
              </span>
              <h3 className="mil-mb-30">Project Brief</h3>
              <p className="mil-mb-60">
                ORMEUS, a prominent cryptocurrency mining farm, faced the
                challenge of providing real-time updates on newly mined coins to
                their investors while also developing an on-chain staking system
                to maximize investor profits. They approached Wattle Solutions
                for a comprehensive solution that included both technological
                implementation and strategic marketing to attract more
                customers.
              </p>
              <h3 className="mil-mb-30">Challenges</h3>
              <div className="mil-mb-30">
                <div className="mil-icon-box-head mil-long mil-mb-15">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <img src="img/icons/sm/1.svg" alt="icon" />
                  </div>
                  <p className="mil-dark">
                    Developing a secure system to share live progress of newly
                    mined coins over HTTPS, ensuring investors are continually
                    updated.
                  </p>
                </div>
                <div className="mil-icon-box-head mil-long mil-mb-15">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <img src="img/icons/sm/1.svg" alt="icon" />
                  </div>
                  <p className="mil-dark">
                    Building an on-chain staking system to enable investors to
                    multiply their profits.
                  </p>
                </div>
                <div className="mil-icon-box-head mil-long mil-mb-15">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <img src="img/icons/sm/1.svg" alt="icon" />
                  </div>
                  <p className="mil-dark">
                    Running effective social media marketing campaigns to
                    attract new customers and enhance investor engagement.
                  </p>
                </div>
              </div>
              <h3 className="mil-mb-30">Our Solution</h3>
              <p className="mil-mb-15">
                To address the challenges of secure and efficient digital
                transactions, we implemented a series of advanced solutions.
                Here's an overview of the key technologies and practices we
                used:
              </p>

              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/7.svg" alt="icon" />
                </div>
                <h6 className="mil-dark">
                  Blockchain Development with Solidity and ERC20 Network
                </h6>
              </div>
              <p className="mil-mb-15">
                <span className="mil-accent">Smart Contracts:</span>
                We utilized Solidity to develop robust smart contracts on ERC20
                network, ensuring secure and transparent gold transactions.
                <br />
                <span className="mil-accent">Tokenization:</span>
                Created a unique digital token representing small gold.
                denominations, allowing seamless transfer and ownership
                verification on the blockchain.
              </p>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <h6 className="mil-dark">Software Development</h6>
              </div>
              <p className="mil-mb-15">
                <span className="mil-accent">Node.js:</span>
                Leveraged Node.js for backend development, ensuring a scalable
                and efficient server-side environment to handle numerous
                transactions.
                <br />
                <span className="mil-accent">React.js:</span>
                Created a unique digital token representing small gold.
                denominations, allowing seamless transfer and ownership
                verification on the blockchain.
              </p>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/8.svg" alt="icon" />
                </div>
                <h6 className="mil-dark">Big Data Architecture</h6>
              </div>
              <p className="mil-mb-15">
                Developed a comprehensive big data architecture to manage and
                analyze vast amounts of transaction data, ensuring the system's
                efficiency and reliability.
              </p>

              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/8.svg" alt="icon" />
                </div>
                <h6 className="mil-dark">Server-Side Solutions</h6>
              </div>
              <p className="mil-mb-15">
                Developed server-side solutions to securely transmit live mining
                data over HTTPS, maintaining data integrity and investor
                confidence.
              </p>

              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/9.svg" alt="icon" />
                </div>
                <h6 className="mil-dark">DevOps Practices</h6>
              </div>
              <p className="mil-mb-15">
                Streamlined development, testing, and deployment processes using
                DevOps practices, ensuring continuous integration and delivery.
              </p>

              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/9.svg" alt="icon" />
                </div>
                <h6 className="mil-dark">Solution Architecture</h6>
              </div>
              <p className="mil-mb-15">
                Designed a comprehensive solution architecture that integrated
                all components seamlessly, providing a cohesive and efficient
                system.
              </p>
            </div>

            <div className="mil-icon-box-head mil-long mil-mb-15">
              <div className="mil-icon-frame mil-icon-frame-sm">
                <img src="img/icons/sm/9.svg" alt="icon" />
              </div>
              <h6 className="mil-dark">Social Media Campaigns</h6>
            </div>
            <p className="mil-mb-15">
              Ran targeted social media marketing campaigns to attract new
              customers and engage existing investors, highlighting the
              transparency and profitability of ORMEUS's operations.
            </p>
            <div className="mil-icon-box-head mil-long mil-mb-15">
              <div className="mil-icon-frame mil-icon-frame-sm">
                <img src="img/icons/sm/9.svg" alt="icon" />
              </div>
              <h6 className="mil-dark">Content Strategy</h6>
            </div>
            <p className="mil-mb-15">
              Developed a strategic content plan to regularly update investors
              and potential customers, building trust and interest in ORMEUS’s
              offerings.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="mil-divider"></div>
      </div>

      <section className="mil-p-120-60">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-60">
              <h3 className="mil-mb-30">Results Achieved</h3>
              <p className="mil-mb-30">
                We've made significant strides in enhancing transparency,
                increasing profits, boosting customer engagement, and ensuring
                scalability and reliability. Our real-time transparency system
                provides live updates on newly mined coins, fostering trust and
                satisfaction among investors. We've developed an on-chain
                staking system that enables investors to multiply their profits,
                making ORMEUS an even more attractive investment. Through
                effective social media marketing campaigns, we've attracted new
                customers and maintained high levels of engagement with our
                existing investor base. Additionally, our integrated solution
                architecture guarantees scalability and reliability, supporting
                ORMEUS's continued growth and operational needs.
              </p>

              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Real-Time Transparency</span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Increased Profits</span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Enhanced Customer Engagement
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <ul className="mil-check-icon-list">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Scalability and Reliability
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="img/projects/2.jpg" alt="Project" />
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-60">
              <h3 className="mil-mb-30">Client Testimonial</h3>

              <p className="mil-mb-30 mil-accent">
                <em>
                  "Wattle Solutions delivered an innovative and comprehensive
                  solution that transformed our operations. The real-time
                  updates and staking system provided our investors with
                  unparalleled transparency and profitability. Their expertise
                  in blockchain, software development, and marketing was
                  instrumental in achieving our goals. We highly recommend
                  Wattle Solutions for their exceptional services." — CEO,
                  ORMEUS
                </em>
              </p>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="img/projects/2.jpg" alt="Project" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="mil-divider"></div>
      </div>

      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: '0', left: '30%' }}></div>
        <div className="container">
          <div className="row align-items-end mil-mb-90">
            <div className="col-xl-6">
              <h2 className="mil-mb-30">Conclusion</h2>

              <p>
                Wattle Solutions successfully addressed ORMEUS's challenges by
                delivering a cutting-edge blockchain solution and strategic
                marketing campaigns. By leveraging advanced technologies and a
                holistic approach, we provided a secure, scalable, and efficient
                system that enhanced transparency, increased investor profits,
                and attracted new customers, exceeding ORMEUS's expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="mil-divider mil-mb-60"></div>
      </div>

      <div className="container mil-mb-120">
        <div className="mil-pagination mil-hidden-button">
          <a href="project.html" className="mil-slider-nav">
            <div className="mil-slider-btn-prev mil-button-sm mil-blog-prev">
              <i className="fas fa-arrow-left"></i>
              <span className="mil-h6">Prev</span>
            </div>
          </a>
          <a href="portfolio.html" className="mil-button-all">
            <span>
              <i className="fas fa-list"></i>
            </span>
          </a>
          <div className="mil-slider-nav">
            <a
              href="project.html"
              className="mil-slider-btn-next mil-blog-next"
            >
              <span className="mil-h6">Next</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
