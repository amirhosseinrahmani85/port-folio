import React from 'react';
// src/components/Footer.jsx
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-t-gray-300 dark:border-t-gray-700 text-gray-700 dark:text-gray-300 pt-16 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* درباره من */}
        <div>
          <h4 className="text-lg font-semibold mb-4">درباره من</h4>
          <p className="text-sm leading-6 text-justify">
            من یک توسعه‌دهنده فرانت‌اند هستم که با اشتیاق طراحی رابط‌های کاربری زیبا و کاربردی رو دنبال می‌کنم.
          </p>
        </div>

        {/* لینک‌های مفید */}
        <div>
          <h4 className="text-lg font-semibold mb-4">لینک‌ها</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-emerald-500">خانه</a></li>
            <li><a href="/about" className="hover:text-emerald-500">درباره من</a></li>
            <li><a href="/projects" className="hover:text-emerald-500">نمونه کارها</a></li>
            <li><a href="/contact" className="hover:text-emerald-500">تماس با من</a></li>
          </ul>
        </div>

        {/* خبرنامه */}
        <div>
          <h4 className="text-lg font-semibold mb-4">عضویت در خبرنامه</h4>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="ایمیل شما"
              className="px-4 py-2 rounded bg-white dark:bg-gray-800 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition"
            >
              عضویت
            </button>
          </form>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div>
          <h4 className="text-lg font-semibold mb-4">در ارتباط باشید</h4>
          <div className="flex gap-5 text-xl">
            <a href="https://github.com" target="_blank" className="hover:text-emerald-500"><FaGithub color='#7CB342' /></a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-emerald-500"><FaLinkedin color='#0288D1' /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-emerald-500"><FaInstagram color='#E53935' /></a>
            <a href="mailto:email@example.com" className="hover:text-emerald-500"><FaEnvelope color='#1976D2' /></a>
          </div>
        </div>
      </motion.div>
      <div className="text-center mt-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mx-auto text-emerald-600 hover:text-emerald-700 text-xl"
        >
          <FaArrowUp />
        </button>
      </div>

      {/* کپی‌رایت */}
      <div className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
        © {year} تمام حقوق محفوظ است | طراحی و توسعه توسط شما
      </div>

      {/* Scroll To Top */}

    </footer>
  );
}
