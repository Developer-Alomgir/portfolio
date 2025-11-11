import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <motion.div whileHover={{ scale: 1.03 }} className="rounded overflow-hidden shadow-lg border">
        <div style={{height: 220}} className="w-full bg-gray-800 flex items-center justify-center">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
        </div>
        <div className="p-4 bg-gray-900 text-white">
          <h3 className="font-semibold">{project.title}</h3>
        </div>
      </motion.div>
    </a>
  );
}
