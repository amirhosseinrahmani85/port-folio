import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SkillsSection from './SkillsSection';
import profile from '../image/profile.png'

export default function HearoSection() {
  return (
    <>
    <div className="hero min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 lg:py-24 container mx-auto">
      {/* متن معرفی */}
      <motion.div
        className="lg:w-1/2 text-center lg:text-right"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-600">
          سلام! من امیرحسین رحمانی هستم
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          من با React، Tailwind و ابزارهای مدرن سایت‌های سریع و جذاب می‌سازم.
        </p>

        <div className="flex gap-4 justify-center lg:justify-start">
          <Link
            to="/projects"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md transition"
          >
            دیدن نمونه‌کارها
          </Link>
          <Link
            to="/contact"
            className="border border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-gray-800 px-6 py-2 rounded-md transition"
          >
            تماس با من
          </Link>
        </div>
      </motion.div>

      {/* عکس یا گرافیک */}
      <motion.div
        className="lg:w-1/2 mb-12 lg:mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={profile}
          alt="profile"
          loading="lazy" 
          className="w-64 h-64 rounded-full mx-auto object-cover shadow-sm shadow-emerald-300"
        />
      </motion.div>
    </div>
    <div className="text-center mt-12 mb-9 py-5 border-b border-b-gray-300 dark:border-none">
  <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-4">
    "من کد می‌زنم تا تجربه کاربری بهتر بسازم"
  </p>
  <a
    href="/resume.pdf"
    download
    className="inline-block bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
  >
    دانلود رزومه
  </a>
</div>

      <SkillsSection/>
      </>
  );
}
