import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Royal Hyderabadi Biryani', description: 'A regal dish with succulent chicken, long-grain basmati rice, and a secret blend of spices.', price: '₹450' },
  { name: 'Dum Gosht Lucknowi Biryani', description: 'Tender mutton pieces slow-cooked in a sealed pot with fragrant rice and aromatic spices.', price: '₹550' },
  { name: 'Paneer Subz Biryani', description: 'A vegetarian delight with fresh cottage cheese, seasonal vegetables, and flavorful basmati rice.', price: '₹380' },
  { name: 'Murgh Makhani Biryani', description: 'Creamy butter chicken layered with fragrant biryani rice for a rich, indulgent experience.', price: '₹480' },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-cover bg-fixed bg-center" style={{backgroundImage: `url('https://picsum.photos/seed/spices/1920/1080?blur=3')`}}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center text-amber-400 mb-16">Our Royal Menu</h2>
        <div className="max-w-3xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="mb-8 p-6 bg-stone-900/50 backdrop-blur-md rounded-xl border border-stone-700 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-amber-400/50 hover:shadow-amber-400/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-stone-100">{item.name}</h3>
                <p className="text-2xl font-bold text-amber-400">{item.price}</p>
              </div>
              <p className="text-stone-300 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
