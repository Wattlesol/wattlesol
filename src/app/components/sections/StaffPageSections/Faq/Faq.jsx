'use client';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const tabData = [
    {
        id: 'tab1',
        label: 'FAQ',
        coloredText: 'Your Staffing Questions Answered',
        desc: 'Curious about how our Staff Augmentation services can support your business? We have compiled some of the most frequently asked questions from businesses like yours. If you need more information, feel free to reach out to our team.',
        content: [
            {
                title: "What is staff augmentation and how can it benefit my business?",
                description: "Staff augmentation is a flexible outsourcing strategy that enables you to hire talent globally to work with your existing team on a contractual basis. This approach is ideal for quickly filling skills gaps, scaling your team during high-demand periods, or accessing specialized skills without the overhead of permanent hires."
            },
            {
                title: "How do you ensure the quality of offshore talent?",
                description: "We have a rigorous vetting process that includes multiple rounds of technical assessments, interviews, and background checks to ensure that only highly skilled and experienced professionals join your team. Our focus is on finding the right match for your specific needs, culture, and project requirements."
            },

            {
                title: "How do I manage an augmented team remotely?",
                description: "Managing an augmented team remotely is made easy with our support. We provide tools and best practices for communication, collaboration, and project management to ensure your remote team integrates smoothly with your in-house staff. Regular check-ins and updates keep everyone aligned and on track."
            },
            {
                title: "What are the cost advantages of staff augmentation?",
                description: "Staff augmentation can offer significant cost savings by reducing recruitment expenses, administrative costs, and overhead associated with full-time hires. You only pay for the skills you need, when you need them, allowing for more efficient budget management."
            },
            {
                title: "How quickly can you provide the required resources?",
                description: "We understand the urgency of filling critical roles. Our extensive talent pool and efficient onboarding processes enable us to provide the required resources within a few days to a couple of weeks, depending on the specific skill set and project needs."
            },
            {
                title: "Can I scale my augmented team up or down as needed?",
                description: "Yes, one of the key benefits of staff augmentation is flexibility. You can easily scale your team up or down based on project requirements, workload fluctuations, or changing business needs, providing you with maximum agility and cost-efficiency."
            },

            {
                title: "How do you ensure data security and confidentiality with augmented staff?",
                description: "Data security and confidentiality are top priorities. We implement strict protocols, including NDA agreements, secure communication channels, and robust access controls, to protect your sensitive information and intellectual property while working with augmented staff."
            },
            {
                title: "What kind of post-placement support do you provide?",
                description: "We offer continuous support to ensure the success of your augmented staff. This includes regular performance evaluations, training opportunities, and a dedicated account manager to address any concerns or adjustments needed during the engagement."
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
