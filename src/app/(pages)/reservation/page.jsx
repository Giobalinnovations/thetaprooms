import React from 'react';

import AppData from '@data/app.json';

import ScrollHint from '@layouts/scroll-hint/Index';
import Divider from '@layouts/divider/Index';

import PageBanner from '@components/PageBanner';
import ContactInfoSection from '@components/sections/ContactInfo';
import ReservationFormSection from '@components/sections/ReservationForm';

export const metadata = {
  title: `Reserve Your Table – The Tap Rooms`,
  description: `Looking for a venue to host a special event or neighbourhood hangout in Edmonton? Look no further, You can reserve your table at The Tap Rooms for a memorable experience.`,

  metadataBase: new URL('https://www.thetaprooms.com'),
  alternates: {
    canonical: '/reservation',
  },
};

const Reservation = () => {
  return (
    <>
      <div id="tst-dynamic-banner" className="tst-dynamic-banner">
        <PageBanner
          pageTitle={'Make a Reservation'}
          description={
            'Reserve now and savor a dining experience worth remembering.'
          }
          breadTitle={'Table Reservation'}
          // showMap={1}
          pageBanner="img/banners/banner-1.jpg"
        />
      </div>
      <div id="tst-dynamic-content" className="tst-dynamic-content">
        <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-60">
              <ScrollHint />

              <ReservationFormSection />
              <Divider onlyBottom={0} />
              <ContactInfoSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reservation;
