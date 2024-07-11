// HeaderSwitcher.jsx
'use client';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Headertwo from './Headertwo';

const HeaderSwitcher = () => {
  const pathname = usePathname();
  const isMainPage = pathname === '/'; 

  return <>{isMainPage ? <Header /> : <Headertwo />}</>;
};

export default HeaderSwitcher;
