import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/data';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <span className="text-sm text-gray-300">Available for innovative projects</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
                    >
                        {PERSONAL_INFO.role} passionate about building intelligent systems and scalable solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary hover:bg-blue-600 text-white font-medium transition-colors flex items-center gap-2"
                        >
                            View Work <ArrowRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-colors flex items-center gap-2"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
