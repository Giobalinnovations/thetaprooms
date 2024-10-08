import React from 'react';
import OffersAndDeals from '../../_components/offers-and-deals/OffersAndDeals';

export const metadata = {
  title: 'Exclusive Offers and Deals - The Tap Rooms',
  description:
    "Don't miss out on these amazing deals for upcoming games at The Tap Rooms!",
};

export default function OffersAndDealsPage() {
  return (
    <div id="tst-dynamic-content" className="tst-dynamic-content">
      <div className="offers-and-deals-page">
        <h1>Exclusive Offers and Deals</h1>
        <p className="intro">
          Don't miss out on these amazing deals for upcoming games!
        </p>
        <OffersAndDeals />
      </div>
    </div>
  );
}
