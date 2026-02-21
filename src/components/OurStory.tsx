import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section id="story" className="py-24 bg-stone-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img 
              src="https://b.zmtcdn.com/data/pictures/chains/2/18363082/e559b2aee1b89bd6c7e1cef2a5290173.jpg" 
              alt="Behrouz Biryani Interior" 
              className="rounded-xl shadow-2xl shadow-black/40 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="text-5xl font-bold text-amber-400 mb-6">Our Royal Legacy</h2>
            <p className="text-stone-300 mb-4 text-lg leading-relaxed">
              The story of Behrouz is a legend of a kingdom, a conquest, and a secret recipe. It is a tale of a 2000-year-old tradition, preserved and perfected through generations.
            </p>
            <p className="text-stone-300 text-lg leading-relaxed">
              We bring you the authentic flavors that once graced the tables of royalty. Each grain of rice, each spice, and each ingredient is carefully selected to create a biryani that is not just a meal, but an experience of royal indulgence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
