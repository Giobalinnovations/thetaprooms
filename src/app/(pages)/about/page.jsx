import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import { getSortedPostsData } from '@library/posts';

import AppData from '@data/app.json';

import ScrollHint from '@layouts/scroll-hint/Index';
import Divider from '@layouts/divider/Index';

import PageBanner from '@components/PageBanner';
import AwardsSection from '@components/sections/Awards';
import PromoVideoSection from '@components/sections/PromoVideo';
import FeaturesSection from '@components/sections/Features';
import TeamSection from '@components/sections/Team';
import ScheduleSection from '@components/sections/Schedule';
import CountersSection from '@components/sections/Counters';
import CallToActionFourSection from '@components/sections/CallToActionFour';

import SubscribeSection from '@components/sections/Subscribe';

const TestimonialSlider = dynamic(
  () => import('@components/sliders/Testimonial2'),
  { ssr: false }
);

export const metadata = {
  title: `About US – The Tap Rooms | Bars in North Edmonton`,
  description: `Welcome to the Tap Rooms, known as one of the best bars, restaurants, and sports bars in Edmonton. It's a space where stories are shared, memories are made, and friendships flourish. Join us for an engaging conversation, a taste of Smiths Falls hospitality, and a great experience at Edmonton's favorite sports bar.`,

  metadataBase: new URL('https://www.thetaprooms.com'),
  alternates: {
    canonical: '/about',
  },
};

async function About() {
  const Content = {
    subtitle: 'About us',
    title: 'A Tradition of Excellence',
    description: `We don't just serve food here; we are a cherished neighborhood hangout that has been giving Edmonton everything we've got since the heart of its inception. At first, there was a single aim: to make a place where people can come together to eat good food, drink good drinks, and share beautiful memories. Still, we are carrying on that same tradition of excellence and having an honest enthusiasm for what we do.`,
  };

  return (
    <>
      <div id="tst-dynamic-banner" className="tst-dynamic-banner">
        <PageBanner
          pageTitle={'Our Corner of Edmonton'}
          description={
            'Discover the heart and soul of Edmonton at Tap Room Restaurant & Bar <br> a local favorite where great food and good times are always on the menu.'
          }
          breadTitle={'About us'}
        />
      </div>
      <div id="tst-dynamic-content" className="tst-dynamic-content">
        <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-0">
              <ScrollHint />

              <div className="row">
                <div className="col-lg-12">
                  {/* about text */}
                  <div className="tst-mb-60 text-center">
                    <div
                      className="tst-suptitle tst-suptitle-center tst-mb-15"
                      dangerouslySetInnerHTML={{ __html: Content.subtitle }}
                    />
                    <h3
                      className="tst-mb-30"
                      dangerouslySetInnerHTML={{ __html: Content.title }}
                    />
                    <p
                      className="tst-text tst-mb-30"
                      dangerouslySetInnerHTML={{ __html: Content.description }}
                    />

                    {AppData.social.map((item, key) => (
                      <a
                        href={item.link}
                        target="_blank"
                        title={item.title}
                        className="tst-icon-link"
                        key={`about-social-item-${key}`}
                      >
                        <i className={item.icon}></i>
                      </a>
                    ))}
                  </div>
                  {/* about text end */}
                  {/*  */}
                </div>
              </div>
              <AwardsSection />
              <PromoVideoSection />
              <Divider />
              <FeaturesSection />
              <Divider />
              {/* <TeamSection /> */}
              <Divider />
              <ScheduleSection />
              <Divider onlyBottom={0} />
              <CountersSection />
            </div>
          </div>
        </div>
        <CallToActionFourSection />
        <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-60">
              <TestimonialSlider />
              <Divider onlyBottom={0} />

              <Divider onlyBottom={0} />
              <SubscribeSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}
