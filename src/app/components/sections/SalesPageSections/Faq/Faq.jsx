'use client';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const tabData = [
    {
        id: 'tab1',
        label: 'FAQ',
        coloredText: 'Your Business Growth, Our Expertise',
        desc: 'As a business manager, you’re focused on driving growth and maximizing efficiency. We’re here to support you every step of the way. Below, you’ll find answers to the questions we often hear from leaders like you who are looking to elevate their sales and marketing strategies. If you have a question that’s not covered here, just reach out – we’re here to help.',
        content: [
            {
                title: "How can your services help me reach my sales targets?",
                description: "We understand your sales targets are more than just numbers—they represent the future of your business. Our solutions are designed to identify and nurture the right leads, streamline your sales process, and provide your team with the tools they need to close deals more effectively, ensuring you not only meet but exceed your goals."
            },
            {
                title: "What strategies will you implement to boost our marketing efforts?",
                description: "Every business is unique, and so are our strategies. We’ll work closely with you to develop a tailored marketing plan that leverages the most effective channels for your industry. Whether it’s enhancing your online presence, crafting compelling content, or running targeted campaigns, our goal is to amplify your brand’s voice and drive meaningful engagement."
            },
            {
                title: "How can you help me retain my best customers?",
                description: "Customer retention is key to sustainable growth. Our approach focuses on building lasting relationships through personalized marketing, targeted loyalty programs, and continuous engagement. We’ll help you create experiences that keep your customers coming back, fostering long-term loyalty and increasing lifetime value."
            },
            {
                title: "What insights will I gain from your analytics?",
                description: "Data-driven decisions are at the heart of successful strategies. Our platform offers deep insights into your campaign performance, customer behavior, and market trends. With this data at your fingertips, you’ll be empowered to refine your approach, seize new opportunities, and stay ahead of the competition."
            },
            {
                title: "Can you integrate with our current tools and platforms?",
                description: "Absolutely. We believe in enhancing, not disrupting, your current operations. Our solutions are designed for seamless integration with the tools you already use, ensuring a smooth transition and allowing you to capitalize on your existing investments. We’ll make sure everything works together, so you can focus on what you do best—running your business."
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
