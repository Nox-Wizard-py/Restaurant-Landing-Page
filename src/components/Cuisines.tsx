import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Cuisines() {
  const cuisines = [
    { name: 'Hyderabadi Biryani', region: 'Hyderabad', img: 'https://c.ndtvimg.com/2020-12/gsb6apq_biryani_625x300_23_December_20.jpg' },
    { name: 'Lucknowi Biryani', region: 'Lucknow', img: 'https://www.veganricha.com/wp-content/uploads/2024/03/Baked-Lucknowi-Biryani-0147.jpg' },
    { name: 'Kolkata Biryani', region: 'Kolkata', img: 'https://thebruisedfrypan.wordpress.com/wp-content/uploads/2021/01/main-2.jpg' },
    { name: 'Malabar Biryani', region: 'Kerala', img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2017/02/thalassery-chicken-biryani-recipe.webp' },
    { name: 'Ambur Biryani', region: 'Tamil Nadu', img: 'https://www.whiskaffair.com/wp-content/uploads/2022/08/Ambur-Biryani-2-3.jpg' },
    { name: 'Mughlai Biryani', region: 'Delhi', img: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Mughlai_Biryani.webp' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      },
    }),
  };

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={targetRef} id="cuisines" className="py-24 bg-stone-950 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: `url('https://picsum.photos/seed/cuisine-bg/1920/1080?blur=4')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: y 
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center text-amber-400 mb-16">A Symphony of Flavors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cuisines.map((cuisine, index) => (
            <motion.div 
              key={index} 
              className="bg-stone-900/80 backdrop-blur-sm border border-stone-700 rounded-xl overflow-hidden shadow-2xl shadow-black/30 transform hover:scale-105 transition-transform duration-300 group"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="overflow-hidden">
                <img src={cuisine.img} alt={cuisine.name} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-stone-100">{cuisine.name}</h3>
                <p className="text-stone-400 mt-2">{cuisine.region}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
