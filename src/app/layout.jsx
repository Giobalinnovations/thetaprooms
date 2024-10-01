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

export const metadata = {
  title: 'The Tap Rooms in Edmonton | bars near me Edmonton',
  description: `Welcome to the Tap Rooms, its known as one of the best bars & restaurant in Edmonton. it’s a space where stories are shared, memories are made, and friendships flourish. Join us for a engaging conversation, and a taste of Smiths Falls hospitality.`,

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
      </body>
    </html>
  );
};
export default Layouts;
