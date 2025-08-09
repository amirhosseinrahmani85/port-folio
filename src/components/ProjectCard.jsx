import React from 'react';

export default function ProjectCard({ title, description, techs, demo, github }) {
  return (
    <div className="border rounded-xl p-4 bg-gray-100 dark:bg-gray-800 shadow-md text-right">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-3">{description}</p>
      <div className="mb-3">
        {techs.map((tech, idx) => (
          <span key={idx} className="inline-block bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded ml-2">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {demo && <a href={demo} target="_blank" className="text-blue-600 dark:text-blue-400 underline">دمو</a>}
        {github && <a href={github} target="_blank" className="text-blue-600 dark:text-blue-400 underline">GitHub</a>}
      </div>
    </div>
  );
}