import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGitAlt } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact size={30} color='#2196F3' /> },
  { name: 'HTML5', icon: <FaHtml5 size={30} color='#F4511E' /> },
  { name: 'CSS3', icon: <FaCss3Alt size={30}  color='#1E88E5'/> },
  { name: 'JavaScript', icon: <FaJs size={30} color='#FDD835' /> },
  { name: 'Node.js', icon: <FaNode size={30}  color='#7CB342'/> },
  { name: 'Git', icon: <FaGitAlt size={30} color='#F4511E' /> },
];

export default function SkillsSection() {
  return (
    <>
    <section className="py-20 bg-gray-100  dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h3
          className="text-2xl font-bold text-center mb-8 text-gray-700 dark:text-gray-100 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          مهارت‌های من
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center text-gray-700 dark:text-gray-200">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center cursor-pointer gap-2 hover:scale-110 transition"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {skill.icon}
              <span className="text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <hr className='text-emerald-600 font-bold size-1' />


    </>
  );
}
