import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center pt-20 relative">

            {/* Availability Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
            >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                        Shipping worldwide <i className="fas fa-arrow-right mx-1 text-neon-orange"></i> PK (24/7)
                    </span>
                </div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-bold mb-8 text-white display-text"
            >
                Data Driven <br />
                <span className="gradient-text-accent">Design.</span>
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-dark-muted leading-relaxed max-w-2xl"
                >
                    I am Ahmed Fayyaz. A multidisciplinary <strong className="text-white">Flutter Dev</strong> blending predictive algorithms with immersive <strong className="text-white">MERN Expertise & AI</strong>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex gap-4"
                >
                    <a href="#work" className="group px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neon-orange hover:text-white transition-all flex items-center gap-2">
                        View Projects <ArrowRight size={18} className="transform group-hover:-rotate-45 transition-transform" />
                    </a>
                    <a href="https://github.com/ahmedfayyazml" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/20 rounded-full font-bold hover:bg-white hover:text-black transition-all flex items-center gap-2">
                        <Github size={18} /> GitHub
                    </a>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
