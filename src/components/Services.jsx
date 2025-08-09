import React from 'react';
import { Code, MonitorSmartphone, Brush } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code size={36} />,
      title: 'کدنویسی فرانت‌اند',
      desc: 'طراحی صفحات وب با استفاده از React, Tailwind, HTML و CSS به صورت کاملاً ریسپانسیو.',
    },
    {
      icon: <Brush size={36} />,
      title: 'طراحی رابط کاربری (UI)',
      desc: 'طراحی زیبا و کاربرپسند مطابق با نیاز شما، با تمرکز روی تجربه کاربری (UX).',
    },
    {
      icon: <MonitorSmartphone size={36} />,
      title: 'سازگاری با موبایل',
      desc: 'نمایش درست در تمامی دستگاه‌ها با اصول Mobile First.',
    },
  ];

  return (
    <section className="py-16  dark:bg-gray-900 my-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-emerald-600 dark:text-emerald-400">
          خدمات من
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center hover:shadow-lg transition-all"
            >
              <div className="text-emerald-500 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
