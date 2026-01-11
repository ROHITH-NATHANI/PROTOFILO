import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../constants/data';

const Education = () => {
    return (
        <section id="education" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <GraduationCap className="text-primary" /> Education
                        </h3>
                        <div className="space-y-8">
                            {EDUCATION.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-surface/50 border border-white/5 rounded-xl p-6 relative pl-8 border-l-4 border-l-primary"
                                >
                                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                                    <p className="text-gray-400 mb-2">{edu.institution}</p>
                                    <p className="text-sm text-primary mb-4">{edu.year}</p>
                                    {edu.details && (
                                        <p className="text-sm text-gray-400 border-t border-white/5 pt-4 mt-4 flex items-start gap-2">
                                            <BookOpen size={16} className="mt-1 flex-shrink-0" />
                                            {edu.details}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <Award className="text-secondary" /> Certifications
                        </h3>
                        <div className="space-y-4">
                            {CERTIFICATIONS.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-surface/50 border border-white/5 rounded-xl p-6 flex items-center gap-4 hover:border-secondary/50 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                                        <Award size={20} />
                                    </div>
                                    <span className="font-medium text-gray-200">{cert}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
