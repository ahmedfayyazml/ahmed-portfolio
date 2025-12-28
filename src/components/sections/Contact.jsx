import React, { useState } from 'react';
import { Sparkles, Bolt, Github, Mail, Send } from 'lucide-react';

const Contact = () => {
    const [industry, setIndustry] = useState('');
    const [aiOutput, setAiOutput] = useState(null);
    const [loading, setLoading] = useState(false);
    const [draftTopic, setDraftTopic] = useState('');
    const [draftResult, setDraftResult] = useState('');
    const [drafting, setDrafting] = useState(false);

    const generateProjectIdea = () => {
        if (!industry) return;
        setLoading(true);
        setAiOutput(null);

        // Simulation of AI generation time
        setTimeout(() => {
            setAiOutput({
                title: `Quantum ${industry} Nexus`,
                description: `A decentralized ${industry.toLowerCase()} platform utilizing Federated Learning to optimize real-time data streams across edge devices.`,
                tags: ['Federated Learning', 'Edge Computing', 'React']
            });
            setLoading(false);
        }, 2000);
    };

    const draftMessage = () => {
        if (!draftTopic) return;
        setDrafting(true);

        setTimeout(() => {
            setDraftResult(`Hi Ahmed, regarding ${draftTopic}: I noticed your background in ML and Web. Your availability in Oct 2025 aligns with our timeline. Let's discuss collaboration.`);
            setDrafting(false);
        }, 1500);
    };

    return (
        <>
            {/* ================= GEMINI AI LAB ================= */}
            <section id="ai-lab" className="py-32 relative">
                {/* Decorative Border */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <span className="inline-block px-3 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
                            <Sparkles size={12} className="inline mr-2" /> Gemini Assist 2.5
                        </span>
                        <h2 className="text-5xl font-display font-bold mb-6 text-white">The AI<br />Playground.</h2>
                        <p className="text-dark-muted text-lg leading-relaxed mb-8">
                            I don't just use AI; I integrate it. Use this live demo to generate a custom project concept that leverages my specific Tech Stack.
                        </p>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h4 className="font-bold mb-4 text-white">How it works:</h4>
                            <ol className="space-y-3 text-sm text-gray-400 list-decimal list-inside">
                                <li>Enter an industry (e.g., "Space Travel").</li>
                                <li>Gemini analyzes my resume.</li>
                                <li>It invents a valid ML+Web project idea.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="glass-card p-8 md:p-12 h-full bg-gradient-to-b from-white/5 to-transparent">
                            <div className="flex gap-4 mb-8">
                                <input
                                    type="text"
                                    value={industry}
                                    onChange={(e) => setIndustry(e.target.value)}
                                    placeholder="Enter a topic..."
                                    className="dark-input flex-1 p-4 rounded-xl text-lg"
                                />
                                <button
                                    onClick={generateProjectIdea}
                                    disabled={loading}
                                    className={`bg-purple-600 hover:bg-purple-700 text-white px-8 rounded-xl font-bold transition-colors ${loading ? 'opacity-50' : ''}`}
                                >
                                    {loading ? <i className="fas fa-circle-notch fa-spin"></i> : <Bolt />}
                                </button>
                            </div>

                            {/* Result Area */}
                            {aiOutput && (
                                <div className="animate-fade-in-up border-l-2 border-purple-500 pl-6 py-2">
                                    <h3 className="text-2xl font-bold text-white mb-2">{aiOutput.title}</h3>
                                    <p className="text-gray-400 leading-relaxed mb-4">{aiOutput.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {aiOutput.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Loading State */}
                            {loading && (
                                <div className="flex flex-col items-center justify-center py-12 opacity-50">
                                    <span className="text-xs uppercase tracking-widest text-purple-400">Consulting Neural Net...</span>
                                </div>
                            )}

                            {/* Placeholder */}
                            {!loading && !aiOutput && (
                                <div className="flex flex-col items-center justify-center py-12 opacity-20 text-center text-white">
                                    <i className="fas fa-microchip text-6xl mb-4"></i>
                                    <p>Waiting for input data...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CONTACT & FOOTER ================= */}
            <section id="contact" className="py-20 mb-20">
                <div className="glass-card p-8 md:p-20 overflow-hidden relative">
                    {/* Glowing Orb Background */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-orange rounded-full blur-[150px] opacity-[0.15] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                        <div>
                            <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tighter text-white">Let's<br />Talk.</h2>
                            <div className="space-y-6 text-lg">
                                <a href="mailto:ahmedfayyaz.ml@gmail.com" className="block text-gray-400 hover:text-white transition-colors border-b border-white/10 pb-2 w-fit">
                                    ahmedfayyaz.ml@gmail.com
                                </a>
                                <p className="text-gray-500 text-sm mt-8">
                                    Shipping from ❤️ to 🌍 <br />
                                    Available 24/7
                                </p>
                            </div>
                        </div>

                        {/* Gemini Message Drafter */}
                        <div className="bg-black/40 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-white">Quick Message</h3>
                                <span className="text-xs bg-neon-orange/20 text-neon-orange px-2 py-1 rounded border border-neon-orange/30">AI Enabled</span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Subject / Context</label>
                                    <input
                                        type="text"
                                        value={draftTopic}
                                        onChange={(e) => setDraftTopic(e.target.value)}
                                        placeholder="e.g. Freelance Opportunity"
                                        className="dark-input w-full p-3 rounded-lg text-sm"
                                    />
                                </div>

                                <button
                                    onClick={draftMessage}
                                    disabled={drafting}
                                    className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-neon-orange hover:text-white transition-colors"
                                >
                                    {drafting ? "Consulting AI..." : "Draft with Gemini"}
                                </button>

                                {draftResult && (
                                    <textarea
                                        value={draftResult}
                                        readOnly
                                        className="w-full h-32 bg-transparent border border-white/10 rounded-lg p-3 text-gray-300 text-sm focus:outline-none resize-none mt-4 animate-fade-in-up"
                                    ></textarea>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 pt-8 border-t border-white/5 flex justify-between text-xs text-gray-600 uppercase tracking-widest">
                        <p>&copy; 2025 Ahmed Fayyaz</p>
                        <p>Designed in Dark Matter</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
