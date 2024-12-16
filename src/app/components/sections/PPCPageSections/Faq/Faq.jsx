'use client';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const tabData = [
    {
        id: 'tab1',
        label: 'FAQ',
        coloredText: 'Driving Your Business Growth with Targeted PPC Solutions',
        desc: 'As a business owner, your goal is to achieve measurable results and maximize ROI. Our PPC expertise is here to ensure your campaigns deliver just that. Below, you’ll find answers to some common questions we hear from business leaders like you who are eager to harness the power of PPC advertising. If you have a question that’s not covered here, just reach out – we’re happy to help.',
        content: [
            {
                title: "How can PPC campaigns help me reach my business goals?",
                description: "PPC advertising drives immediate, measurable results by putting your business in front of high-intent audiences. We create customized campaigns that target the right keywords, demographics, and locations, ensuring your ads resonate with potential customers and drive conversions aligned with your sales and marketing objectives."
            },
            {
                title: "What strategies do you use to maximize PPC ROI?",
                description: "Maximizing ROI starts with precise targeting and continuous optimization. We conduct thorough keyword research, craft compelling ad copy, and A/B test various creatives. Additionally, we leverage advanced bidding strategies and audience segmentation to minimize costs and maximize returns on your ad spend."
            },
            {
                title: "How do you ensure my PPC campaigns reach the right audience?",
                description: "Our approach includes creating highly-targeted audience segments based on factors like search intent, demographics, and behavior. Whether it’s Google Ads, social media platforms, or programmatic ads, we ensure your campaigns are tailored to the platforms your audience uses most, delivering your message at the right time and place."
            },
            {
                title: "What kind of analytics will I get from PPC campaigns?",
                description: "We provide detailed insights into ad performance, click-through rates, cost-per-click, conversion rates, and customer acquisition costs. These metrics give you a clear picture of your campaign’s success, enabling us to refine strategies and improve results continually."
            },
            {
                title: "Can you work with my existing marketing tools and platforms?",
                description: "Yes, we seamlessly integrate PPC campaigns with your existing CRM, analytics tools, and marketing platforms. This allows us to sync data across systems, optimize retargeting efforts, and provide a unified view of your marketing performance."
            }
        ],
    },
];


const TabContent = ({ content }) => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        if (openAccordion === index) {
            setOpenAccordion(null);
        } else {
            setOpenAccordion(index);
        }
    };

    return (
        <>
            {content.map((item, index) => (
                <div key={index}>
                    <div
                        className={`mil-accordion ${openAccordion === index ? 'mil-active' : ''
                            }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <h6>{item.title}</h6>
                    </div>
                    <div
                        className="mil-panel"
                        style={{
                            maxHeight: openAccordion === index ? '1000px' : '0',
                            overflow: 'hidden',
                            marginTop: '20px',
                            transition: 'max-height 0.3s ease',
                        }}
                    >
                        <div className="mil-window">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

const Faq = () => {
    return (
        <section className="mil-faqs mil-mb-120 mil-p-120-0">
            <div
                className="mil-deco"
                style={{ bottom: 0, left: '10%', transform: 'rotate(180deg)' }}
            ></div>
            <Container>
                <div className="mil-tabs">
                    {tabData.map((tab, index) => (
                        <React.Fragment key={tab.id}>
                            <input
                                type="radio"
                                name="tabs"
                                id={tab.id}
                                defaultChecked={index === 0}
                            />
                            <label htmlFor={tab.id}>{tab.label}</label>
                            <div className="mil-tab">
                                <Row className="justify-content-between">
                                    <Col lg={4}>
                                        <h3 className="mil-up-font mil-mb-30">
                                            <span st className="mil-accent">{tab.coloredText}</span>{' '}
                                            {tab.title}
                                        </h3>
                                        <p className="mil-mb-40">{tab.desc}</p>
                                    </Col>
                                    <Col lg={7}>
                                        <TabContent content={tab.content} />
                                    </Col>
                                </Row>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Faq;
