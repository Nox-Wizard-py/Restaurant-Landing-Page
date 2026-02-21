import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={targetRef} id="hero" className="h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://product-assets.faasos.io/eatsure/production/murgh-makhani-biryani.jpeg')`,
          y: y,
        }}
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div 
        style={{ opacity, scale }}
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tight">The Royal Art of Biryani</h2>
        <p className="text-xl md:text-2xl text-stone-300 mt-4 max-w-2xl mx-auto">Experience the taste of royalty, crafted with passion and delivered to your doorstep.</p>
      </motion.div>
    </section>
  );
}
