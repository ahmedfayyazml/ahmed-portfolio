import React from 'react';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', href: '#home', active: false },
        { name: 'Work', href: '#work', active: false },
        { name: 'AI', href: '#ai-lab', active: false, icon: Sparkles, color: 'text-purple-400' },
        { name: 'Contact', href: '#contact', active: false, cta: true },
    ];

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="glass-card !rounded-full p-2 flex items-center gap-1 !bg-black/80 !border-white/10 shadow-2xl">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={`
              flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${link.cta
                                ? 'bg-white text-black font-bold hover:bg-neon-orange hover:text-white'
                                : 'hover:bg-white/10 text-white/80 hover:text-white'
                            }
              ${link.color || ''}
            `}
                    >
                        {link.icon && <link.icon size={14} className="mr-1" />}
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
