import React from 'react';
import Link from 'next/link';
import '@/app/styles/globals.css';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className="mil-top-position mil-fixed">
        <div className="mil-top-panel mil-top-panel-transparent mil-animated">
          <div className="container">
            <Link href="/home-1" legacyBehavior>
              <a className="mil-logo" style={{ width: '140px' }}></a>
            </Link>
            <div className="mil-navigation">
              <nav>
                <ul>
                  <li>
                    <Link href="#" legacyBehavior>
                      <a>Home</a>
                    </Link>
                  </li>

                  <li className="mil-has-children">
                    <Link href="#" legacyBehavior>
                      <a>About Us</a>
                    </Link>
                    <ul>
                      <li>
                        <Link href="/team" legacyBehavior>
                          <a>Team</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq" legacyBehavior>
                          <a>FAQ</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="mil-has-children">
                    <Link href="#" legacyBehavior>
                      <a>Solutions</a>
                    </Link>
                    <ul>
                      <li>
                        <Link href="/solution-1" legacyBehavior>
                          <a>Solution 1</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solution-2" legacyBehavior>
                          <a>Solution 2</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solution-3" legacyBehavior>
                          <a>Solution 3</a>
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

                <div className="mil-search-icon">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
                    />
                  </svg>
                </div>
              </nav>
            </div>
            <div className="mil-menu-btn">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
