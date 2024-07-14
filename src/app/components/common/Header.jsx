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
                    <Link href="/pages/about" legacyBehavior>
                      <a>About Us</a>
                    </Link>
                    <ul>
                      <li>
                        <Link href="/pages/team" legacyBehavior>
                          <a>Team</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/pages/faqs" legacyBehavior>
                          <a>FAQ</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/pages/solution" legacyBehavior>
                      <a>Solutions</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/pages/blog" legacyBehavior>
                      <a>Blog</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/pages/contact" legacyBehavior>
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
