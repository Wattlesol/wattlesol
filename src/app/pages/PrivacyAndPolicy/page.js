import HeroSection from '@/app/components/sections/PrivacyAndPolicy/Hero/Hero';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <>
      <HeroSection />
      <div style={{ padding: '20px', margin: '100px', display:'flex',flexDirection:'column', gap:"20px" }}>
        <h1>Privacy Policy for Wattle Sol</h1>
        <p>
          <strong>Last Updated:</strong> 1 January 2024
        </p>
        <p>
          Wattle Sol ("we," "our," or "us") values your privacy. This
          Privacy Policy outlines how we collect, use, and protect your
          information when you visit our website, https://wattlesol.com
          ("Website"). By using our Website, you agree to the collection and use
          of information in accordance with this policy.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> We may collect personal
            information, such as your name, email address, and other details you
            provide through forms on our Website.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> We collect non-personal
            information, including but not limited to cookies, IP addresses, and
            browsing data. This data is collected automatically through
            technologies such as cookies and third-party services like Google
            Analytics.
          </li>
        </ul>

        <h2>2. How We Collect Information</h2>
        <p>We collect information in the following ways:</p>
        <ul>
          <li>
            <strong>Forms:</strong> When you fill out forms on our Website, such
            as contact forms or subscription forms, we collect the information
            you provide.
          </li>
          <li>
            <strong>Cookies:</strong> Our Website uses cookies to enhance your
            experience. Cookies are small files stored on your device that help
            us understand how you use our Website.
          </li>
          <li>
            <strong>Third-Party Services:</strong> We use third-party services,
            such as Google Analytics, to collect and analyze non-personal
            information about how our Website is used.
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>The information we collect is used for the following purposes:</p>
        <ul>
          <li>
            <strong>User Experience:</strong> To improve the functionality and
            performance of our Website and ensure a better user experience.
          </li>
          <li>
            <strong>Marketing:</strong> To send you marketing communications,
            such as newsletters and promotional offers, if you have opted in to
            receive them.
          </li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties except as described below:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We may share your information
            with trusted third-party service providers who assist us in
            operating our Website, conducting our business, or servicing you, as
            long as those parties agree to keep your information confidential.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your
            information when required by law or to comply with legal processes.
          </li>
        </ul>

        <h2>5. Your Rights</h2>
        <p>
          You have the following rights regarding your personal information:
        </p>
        <ul>
          <li>
            <strong>Access and Correction:</strong> You can request access to
            the personal information we hold about you and ask for corrections
            if needed.
          </li>
          <li>
            <strong>Opt-Out:</strong> You can opt-out of receiving marketing
            communications by following the unsubscribe link in the emails we
            send.
          </li>
        </ul>

        <h2>6. Data Security</h2>
        <p>
          We implement a variety of security measures to protect your personal
          information. However, no method of transmission over the internet or
          method of electronic storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>

        <h2>7. International Users</h2>
        <p>
          If you are accessing our Website from outside your country of
          residence, please be aware that your information may be transferred
          to, stored, and processed in the country where our servers are
          located. We comply with legal requirements regarding international
          data transfers.
        </p>

        <h2>8. Children's Privacy</h2>
        <p>
          Our Website is not intended for children under the age of 13, and we
          do not knowingly collect personal information from children under 13.
        </p>

        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page. You are
          advised to review this Privacy Policy periodically for any updates or
          changes.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <address>
          <strong>Wattle Sol</strong>
          <br />
          Email: <a href="mailto:Info@wattlesol.info">Info@wattlesol.info</a>
          <br />
          Address: 30 N Gould St Ste R Sheridan, WY 82801
        </address>
      </div>
    </>
  );
}
