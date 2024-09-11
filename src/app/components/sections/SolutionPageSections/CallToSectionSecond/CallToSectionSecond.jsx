import Image from 'next/image';
import React from 'react';
import MdImage1 from '@/app/public/global/img/icons/md/13l.svg';
import Link from 'next/link';
const CallToSectionSecond = () => {
  return (
    <section class="call-to-action mil-gradient-bg mil-p-120-120">
      <div
        class="mil-deco mil-deco-accent"
        style={{ top: 0, left: '15%' }}
      ></div>
      <div
        class="mil-deco mil-deco-accent"
        style={{ bottom: 0, right: '15%', transform: 'rotate(180deg)' }}
      ></div>
      <div class="container mil-text-center">
        <div class="mil-cta-frame">
          <div class="mil-icon-frame mil-icon-frame-md mil-mb-50">
            <Image src={MdImage1} alt="icon" />
          </div>
          <p class="mil-light mil-mb-30">Our Services and Solutions</p>
          <h3 class="mil-light">
            With over 15 years of industry
            <span class="mil-accent"> experience, we bring</span> deep knowledge
            and
            <span class="mil-accent"> skill to</span> <br />
            every project
          </h3>
        </div>
        <div className="mt-4">
          <Link
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ02e9dd0BtTOmft6sGk2qDolJA6-KZkxLAMrsDdagnhwiZhzrYr4A3XDACnNPRzjSIzJUjv3g7l" target='_blank' rel="noopener noreferrer"
            className="mil-button mil-border mil-mr-15 mil-mb-30"
          >
            <span className='mil-light'>Book an Appointment</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CallToSectionSecond;
