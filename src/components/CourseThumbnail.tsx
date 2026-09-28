import React from 'react';

interface CourseThumbnailProps {
  courseId: string;
  className?: string;
  showOverlayTitle?: boolean;
}

export const CourseThumbnail: React.FC<CourseThumbnailProps> = ({
  courseId,
  className = 'w-full h-48',
  showOverlayTitle = false,
}) => {
  const renderVisual = () => {
    switch (courseId) {
      // 1. How to Start a Small Business (Purple & Yellow aesthetic with glowing holographic bar charts & golden rising arrow)
      case 'course-1':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#190b2b] via-[#11061f] to-[#090212] flex items-center justify-center overflow-hidden">
            {/* Ambient purple & yellow backlight */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-600/25 blur-3xl rounded-full" />
            <div className="absolute -top-10 left-10 w-32 h-32 bg-yellow-400/15 blur-2xl rounded-full" />
            
            {/* Perspective grid base */}
            <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 400 250" preserveAspectRatio="none">
              <defs>
                <linearGradient id="grid-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.05" />
                </linearGradient>
                <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Perspective grid lines */}
              <line x1="20" y1="210" x2="380" y2="210" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.5" />
              <line x1="40" y1="225" x2="360" y2="225" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="60" y1="180" x2="200" y2="60" stroke="#a855f7" strokeWidth="0.75" strokeDasharray="3 3" strokeOpacity="0.25" />
              <line x1="340" y1="180" x2="200" y2="60" stroke="#a855f7" strokeWidth="0.75" strokeDasharray="3 3" strokeOpacity="0.25" />
              
              {/* Tablet base */}
              <rect x="70" y="190" width="260" height="35" rx="8" fill="#1e1035" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.6" />
              
              {/* Glowing Holographic Bar Chart Columns */}
              <rect x="110" y="155" width="22" height="35" rx="2" fill="url(#grid-grad-1)" stroke="#c084fc" strokeWidth="0.8" />
              <rect x="150" y="130" width="24" height="60" rx="2" fill="url(#grid-grad-1)" stroke="#c084fc" strokeWidth="0.8" />
              <rect x="195" y="105" width="26" height="85" rx="2" fill="url(#grid-grad-1)" stroke="#c084fc" strokeWidth="0.8" />
              <rect x="245" y="70" width="28" height="120" rx="2" fill="url(#grid-grad-1)" stroke="#c084fc" strokeWidth="0.8" />
              <rect x="295" y="55" width="28" height="135" rx="2" fill="url(#grid-grad-1)" stroke="#c084fc" strokeWidth="0.8" />
              
              {/* Sparkling data particles */}
              <circle cx="120" cy="145" r="2" fill="#facc15" opacity="0.9" />
              <circle cx="162" cy="115" r="2.5" fill="#e879f9" opacity="0.9" />
              <circle cx="210" cy="90" r="2" fill="#facc15" opacity="0.9" />
              <circle cx="260" cy="55" r="3" fill="#e879f9" opacity="0.9" />
              
              {/* Golden Yellow Curved Upward Arrow */}
              <path
                d="M 90 175 Q 150 160 190 120 T 290 40"
                fill="none"
                stroke="#facc15"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#glow-gold)"
              />
              <polygon points="290,30 305,45 285,55" fill="#facc15" filter="url(#glow-gold)" />
            </svg>
            <div className="absolute bottom-3 left-4 text-xs font-mono text-yellow-300/90 tracking-wider">
              MARKET SCALE & ENTERPRISE
            </div>
          </div>
        );

      // 2. How to Manage Your Money (Ref: IMG_9162.JPG - 3D glass stairs with glowing golden dollar signs and stacked coins)
      case 'course-2':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#0c192c] via-[#091321] to-[#040810] flex items-center justify-center overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-52 h-44 bg-cyan-500/15 blur-3xl rounded-full" />
            <div className="absolute bottom-4 right-1/4 w-36 h-36 bg-amber-400/15 blur-2xl rounded-full" />
            
            <svg className="w-full h-full opacity-90" viewBox="0 0 400 250">
              <defs>
                <linearGradient id="gold-pillar" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d97706" />
                  <stop offset="50%" stopColor="#fde047" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>
                <linearGradient id="glass-step" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Base platform */}
              <ellipse cx="200" cy="220" rx="170" ry="22" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

              {/* Tier 1: Smallest stack */}
              <rect x="75" y="170" width="40" height="35" rx="3" fill="url(#gold-pillar)" opacity="0.85" />
              <rect x="70" y="160" width="50" height="12" rx="2" fill="url(#glass-step)" stroke="#67e8f9" strokeWidth="0.75" />
              <text x="95" y="152" fill="#fef08a" fontSize="18" fontWeight="bold" textAnchor="middle" filter="drop-shadow(0 0 6px #f59e0b)">$</text>

              {/* Tier 2 */}
              <rect x="135" y="145" width="42" height="60" rx="3" fill="url(#gold-pillar)" opacity="0.9" />
              <rect x="130" y="135" width="52" height="12" rx="2" fill="url(#glass-step)" stroke="#67e8f9" strokeWidth="0.75" />
              <text x="156" y="125" fill="#fef08a" fontSize="20" fontWeight="bold" textAnchor="middle" filter="drop-shadow(0 0 8px #f59e0b)">$</text>

              {/* Tier 3 */}
              <rect x="195" y="115" width="45" height="90" rx="3" fill="url(#gold-pillar)" />
              <rect x="190" y="105" width="55" height="12" rx="2" fill="url(#glass-step)" stroke="#67e8f9" strokeWidth="0.75" />
              <text x="217" y="94" fill="#fef08a" fontSize="22" fontWeight="bold" textAnchor="middle" filter="drop-shadow(0 0 10px #f59e0b)">$</text>

              {/* Tier 4 */}
              <rect x="260" y="80" width="48" height="125" rx="3" fill="url(#gold-pillar)" />
              <rect x="254" y="70" width="60" height="12" rx="2" fill="url(#glass-step)" stroke="#67e8f9" strokeWidth="0.75" />
              <text x="284" y="58" fill="#fef08a" fontSize="24" fontWeight="bold" textAnchor="middle" filter="drop-shadow(0 0 12px #f59e0b)">$</text>

              {/* Glowing Arrow At Top */}
              <polygon points="325,45 350,15 375,45 360,45 360,95 340,95 340,45" fill="#f59e0b" filter="drop-shadow(0 0 12px #f59e0b)" />
            </svg>
            <div className="absolute bottom-3 left-4 text-xs font-mono text-cyan-300/80 tracking-wider">
              BUDGETING & WEALTH BUILDING
            </div>
          </div>
        );

      // 3. Learn Graphic Design from Scratch (Ref: IMG_9163.JPG - Apple desk setup with iPad displaying bold colorful "GRAPHIC DESIGN" typography)
      case 'course-3':
        return (
          <div className="relative w-full h-full bg-gradient-to-tr from-[#120826] via-[#1a0f35] to-[#290d42] flex items-center justify-center overflow-hidden">
            {/* Ambient neon purple/magenta glow */}
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-pink-500/25 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-purple-600/25 blur-3xl rounded-full" />
            
            <div className="relative w-[85%] max-w-[320px] aspect-[16/10] bg-zinc-950 border border-zinc-700/60 rounded-xl p-3 shadow-2xl flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500/80" />
                </div>
                <span className="text-[10px] font-mono text-zinc-400">DESIGN CANVAS</span>
              </div>
              <div className="text-center my-auto">
                <div className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  GRAPHIC
                </div>
                <div className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-yellow-400 via-purple-400 to-amber-300 bg-clip-text text-transparent">
                  DESIGN
                </div>
                <div className="flex items-center justify-center gap-2 mt-2 text-[10px] text-zinc-400 font-medium">
                  <span>Typography</span>
                  <span>·</span>
                  <span>Color</span>
                  <span>·</span>
                  <span>Layout</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[9px] text-zinc-500">
                <span>CANVAS 1920 × 1080</span>
                <span className="text-purple-400">VECTOR READY</span>
              </div>
            </div>
          </div>
        );

      // 4. Learn Web Development from Scratch (Ref: IMG_9164.JPG - Open laptop with glowing cyan/blue dashboard, gears & floating tech nodes)
      case 'course-4':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#051124] via-[#040e1c] to-[#02070e] flex items-center justify-center overflow-hidden">
            <div className="absolute top-1/4 left-1/3 w-56 h-48 bg-cyan-500/20 blur-3xl rounded-full" />
            <svg className="w-full h-full" viewBox="0 0 400 250">
              {/* Laptop Display */}
              <rect x="70" y="55" width="260" height="135" rx="8" fill="#0b1728" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="78" y="63" width="244" height="119" rx="4" fill="#070e18" />
              
              {/* Code window mock */}
              <circle cx="90" cy="74" r="3" fill="#ef4444" />
              <circle cx="100" cy="74" r="3" fill="#f59e0b" />
              <circle cx="110" cy="74" r="3" fill="#a855f7" />
              <line x1="88" y1="88" x2="160" y2="88" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="88" y1="100" x2="200" y2="100" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
              <line x1="100" y1="112" x2="180" y2="112" stroke="#facc15" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
              <line x1="100" y1="124" x2="220" y2="124" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
              <line x1="88" y1="136" x2="140" y2="136" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="100" y1="124" x2="220" y2="124" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
              <line x1="88" y1="136" x2="140" y2="136" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Analytics Waveform on Right of screen */}
              <path d="M 230 140 Q 250 90 270 120 T 310 95" fill="none" stroke="#06b6d4" strokeWidth="2" filter="drop-shadow(0 0 4px #06b6d4)" />
              
              {/* Floating Holographic Gears & Tech Nodes */}
              <g transform="translate(290, 60)" filter="drop-shadow(0 0 6px #38bdf8)">
                <circle cx="0" cy="0" r="16" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
                <circle cx="0" cy="0" r="6" fill="#0284c7" />
              </g>
              <g transform="translate(325, 110)" filter="drop-shadow(0 0 6px #06b6d4)">
                <circle cx="0" cy="0" r="12" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 2" />
                <circle cx="0" cy="0" r="4" fill="#0891b2" />
              </g>

              {/* Connecting node lines */}
              <line x1="280" y1="75" x2="315" y2="105" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
              <line x1="270" y1="120" x2="290" y2="60" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />

              {/* Laptop Keyboard base */}
              <polygon points="45,190 355,190 380,215 20,215" fill="#13233b" stroke="#38bdf8" strokeWidth="0.75" />
              <rect x="170" y="196" width="60" height="12" rx="2" fill="#0b1728" />
            </svg>
            <div className="absolute bottom-3 left-4 text-xs font-mono text-cyan-400/80 tracking-wider">
              HTML · CSS · JAVASCRIPT · APIS
            </div>
          </div>
        );

      // 5. How to Market Your Business Online (Ref: IMG_9161.JPG - 3D white calendar grid tile with bold glossy blue upward arrow)
      case 'course-5':
        return (
          <div className="relative w-full h-full bg-gradient-to-tr from-[#0a1626] via-[#0d2138] to-[#122e4c] flex items-center justify-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full" />
            <svg className="w-full h-full" viewBox="0 0 400 250">
              <defs>
                <linearGradient id="tile-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#cbd5e1" />
                </linearGradient>
                <linearGradient id="arrow-blue" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1d4ed8" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
                <filter id="tile-shadow" x="-10%" y="-10%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#000000" floodOpacity="0.5" />
                </filter>
              </defs>

              {/* 3D Isometric White Grid Tile */}
              <g transform="translate(115, 30)" filter="url(#tile-shadow)">
                <rect x="0" y="0" width="170" height="170" rx="24" fill="url(#tile-grad)" />
                {/* Subtle grid lines */}
                <line x1="42" y1="12" x2="42" y2="158" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="85" y1="12" x2="85" y2="158" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="128" y1="12" x2="128" y2="158" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="12" y1="42" x2="158" y2="42" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="12" y1="85" x2="158" y2="85" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="12" y1="128" x2="158" y2="128" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.4" />

                {/* Bold 3D Glossy Blue Zigzag Arrow */}
                <path
                  d="M 22 135 L 55 105 L 85 130 L 135 60"
                  fill="none"
                  stroke="url(#arrow-blue)"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="drop-shadow(0 6px 8px rgba(29, 78, 216, 0.45))"
                />
                <polygon points="120,40 155,50 145,85" fill="#3b82f6" filter="drop-shadow(0 4px 6px rgba(29, 78, 216, 0.5))" />
              </g>
            </svg>
            <div className="absolute bottom-3 left-4 text-xs font-mono text-blue-300/80 tracking-wider">
              ONLINE MARKETING & AUDIENCE ACQUISITION
            </div>
          </div>
        );

      // 6. How to Grow on Social Media (Ref: IMG_9166.JPG - Smartphone with glowing bubbles of social icons: YT, IG, TikTok, FB, etc.)
      case 'course-6':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#180e29] via-[#10091c] to-[#08040d] flex items-center justify-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-52 bg-amber-500/15 blur-3xl rounded-full" />
            <div className="absolute top-10 left-1/4 w-32 h-32 bg-rose-500/20 blur-2xl rounded-full" />
            
            <svg className="w-full h-full" viewBox="0 0 400 250">
              <defs>
                <radialGradient id="bubble-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="40%" stopColor="#fde68a" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
                </radialGradient>
              </defs>

              {/* Smartphone on desk */}
              <rect x="110" y="180" width="180" height="45" rx="10" fill="#1e1828" stroke="#473e57" strokeWidth="1.5" />
              <line x1="140" y1="184" x2="260" y2="184" stroke="#fbbf24" strokeWidth="2" strokeOpacity="0.7" />

              {/* Light beam radiating upwards */}
              <polygon points="140,184 260,184 320,40 80,40" fill="#f59e0b" opacity="0.05" />

              {/* Social Media Glowing Glass Bubbles */}
              {/* YouTube */}
              <g transform="translate(200, 50)" filter="drop-shadow(0 0 8px #ef4444)">
                <circle cx="0" cy="0" r="18" fill="#1e1b2e" stroke="#ef4444" strokeWidth="1.5" />
                <polygon points="-4,-6 8,0 -4,6" fill="#ef4444" />
              </g>

              {/* Instagram */}
              <g transform="translate(265, 80)" filter="drop-shadow(0 0 8px #ec4899)">
                <circle cx="0" cy="0" r="16" fill="#1e1b2e" stroke="#ec4899" strokeWidth="1.5" />
                <rect x="-7" y="-7" width="14" height="14" rx="4" fill="none" stroke="#ec4899" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="3.5" fill="none" stroke="#ec4899" strokeWidth="1.5" />
              </g>

              {/* TikTok */}
              <g transform="translate(135, 80)" filter="drop-shadow(0 0 8px #06b6d4)">
                <circle cx="0" cy="0" r="16" fill="#1e1b2e" stroke="#06b6d4" strokeWidth="1.5" />
                <path d="M 2 -7 L 2 3 C 2 6 -2 7 -4 5 C -6 3 -4 -1 -1 0 L -1 -7 Z" fill="#06b6d4" />
              </g>

              {/* Facebook */}
              <g transform="translate(200, 115)" filter="drop-shadow(0 0 10px #3b82f6)">
                <circle cx="0" cy="0" r="22" fill="#1e1b2e" stroke="#3b82f6" strokeWidth="2" />
                <text x="0" y="8" fill="#3b82f6" fontSize="22" fontWeight="bold" textAnchor="middle">f</text>
              </g>

              {/* Telegram / Messages */}
              <g transform="translate(145, 145)" filter="drop-shadow(0 0 6px #38bdf8)">
                <circle cx="0" cy="0" r="14" fill="#1e1b2e" stroke="#38bdf8" strokeWidth="1.5" />
                <polygon points="-5,3 5,0 -5,-5 -2,0" fill="#38bdf8" />
              </g>

              {/* Threads / Share */}
              <g transform="translate(255, 145)" filter="drop-shadow(0 0 6px #a855f7)">
                <circle cx="0" cy="0" r="14" fill="#1e1b2e" stroke="#a855f7" strokeWidth="1.5" />
                <text x="0" y="5" fill="#a855f7" fontSize="14" fontWeight="bold" textAnchor="middle">@</text>
              </g>
            </svg>
            <div className="absolute bottom-3 left-4 text-xs font-mono text-amber-300/80 tracking-wider">
              CONTENT · ENGAGEMENT · VIRAL REACH
            </div>
          </div>
        );

      // 7. How to Start Freelancing Online (Ref: IMG_9167.JPG - Woman at computer desk with neon sign "FREELANCING SERVICES" in pink/cyan)
      case 'course-7':
        return (
          <div className="relative w-full h-full bg-gradient-to-tr from-[#050e1f] via-[#09152b] to-[#1a0826] flex items-center justify-center overflow-hidden">
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-24 bg-pink-500/25 blur-3xl rounded-full" />
            <div className="absolute bottom-8 right-1/4 w-44 h-44 bg-cyan-500/20 blur-3xl rounded-full" />
            
            <svg className="w-full h-full" viewBox="0 0 400 250">
              <defs>
                <filter id="neon-pink" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#f43f5e" />
                  <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#f43f5e" floodOpacity="0.8" />
                </filter>
              </defs>

              {/* Wall Neon Sign */}
              <g transform="translate(200, 55)" filter="url(#neon-pink)">
                <rect x="-120" y="-30" width="240" height="54" rx="8" fill="#110d1a" stroke="#fb7185" strokeWidth="1" strokeOpacity="0.5" />
                <text x="0" y="-7" fill="#fff" stroke="#f43f5e" strokeWidth="1" fontSize="18" fontWeight="900" textAnchor="middle" letterSpacing="2">
                  FREELANCING
                </text>
                <text x="0" y="16" fill="#fda4af" stroke="#f43f5e" strokeWidth="0.8" fontSize="16" fontWeight="900" textAnchor="middle" letterSpacing="3">
                  SERVICES
                </text>
              </g>

              {/* Desk & Workstation Silhouette */}
              <rect x="80" y="195" width="240" height="10" rx="3" fill="#1e293b" />
              {/* Monitor */}
              <rect x="210" y="130" width="95" height="60" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
              <rect x="216" y="136" width="83" height="48" rx="2" fill="#0284c7" fillOpacity="0.25" />
              <rect x="250" y="190" width="16" height="6" fill="#334155" />
              
              {/* Freelancer Silhouette */}
              <circle cx="150" cy="140" r="14" fill="#1e293b" stroke="#f43f5e" strokeWidth="0.5" />
              <path d="M 125 195 Q 130 165 150 165 Q 170 165 175 195 Z" fill="#1e293b" />
              {/* Hair bun */}
              <circle cx="146" cy="123" r="6" fill="#0f172a" />
            </svg>
            <div className="absolute bottom-3 left-4 text-xs font-mono text-pink-300/80 tracking-wider">
              CLIENTS · PORTFOLIO · PROPOSALS
            </div>
          </div>
        );

      // 8. Learn Microsoft Office from Scratch (Ref: IMG_9169.JPG - Glowing Microsoft 4-square logo with solar orbital rings)
      case 'course-8':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#140b07] via-[#0d0705] to-[#040201] flex items-center justify-center overflow-hidden">
            {/* Glowing cosmic ring flare */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/20 blur-3xl rounded-full" />
            
            <svg className="w-full h-full" viewBox="0 0 400 250">
              <defs>
                <filter id="solar-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Orbital rings */}
              <ellipse cx="200" cy="125" rx="100" ry="50" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeOpacity="0.8" transform="rotate(-25 200 125)" filter="url(#solar-glow)" />
              <ellipse cx="200" cy="125" rx="115" ry="60" fill="none" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" transform="rotate(15 200 125)" />
              <ellipse cx="200" cy="125" rx="80" ry="80" fill="none" stroke="#fb923c" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

              {/* Glowing 4-Square App Suite Quadrants */}
              {/* Warm Amber (Office Suite) */}
              <rect x="165" y="90" width="30" height="30" rx="3" fill="#ea580c" filter="drop-shadow(0 0 8px #f97316)" />
              {/* Royal Purple (Access & Analytics) */}
              <rect x="205" y="90" width="30" height="30" rx="3" fill="#9333ea" filter="drop-shadow(0 0 8px #c084fc)" />
              {/* Indigo Blue (Word & Docs) */}
              <rect x="165" y="130" width="30" height="30" rx="3" fill="#0284c7" filter="drop-shadow(0 0 8px #38bdf8)" />
              {/* Electric Yellow (PowerPoint & Presentations) */}
              <rect x="205" y="130" width="30" height="30" rx="3" fill="#eab308" filter="drop-shadow(0 0 8px #facc15)" />

              {/* Sparkle stars */}
              <circle cx="100" cy="70" r="1.5" fill="#fef08a" />
              <circle cx="310" cy="160" r="2" fill="#38bdf8" />
              <circle cx="280" cy="60" r="1.5" fill="#f97316" />
            </svg>
            <div className="absolute bottom-3 left-4 text-xs font-mono text-amber-300/80 tracking-wider">
              WORD · EXCEL · POWERPOINT
            </div>
          </div>
        );

      // 9. Learn Video Editing from Scratch (Ref: IMG_9170.JPG - 3D timeline editing workstation, purple play button, clapperboard, audio waveforms)
      case 'course-9':
        return (
          <div className="relative w-full h-full bg-gradient-to-tr from-[#110726] via-[#160c33] to-[#0a041c] flex items-center justify-center overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-56 h-48 bg-purple-600/25 blur-3xl rounded-full" />
            
            <svg className="w-full h-full" viewBox="0 0 400 250">
              {/* Video Timeline Interface Box */}
              <rect x="55" y="120" width="290" height="90" rx="8" fill="#140f24" stroke="#a855f7" strokeWidth="1" />
              {/* Timeline Header */}
              <rect x="55" y="120" width="290" height="22" rx="8" fill="#1f1836" />
              <circle cx="72" cy="131" r="3" fill="#ec4899" />
              <circle cx="82" cy="131" r="3" fill="#a855f7" />
              <text x="100" y="135" fill="#c084fc" fontSize="9" fontFamily="monospace">00:00:14:08 / TIMELINE</text>
              
              {/* Video Clips on Track 1 */}
              <rect x="70" y="150" width="60" height="22" rx="3" fill="#7e22ce" stroke="#c084fc" strokeWidth="0.8" />
              <rect x="135" y="150" width="80" height="22" rx="3" fill="#6b21a8" stroke="#a855f7" strokeWidth="0.8" />
              <rect x="220" y="150" width="70" height="22" rx="3" fill="#581c87" stroke="#9333ea" strokeWidth="0.8" />

              {/* Audio Waveforms on Track 2 */}
              <rect x="70" y="178" width="170" height="20" rx="3" fill="#0891b2" opacity="0.8" />
              {/* Waveform bumps */}
              <path d="M 75 188 Q 85 180 95 188 T 115 188 T 135 188 T 155 188 T 175 188" fill="none" stroke="#67e8f9" strokeWidth="1.5" />
              <rect x="245" y="178" width="80" height="20" rx="3" fill="#0e7490" opacity="0.8" />

              {/* Timeline Playhead cursor */}
              <line x1="170" y1="145" x2="170" y2="205" stroke="#f43f5e" strokeWidth="2" filter="drop-shadow(0 0 4px #f43f5e)" />

              {/* Floating Glowing Neon Play Button */}
              <g transform="translate(200, 75)" filter="drop-shadow(0 0 12px #a855f7)">
                <circle cx="0" cy="0" r="28" fill="#251642" stroke="#c084fc" strokeWidth="2.5" />
                <polygon points="-8,-14 16,0 -8,14" fill="#f3e8ff" />
              </g>

              {/* Mini Clapperboard on right */}
              <g transform="translate(305, 75) rotate(15)">
                <rect x="-20" y="-12" width="40" height="26" rx="2" fill="#1e1828" stroke="#cbd5e1" strokeWidth="1" />
                <rect x="-20" y="-12" width="40" height="8" fill="#e2e8f0" />
                <line x1="-10" y1="-12" x2="-6" y2="-4" stroke="#0f172a" strokeWidth="2" />
                <line x1="4" y1="-12" x2="8" y2="-4" stroke="#0f172a" strokeWidth="2" />
              </g>

              {/* Mini Scissors on left */}
              <g transform="translate(90, 75)">
                <circle cx="-6" cy="4" r="5" fill="none" stroke="#c084fc" strokeWidth="1.5" />
                <circle cx="-6" cy="-4" r="5" fill="none" stroke="#c084fc" strokeWidth="1.5" />
                <line x1="-2" y1="3" x2="12" y2="-6" stroke="#c084fc" strokeWidth="1.5" />
                <line x1="-2" y1="-3" x2="12" y2="6" stroke="#c084fc" strokeWidth="1.5" />
              </g>
            </svg>
            <div className="absolute bottom-3 left-4 text-xs font-mono text-purple-300/80 tracking-wider">
              CUTS · TRANSITIONS · COLOR · AUDIO
            </div>
          </div>
        );

      // 10. Time Management and Productivity (Ref: IMG_9171.JPG - Analog clock face with yellow sticky notes: Time Management, Focus, Goals, Priorities, Rest)
      case 'course-10':
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#1b1c1e] via-[#141517] to-[#0c0d0e] flex items-center justify-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-amber-400/10 blur-3xl rounded-full" />
            
            <svg className="w-full h-full" viewBox="0 0 400 250">
              <defs>
                <filter id="sticky-shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="1" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.4" />
                </filter>
              </defs>

              {/* Big Clean White/Silver Clock Face */}
              <circle cx="200" cy="125" r="95" fill="#f8fafc" stroke="#475569" strokeWidth="3" />
              
              {/* Hour marker dots */}
              <circle cx="200" cy="45" r="3" fill="#64748b" />
              <circle cx="280" cy="125" r="3" fill="#64748b" />
              <circle cx="200" cy="205" r="3" fill="#64748b" />
              <circle cx="120" cy="125" r="3" fill="#64748b" />

              {/* Clock hands pointing at 10:10 */}
              <line x1="200" y1="125" x2="160" y2="85" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
              <line x1="200" y1="125" x2="245" y2="80" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
              <circle cx="200" cy="125" r="5" fill="#ef4444" />

              {/* Yellow Post-it Sticky Notes */}
              {/* 12 o'clock: Time Management */}
              <g transform="translate(165, 30) rotate(-3)" filter="url(#sticky-shadow)">
                <rect x="0" y="0" width="70" height="34" rx="2" fill="#fef08a" stroke="#facc15" strokeWidth="0.5" />
                <text x="35" y="15" fill="#713f12" fontSize="7.5" fontWeight="bold" textAnchor="middle">Time</text>
                <text x="35" y="26" fill="#713f12" fontSize="7" fontWeight="bold" textAnchor="middle">Management</text>
              </g>

              {/* 10 o'clock: Focus */}
              <g transform="translate(95, 65) rotate(4)" filter="url(#sticky-shadow)">
                <rect x="0" y="0" width="55" height="30" rx="2" fill="#fef08a" stroke="#facc15" strokeWidth="0.5" />
                <text x="27.5" y="19" fill="#713f12" fontSize="9" fontWeight="bold" textAnchor="middle">Focus</text>
              </g>

              {/* 2 o'clock: Priorities */}
              <g transform="translate(250, 65) rotate(-5)" filter="url(#sticky-shadow)">
                <rect x="0" y="0" width="58" height="30" rx="2" fill="#fef08a" stroke="#facc15" strokeWidth="0.5" />
                <text x="29" y="19" fill="#713f12" fontSize="8" fontWeight="bold" textAnchor="middle">Priorities</text>
              </g>

              {/* 8 o'clock: Goals */}
              <g transform="translate(90, 145) rotate(-2)" filter="url(#sticky-shadow)">
                <rect x="0" y="0" width="55" height="30" rx="2" fill="#fef08a" stroke="#facc15" strokeWidth="0.5" />
                <text x="27.5" y="19" fill="#713f12" fontSize="8.5" fontWeight="bold" textAnchor="middle">Goals</text>
              </g>

              {/* 4 o'clock: Rest */}
              <g transform="translate(255, 145) rotate(3)" filter="url(#sticky-shadow)">
                <rect x="0" y="0" width="55" height="30" rx="2" fill="#fef08a" stroke="#facc15" strokeWidth="0.5" />
                <text x="27.5" y="19" fill="#713f12" fontSize="9" fontWeight="bold" textAnchor="middle">Rest</text>
              </g>
            </svg>
            <div className="absolute bottom-3 left-4 text-xs font-mono text-amber-200/80 tracking-wider">
              TIME BLOCKING · GOALS · ROUTINES
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-400">
            <span>Learn Path Flow</span>
          </div>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-xl group transition-all duration-300 ${className}`}>
      {renderVisual()}
      {showOverlayTitle && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
          <span className="text-white text-sm font-semibold tracking-tight">Learn Path Flow</span>
        </div>
      )}
    </div>
  );
};
