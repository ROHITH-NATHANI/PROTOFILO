import { motion } from 'framer-motion';
import { SKILLS } from '../constants/data';

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-surface/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <skill.icon size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300 border border-white/5"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
