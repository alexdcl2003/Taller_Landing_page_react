import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Program from './components/Program';
import Instructors from './components/Instructors';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Program />
        <Instructors />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;