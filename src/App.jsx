import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

const Home = lazy(() => import('./components/Home/Home'));
const Companies = lazy(() => import('./components/Companies/Companies'));
const About = lazy(() => import('./components/About/About'));

function App() {
  return (
    <HelmetProvider>
      <>
        <Router>
          <Header />
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </Router>
        <Helmet>
          <title>Your Page Title</title>
          <meta name="description" content="Description of your page goes here" />
          <meta name="keywords" content="your, keywords, here" />
          <meta name="author" content="Your Name" />
          <meta property="og:title" content="Your Page Title" />
          <meta property="og:description" content="Description of your page goes here" />
          <meta property="og:url" content="https://www.yourwebsite.com" />
          <meta property="og:image" content="https://www.yourwebsite.com/your-image.jpg" />
          <meta name="twitter:title" content="Your Page Title" />
          <meta name="twitter:description" content="Description of your page goes here" />
          <meta name="twitter:image" content="https://www.yourwebsite.com/your-image.jpg" />
        </Helmet>
      </>
    </HelmetProvider>
  );
}

export default App;
