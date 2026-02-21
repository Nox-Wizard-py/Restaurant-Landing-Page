/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Cuisines from './components/Cuisines';
import OurStory from './components/OurStory';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import BiryaniBot from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-900">
      <Header />
      <main>
        <Hero />
        <OurStory />
        <Cuisines />
        <Menu />
        <Testimonials />
      </main>
      <Footer />
      <BiryaniBot />
      <BackToTopButton />
    </div>
  );
}
