import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import HelmetComponent from './components/HelmetComponent'; // Import the HelmetComponent

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
        <HelmetComponent
          title="Your Page Title"
          description="Description of your page goes here"
          keywords="your, keywords, here"
          author="Your Name"
          ogTitle="Your Page Title"
          ogDescription="Description of your page goes here"
          ogUrl="https://www.yourwebsite.com"
          ogImage="https://www.yourwebsite.com/your-image.jpg"
          twitterTitle="Your Page Title"
          twitterDescription="Description of your page goes here"
          twitterImage="https://www.yourwebsite.com/your-image.jpg"
        />
      </>
    </HelmetProvider>
  );
}

export default App;
