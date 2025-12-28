import React from 'react';
import { skills } from '../../data/portfolio';

const Skills = () => {
    // Duplicate skills to ensure seamless loop
    const marqueeSkills = [...skills, ...skills, ...skills];

    return (
        <section className="py-12 border-y border-white/5 bg-black/50 overflow-hidden mb-32">
            <div className="whitespace-nowrap animate-marquee flex gap-16 items-center">
                {marqueeSkills.map((skill, index) => (
                    <React.Fragment key={index}>
                        <span className={`text-4xl font-display font-bold ${index % 2 === 0 ? 'text-white' : 'text-transparent stroke-text opacity-30'}`}>
                            {skill}
                        </span>
                        <i className="fas fa-asterisk text-neon-orange text-xl"></i>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Skills;
