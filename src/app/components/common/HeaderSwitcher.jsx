// HeaderSwitcher.jsx
'use client';
import { usePathname } from 'next/navigation';
import Header from './Header';
import HeaderTwo from './HeaderTwo';

const HeaderSwitcher = () => {
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  return <>{isMainPage ? <Header /> : <HeaderTwo />}</>;
};

export default HeaderSwitcher;
