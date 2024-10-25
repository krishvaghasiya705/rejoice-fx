import '../styles/globals.scss';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';

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