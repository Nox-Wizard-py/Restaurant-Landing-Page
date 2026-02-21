import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const initChat = () => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;
    const ai = new GoogleGenAI({ apiKey });
    return ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are 'Biryani Bot', a friendly and knowledgeable assistant for Behrouz Biryani. Your goal is to help users choose the perfect biryani. Ask them about their mood (e.g., adventurous, comfort food), the occasion (e.g., a party, a quiet dinner), and their taste preferences (e.g., spicy, mild, vegetarian, chicken, mutton). Based on their answers, recommend a biryani from the menu (Royal Hyderabadi Biryani, Dum Gosht Lucknowi Biryani, Paneer Subz Biryani, Murgh Makhani Biryani). Keep your responses concise, engaging, and in character.`,
      },
    });
  } catch (e) {
    console.error('Failed to initialize AI Chat:', e);
    return null;
  }
};

const BiryaniBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = initChat();
    }
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { sender: 'bot', text: "Greetings! I am the Biryani Bot. How can I assist you in finding the perfect royal biryani for you today?" }
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    if (!chatRef.current) {
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', text: 'AI configuration is missing. Please provide a GEMINI_API_KEY.' }]);
        setIsLoading(false);
      }, 500);
      return;
    }

    try {
      let streamResponse = await chatRef.current.sendMessageStream({ message: input });
      let botResponseText = '';
      setMessages(prev => [...prev, { sender: 'bot', text: '' }]);

      for await (const chunk of streamResponse) {
        const c = chunk as GenerateContentResponse;
        botResponseText += c.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = botResponseText;
          return newMessages;
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { sender: 'bot', text: 'My apologies, I seem to be having some trouble connecting. Please try again shortly.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-24 right-8 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-amber-500 text-white p-4 rounded-full shadow-xl hover:bg-amber-600 hover:scale-110 transition-all duration-300"
          whileHover={{ rotate: 20 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open Biryani Bot"
        >
          <MessageSquare size={28} />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
            className="fixed bottom-24 right-8 mb-20 w-80 h-[28rem] bg-stone-900/80 backdrop-blur-lg border border-stone-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-40"
          >
            <header className="p-4 bg-stone-800/50 flex justify-between items-center border-b border-stone-700">
              <div className="flex items-center gap-3">
                <Bot className="text-amber-400" size={24} />
                <h3 className="font-bold text-lg text-stone-100">Biryani Bot</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white">
                <X size={20} />
              </button>
            </header>

            <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs rounded-lg px-4 py-2 ${msg.sender === 'user' ? 'bg-amber-500 text-white' : 'bg-stone-700 text-stone-200'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start gap-2">
                  <div className="max-w-xs rounded-lg px-4 py-2 bg-stone-700 text-stone-200">
                    <motion.div className="flex space-x-1">
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }} className="w-2 h-2 bg-stone-400 rounded-full" />
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, delay: 0.1, repeat: Infinity, ease: "easeInOut" }} className="w-2 h-2 bg-stone-400 rounded-full" />
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, ease: "easeInOut" }} className="w-2 h-2 bg-stone-400 rounded-full" />
                    </motion.div>
                  </div>
                </div>
              )}
            </div>

            <footer className="p-4 bg-stone-800/50 border-t border-stone-700">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me about biryani..."
                  className="w-full bg-stone-700/50 border border-stone-600 rounded-lg py-2 px-3 text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                />
                <button onClick={handleSend} disabled={isLoading} className="bg-amber-500 text-white p-2 rounded-lg hover:bg-amber-600 disabled:bg-stone-600 transition-colors">
                  <Send size={20} />
                </button>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BiryaniBot;
