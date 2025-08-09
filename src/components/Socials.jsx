import React from 'react';
import { Instagram, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socials = [
  {
    name: 'اینستاگرام',
    icon: <Instagram size={28} color='#D32F2F' />,
    link: 'https://instagram.com/your_username',
  },
  {
    name: 'گیت‌هاب',
    icon: <Github size={28} color='#1976D2' />,
    link: 'https://github.com/your_username',
  },
  {
    name: 'لینکدین',
    icon: <Linkedin size={28} color='#1976D2' />,
    link: 'https://linkedin.com/in/your_username',
  },
  {
    name: 'ایمیل',
    icon: <Mail size={28} color='#E91E63' />,
    link: 'mailto:amirhossynrahmani.1385@gmail.com',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

export default function Socials() {
  return (
    <section className="py-24 mb-12 bg-gray-50 dark:bg-gray-900 text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-extrabold mb-10 text-emerald-600 dark:text-emerald-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          منو تو شبکه‌های اجتماعی دنبال کن
        </motion.h2>

        <div className="flex justify-center gap-6 flex-wrap">
          {socials.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-emerald-500 transition"
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              {item.icon}
              <span className="text-base">{item.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
