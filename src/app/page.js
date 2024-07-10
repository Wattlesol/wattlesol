
import React from 'react';
import '@/app/styles/globals.css';
import Logo from './components/sections/logoSlider/Logo'
import Divider from './components/common/Divider'
import { Hero } from './components/home/Hero';
import "@/app/styles/flex.css"
import "@/app/styles/global/style.css"
import "@/app/styles/global/plugins/bootstrap-grid.css"
import "@/app/styles/global/plugins/font-awesome.min.css"
import "@/app/styles/global/plugins/swiper.min.css"
import "@/app/styles/scss/style.scss"
import Help from './components/sections/howWeCanHelp/Help'
import LatestProjects from './components/sections/LatestProjects/LatestProjects';

const page = () => {
  return <div>
    <Hero/>
    <Logo/> 
    <Divider/> 
    <Help/>
    <LatestProjects/>
  </div>;
};
export default page;
