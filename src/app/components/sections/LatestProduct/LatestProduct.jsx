import Image from 'next/image';
import React from 'react';
import MdImage1 from '@/app/public/global/img/icons/md/13l.svg';
import ai from '@/app/public/global/img/icons/ai-customer.svg';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';


const LatestProduct = () => {
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
                        <Image src={ai} alt="icon" />
                    </div>
                    <p class="mil-light mil-mb-30">Our Latest Product</p>
                    <h3 class="mil-light mil-mb-30">
                        AI Customer Contact Center Solution
                    </h3>
                </div>
                <div className="mil-mb-30">
                    <h4 class="mil-light">
                        Wattle Sol's AI Contact Center offers AI-powered customer support across email, chat, and phone.<br />Our solution provides fast, personalized responses, improves efficiency, and reduces costs.
                    </h4>
                </div>
                <div class="mil-adaptive-center">
                    <Link
                        href="/contact-center"
                        class="mil-button mil-border"
                    >
                        <span class='mil-light'>Learn More</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestProduct;
