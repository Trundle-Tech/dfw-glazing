'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {!isExpanded ? (
            <motion.button
              onClick={() => setIsExpanded(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#339900] hover:bg-[#2d8500] text-white rounded-full p-4 shadow-2xl flex items-center gap-2 group"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="font-bold text-lg pr-2 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300">
                Get Quote
              </span>
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl shadow-2xl p-6 w-80 border-2 border-[#339900]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Get Started</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Ready to discuss your commercial glass project?
              </p>

              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button asChild className="w-full bg-[#339900] hover:bg-[#2d8500] shadow-md hover:shadow-lg transition-all text-white">
                    <Link href="/contact">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Request a Quote
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#339900] text-[#339900] hover:bg-[#339900] hover:text-white shadow-sm hover:shadow-md transition-all"
                  >
                    <a href="tel:8176969500">
                      <Phone className="w-4 h-4 mr-2" />
                      Call: 817-696-9500
                    </a>
                  </Button>
                </motion.div>
              </div>

              <div className="mt-4 pt-4 border-t text-center">
                <p className="text-xs text-gray-500">
                  Average response time: <span className="font-bold text-[#339900]">1 hour</span>
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
