'use client';

import Image from 'next/image';
import React, { useState } from 'react';
// import Logo1 from '@/app/public/logoSection/1.png';
// import Logo2 from '@/app/public/logoSection/2.png';
// import Logo3 from '@/app/public/logoSection/3.png';
// import Logo4 from '@/app/public/logoSection/4.png';
// import ColorLogo1 from '@/app/public/logoSection/color-1.png';
// import ColorLogo2 from '@/app/public/logoSection/color-2.png';
// import ColorLogo3 from '@/app/public/logoSection/color-3.png';
// import ColorLogo4 from '@/app/public/logoSection/color-4.png';

const logos = [
  { grayscale: 'logoSection/1.png', color: 'logoSection/color-1.png' },
  { grayscale: 'logoSection/2.png', color: 'logoSection/color-2.png' },
  { grayscale: 'logoSection/3.png', color: 'logoSection/color-3.png' },
  { grayscale: 'logoSection/4.png', color: 'logoSection/color-4.png' },
];

const Logo = () => {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  return (
    <div className="logo-container">
      <div className="logo-sub-container">
        {logos.map((logo, index) => (
          <Image
            key={index}
            width={250}
            src={hoveredLogo === index ? logo.color : logo.grayscale}
            alt={`logo-${index}`}
            onMouseOver={() => setHoveredLogo(index)}
            onMouseOut={() => setHoveredLogo(null)}
            unoptimized
          />
        ))}
      </div>
    </div>
  );
};

export default Logo;
