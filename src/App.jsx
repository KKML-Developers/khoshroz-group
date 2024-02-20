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
