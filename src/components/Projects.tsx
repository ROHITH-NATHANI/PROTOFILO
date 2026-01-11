import { motion } from 'framer-motion';

import { PROJECTS, EXPERIENCES } from '../constants/data';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-surface/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Experience Section */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </motion.div>

                    <div className="space-y-8">
                        {EXPERIENCES.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-background border border-white/5 rounded-xl p-6 md:p-8"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-primary">{exp.company}</p>
                                    </div>
                                    <span className="inline-block mt-2 md:mt-0 px-3 py-1 text-xs font-semibold bg-white/5 rounded-full text-gray-400">
                                        {exp.type}
                                    </span>
                                </div>
                                <p className="text-gray-400 leading-relaxed">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>


                {/* Projects Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-background border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
                        >
                            <div className="p-6 md:p-8">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium bg-white/5 rounded-full text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {project.links.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.url}
                                            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                        >
                                            <link.icon size={16} />
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
