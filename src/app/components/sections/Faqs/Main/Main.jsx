import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const tabData = [
  {
    id: 'tab1',
    label: 'Information',
    coloredText: 'Wattle Sol ',
    title: 'The Entire Organization From End To End.',
    desc: 'We blend global development expertise with passionate Asian talent for exceptional quality and affordability. Based in Wyoming, we work Eastern and Pacific hours for smooth communication.',
    content: [
      {
        title: 'What services does Wattle Sol offer?',
        description:
          'Wattle Sol specializes in website development, mobile app development, custom software solutions, customer support services, sales and marketing. We also offer staff augmentation of fully dedicated team or individuals.',
      },
      {
        title: 'What technologies does Wattle Sol specialize in?',
        description:
          'Wattle Sol specializes in a wide range of technologies including Flutter, MERN stack, Next.js, solidity and more, tailored to client needs.',
      },

      {
        title:
          'What is the typical timeline for completing a project with Wattle Sol?',
        description:
          'WProject timelines vary based on complexity and scope, but Wattle Sol aims for efficient delivery without compromising quality.',
      },

      {
        title: 'How can I contact Wattle Sol for more information?',
        description:
          'WFor inquiries or more information, you can reach out to us via email at sales@wattlesol.com or through our website contact form',
      },

      {
        title:
          'Can Wattle Sol provide reference from past clients for verifications?',
        description:
          'Yes, Wattle Sol can provide references upon request to validate its reputation and client satisfaction.',
      },
    ],
  },
  {
    id: 'tab2',
    label: 'Pricing Plans',
    coloredText: 'Affordable solutions,',
    title: 'customized for your business growth.',
    desc: "Discover affordable solutions, meticulously customized to foster your business growth. Our pricing plans are designed to meet diverse needs, ensuring flexibility and scalability. Partner with us to optimize your operations and achieve sustainable success in today's competitive landscape.",
    content: [
      {
        title: 'Does Wattle Sol offer customizable pricing plans?',
        description:
          'Yes, Wattle Sol provides flexible pricing options tailored to the specific requirements and budget of each client.',
      },
      {
        title: 'What factors determine the cost?',
        description:
          'Pricing is influenced by project complexity, scope, technologies involved, and desired timelines for delivery.',
      },
      {
        title: "Are there any hidden cost in Wattle Sol's pricing plans?",
        description:
          'No, Wattle Sol is transparent about costs, ensuring clarity and no hidden fees throughout the project lifecycle.',
      },
      {
        title: 'Can I get a quote from Wattle Sol before  starting a project?',
        description:
          "Absolutely! Contact us with your project details, and we'll provide a detailed quote based on your requirements.",
      },
      {
        title:
          'Does Wattle sol offers discounts for long-term projects or partnerships?',
        description:
          'NYes, Wattle Sol offers discounts and special rates for long-term projects and ongoing partnerships..',
      },
    ],
  },
  {
    id: 'tab3',
    label: 'Data and Privacy',
    coloredText: 'Protecting',
    title: 'Your Data, Securing Your Trust',
    desc: 'Ensuring data security and privacy is paramount at Wattle Sol. We offer robust measures to safeguard your information, adhering strictly to industry standards and regulations.',
    content: [
      {
        title: 'How Does Wattle Sol handle client data and privacy?',
        description:
          'Wattle Sol adheres to strict data protection regulations, ensuring client confidentiality and secure handling of data.',
      },

      {
        title: 'Does Wattle Sol share client information with third parties',
        description:
          'No, Wattle Sol does not share client information with third parties without explicit consent, maintaining confidentiality at all times.',
      },

      {
        title:
          'What security measures does Wattle Sol have in place for data protection?',
        description:
          'Wattle Sol employs robust encryption protocols, secure servers, and regular audits to safeguard client data against unauthorized access.',
      },

      {
        title: 'Is client data backed up regularly by Wattle Sol?',
        description:
          'Yes, Wattle Sol conducts regular data backups to prevent data loss and ensure continuity of services.',
      },

      {
        title:
          "How can clients request the deletion of their data from Wattle Sol's systems",
        description:
          'Clients can request data deletion by contacting our Data Protection Officer (DPO) at zain@wattlesol.com, adhering to GDPR and other relevant regulations.',
      },
    ],
  },
  {
    id: 'tab4',
    label: 'Security',
    coloredText: 'Defense',
    title: 'Beyond Expectations: Securing Your Digital Frontier',
    desc: 'With robust encryption, continuous monitoring, and expert guidance, we prioritize safeguarding your operations. Trust in our commitment to surpass industry standards, empowering your business with confidence in every digital endeavor.',
    content: [
      {
        title:
          'How does Wattle Sol ensure application security during development?',
        description:
          'We follow secure coding practices, conduct regular code reviews, and perform security testing throughout the development lifecycle.',
      },
      {
        title:
          'How does Wattle Sol ensure the security of third-party integrations?',
        description:
          'We thoroughly vet third-party vendors and implement secure API integrations to minimize risks associated with external partnerships.',
      },

      {
        title: "What is Wattle Sol's approach to patch management?",
        description:
          'We regularly apply security patches and updates to all systems and applications to address vulnerabilities and maintain security.',
      },

      {
        title: 'Does Wattle Sol provide security training for its employees?',
        description:
          'Yes, all employees undergo regular security training to stay updated on best practices and emerging threats.',
      },

      {
        title: "What is Wattle Sol's approach to handling security breaches?",
        description:
          'In the event of a security breach, we follow a comprehensive incident response plan, including immediate containment, investigation, and remediation.',
      },
    ],
  },
];

const TabContent = ({ content }) => (
  <>
    {content.map((item, index) => (
      <div key={index}>
        <div className="mil-accordion">
          <h6>{item.title}</h6>
        </div>
        <div className="mil-panel">
          <div className="mil-window">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    ))}
  </>
);

const Main = () => {
  return (
    <section className="mil-faqs mil-p-120-0">
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
                      <span className="mil-accent">{tab.coloredText}</span>{' '}
                      {tab.title}
                    </h3>
                    <p className="mil-mb-60">{tab.desc}</p>
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

export default Main;
