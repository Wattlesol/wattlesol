import React from "react";
import Image from "next/image";

const Comments = ({ comments }) => {
    return (
        <div>
            {/* Comments Header */}
            <h3 className="mil-mb-60">
                Comments - <span className="mil-accent">{comments.length}</span>
            </h3>

            {/* Comments List */}
            <ul className="mil-comments-frame">
                {comments.map((comment, index) => (
                    <li className="mil-comment" key={index}>
                        <div className="mil-comment-top-panel">
                            <div className="mil-left">
                                <Image src={comment.avatar} alt={`${comment.author} avatar`} />
                                <div>
                                    <h5>{comment.author}</h5>
                                    <p className="mil-text-sm">{comment.date}</p>
                                </div>
                            </div>
                            <a
                                href="#reply"
                                className="mil-button mil-border mil-button-xs mil-gray-border mil-mb-15"
                            >
                                <span>Reply</span>
                            </a>
                        </div>
                        <p className="mil-comment-text">{comment.text}</p>
                    </li>
                ))}
            </ul>

            <div className="mil-divider mil-mb-60" id="reply"></div>

            {/* Reply Form */}
            <h3 className="mil-mb-60">Leave a Reply</h3>
            <form>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                            <label className="mil-h6 mil-dark">
                                <span>Name</span>
                                <span className="mil-accent">Required</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name Here" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                            <label className="mil-h6">
                                <span>Email Address</span>
                                <span className="mil-accent">Required</span>
                            </label>
                            <input type="email" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="mil-input-frame mil-dark-input mil-mb-30">
                            <label className="mil-h6">
                                <span>Message</span>
                                <span className="mil-accent">Required</span>
                            </label>
                            <textarea
                                placeholder="Your Message"
                                className="mil-shortened"
                            ></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="mil-input-frame mil-dark-input mil-mb-60">
                            <label className="mil-h6">
                                <span>Website</span>
                                <span className="mil-dark-soft">Optional</span>
                            </label>
                            <input type="text" placeholder="mydomain.com" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mil-checbox-frame mil-dark-input mil-mb-60">
                            <input
                                className="mil-checkbox"
                                id="checkbox-1"
                                type="checkbox"
                                value="value"
                            />
                            <label htmlFor="checkbox-1" className="mil-text-sm">
                                Save my name, email, and website in this browser for the next
                                time I comment.
                            </label>
                        </div>

                        <button className="mil-button mil-border mil-fw">
                            <span>Post Comment</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Comments;
