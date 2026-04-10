import React, { useState, useRef } from 'react';
import { Play, ArrowRight, X, Check, ChevronDown, Star, Maximize, Volume2, Settings, Target, DollarSign } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const FunnelAuditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 430" width="64" height="64" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)' }}>
    <defs>
      <clipPath id="__lottie_element_2"><rect width="430" height="430" x="0" y="0"></rect></clipPath>
      <clipPath id="__lottie_element_5"><path d="M0,0 L430,0 L430,430 L0,430z"></path></clipPath>
      <filter id="__lottie_element_12" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%"><feComponentTransfer in="SourceGraphic"><feFuncA type="table" tableValues="1.0 0.0"></feFuncA></feComponentTransfer></filter>
      <mask id="__lottie_element_11" mask-type="alpha">
        <g filter="url(#__lottie_element_12)">
          <rect width="430" height="430" x="0" y="0" fill="#ffffff" opacity="0"></rect>
          <g transform="matrix(1.4119950532913208,0.44347482919692993,-0.44347482919692993,1.4119950532913208,327.4145812988281,318.05596923828125)" opacity="1" style={{ display: 'block' }}>
            <g opacity="1" transform="matrix(1,0,0,1,0,0)"><path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(255,0,0)" strokeOpacity="1" strokeWidth="63" d=" M21.486000061035156,21.427000045776367 C21.486000061035156,21.427000045776367 46.641998291015625,46.152000427246094 46.641998291015625,46.152000427246094"></path></g>
            <g opacity="1" transform="matrix(1,0,0,1,0,0)"><path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(255,0,0)" strokeOpacity="1" strokeWidth="24.7" d=" M20.799999237060547,-37.79100036621094 C36.99599838256836,-21.594999313354492 36.99599838256836,4.664999961853027 20.799999237060547,20.861000061035156 C4.604000091552734,37.05699920654297 -21.656999588012695,37.05699920654297 -37.85300064086914,20.861000061035156 C-54.04899978637695,4.664999961853027 -54.04899978637695,-21.594999313354492 -37.85300064086914,-37.79100036621094 C-21.656999588012695,-53.98699951171875 4.604000091552734,-53.98699951171875 20.799999237060547,-37.79100036621094z"></path><path fill="rgb(255,0,0)" fillOpacity="1" d=" M20.799999237060547,-37.79100036621094 C36.99599838256836,-21.594999313354492 36.99599838256836,4.664999961853027 20.799999237060547,20.861000061035156 C4.604000091552734,37.05699920654297 -21.656999588012695,37.05699920654297 -37.85300064086914,20.861000061035156 C-54.04899978637695,4.664999961853027 -54.04899978637695,-21.594999313354492 -37.85300064086914,-37.79100036621094 C-21.656999588012695,-53.98699951171875 4.604000091552734,-53.98699951171875 20.799999237060547,-37.79100036621094z"></path></g>
          </g>
        </g>
      </mask>
    </defs>
    <g clipPath="url(#__lottie_element_2)">
      <g clipPath="url(#__lottie_element_5)" transform="matrix(1,0,0,1,0,0)" opacity="1" style={{ display: 'block' }}>
        <g transform="matrix(0.9335803985595703,-0.3583679497241974,0.3583679497241974,0.9335803985595703,-121.2716064453125,84.65486145019531)" opacity="1" style={{ display: 'block' }}>
          <g opacity="1" transform="matrix(1,0,0,1,249.43899536132812,220.58200073242188)"><path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" className="primary" stroke="rgb(255,255,255)" strokeOpacity="1" strokeWidth="12" d=" M61.965999603271484,-47.40399932861328 C61.965999603271484,-47.40399932861328 61.965999603271484,-44.26900100708008 61.965999603271484,-44.26900100708008 C61.965999603271484,-44.26900100708008 61.965999603271484,-13.8149995803833 61.965999603271484,-13.8149995803833 C61.965999603271484,19.990999221801758 34.553001403808594,47.40399932861328 0.746999979019165,47.40399932861328 C0.746999979019165,47.40399932861328 -0.746999979019165,47.40399932861328 -0.746999979019165,47.40399932861328 C-34.553001403808594,47.40399932861328 -61.965999603271484,19.990999221801758 -61.965999603271484,-13.8149995803833 C-61.965999603271484,-13.8149995803833 -61.965999603271484,-43.84299850463867 -61.965999603271484,-43.84299850463867"></path></g>
          <g opacity="1" transform="matrix(1,0,0,1,245.9720001220703,128.26400756835938)"><path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" className="secondary" stroke="rgb(255,69,51)" strokeOpacity="1" strokeWidth="12" d=" M65.43299865722656,48.04800033569336 C65.43299865722656,48.04800033569336 68.04900360107422,8.4399995803833 27.444000244140625,-12.734000205993652 C27.444000244140625,-12.734000205993652 15.050999641418457,33.28799819946289 -62.39899826049805,49.32699966430664 C-62.39899826049805,49.32699966430664 -88.9530029296875,-28.865999221801758 -55.792999267578125,-47.85499954223633 C-52.077999114990234,-49.981998443603516 -45.981998443603516,-49.76499938964844 -42.37699890136719,-47.457000732421875 C-37.31700134277344,-44.21799850463867 -32.24100112915039,-38.9379997253418 -29.041000366210938,-36.2130012512207 C-26.61199951171875,-34.14400100708008 -23.5,-33.04199981689453 -20.312999725341797,-33.198001861572266 C-15.920000076293945,-33.41299819946289 -9.836000442504883,-34.67300033569336 -3.8299999237060547,-37.89400100708008 C44.22200012207031,-56.99300003051758 72.99500274658203,-35.01300048828125 72.40899658203125,-6.506999969482422 C71.86399841308594,20.020000457763672 74.89900207519531,42.069000244140625 65.43299865722656,48.04800033569336z"></path></g>
        </g>
        <g mask="url(#__lottie_element_11)" style={{ display: 'block' }}>
          <g transform="matrix(-1,0,0,1,465,-35)" opacity="1">
            <g opacity="1" transform="matrix(1,0,0,1,248.75399780273438,284.14599609375)"><path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" className="primary" stroke="rgb(255,255,255)" strokeOpacity="1" strokeWidth="12" d=" M-17.363000869750977,-16.399999618530273 C-17.363000869750977,-16.399999618530273 -18.823999404907227,4.1519999504089355 -18.823999404907227,4.1519999504089355 C-20.117000579833984,19.68199920654297 -8.04800033569336,32.45399856567383 9.361000061035156,33.90399932861328 C9.361000061035156,33.90399932861328 11.843000411987305,34.11000061035156 11.843000411987305,34.11000061035156 C29.25200080871582,35.560001373291016 44.42100143432617,24.139999389648438 45.7140007019043,8.609999656677246 C45.7140007019043,8.609999656677246 47.612998962402344,1.805999994277954 47.612998962402344,1.805999994277954"></path></g>
            <g opacity="1" transform="matrix(1,0,0,1,250,349.6310119628906)"><path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" className="primary" stroke="rgb(255,255,255)" strokeOpacity="1" strokeWidth="12" d=" M46.95100021362305,-56.667999267578125 C46.95100021362305,-56.667999267578125 55.85100173950195,-55.48099899291992 55.85100173950195,-55.48099899291992 C88.5,-54.13100051879883 121.81500244140625,-35.69499969482422 121.81500244140625,7.784999847412109 C121.81500244140625,7.784999847412109 121.81500244140625,39.297000885009766 121.81500244140625,39.297000885009766 C121.81500244140625,47.75600051879883 114.95344543457031,54.617000579833984 106.49444580078125,54.617000579833984 C106.49444580078125,54.617000579833984 87.06400299072266,54.617000579833984 87.06400299072266,54.617000579833984 C48.57699966430664,57.60599899291992 49.06999969482422,71.43199920654297 16.898000717163086,71.43199920654297 C16.898000717163086,71.43199920654297 -16.898000717163086,71.43199920654297 -16.898000717163086,71.43199920654297 C-49.06999969482422,71.43199920654297 -48.57699966430664,57.60599899291992 -87.06400299072266,54.617000579833984 C-87.06400299072266,54.617000579833984 -106.49400329589844,54.617000579833984 -106.49400329589844,54.617000579833984 C-114.9530029296875,54.617000579833984 -121.81500244140625,47.75600051879883 -121.81500244140625,39.297000885009766 C-121.81500244140625,39.297000885009766 -121.81500244140625,7.784999847412109 -121.81500244140625,7.784999847412109 C-121.81500244140625,-35.69499969482422 -73.3740005493164,-66.24400329589844 -30.04400062561035,-62.6349983215332 C-30.04400062561035,-62.6349983215332 -20.06999969482422,-61.33300018310547 -20.06999969482422,-61.33300018310547"></path></g>
          </g>
        </g>
        <g transform="matrix(1.4119950532913208,0.44347482919692993,-0.44347482919692993,1.4119950532913208,327.4145812988281,318.05596923828125)" opacity="1" style={{ display: 'block' }}>
          <g opacity="1" transform="matrix(1,0,0,1,0,0)"><path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" className="secondary" stroke="rgb(255,69,51)" strokeOpacity="1" strokeWidth="10" d=" M21.486000061035156,21.427000045776367 C21.486000061035156,21.427000045776367 46.641998291015625,46.152000427246094 46.641998291015625,46.152000427246094"></path></g>
          <g opacity="1" transform="matrix(1,0,0,1,0,0)"><path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" className="secondary" stroke="rgb(255,69,51)" strokeOpacity="1" strokeWidth="7.7" d=" M20.799999237060547,-37.79100036621094 C36.99599838256836,-21.594999313354492 36.99599838256836,4.664999961853027 20.799999237060547,20.861000061035156 C4.604000091552734,37.05699920654297 -21.656999588012695,37.05699920654297 -37.85300064086914,20.861000061035156 C-54.04899978637695,4.664999961853027 -54.04899978637695,-21.594999313354492 -37.85300064086914,-37.79100036621094 C-21.656999588012695,-53.98699951171875 4.604000091552734,-53.98699951171875 20.799999237060547,-37.79100036621094z"></path></g>
        </g>
      </g>
    </g>
  </svg>
);

const CampaignSetupIcon = () => (
  <div className="relative w-[64px] h-[64px] flex items-center justify-center">
    {/* Background gears */}
    <div className="absolute z-0">
      <Settings size={44} className="text-white/10" strokeWidth={1.5} />
    </div>
    <div className="absolute right-1 bottom-1 z-0">
      <Settings size={30} className="text-brand-red/20" strokeWidth={2} />
    </div>
    
    {/* Main Laptop */}
    <div className="absolute z-10 drop-shadow-2xl">
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <rect x="2" y="3" width="20" height="14" rx="2" fill="#0a0a0a" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    </div>
    
    {/* Static red elements */}
    <div className="absolute right-3 top-2 text-brand-red z-20 drop-shadow-[0_0_8px_rgba(255,79,56,0.6)]">
      <Target size={18} strokeWidth={2.5} />
    </div>
  </div>
);

const MaximizeProfitIcon = () => (
  <div className="relative w-[64px] h-[64px] flex items-end justify-center pb-2">
    <div className="flex items-end gap-2.5 h-12 w-full justify-center">
      <div className="w-3.5 h-[50%] bg-white/10 rounded-t-sm" />
      <div className="w-3.5 h-[70%] bg-white/30 rounded-t-sm" />
      <div className="w-3.5 h-[90%] bg-brand-red rounded-t-sm relative shadow-[0_0_15px_rgba(255,79,56,0.4)]">
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-white">
          <DollarSign size={16} strokeWidth={3} />
        </div>
      </div>
    </div>
    
    <div className="absolute -top-1 -right-2 text-brand-red">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_10px_rgba(255,79,56,0.5)]">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </div>
  </div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/80 mb-6">
    {children}
  </div>
);

const SectionHeader = ({ tag, title, subtitle }: { tag?: string, title: React.ReactNode, subtitle?: string }) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    {tag && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Tag>{tag}</Tag>
      </motion.div>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-brand-text-gray max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ScrollRevealText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"]
  });

  const words = text.split(" ");
  return (
    <div ref={containerRef} className="mb-12 cursor-default">
      <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.2] tracking-tight text-white flex flex-wrap justify-center">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
          const y = useTransform(scrollYProgress, [start, end], [10, 0]);
          const filter = useTransform(scrollYProgress, [start, end], ['blur(4px)', 'blur(0px)']);
          return (
            <motion.span 
              key={i} 
              style={{ opacity, y, filter }}
              className="inline-block mr-[0.25em] mb-2"
            >
              {word}
            </motion.span>
          );
        })}
      </h2>
    </div>
  );
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    "How do you tailor Google Ads strategies for different businesses?",
    "What's unique about your Meta Ads approach?",
    "How do you ensure effective TikTok Ads targeting and engagement?",
    "How do you choose ad formats and placements across platforms?",
    "What reporting and analytics do you provide for ad campaign tracking?",
    "Do you offer ongoing ad optimization and management services?"
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-red/30 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 flex flex-col items-center text-center">
        <div className="relative z-10 w-[90%] max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/avatar${i}/100/100`} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover" referrerPolicy="no-referrer" />
              ))}
            </div>
            <div className="flex flex-col items-start text-sm">
              <div className="flex text-white">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-white/80">115+ happy clients</span>
            </div>
          </div>

          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.2 }
              }
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 leading-tight"
          >
            <motion.span variants={{ hidden: { opacity: 0, filter: 'blur(12px)', y: 20 }, visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="inline-block">Ready</motion.span>{" "}
            <motion.span variants={{ hidden: { opacity: 0, filter: 'blur(12px)', y: 20 }, visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="inline-block">to</motion.span>{" "}
            <motion.span variants={{ hidden: { opacity: 0, filter: 'blur(12px)', y: 20 }, visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="inline-block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500 pr-2">scale</motion.span>{" "}
            <motion.span variants={{ hidden: { opacity: 0, filter: 'blur(12px)', y: 20 }, visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="inline-block">your</motion.span>
            <br />
            <motion.span variants={{ hidden: { opacity: 0, filter: 'blur(12px)', y: 20 }, visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="inline-block">brand</motion.span>{" "}
            <motion.span variants={{ hidden: { opacity: 0, filter: 'blur(12px)', y: 20 }, visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="inline-block">with</motion.span>{" "}
            <motion.span variants={{ hidden: { opacity: 0, filter: 'blur(12px)', y: 20 }, visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="inline-block">paid</motion.span>{" "}
            <motion.span variants={{ hidden: { opacity: 0, filter: 'blur(12px)', y: 20 }, visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="inline-block">ads?</motion.span>
          </motion.h1>
          
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.04, delayChildren: 0.8 }
              }
            }}
            className="text-lg md:text-xl text-brand-text-gray max-w-2xl mx-auto mb-10"
          >
            {"If you want to achieve ground-breaking growth with increased sales and profitability with paid ads, then you're in the right place.".split(" ").map((word, i) => (
              <React.Fragment key={i}>
                <motion.span variants={{ hidden: { opacity: 0, filter: 'blur(12px)', y: 20 }, visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="inline-block">{word}</motion.span>
                {" "}
              </React.Fragment>
            ))}
          </motion.p>

          <div className="relative mt-8">
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-brand-red hover:bg-red-500 text-white px-8 py-3.5 rounded-xl font-medium transition-colors w-full sm:w-auto">
                Book a call
              </button>
              <div className="relative w-full sm:w-auto">
                <button className="bg-[#111] hover:bg-[#222] border border-white/10 text-white px-8 py-3.5 rounded-xl font-medium transition-colors w-full sm:w-auto relative z-10">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Glowing Gradient below buttons */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[1000px] h-[500px] pointer-events-none z-0">
              <div className="absolute top-[20%] left-[20%] w-[400px] h-[300px] bg-[#ff7a00]/30 blur-[120px] rounded-full mix-blend-screen" />
              <div className="absolute top-[20%] right-[20%] w-[400px] h-[300px] bg-[#ff0040]/30 blur-[120px] rounded-full mix-blend-screen" />
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#00f0ff]/30 blur-[120px] rounded-full mix-blend-screen" />
              <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-[#0033ff]/30 blur-[120px] rounded-full mix-blend-screen" />
              <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-[#7000ff]/20 blur-[120px] rounded-full mix-blend-screen" />
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-10 bg-gradient-to-b from-transparent via-black to-transparent overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <p className="text-sm text-brand-text-gray">You're in good hands:</p>
        </div>
        <div className="flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-16 md:gap-24 animate-marquee whitespace-nowrap opacity-50 grayscale items-center min-w-full shrink-0 justify-around">
            <span className="text-2xl font-bold tracking-tighter">GOOGLE</span>
            <span className="text-2xl font-black tracking-widest">AMAZON</span>
            <span className="text-2xl font-semibold tracking-tight">SPOTIFY</span>
            <span className="text-2xl font-bold">NETFLIX</span>
            <span className="text-2xl font-black tracking-tighter">META</span>
            <span className="text-2xl font-bold tracking-widest">MICROSOFT</span>
            <span className="text-2xl font-semibold tracking-tight">APPLE</span>
          </div>
          <div className="flex gap-16 md:gap-24 animate-marquee whitespace-nowrap opacity-50 grayscale items-center min-w-full shrink-0 justify-around" aria-hidden="true">
            <span className="text-2xl font-bold tracking-tighter">GOOGLE</span>
            <span className="text-2xl font-black tracking-widest">AMAZON</span>
            <span className="text-2xl font-semibold tracking-tight">SPOTIFY</span>
            <span className="text-2xl font-bold">NETFLIX</span>
            <span className="text-2xl font-black tracking-tighter">META</span>
            <span className="text-2xl font-bold tracking-widest">MICROSOFT</span>
            <span className="text-2xl font-semibold tracking-tight">APPLE</span>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-32">
        <SectionHeader 
          tag="Our Clients"
          title={<>Hear it directly from <span className="font-serif italic">our clients</span>.</>}
          subtitle="Hear what our clients have to say. Our testimonials reflect the satisfaction our clients have in our services."
        />
        
        <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Malik Shkraba', role: 'COO of Friday', quote: '"Our results and online presence went through the roof more or less overnight, mind-blowing!"', brand: 'theo', seed: 'video1' },
            { name: 'Tony Gomez', role: 'Founder of Thursday', quote: '"These guy don\'t mess around, we saw results from month one. If you want to grow your business, look no further."', brand: 'Amsterdam', seed: 'video2' },
            { name: 'Naomi Campbell', role: 'CEO of Wednesday', quote: '"Solara absolutely blew the previous agency we were working out of the water."', brand: 'SAVANNAH', seed: 'video3' }
          ].map((testimonial, i) => (
            <div key={i} className="bg-brand-gray rounded-3xl overflow-hidden border border-white/5 p-4 flex flex-col group">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-black">
                <img src={`https://picsum.photos/seed/${testimonial.seed}/600/400`} alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-14 h-14 bg-brand-red text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-1 fill-current" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-medium">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md transform-gpu px-3 py-1.5 rounded-full shadow-sm shadow-black/20">
                    <Play className="w-3 h-3 fill-current" /> 00:00
                  </div>
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md transform-gpu px-3 py-1.5 rounded-full shadow-sm shadow-black/20">
                    <Volume2 className="w-3 h-3" />
                    <Settings className="w-3 h-3" />
                    <Maximize className="w-3 h-3" />
                  </div>
                </div>
              </div>
              <div className="px-2 flex-grow flex flex-col">
                <div className="text-2xl font-bold mb-4 tracking-tight">{testimonial.brand}</div>
                <p className="text-brand-text-gray mb-8 flex-grow">{testimonial.quote}</p>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-brand-text-gray">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="py-32 relative flex justify-center bg-black">
        <div className="w-[90%] max-w-6xl mx-auto text-center relative z-10">
          <ScrollRevealText text="Here at Solara, we focus on returns. We're dedicated to scaling your brand with paid advertising. Break free and take your brand to next level." />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button className="bg-brand-red hover:bg-red-500 text-white px-8 py-3.5 rounded-xl font-medium transition-colors inline-flex items-center gap-2">
              Book a 15-min call <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,79,56,0.05),transparent_70%)] pointer-events-none" />
        <SectionHeader 
          tag="Results"
          title={<>Results speak for <span className="font-serif italic">themselves</span>.</>}
          subtitle="We've worked across a number of industries and have achieved some incredible results with some incredible people and brands."
        />
        
        <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { brand: 'Nostalgie', stat: '47% increase in new customers.', metrics: ['65% Increase in CTR', '37% Reduction in CPA'], seed: 'perfume' },
            { brand: 'Classicé', stat: '34% increase in online sales.', metrics: ['57% Increase in CTR', '69% Reduction in CPR'], seed: 'watch' },
            { brand: 'Yogamy', stat: 'From $0 to $1,000,000 in sales.', metrics: ['85% Increase in CTR', '36% Reduction in CPR'], seed: 'yoga' }
          ].map((result, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, type: "spring", bounce: 0.4 }}
              className="relative rounded-[2.5rem] overflow-hidden group aspect-[3/4] sm:aspect-[4/5] border border-white/5 bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,79,56,0.15)] hover:border-brand-red/30 transition-all duration-700"
            >
              <img src={`https://picsum.photos/seed/${result.seed}/600/800`} alt={result.brand} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-70 group-hover:opacity-90" referrerPolicy="no-referrer" />
              
              {/* Enhanced Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-40% to-transparent opacity-95 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-red/30 blur-[100px] rounded-full" />
                <div className="absolute -top-32 -left-32 w-80 h-80 bg-brand-red/10 blur-[100px] rounded-full" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  <h3 className="text-4xl sm:text-5xl font-medium tracking-tight mb-3 text-white drop-shadow-lg group-hover:-translate-y-2 transition-transform duration-500">{result.brand}</h3>
                  <p className="text-lg sm:text-xl text-brand-text-gray mb-8 font-light leading-relaxed group-hover:-translate-y-2 transition-transform duration-500 delay-75">{result.stat}</p>
                  
                  <div className="flex flex-row flex-wrap items-center justify-center gap-3 w-full group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                    {result.metrics.map((metric, j) => (
                      <div key={j} className="border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 sm:py-2.5 rounded-2xl text-[13px] sm:text-sm font-medium text-white shadow-xl hover:border-brand-red/50 hover:bg-white/10 transition-colors duration-300">
                        {metric}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-32 relative">
        <SectionHeader 
          tag="Services"
          title={<>How can we help <span className="font-serif italic">you</span>?</>}
          subtitle="From Google ads, to Meta ads, to TikTok ads, and even content creation, we've got you covered on everything front."
        />
        
        <div className="w-[90%] max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-3xl p-10 overflow-hidden group min-h-[300px] flex flex-col justify-center text-center border border-white/10 bg-[#121212] hover:border-white/20 transition-all duration-500">
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600/30 blur-[100px] rounded-full group-hover:bg-blue-500/50 group-hover:scale-110 transition-all duration-700" />
            <div className="relative z-10">
              <h3 className="text-4xl font-medium mb-4">Meta Ads</h3>
              <p className="text-brand-text-gray">Our team has decades of combined experience creating winning Facebook & Instagram campaigns.</p>
            </div>
          </div>
          <div className="relative rounded-3xl p-10 overflow-hidden group min-h-[300px] flex flex-col justify-center text-center border border-white/10 bg-[#121212] hover:border-white/20 transition-all duration-500">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-600/30 blur-[100px] rounded-full group-hover:bg-orange-500/50 group-hover:scale-110 transition-all duration-700" />
            <div className="relative z-10">
              <h3 className="text-4xl font-medium mb-4">Google Ads</h3>
              <p className="text-brand-text-gray">Put your products in front of active buyers and beat out the competition with expert Google Shopping services.</p>
            </div>
          </div>
          <div className="md:col-span-2 relative rounded-3xl p-10 overflow-hidden group min-h-[300px] flex flex-col justify-center text-center border border-white/10 bg-[#121212] hover:border-white/20 transition-all duration-500">
            <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-orange-600/20 blur-[120px] rounded-full group-hover:bg-orange-500/40 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute -top-40 -right-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full group-hover:bg-blue-500/40 group-hover:scale-110 transition-all duration-700" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-4xl font-medium mb-4">TikTok Ads</h3>
              <p className="text-brand-text-gray">With over 800 million monthly users in the US, TikTok is the strongest link between your brand and the next generation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-32">
        <SectionHeader 
          title={<>But, why would you<br />want to work <span className="font-serif italic">with us</span>?</>}
        />
        
        <div className="w-[90%] max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Other Agencies Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, delay: 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-medium text-brand-text-gray mb-6 text-center">Other Agencies</h3>
            <div className="bg-[#0a0a0a] rounded-[2rem] p-10 border border-white/5 flex-1 transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:shadow-2xl">
              <ul className="space-y-6">
                {[
                  "Slow communication",
                  "Single channel approach",
                  "Outdated growth strategies",
                  "Lack of industry research",
                  "Outsourced to mediocre talent"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-brand-text-gray">
                    <X className="w-5 h-5 text-white/20 shrink-0 font-light" />
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Solara Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex justify-center mb-6 h-8 items-center">
              <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-brand-dark rounded-full" /></div>
                solara
              </div>
            </div>
            <div className="bg-[#0a0a0a] rounded-[2rem] p-10 border border-brand-red/20 flex-1 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-brand-red/50 hover:shadow-[0_20px_40px_rgba(255,79,56,0.15)] group">
              <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-brand-red/20 via-brand-red/5 to-transparent pointer-events-none blur-2xl group-hover:from-brand-red/30 transition-colors duration-500" />
              <div className="relative z-10">
                <ul className="space-y-6">
                  {[
                    "Constant, proactive communication",
                    "Omni-channel approach",
                    "Tailored best-fit solutions",
                    "Provides industry specific expertise",
                    "Experts with 10+ years of experience"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white">
                      <Check className="w-5 h-5 text-brand-red shrink-0" />
                      <span className="text-[15px] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32">
        <SectionHeader 
          tag="Process"
          title={<>Our simple 3-step process<br />to <span className="font-serif italic">skyrocket</span> your business.</>}
          subtitle="From Google ads, to Meta ads, to TikTok ads, and even content creation, we've got you covered on everything front."
        />
        
        <div className="w-[90%] max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { icon: FunnelAuditIcon, title: "Funnel Audit", desc: "We'll start by analyzing your sales funnel and seeing what's holding you back." },
            { icon: CampaignSetupIcon, title: "Campaign Setup", desc: "Then, with your business goals in mind, we will set up the advertising campaigns." },
            { icon: MaximizeProfitIcon, title: "Maximize Profit", desc: "We'll then work towards driving the cost per action down to maximize profit." }
          ].map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 80 }}
              className="flex flex-col items-center bg-[#0a0a0a] p-10 rounded-[2rem] border border-white/5 hover:border-brand-red/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,79,56,0.1)]"
            >
              <div className="mb-6">
                <step.icon />
              </div>
              <h3 className="text-2xl font-medium mb-4">{step.title}</h3>
              <p className="text-brand-text-gray">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-32">
        <SectionHeader 
          tag="Testimonials"
          title={<>There's a reason people<br />are <span className="font-serif italic">raving</span> about us.</>}
        />
        
        <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { quote: "Solara transformed our business overnight. From stale organic growth to explosive growth with Google Ads and it's scaling everyday.", name: "Jonathan Day", role: "Co-founder of Monday", seed: "m1" },
            { quote: "We never realised the power of paid advertising until we found Solara. It's doubled our revenue in just a few months, absolutely incredible.", name: "Melissa Reid", role: "Founder of Tuesday", seed: "w1" },
            { quote: "Solara turned our marketing game around! With their paid advertising strategies, we saw a remarkable boost in sales that we never thought possible.", name: "Chris Wright", role: "CEO of Wednesday", seed: "m2" },
            { quote: "Before discovering Solara, we were hesitant about investing in paid advertising, but the team proved us wrong with their incredible results.", name: "Terri Williams", role: "Founder of Thursday", seed: "w2" },
            { quote: "Solara exceeded our expectations! Their approach to paid advertising is unparalleled, resulting in a substantial growth in our revenue stream.", name: "Belinda Meyers", role: "COO of Friday", seed: "w3" },
            { quote: "Thanks to Solara, our business experienced a remarkable turnaround. Their expertise in paid advertising tripled our revenue in record time.", name: "Sarah Yanna", role: "Director of Saturday", seed: "w4" }
          ].map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 80 }}
              className="bg-[#111] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-2xl"
            >
              <p className="text-brand-text-gray mb-8 flex-grow transition-colors group-hover:text-white/90">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={`https://picsum.photos/seed/${t.seed}/100/100`} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-brand-red/40 transition-all duration-300" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-medium text-white/95">{t.name}</div>
                  <div className="text-sm text-brand-text-gray">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-32 text-center">
        <SectionHeader 
          tag="Team"
          title={<>Meet the <span className="font-serif italic">incredible</span> team.</>}
          subtitle="We pride ourselves of being the best of the best and our team encapsulates that."
        />
        
        <button className="bg-brand-red hover:bg-red-500 text-white px-8 py-3.5 rounded-xl font-medium transition-colors inline-flex items-center gap-2 mb-16">
          Book a 15-min call <ArrowRight className="w-4 h-4" />
        </button>

        <div className="w-full overflow-hidden relative pb-10">
          <div className="flex w-max animate-marquee-team hover:[animation-play-state:paused] active:[animation-play-state:paused]">
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-6 pr-6">
                {[
                  { name: "James Dunn", role: "Founder of Solara", seed: "james" },
                  { name: "Ayesha Dune", role: "Head of Sales", seed: "ayesha" },
                  { name: "Joshua Brown", role: "Social Media Executive", seed: "joshua" },
                  { name: "Sarah Connor", role: "Marketing Director", seed: "sarah" },
                  { name: "Michael Chang", role: "Lead Developer", seed: "michael" },
                  { name: "Emily Rose", role: "Creative Director", seed: "emily" },
                  { name: "David Smith", role: "Account Manager", seed: "david" },
                  { name: "Jessica Alba", role: "Content Strategist", seed: "jessica" }
                ].map((member, i) => (
                  <div key={`${arrayIndex}-${i}`} className="relative rounded-3xl overflow-hidden group w-72 h-96 flex-shrink-0">
                    <img src={`https://picsum.photos/seed/${member.seed}/600/800`} alt={member.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center whitespace-normal">
                      <h3 className="text-2xl font-medium mb-1">{member.name}</h3>
                      <p className="text-brand-text-gray">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="w-[90%] max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-brand-gray border border-white/5 rounded-2xl overflow-hidden">
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left font-medium"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq}
                <div className="text-white/40">
                  {openFaq === i ? <X className="w-5 h-5" /> : <span className="text-xl leading-none">+</span>}
                </div>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-brand-text-gray">
                  We take a data-driven approach, analyzing your target audience, industry trends, and competitor strategies to craft customized campaigns that maximize ROI and align with your specific business goals.
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 relative flex justify-center">
        <div className="relative w-[90%] max-w-5xl rounded-[2rem] border border-white/10 bg-[#050505] overflow-hidden flex flex-col items-center text-center py-24">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-red/40 via-blue-500/20 to-orange-500/40 blur-[120px] rounded-full pointer-events-none opacity-50" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-tight"
            >
              Ready to scale your<br />brand to <span className="font-serif italic">new heights</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-brand-text-gray max-w-2xl mx-auto mb-10"
            >
              If you want to achieve ground-breaking growth with increased sales and profitability with paid ads, then you're in the right place.
            </motion.p>
            <button className="bg-brand-red hover:bg-red-500 text-white px-8 py-3.5 rounded-xl font-medium transition-colors">
              Book a call
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
