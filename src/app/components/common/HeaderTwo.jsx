'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '@/app/styles/globals.css';

const HeaderTwo = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [topPanelClass, setTopPanelClass] = useState('mil-hide-top');
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll >= 220) {
        setTopPanelClass('');
      } else {
        setTopPanelClass('mil-hide-top');
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
                    <Link href="/about" legacyBehavior>
                      <a>About Us</a>
                    </Link>
                    <ul>
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
                    <Link href="/solution" legacyBehavior>
                      <a>Solutions</a>
                    </Link>
                    <ul>
                      <li>
                        <Link href="/solutions/contact-center" legacyBehavior>
                          <a>Contact Center Solution</a>
                        </Link>
                      </li>

                    </ul>
                  </li>
                  <li>
                    <Link href="/blog" legacyBehavior>
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" legacyBehavior>
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

export default HeaderTwo;
