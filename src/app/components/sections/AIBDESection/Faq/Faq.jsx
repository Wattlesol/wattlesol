'use client';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const tabData = [
    {
        id: 'tab1',
        label: 'FAQ',
        coloredText: 'Your Questions Our Answers',
        desc: 'Have questions about our AI-Powered Contact Center Solution? We\'ve got you covered! Here are some of the most common questions we receive from businesses like yours. If you don\'t find the answer you\'re looking for, feel free to reach out to our team.',
        content: [
            {
                title: "How does AI improve customer service?",
                description: "Wattle Sol's AI-Powered Contact Center Solution leverages AI to automate routine tasks, ensuring fast and accurate responses to customer inquiries. Additionally, the AI continuously learns and improves, providing a superior customer experience over time."
            },
            {
                title: "Can Wattle Sol's Contact Center integrate with my CRM?",
                description: "Absolutely! Wattle Sol's solution is designed for seamless integration with your existing CRM system. This integration allows for a personalized customer experience by providing AI access to relevant customer data within your CRM."
            },
            {
                title: "Is this solution suitable for small businesses?",
                description: "Yes, Wattle Sol's AI-Powered Contact Center is highly scalable. It can be tailored to fit the specific needs and budget of businesses of all sizes, including small businesses. This flexibility ensures that even smaller companies can benefit from the efficiency and customer service enhancements offered by AI."
            },
            {
                title: "How does 24/7 availability benefit my business?",
                description: "24/7 availability through Wattle Sol's Contact Center ensures that your customers receive support anytime, anywhere. This significantly boosts customer satisfaction and loyalty. Customers don't have to wait for business hours to get their questions answered or issues resolved, leading to a more positive brand perception."
            },
            {
                title: "What data insights can I expect?",
                description: "Wattle Sol's solution provides real-time analytics on customer interactions and satisfaction. These insights allow you to make informed decisions about your customer service strategy. You can identify areas for improvement, optimize your support processes, and gain a deeper understanding of your customer base."
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
