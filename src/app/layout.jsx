import { Josefin_Sans, Playfair_Display } from 'next/font/google';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
const josefin_sans = Josefin_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-josefin_sans',
  display: 'swap',
  adjustFontFallback: false,
});

const playfair_display = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair_display',
  display: 'swap',
  adjustFontFallback: false,
});

import './globals.css';

import '@styles/css/plugins/bootstrap.min.css';
import '@styles/css/plugins/swiper.min.css';
import '@styles/css/plugins/font-awesome.min.css';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import '@styles/scss/style.scss';

import AppData from '@data/app.json';
import Script from 'next/script';

export const metadata = {
  title: 'The Tap Rooms in Edmonton | bars near me Edmonton',
  description: `Welcome to the Tap Rooms, its known as one of the best bars & restaurant in Edmonton. it’s a space where stories are shared, memories are made, and friendships flourish. Join us for a engaging conversation, and a taste of Smiths Falls hospitality.`,

  keywords: `The Tap Rooms, bars near me Edmonton, bar in Edmonton, bars in edmonton Canada, best bars Edmonton, edmonton bars near me`,

  metadataBase: new URL('https://www.thetaprooms.com'),
  alternates: {
    canonical: '/',
  },

  verification: {
    google: '1i6kn0PqME4qprlZRoCLUz7nC9rPG7sAFIjKdFdKUcs',
  },
};

const Layouts = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${josefin_sans.variable} ${playfair_display.variable}`}
    >
      <body
        style={{
          backgroundImage: 'url(' + AppData.settings.bgImage + ')',
        }}
      >
        <div className="tst-main-overlay"></div>

        {/* app wrapper */}
        <div id="tst-app" className="tst-app">
          {children}
        </div>
        {/*  */}
        {/* app wrapper end */}
        <GoogleTagManager gtmId="G-YMWQ5G8XMV" />
        <GoogleAnalytics gaId="G-YMWQ5G8XMV" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'BarOrPub',
                name: 'The Tap Rooms',
                image: 'https://www.thetaprooms.com/img/logo-sm.png',
                '@id': '',
                url: 'https://www.thetaprooms.com/',
                telephone: '(587) 489-3520',
                menu: 'https://www.thetaprooms.com/menu',
                servesCuisine: '',
                acceptsReservations: 'true',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '10184 104 St NW',
                  addressLocality: 'Edmonton',
                  addressRegion: 'AB',
                  postalCode: 'AB T5J 1A7',
                  addressCountry: 'CA',
                },
                openingHoursSpecification: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                  ],
                  opens: '11:00',
                  closes: '23:00',
                },
                sameAs: 'https://www.instagram.com/thetaprooms/',
              },
            ]),
          }}
        />
      </body>
    </html>
  );
};
export default Layouts;
