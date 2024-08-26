'use client';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const tabData = [
    {
        id: 'tab1',
        label: 'FAQ',
        coloredText: 'Key Insights',
        title: 'on Software and Technology',
        desc: "Explore detailed answers to your software development queries. Our FAQs cover various aspects of mobile app development, blockchain, Web3, AI, and more. If you have additional questions or need further information, please reach out to us.",
        content: [
            {
                title: "What types of mobile apps can you develop?",
                description: "We develop a wide range of mobile apps, including native apps for iOS and Android, cross-platform apps using frameworks like Flutter and React Native, and progressive web apps (PWAs). Whether you need a simple app or a complex enterprise solution, our team has the expertise to deliver.",
            },
            {
                title: "How do you approach custom software development?",
                description: "Our approach to custom software development is highly collaborative. We start with a thorough discovery phase to understand your business needs and objectives. Then, we create a detailed project plan, followed by agile development cycles, allowing for regular feedback and adjustments throughout the process.",
            },
            {
                title: "What are the potential legal and regulatory implications of deploying a Web3 application?",
                description: "Deploying a Web3 application can involve complex legal and regulatory implications, such as compliance with data protection laws (e.g., GDPR), financial regulations (e.g., securities laws), and intellectual property rights. It's crucial to work with legal experts to navigate these issues and ensure that your Web3 application adheres to all applicable regulations and standards.",
            },
            {
                title: "What AI and machine learning services do you offer?",
                description: "We offer a range of AI and machine learning services, including predictive analytics, natural language processing (NLP), computer vision, and automation solutions. Our team can develop custom AI models and integrate them into your existing systems to drive smarter decision-making and improve operational efficiency.",
            },
            {
                title: "How much does it cost to develop a custom app?",
                description: "The cost of developing a custom app varies depending on the complexity, features, and platforms involved. We provide a detailed estimate after understanding your specific requirements and project scope. We aim to deliver high-quality solutions within your budget and timeline.",
            },

            {
                title: "Do you offer support for integrating new software with existing systems?",
                description: "Yes, we provide full support for integrating new software with your existing systems, ensuring seamless compatibility and minimal disruption to your operations. Our team conducts a thorough assessment of your current infrastructure to create a smooth integration plan.",
            },
            {
                title: "What are your policies regarding intellectual property and ownership?",
                description: "Upon project completion, all intellectual property rights and ownership of the software developed by us are transferred to you. We ensure that all code, assets, and related materials are your property, providing full transparency and control over your digital assets.",
            },

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
