import Link from 'next/link';
import Image from 'next/image';
import Zain from "@/app/public/global/img/faces/zain.jpg";


const Sidebar = ({ recentPosts }) => {
    return (
        <>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
                {/* About Section */}
                <div className="mil-mb-60">
                    <h5 className="mil-list-title mil-mb-30">About Wattle Sol</h5>
                    <p className="mil-mb-30">
                        At Wattle Sol, we're committed to developing innovative software solutions that drive the future of technology and sustainability.
                    </p>
                    <a href="/team" className="mil-post-sm mil-mb-15">
                        <div className="mil-cover-frame">
                            <Image src={Zain} alt="cover" />
                        </div>
                        <div className="mil-description">
                            <h4 className="mil-font-3 mil-accent">Syed Zain</h4>
                            <p className="mil-text-sm">CEO</p>
                        </div>
                    </a>
                </div>

                <div className="mil-divider mil-mb-60"></div>

                <form className="mil-sidebar-input-frame mil-mb-60">
                    <input
                        type="text"
                        className="mil-sidebar-input"
                        placeholder="Search here..."
                    />
                    <button type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
                <div className="mil-divider mil-mb-60"></div>
                {/* Recent Posts */}
                <div className="mil-mb-60">
                    <h5 className="mil-list-title mil-mb-30">Recent Posts</h5>
                    {recentPosts.map((post, index) => (
                        <Link key={index} href={post.href} className="mil-post-sm mil-mb-15">
                            <div className="mil-cover-frame">
                                <Image src={post.image} alt={post.title} />
                            </div>
                            <div className="mil-description">
                                <h6>{post.title}</h6>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mil-divider mil-mb-60"></div>

                {/* Static Content */}
                <div className="mil-mb-60">
                    <h5 className="mil-list-title mil-mb-30">Categories</h5>
                    <ul className="mil-hover-link-list">
                        <li><a href="#.">Business</a></li>
                        <li><a href="#.">Design</a></li>
                        <li><a href="#.">Development</a></li>
                        <li><a href="#.">Management</a></li>
                        <li><a href="#.">Software</a></li>
                    </ul>
                </div>

                <div className="mil-divider mil-mb-60"></div>

                <div className="mil-mb-60">
                    <h5 className="mil-list-title mil-mb-30">Tags</h5>
                    <ul className="mil-tags">
                        <li><a href="#.">Business</a></li>
                        <li><a href="#.">Startup</a></li>
                        <li><a href="#.">Development</a></li>
                        <li><a href="#.">Learning</a></li>
                    </ul>
                </div>

                <div className="mil-divider mil-mb-60"></div>

                <div className="mil-mb-60">
                    <h5 className="mil-list-title mil-mb-30">Newsletter</h5>
                    <form className="mil-sidebar-input-frame">
                        <input
                            type="text"
                            className="mil-sidebar-input"
                            placeholder="Your email address"
                        />
                        <button type="submit">
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </form>
                </div>

                <div className="mil-divider mil-mb-60"></div>

                {/* Contact */}
                <h5 className="mil-list-title mil-mb-30">Contact us</h5>
                <p className="mil-mb-30">
                    For technical or billing questions, please contact us at info@wattlesol.com.
                </p>
                <div className="mil-adaptive-right">
                    <Link
                        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2MVk3D4z7q8WW0oLXjtYbr0fiDQpFGj1gr9LgCLUaVH5wq9wlW0qxM377Cu7TyH0sfU48A7JN3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mil-button mil-border mil-mr-15 mil-mb-30"
                    >
                        <span>Book an Appointment</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
