import React from 'react';
import { projects } from '../../data/portfolio';
import { Eye, Code, ShoppingBag, Newspaper, Bot, Brain } from 'lucide-react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const iconMap = {
    eye: Eye,
    'chart-network': Code, // Mapping closest match
    'shopping-bag': ShoppingBag,
    newspaper: Newspaper,
    bot: Bot,
    brain: Brain
};

const Projects = () => {
    const chartData = {
        labels: ['Flutter', 'MERN', 'AI', 'React', 'Node', 'UI Design'],
        datasets: [{
            label: 'Proficiency',
            data: [95, 80, 65, 70, 75, 75],
            backgroundColor: 'rgba(255, 77, 0, 0.2)',
            borderColor: '#FF4D00',
            pointBackgroundColor: '#FF4D00',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#FF4D00',
            borderWidth: 2
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: { color: 'rgba(255,255,255,0.05)' },
                grid: { color: 'rgba(255,255,255,0.05)' },
                pointLabels: {
                    color: '#aaa',
                    font: { size: 10, weight: '600' }
                },
                ticks: { display: false, backdropColor: 'transparent' }
            }
        },
        plugins: { legend: { display: false } }
    };

    return (
        <section id="work" className="py-20">
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-6xl font-display font-bold text-white">Selected<br />Works</h2>
                <div className="text-right hidden md:block">
                    <p className="text-dark-muted">Curated experiments<br />and deployments.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(350px,auto)]">

                {projects.map((project, index) => {
                    const Icon = iconMap[project.icon] || Code;

                    // Custom spans for Bento Layout
                    const colSpan = project.id === 1 ? 'md:col-span-2' : '';

                    return (
                        <div key={project.id} className={`glass-card group cursor-pointer ${colSpan} ${project.bg || 'bg-neutral-900'}`}>
                            {/* Decorative Gradient for Featured Project */}
                            {project.id === 1 && (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0"></div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                </>
                            )}

                            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                {project.id === 1 ? (
                                    <div className="flex justify-between items-start">
                                        <span className="px-3 py-1 rounded-full border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-widest">Featured</span>
                                        <Icon className="text-4xl text-purple-500 opacity-50 group-hover:scale-110 transition-transform" size={40} />
                                    </div>
                                ) : (
                                    <Icon className={`text-4xl opacity-50 mb-8 ${project.color || 'text-white'}`} size={40} />
                                )}

                                <div>
                                    <h3 className={`text-2xl font-bold mb-2 ${project.id === 1 ? 'text-4xl group-hover:text-purple-400' : ''} transition-colors text-white`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-dark-muted text-sm md:text-base mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Stats Card (Skills Radar) */}
                <div className="glass-card md:col-span-2 p-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold mb-4 text-white">Technical<br />Balance</h3>
                        <p className="text-dark-muted text-sm mb-6">
                            My expertise is in creating cross-platform applications using Flutter and Dart, while also having a strong foundation in MERN stack development with AI.
                        </p>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-neon-orange">15+</span>
                                <span className="text-xs text-gray-500 uppercase">Repos</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-blue-500">1yr+</span>
                                <span className="text-xs text-gray-500 uppercase">Exp</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-[300px] relative">
                        <Radar data={chartData} options={chartOptions} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
