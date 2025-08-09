import React from 'react';

// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        تماس با من
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* فرم تماس */}
        <motion.form
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label className="block mb-1 text-sm font-medium">نام</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="نام شما"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">ایمیل</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">پیام</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="پیام شما"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded transition"
          >
            ارسال پیام
          </button>
        </motion.form>

        {/* اطلاعات تماس */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <Mail size={20}  color='#D81B60'/>
            <span>amirhosseinrahmani.1090@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <Phone size={20} color='#2E7D32' />
            <span>0914-520-2864</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <Linkedin size={20} color='#1565C0' />
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
             linkedin.com/in/amirhossein-rahmanii
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <Github size={20} />
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              github.com/amirhosseinrahmani85

            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
