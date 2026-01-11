
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/data';

const Contact = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-surface pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
                        <p className="text-gray-400 mb-8 max-w-md">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-4">
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                    <Mail size={20} />
                                </div>
                                {PERSONAL_INFO.email}
                            </a>
                            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                    <Phone size={20} />
                                </div>
                                {PERSONAL_INFO.phone}
                            </a>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                    <MapPin size={20} />
                                </div>
                                {PERSONAL_INFO.location}
                            </div>
                        </div>
                    </div>

                    <div className="bg-background/50 rounded-2xl p-8 border border-white/5">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your message..." />
                            </div>
                            <button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">NR.</span>
                    </div>
                    <p className="text-gray-500 text-sm">
                        © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
