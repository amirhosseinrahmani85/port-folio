import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-6 font-vazir"
        >
          درباره من
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg leading-8 text-gray-700 dark:text-gray-300 font-vazir"
        >
          من یک توسعه‌دهنده فرانت‌اند با بیش از ۱ سال تجربه در طراحی و ساخت وب‌سایت‌های ریسپانسیو، سریع و جذاب هستم.
          تمرکز من روی تجربه کاربری، عملکرد و طراحی مدرن هست. عاشق یادگیری تکنولوژی‌های جدیدم و همیشه دنبال رشد شخصی و حرفه‌ای هستم.
        </motion.p>
      </div>

      {/* مهارت‌ها / سوابق */}
      <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-3 gap-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md"
        >
          <Code className="mx-auto mb-4 text-emerald-700" size={32} />
          <h3 className="text-xl font-bold mb-2 font-vazir text-emerald-500">تجربه</h3>
          <p className="text-sm font-vazir">۱+ سال برنامه‌نویسی وب با React، Next.js، Tailwind</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md"
        >
          <Briefcase className="mx-auto mb-4 text-emerald-700" size={32} />
          <h3 className="text-xl font-bold mb-2 font-vazir text-emerald-500">موقعیت</h3>
          <p className="text-sm font-vazir">ایران، همکاری ریموت با شرکت‌های بین‌المللی</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md"
        >
          <GraduationCap className="mx-auto text-emerald-700 mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2 font-vazir text-emerald-500">تحصیلات</h3>
          <p className="text-sm font-vazir">کاردانی مهندسی نرم‌افزار، دانشگاه تبریز</p>
        </motion.div>
      </div>
    </section>
  );
}
