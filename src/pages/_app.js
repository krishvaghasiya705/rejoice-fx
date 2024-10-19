import '../styles/globals.scss';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
