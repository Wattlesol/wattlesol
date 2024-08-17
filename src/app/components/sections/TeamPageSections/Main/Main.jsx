import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FaceImage1 from '@/app/public/global/img/faces/abdullah.jpg';
import Zain from '@/app/public/global/img/faces/zain.jpg';
import Saima from '@/app/public/global/img/faces/saima.jpg';
import Ammar from '@/app/public/global/img/faces/ammar.jpg';
import Azaan from '@/app/public/global/img/faces/azaan.jpg';
import Muiz from '@/app/public/global/img/faces/muiz.jpg';
import Shayan from '@/app/public/global/img/faces/shayan.jpg';
import Sheeraz from '@/app/public/global/img/faces/sheeraz.jpg';
import Zaiqam from '@/app/public/global/img/faces/zaigam.jpg';
import Faiza from '@/app/public/global/img/faces/faiza.jpg';
import Haider from '@/app/public/global/img/faces/haider.jpg';
const Main = () => {
  return (
    <section className="mil-team mil-p-120-60">
      <Container>
        <h3 class="mil-text-center mil-mb-120">
          Meet the <span class="mil-accent">POWER HOUSE</span> at
          <span class="mil-accent"> Wattle Sol</span> <br />- where innovation,
          expertise, and success converge!
        </h3>
        <Row>
          <Col sm={6} lg={4}>
            <a className="mil-team-card mil-mb-60">
              <div className="mil-image-frame mil-mb-30">
                <Image src={Zain} alt="Team member" />
                <div className="mil-team-circle"></div>
              </div>
              <h4 className="mil-mb-10">Syed Zain</h4>
              <p>CEO Wattle Sol</p>
            </a>
          </Col>
          {/* <Col sm={6} lg={4}>
            <a  className="mil-team-card mil-mb-60">
              <div className="mil-image-frame mil-mb-30">
                <Image src={Sheeraz} alt="Team member" />
                <div className="mil-team-circle"></div>
              </div>
              <h4 className="mil-mb-10">Muhammad Sheraz</h4>
              <p>Lead Software Developer</p>
            </a>
          </Col> */}
          {/* <Col sm={6} lg={4}>
            <a  className="mil-team-card mil-mb-60">
              <div className="mil-image-frame mil-mb-30">
                <Image src={Zaiqam} alt="Team member" />
                <div className="mil-team-circle"></div>
              </div>

              <h4 className="mil-mb-10">Zaigham Bilal</h4>
              <p>Lead Designer</p>
            </a>
          </Col> */}
          <Col sm={6} lg={4}>
            <a className="mil-team-card mil-mb-60">
              <div className="mil-image-frame mil-mb-30">
                <Image src={Saima} alt="Team member" />
                <div className="mil-team-circle"></div>
              </div>
              <h4 className="mil-mb-10">Saima Yasmeen</h4>
              <p>HR Manager</p>
            </a>
          </Col>
          <Col sm={6} lg={4}>
            <a className="mil-team-card mil-mb-60">
              <div className="mil-image-frame mil-mb-30">
                <Image src={Shayan} alt="Team member" />
                <div className="mil-team-circle"></div>
              </div>
              <h4 className="mil-mb-10">Syed Shayan Bukhari</h4>
              <p>UI\UX | GFX Designer</p>
            </a>
          </Col>
          <Col sm={6} lg={4}>
            <a className="mil-team-card mil-mb-60">
              <div className="mil-image-frame mil-mb-30">
                <Image src={Muiz} alt="Team member" />
                <div className="mil-team-circle"></div>
              </div>
              <h4 className="mil-mb-10">Syed Muizz Ali</h4>
              <p>Sales Manager</p>
            </a>
          </Col>

          <Col sm={6} lg={4}>
            <a className="mil-team-card mil-mb-60">
              <div className="mil-image-frame mil-mb-30">
                <Image src={FaceImage1} alt="Team member" />
                <div className="mil-team-circle"></div>
              </div>
              <h4 className="mil-mb-10">Abdullah Attique</h4>
              <p>Blockchain Developer</p>
            </a>
          </Col>

          {/* <Col sm={6} lg={4}>
            <a  className="mil-team-card mil-mb-60">
              <div className="mil-image-frame mil-mb-30">
                <Image src={Ammar} alt="Team member" />
                <div className="mil-team-circle"></div>
              </div>
              <h4 className="mil-mb-10">Ammar Ahmad</h4>
              <p>Full Stack Developer</p>
            </a>
          </Col> */}

          <Col sm={6} lg={4}>
            <a  className="mil-team-card mil-mb-60">
              <div className="mil-image-frame mil-mb-30">
                <Image src={Azaan} alt="Team member" />
                <div className="mil-team-circle"></div>
              </div>
              <h4 className="mil-mb-10">Azaan Ahmed</h4>
              <p>Sr. Full Stack Developer</p>
            </a>
          </Col>

          <Col sm={6} lg={4}>
            <a  className="mil-team-card mil-mb-60">
              <div className="mil-image-frame mil-mb-30">
                <Image src={Faiza} alt="Team member" />
                <div className="mil-team-circle"></div>
              </div>
              <h4 className="mil-mb-10">Faiza Ashraf</h4>
              <p>Flutter Developer</p>
            </a>
          </Col>

          <Col sm={6} lg={4}>
            <a  className="mil-team-card mil-mb-60">
              <div className="mil-image-frame mil-mb-30">
                <Image src={Haider} alt="Team member" />
                <div className="mil-team-circle"></div>
              </div>
              <h4 className="mil-mb-10">Syed Hyder Ali</h4>
              <p>Assistant Graphics Designer</p>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;
