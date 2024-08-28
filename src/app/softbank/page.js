import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Challenge from '@/app/public/global/img/icons/md/ThinkingBig.svg'
import Leads from '@/app/public/global/img/projects/lead_generation.png'
import Customers from '@/app/public/global/img/projects/qualifying_customers.png'
import Booking from '@/app/public/global/img/projects/booking.png'
import FollowUp from '@/app/public/global/img/projects/follow_up.png'
import SocialMedia from '@/app/public/global/img/projects/social_media.png'
import Rates from '@/app/public/global/img/projects/rates.png'
import Revenue from '@/app/public/global/img/projects/revenue.png'
import Engagement from '@/app/public/global/img/projects/engagement.png'
import MainImage from '@/app/public/global/img/projects/3.jpg'
import SecondImage from '@/app/public/global/img/projects/project1.jpg'
import LatestProjects from '../components/sections/LatestProjects/LatestProjects';

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
            <Link href="/case-studies" className="mil-link link-left mil-mb-30">
              <i className="fas fa-arrow-left"></i>
              <span>All Cases</span>
            </Link>
            <h2 className="mil-uppercase">
              SoftBank Robotics America – Boosting Social Media Presence and
              Lead Generation
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
                <h6 className="mil-mb-15">SoftBank Robotics America</h6>
                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                <p className="mil-mb-10">Service</p>
                <h6 className="mil-mb-15">
                  National Marketing, Sales Solutions
                </h6>
                <div className="mil-divider mil-divider-left mil-mb-30"></div>
                <p className="mil-mb-10">Industry</p>
                <h6 className="mil-mb-15">Robotics</h6>
                <div className="mil-divider mil-divider-left mil-mb-30"></div>
              </div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Overviews
              </span>
              <h3 className="mil-mb-30">Project Brief</h3>
              <p className="mil-mb-60">
                SoftBank Robotics America, a leading vendor in the robotics
                industry, faced the challenge of increasing their social media
                presence and generating more leads for their sales team to boost
                robot sales and revenue. They approached Wattle Solutions for a
                comprehensive national marketing and sales solution.
              </p>
              <h3 className="mil-mb-30">Challenges</h3>
              <div className="mil-mb-30">
                <div className="mil-icon-box-head mil-long mil-mb-15">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <Image src={Challenge} alt="icon" />
                  </div>
                  <p className="mil-dark">
                    Enhancing the client's social media presence to reach a
                    broader audience
                  </p>
                </div>
                <div className="mil-icon-box-head mil-long mil-mb-15">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <Image src={Challenge} alt="icon" />
                  </div>
                  <p className="mil-dark">
                    Generating a higher volume of qualified leads for the sales
                    team.
                  </p>
                </div>
                <div className="mil-icon-box-head mil-long mil-mb-15">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <Image src={Challenge} alt="icon" />
                  </div>
                  <p className="mil-dark">
                    Streamlining the lead qualification, appointment booking,
                    and demo scheduling processes.
                  </p>
                </div>
                <div className="mil-icon-box-head mil-long mil-mb-15">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <Image src={Challenge} alt="icon" />
                  </div>
                  <p className="mil-dark">
                    Ensuring effective follow-ups to close sales and increase
                    revenue.
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
                  <Image src={Leads} width={32} alt="icon" />
                </div>
                <h6 className="mil-dark">Lead Generation:</h6>
              </div>
              <p className="mil-mb-15">
                Implemented targeted lead generation strategies to identify
                potential customers interested in robotics solutions.
                <br />
                Utilized data-driven techniques to reach the right audience and
                attract high-quality leads.
              </p>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <Image src={Customers} width={32} alt="icon" />
                </div>
                <h6 className="mil-dark">Qualifying Customers:</h6>
              </div>
              <p className="mil-mb-15">
                Developed a systematic approach to qualify leads based on their
                needs, budget, and interest in robotics solutions.
                <br />
                Ensured that only high-potential leads were passed on to the
                sales team, improving efficiency and conversion rates.
              </p>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <Image src={Booking} width={32} alt="icon" />
                </div>
                <h6 className="mil-dark">
                  Appointment Booking and Demo Scheduling:
                </h6>
              </div>
              <p className="mil-mb-15">
                Set up an efficient appointment booking system to schedule demos
                with the sales team.
                <br />
                Coordinated demo schedules to ensure timely and organized
                presentations of the robotic solutions.
              </p>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <Image src={FollowUp} width={32} alt="icon" />
                </div>
                <h6 className="mil-dark">Follow-Up for Final Meetings:</h6>
              </div>
              <p className="mil-mb-15">
                Implemented a follow-up system to keep potential customers
                engaged and address any queries or concerns.
                <br />
                Ensured that final meetings were conducted to close sales and
                secure customer commitments.
              </p>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <Image src={SocialMedia} width={32} alt="icon" />
                </div>
                <h6 className="mil-dark">Social Media Marketing:</h6>
              </div>
              <p className="mil-mb-15">
                Ran comprehensive social media marketing campaigns to increase
                SoftBank Robotics America's online presence.
                <br />
                Created engaging content showcasing the benefits and
                applications of their robotics solutions.
                <br />
                Utilized analytics to measure campaign effectiveness and
                optimize strategies for maximum reach and engagement.
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
                Our comprehensive marketing and sales strategies have led to
                remarkable achievements in several key areas. We've
                significantly boosted our social media presence, attracting a
                larger and more engaged audience. This increased visibility has
                translated into a substantial rise in qualified leads, providing
                our sales team with more opportunities to close deals. By
                streamlining lead qualification and demo scheduling processes,
                we've improved conversion rates and enhanced sales efficiency.
                Our effective follow-up strategies ensure that potential
                customers remain engaged and informed, leading to successful
                final meetings and increased sales. Collectively, these efforts
                have driven a notable increase in robot sales and overall
                revenue for SoftBank Robotics America.
              </p>

              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    <li>
                      <Image src={SocialMedia} width={32} alt="icon" />
                      <span className="mil-dark">
                        Increased Social Media Presence
                      </span>
                    </li>
                    <li>
                      <Image src={Leads} width={32} alt="icon" />
                      <span className="mil-dark">Higher Lead Volume</span>
                    </li>
                    <li>
                      <Image src={Rates} width={32} alt="icon" />
                      <span className="mil-dark">
                        Improved Conversion Rates
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <ul className="mil-check-icon-list">
                    <li>
                      <Image src={Engagement} width={32} alt="icon" />
                      <span className="mil-dark">
                        Enhanced Customer Engagement
                      </span>
                    </li>
                    <li>
                      <Image src={Revenue} width={32} alt="icon" />
                      <span className="mil-dark">Revenue Growth</span>
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
                  "Wattle Solutions provided an exceptional marketing and sales
                  solution that transformed our lead generation and social media
                  presence. Their expertise in targeting and engaging potential
                  customers led to a significant increase in qualified leads and
                  sales. We highly recommend Wattle Solutions for their
                  outstanding services and results-driven approach." — CEO,
                  SoftBank Robotics America
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
                Wattle Solutions successfully addressed SoftBank Robotics
                America's challenges by delivering a comprehensive national
                marketing and sales solution. Through targeted lead generation,
                efficient qualification processes, and strategic social media
                marketing, we significantly enhanced the client's online
                presence and sales performance. Our integrated approach resulted
                in increased leads, higher conversion rates, and substantial
                revenue growth, exceeding SoftBank Robotics America's
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LatestProjects />

    </>
  );
}
