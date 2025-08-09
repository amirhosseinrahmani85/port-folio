import React from 'react';
import { motion } from 'framer-motion';
import logo from '../image/Logo.png'
import Coffe_project from '../image/Coffe_project.png'
import Cripto_project from '../image/Cripto_project.png'
import Shoping_project from '../image/Shoping_project.png'
const projects = [
  {
    id: 1,
    title: 'فروشگاه اینترنتی',
    image: Shoping_project,
    description: 'یک فروشگاه کامل با React، Javascript  ساخته‌شده.',
    tech: ['React', 'Tailwind', 'Javascript', 'Node.js'],
    live: '#',
    github: 'https://github.com/yourname/store-project',
  },
  {
    id: 2,
    title: 'وبسایت صرافی ارز دیجیتال',
    image: Cripto_project,
    description: 'وبسایت شخصی برای نمایش نمونه‌کارها و رزومه.',
    tech: ['React', 'Tailwind', 'React-router-dom'],
    live: '#',
    github: 'https://github.com/amirhosseinrahmani85/Cripto_Gold',
  },
  {
    id: 3,
    title: 'وبسایت کافی شاپ',
    image: Coffe_project,
    description: 'وبسایتی برای فروش و ثبت سفارش قهوه',
    tech: ['React', 'Javascript', 'Tailwind'],
    live: '#',
    github: 'https://github.com/amirhosseinrahmani85/coffeshop-app',
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">نمونه‌کارهای من</h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy" 
              className="w-full h-56 object-cover rounded-t-lg"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-emerald-100 text-emerald-600 dark:bg-emerald-800 dark:text-emerald-100 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  مشاهده آنلاین
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
                >
                  مشاهده گیت‌هاب
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
