import React from 'react';
import dynamic from 'next/dynamic';

import AppData from '@data/app.json';
import MenuData from '@data/menu.json';
import ProductsData from '@data/products.json';

import ScrollHint from '@layouts/scroll-hint/Index';

import PageBanner from '@components/PageBanner';
import CallToActionTwoSection from '@components/sections/CallToActionTwo';

const MenuFiltered = dynamic(() => import('@components/menu/MenuFiltered'), {
  ssr: false,
});
const ProductsSlider = dynamic(() => import('@components/sliders/Products'), {
  ssr: false,
});

export const metadata = {
  title: `Menu – The Tap Rooms | Edmonton Cocktail & Wine Bars`,
  description: `Explore The Tap Room's menu with Traditional Dishes. You can enjoy the Shareables, burger, sandwich, cheese cakes, cocktails & wines at the same place.`,

  metadataBase: new URL('https://www.thetaprooms.com'),
  alternates: {
    canonical: '/menu',
  },
};

const Menu1 = () => {
  return (
    <>
      <div id="tst-dynamic-banner" className="tst-dynamic-banner">
        <PageBanner
          pageTitle={'Savor Every Bite, Sip, and Moment'}
          description={`Get ready to enjoy a menu that's crafted to please every palate, every time you visit.<br>Delight in dishes inspired by tradition but perfected for modern tastes.`}
          breadTitle={'Menu'}
        />
      </div>

      <div id="tst-dynamic-content" className="tst-dynamic-content">
        <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-0">
              <ScrollHint />

              <MenuFiltered categories={MenuData.categories} />
            </div>
          </div>
        </div>
        <CallToActionTwoSection />
        {/* <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-60">
              <ProductsSlider
                heading={{
                  subtitle: 'Menu',
                  title: 'Specials That Delight Every Day',
                  description:
                    'Come by today and see what’s cooking—you won’t want to miss out on these mouthwatering deals.',
                }}
                items={ProductsData.collection.special}
                button={{
                  link: '#',
                  label: 'Go to online store',
                }}
              />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default Menu1;
