import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        scrolled ? 'bg-stone-950/80 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero"><Logo /></a>
        <nav>
          <ul className="flex space-x-8 text-stone-200">
            <li><a href="#hero" className="hover:text-amber-400 transition-colors font-medium">Home</a></li>
            <li><a href="#story" className="hover:text-amber-400 transition-colors font-medium">Our Story</a></li>
            <li><a href="#cuisines" className="hover:text-amber-400 transition-colors font-medium">Cuisines</a></li>
            <li><a href="#menu" className="hover:text-amber-400 transition-colors font-medium">Menu</a></li>
            <li><a href="#testimonials" className="hover:text-amber-400 transition-colors font-medium">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-amber-400 transition-colors font-medium">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
