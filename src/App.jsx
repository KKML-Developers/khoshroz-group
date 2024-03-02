import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Loading from './components/Loading/Loading';
import HelmetComponent from './components/HelmetComponent';

const Home = lazy(() => import('./components/Home/Home'));
const Companies = lazy(() => import('./components/Companies/Companies'));
const Speech = lazy(() => import('./components/Speech/Speech'));
const AboutPage = lazy(() => import('./components/AboutPage/AboutPage'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Products = lazy(() => import('./components/Products/Products'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <>
        <Router>
          <Header />
          <main>
            <ScrollToTop />
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/speech" element={<Speech />} />
                <Route path="/products" element={<Products />} />
                <Route path="/companies" element={<Companies />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
                <Route path="/profile" element={<AboutPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </Router>
        <HelmetComponent
          title="Khoshroz Group of Company"
          description="Description of your page goes here"
          keywords="Khoshroz, Khoshroz Group, Publication, Bangladesh Business, Business Tycoon"
          author="Khoshroz Group Developers"
          ogTitle="Khoshroz Group of Company"
          ogDescription="Description of your page goes here"
          ogUrl="https://www.khoshrozltd.com"
          ogImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
          twitterTitle="Khoshroz Group of Company"
          twitterDescription="Description of your page goes here"
          twitterImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
        />
      </>
    </HelmetProvider>
  );
}

export default App;
