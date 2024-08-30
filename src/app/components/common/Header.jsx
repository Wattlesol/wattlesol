import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '@/app/styles/globals.css';

const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [topPanelClass, setTopPanelClass] = useState(
    'mil-top-panel-transparent'
  );

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll >= 220) {
        setTopPanelClass('');
      } else {
        setTopPanelClass('mil-top-panel-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="mil-top-position mil-fixed">
        <div className={`mil-top-panel ${topPanelClass} mil-animated`}>
          <div className="container">
            <Link href="/" legacyBehavior>
              <a className="mil-logo" style={{ width: '140px' }}></a>
            </Link>
            <div
              className={`mil-navigation ${isMenuActive ? 'mil-active' : ''}`}
            >
              <nav>
                <ul>
                  <li>
                    <Link href="/" legacyBehavior>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="mil-has-children">
                    <Link href="/about-us" legacyBehavior>
                      <a>About Us</a>
                    </Link>
                    <ul>
                      <li>
                        <Link href="/about-us" legacyBehavior>
                          <a>Company</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/team" legacyBehavior>
                          <a>Team</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/faqs" legacyBehavior>
                          <a>FAQ</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="mil-has-children">
                    <Link href="/solutions" legacyBehavior>
                      <a>Solutions</a>
                    </Link>
                    <ul>
                      <li>
                        <Link href="/solutions" legacyBehavior>
                          <a>Our Services</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/software-development" legacyBehavior>
                          <a>Software Development</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/sales-and-marketing" legacyBehavior>
                          <a>Sales and Marketing</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ui-ux" legacyBehavior>
                          <a>UI/UX Design</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/staff-augmentation" legacyBehavior>
                          <a>Staff Augmentation</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact-center" legacyBehavior>
                          <a>Contact Center Solution</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link href="/blogs" legacyBehavior>
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" legacyBehavior>
                      <a>Case Studies</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" legacyBehavior>
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="mil-menu-btn"
              onClick={() => setMenuActive(!isMenuActive)}
            >
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
