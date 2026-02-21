export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-950 py-16">
      <div className="container mx-auto px-4 text-center text-stone-400">
        <h2 className="text-4xl font-bold text-amber-400 mb-8">Get In Touch</h2>
        <div className="max-w-xl mx-auto">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-stone-800/50 border border-stone-700 rounded-lg py-3 px-4 text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-stone-800/50 border border-stone-700 rounded-lg py-3 px-4 text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-stone-800/50 border border-stone-700 rounded-lg py-3 px-4 text-stone-200 placeholder-stone-500 mb-6 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
            ></textarea>
            <button
              type="submit"
              className="bg-amber-400 text-stone-900 font-bold py-3 px-8 rounded-full hover:bg-amber-300 transition-colors transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-16 border-t border-stone-800 pt-8">
          <p>&copy; {new Date().getFullYear()} Behrouz Biryani. All Rights Reserved.</p>
          <p className="mt-2">Crafted with ❤️ for the love of Biryani.</p>
          <p className="mt-2">To create the website, Spell was casted by <a href="https://github.com/Nox-Wizard-py">Nox Wizard</a></p>
        </div>
      </div>
    </footer>
  );
}
