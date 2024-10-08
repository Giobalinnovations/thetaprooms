import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import { getSortedPostsData } from '@library/posts';

import AppData from '@data/app.json';

import ScrollHint from '@layouts/scroll-hint/Index';
import Divider from '@layouts/divider/Index';

import AboutSection from '@components/sections/About';
import FeaturesSection from '@components/sections/Features';
import ScheduleSection from '@components/sections/Schedule';
import CountersSection from '@components/sections/Counters';
import CallToActionSection from '@components/sections/CallToAction';
import LatestPostsSection from '@components/sections/LatestPosts';
import SubscribeSection from '@components/sections/Subscribe';

const HeroSlider = dynamic(() => import('@components/sliders/Hero'), {
  ssr: false,
});
const TestimonialSlider = dynamic(
  () => import('@components/sliders/Testimonial'),
  { ssr: false }
);

export const metadata = {
  title: `The Tap Rooms in Edmonton | bars near me Edmonton`,
  description: `Welcome to the Tap Rooms, its known as one of the best bars & restaurant in Edmonton. it’s a space where stories are shared, memories are made, and friendships flourish. Join us for a engaging conversation, and a taste of Smiths Falls hospitality.`,

  keywords: `The Tap Rooms, bars near me Edmonton, bar in Edmonton, bars in edmonton Canada, best bars Edmonton, edmonton bars near me`,

  metadataBase: new URL('https://www.thetaprooms.com'),
  alternates: {
    canonical: '/',
  },
};

async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <div id="tst-dynamic-banner" className="tst-dynamic-banner">
        <HeroSlider />
      </div>
      <div id="tst-dynamic-content" className="tst-dynamic-content">
        <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-0">
              <ScrollHint />
              <AboutSection />
              <Divider />
              <FeaturesSection />
              <Divider />
              <ScheduleSection />
              <Divider onlyBottom={0} />
              <CountersSection />
            </div>
          </div>
        </div>
        {/* TODO: Handle issue remove isCta */}
        {/* <CallToActionSection isCta={false} /> */}
        <CallToActionSection />
        <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-60">
              <TestimonialSlider />
              <Divider onlyBottom={0} />
              <Suspense fallback={<div>Loading...</div>}>
                <LatestPostsSection posts={posts} />
              </Suspense>
              <Divider onlyBottom={0} />
              <SubscribeSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}
