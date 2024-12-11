import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Challenge from '@/app/public/global/img/icons/md/ThinkingBig.svg'
import BlockChain from '@/app/public/global/img/icons/md/blockchain.svg'
import Development from '@/app/public/global/img/icons/SDIcon.svg'
import BigData from '@/app/public/global/img/icons/md/big-data.svg'
import DevOps from '@/app/public/global/img/icons/md/DevOps.svg'
import Security from '@/app/public/global/img/icons/md/security.svg'
import Global from '@/app/public/global/img/icons/md/global.svg'
import Scalability from '@/app/public/global/img/icons/md/Scalability.svg'
import Transparency from '@/app/public/global/img/icons/md/Transparency.svg'
import MainImage from '@/app/public/global/img/projects/2.jpg'
import SecondImage from '@/app/public/global/img/projects/project2.jpg'
import LatestProjects from '../components/sections/LatestProjects/LatestProjects';
import CallToSectionSecond from '../components/sections/SolutionPageSections/CallToSectionSecond/CallToSectionSecond';
import CallToSection from '../components/sections/SDPageSection/CallToSection/CallToSection';
import Head from 'next/head';


export default function page() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://wattlesol.com/karatbars" />
      </Head>
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
              href="/case-studies"
              className="mil-link link-left mil-mb-30"
            >
              <i className="fas fa-arrow-left"></i>
              <span>All Cases</span>
            </Link>
            <h2 className="mil-uppercase">
              KaratBars – Revolutionizing Global Gold Transactions with
              Blockchain Technology
            </h2>
          </div>
        </div>
      </div>
      <CallToSection />
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between">
            <div className="col-lg-4 col-xl-3">
              <div className="mil-project-info mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Project Info</h5>

                <p className="mil-mb-10">Client</p>
                <h6 className="mil-mb-15">KaratBars</h6>
                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                <p className="mil-mb-10">Service</p>
                <h6 className="mil-mb-15">
                  Global Marketing, Software Development
                </h6>
                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                <p className="mil-mb-10">Industry</p>
                <h6 className="mil-mb-15">Gold Merchandising</h6>
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
                KaratBars, a leading global gold merchant, approached Wattle
                Solutions with an ambitious project: to develop a secure and
                efficient software solution leveraging blockchain technology.
                The goal was to enable the distribution of small gold
                denominations and to facilitate secure transactions for buying
                and selling gold globally. The software needed to ensure
                transparency, traceability, and security in gold transactions.
              </p>
              <h3 className="mil-mb-30">Challenges</h3>
              <div className="mil-mb-30">
                <div className="mil-icon-box-head mil-long mil-mb-15">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <Image src={Challenge} alt="icon" />
                  </div>
                  <p className="mil-dark">
                    Developing a blockchain-based system that ensures the secure
                    distribution of small gold denominations.
                  </p>
                </div>
                <div className="mil-icon-box-head mil-long mil-mb-15">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <Image src={Challenge} alt="icon" />
                  </div>
                  <p className="mil-dark">
                    Creating a transparent and immutable record of all gold
                    transactions.
                  </p>
                </div>
                <div className="mil-icon-box-head mil-long mil-mb-15">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <Image src={Challenge} alt="icon" />
                  </div>
                  <p className="mil-dark">
                    Ensuring global accessibility and scalability of the
                    solution.
                  </p>
                </div>
                <div className="mil-icon-box-head mil-long mil-mb-15">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <Image src={Challenge} alt="icon" />
                  </div>
                  <p className="mil-dark">
                    Integrating advanced technologies to handle large volumes of
                    data and transactions efficiently.
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
                  <Image src={BlockChain} width={32} alt="icon" />
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
                  <Image src={Development} alt="icon" />
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
                  <Image src={BigData} width={32} alt="icon" />
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
                  <Image src={DevOps} width={32} alt="icon" />
                </div>
                <h6 className="mil-dark">DevOps</h6>
              </div>
              <p className="mil-mb-15">
                Implemented DevOps practices to streamline the development,
                testing, and deployment processes, ensuring continuous
                integration and delivery for the software solution.
              </p>
            </div>
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
                The blockchain-based system ensured secure and tamper-proof
                transactions, providing users with confidence in the system's
                integrity. Enabled gold merchants worldwide to engage in secure
                transactions, expanding KaratBars' reach and operational
                efficiency. Provided a transparent and immutable record of all
                transactions, enhancing trust among users and stakeholders. The
                system was designed to handle large volumes of transactions,
                ensuring scalability to meet growing demand.
              </p>

              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    <li>
                      <Image src={Security} width={24} alt="icon" />
                      <span className="mil-dark">Enhanced Security</span>
                    </li>
                    <li>
                      <Image src={Global} width={32} alt="icon" />
                      <span className="mil-dark">Global Accessibility</span>
                    </li>
                    <li>
                      <Image src={Transparency} width={32} alt="icon" />
                      <span className="mil-dark">
                        Traceability and Transparency
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <ul className="mil-check-icon-list">
                    <li>
                      <Image src={BigData} width={32} alt="icon" />
                      <span className="mil-dark">Big Data Management</span>
                    </li>
                    <li>
                      <Image src={Scalability} width={32} alt="icon" />
                      <span className="mil-dark">Scalability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <Image src={SecondImage} alt="Project" />
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-60">
              <h3 className="mil-mb-30">Client Testimonial</h3>

              <p className="mil-mb-30 mil-accent">
                <em>
                  "Wattle Solutions delivered an exceptional solution that
                  transformed our operations. The blockchain-based software not
                  only ensured secure transactions but also provided
                  transparency and traceability, enhancing our credibility and
                  efficiency. Their expertise in blockchain and software
                  development was evident throughout the project, and we are
                  thrilled with the results."
                </em>
              </p>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <Image src={MainImage} alt="Project" />
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
                Wattle Solutions successfully developed and implemented a
                cutting-edge blockchain solution for KaratBars, revolutionizing
                the way gold transactions are conducted globally. By leveraging
                advanced technologies and a meticulous development process, we
                delivered a secure, scalable, and efficient system that met and
                exceeded KaratBars' expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LatestProjects />
      <CallToSectionSecond />

    </>
  );
}
