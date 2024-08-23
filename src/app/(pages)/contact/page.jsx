import React from 'react';

import AppData from '@data/app.json';

import ScrollHint from '@layouts/scroll-hint/Index';
import Divider from '@layouts/divider/Index';

import PageBanner from '@components/PageBanner';
import ContactInfoSection from '@components/sections/ContactInfo';
import ContactFormSection from '@components/sections/ContactForm';

export const metadata = {
  title: {
    default: 'Contact',
  },
  description: AppData.settings.siteDescription,
};

const Contact = () => {
  return (
    <>
      <div id="tst-dynamic-banner" className="tst-dynamic-banner">
        <PageBanner
          pageTitle={'Get in touch'}
          description={`Reach out to us for any questions or concerns—we're here to help!`}
          breadTitle={'Contact'}
          showMap={1}
        />
      </div>
      <div id="tst-dynamic-content" className="tst-dynamic-content">
        <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-60">
              <ScrollHint />

              <ContactInfoSection />
              <Divider />
              <ContactFormSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
