import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './ui/Navbar';

const Layout = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="relative min-h-screen font-sans text-dark-text bg-dark-bg selection:bg-neon-orange selection:text-white">

            {/* Ambient Background Glows */}
            <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-neon-orange rounded-full blur-[150px] opacity-[0.08] pointer-events-none animate-pulse-glow"></div>
            <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-neon-blue rounded-full blur-[180px] opacity-[0.06] pointer-events-none animate-pulse-glow animation-delay-2000"></div>

            <Navbar />

            <main className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </main>

        </div>
    );
};

export default Layout;
