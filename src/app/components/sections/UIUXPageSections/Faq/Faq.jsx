'use client';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const tabData = [
    {
        id: 'tab1',
        label: 'FAQ',
        coloredText: 'Designing Clarity',

        desc: "Curious about how our UI/UX design process can enhance your digital presence? We've compiled some of the most frequently asked questions from businesses like yours. If you have more questions or need further clarification, feel free to contact our team.",
        content: [
            {
                title: "How do you ensure your designs align with our brand identity?",
                description:
                    "We begin with a thorough understanding of your brand, its values, and its audience. Our designers conduct in-depth research and collaborate closely with your team to ensure that every design element—from color schemes to typography—reflects your brand's unique voice and vision. This collaborative approach ensures that our UI/UX designs are not only visually appealing but also authentic to your brand identity.",
            },
            {
                title: "What tools do you use for creating wireframes and prototypes?",
                description:
                    "Our team utilizes industry-leading tools like Figma, Sketch, and Adobe XD to create detailed wireframes and interactive prototypes. These tools allow us to effectively visualize the layout, functionality, and user flow of your digital product, ensuring a seamless and intuitive user experience from the very start of the design process.",
            },
            {
                title: "How do you incorporate user feedback into the design process?",
                description:
                    "User feedback is integral to our design process. We conduct usability testing with real users at various stages of development, gathering insights to refine and optimize the user experience. This iterative approach ensures that our designs are not only aesthetically pleasing but also user-friendly and effective in meeting user needs and expectations.",
            },
            {
                title: "What is the typical timeline for a UI/UX design project?",
                description:
                    "The timeline for a UI/UX design project can vary depending on the project's complexity, scope, and specific requirements. Generally, a standard design process, including research, wireframing, prototyping, and testing, can take anywhere from 4 to 12 weeks. We provide a detailed project plan with milestones to keep you informed throughout the process.",
            },
            {
                title: "Can you help improve the user experience of an existing website or app?",
                description:
                    "Absolutely! We offer UX audit services to evaluate your current digital product. Our team identifies pain points and areas for improvement, providing actionable recommendations and redesign options to enhance usability, engagement, and overall user satisfaction.",
            },
            {
                title: "What kind of results can we expect from investing in UI/UX design?",
                description:
                    "Investing in UI/UX design can lead to increased user engagement, higher conversion rates, improved customer satisfaction, and stronger brand loyalty. A well-designed user interface and user experience create a positive first impression, making it easier for users to navigate your site or app and achieve their goals, ultimately driving business growth.",
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
