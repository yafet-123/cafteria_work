import "../styles/globals.css";
import { Topbar } from '../components/common/Topbar';
import { Navbar } from '../components/common/Navbar'
import { Footer } from "../components/common/Footer";
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from "next-auth/react"
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());
import ReactDOM from "react-dom";
import { CartProvider } from '../context/CartContext';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute="class">
        <CartProvider>
          <Navbar />
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
