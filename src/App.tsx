import React, { useState } from 'react';
import { 
  MessageSquare, 
  Sparkles, 
  Search, 
  CreditCard, 
  TrendingUp, 
  Target, 
  Zap,
  User,
  Bot,
  Stethoscope,
  ShieldCheck,
  PlusCircle,
  History,
  LayoutDashboard,
  CalendarDays,
  Smartphone,
  Droplets,
  Sun,
  Activity,
  Maximize2,
  QrCode,
  Layers,
  ArrowRightLeft,
  Shield,
  ArrowRight,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Types
interface WorkflowStep {
  id: string;
  title: string;
  content: string;
  status?: 'completed' | 'processing';
}

interface RoadmapItem {
  week: number;
  phase: string;
  title: string;
  type: 'in-card' | 'out-card' | 'maintenance' | 'observation';
  icon: React.ReactNode;
  tips?: string;
  isPaid?: boolean;
  description: string;
}

const FaceScan = () => {
  return (
    <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8EC5FC_1px,transparent_1px)] [background-size:20px_20px]" />
      
      {/* Simulation Face Glow */}
      <div className="absolute w-[300px] h-[300px] bg-[#E0C3FC] rounded-full blur-[100px] opacity-20 animate-pulse" />
      
      {/* The "3D" Face Silhouette (SVG Representation) */}
      <div className="relative w-64 h-80 z-10">
        <svg viewBox="0 0 200 250" className="w-full h-full drop-shadow-[0_0_15px_rgba(142,197,252,0.3)]">
          <defs>
            <linearGradient id="faceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E0C3FC" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path 
            d="M100,20 C140,20 170,50 175,100 C180,180 140,230 100,240 C60,230 20,180 25,100 C30,50 60,20 100,20" 
            fill="url(#faceGrad)" 
            className="transition-all duration-700"
          />
          {/* Wireframe details */}
          <path d="M60,80 Q100,70 140,80" fill="none" stroke="#8EC5FC" strokeWidth="0.5" strokeDasharray="2,2" />
          <path d="M70,160 Q100,180 130,160" fill="none" stroke="#E0C3FC" strokeWidth="1" />
        </svg>

        {/* Dynamic Scanning Beam with Glow */}
        <motion.div 
          initial={{ top: '0%' }}
          animate={{ top: '100%' }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#E0C3FC] to-transparent shadow-[0_0_20px_#E0C3FC,0_0_40px_#8EC5FC] z-20"
        >
          {/* Light flare at the scan line */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-4 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md" />
        </motion.div>

        {/* Data Nodes for Face Topology */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-[60%] right-[20%] w-3 h-3 bg-white rounded-full border-2 border-purple-400 shadow-[0_0_10px_purple]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          className="absolute top-[40%] left-[25%] w-3 h-3 bg-white rounded-full border-2 border-blue-400 shadow-[0_0_10px_blue]"
        />
      </div>

      {/* Layer Micro-Info (Glassmorphism Tabs) */}
      <div className="absolute bottom-6 left-10 right-10 flex justify-between gap-4">
        <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/20 p-3 rounded-2xl flex flex-col items-center">
          <Layers size={14} className="mb-1.5 text-purple-400" />
          <span className="text-[9px] text-white/60 font-black tracking-widest uppercase">SMAS Layer</span>
          <span className="text-xs font-black text-white mt-1">ACTIVE SCAN</span>
        </div>
        <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/20 p-3 rounded-2xl flex flex-col items-center">
          <Activity size={14} className="mb-1.5 text-blue-400" />
          <span className="text-[9px] text-white/60 font-black tracking-widest uppercase">Collagen</span>
          <span className="text-xs font-black text-white mt-1">+12% DENSITY</span>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isAdminView, setIsAdminView] = useState(false);

  const roadmap: RoadmapItem[] = [
    { 
      week: 1, 
      phase: 'Deep Lifting Phase', 
      title: 'Thermage FLX (Standard)', 
      type: 'in-card', 
      icon: <Zap size={18} />, 
      isPaid: true,
      description: 'The core stimulation starting week. Reactivating dormant assets for skin revitalization.'
    },
    { 
      week: 2, 
      phase: 'Recovery Cycle', 
      title: 'Barrier Repair Therapy', 
      type: 'observation', 
      icon: <Shield size={18} />, 
      tips: 'Intense Hydration Needed',
      description: 'Stabilizing the skin micro-environment post-stimulation.'
    },
    { 
      week: 3, 
      phase: 'Light Energy Phase', 
      title: 'AOPT Photon Rejuvenation', 
      type: 'out-card', 
      icon: <Sparkles size={18} />, 
      isPaid: false,
      description: 'Precisely targeting melanin and improving global skin luminosity.'
    },
    { 
      week: 5, 
      phase: 'Texture Enhancement', 
      title: 'Dermal Moisture Infusion', 
      type: 'out-card', 
      icon: <Droplets size={18} />, 
      isPaid: false,
      description: 'Filling micro-gaps and enhancing the overall plumpness of the skin.'
    },
    { 
      week: 8, 
      phase: 'Assessment Week', 
      title: 'Aesthetic Audit', 
      type: 'maintenance', 
      icon: <ShieldCheck size={18} />, 
      description: 'Final analysis of transformation efficacy and long-term planning.'
    },
  ];

  const stats = [
    { label: 'Redemption Growth', value: '+45%', subValue: 'Asset Reactivation', icon: CreditCard, color: 'text-blue-600' },
    { label: 'Plan Compliance', value: '88%', subValue: 'Vs Market Avg 52%', icon: Target, color: 'text-emerald-600' },
    { label: 'Unit Revenue Up', value: '￥2.4k', subValue: 'Hybrid Plan Upsell', icon: TrendingUp, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-800 font-sans selection:bg-[#E0C3FC]/30">
      {/* High-end Navigation */}
      <header className="h-20 border-b border-slate-100 bg-white/40 backdrop-blur-2xl sticky top-0 z-50 px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-tr from-[#8EC5FC] to-[#E0C3FC] rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-[#8EC5FC]/30">
            <Stethoscope size={28} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-slate-900 leading-none">AesthetiCal <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC]">AI</span></h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-[0.4em] font-black mt-1">Digital Aesthetic Vision</p>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-slate-400">
             <Search size={20} className="hover:text-slate-900 cursor-pointer transition-colors" />
             <History size={20} className="hover:text-slate-900 cursor-pointer transition-colors" />
          </div>
          <div className="h-10 w-px bg-slate-100" />
          <button 
            onClick={() => setIsAdminView(!isAdminView)}
            className="group relative flex items-center gap-3 px-8 py-3.5 bg-slate-900 text-white rounded-full text-[11px] font-black tracking-widest uppercase transition-all hover:pr-10 hover:shadow-2xl hover:shadow-[#E0C3FC]/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8EC5FC]/20 to-[#E0C3FC]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <LayoutDashboard size={14} className="z-10" />
            <span className="z-10">Decision Hub</span>
          </button>
        </div>
      </header>

      <main className="max-w-[1800px] mx-auto p-12 grid grid-cols-12 gap-12 h-[calc(100vh-80px)] overflow-hidden">
        
        {/* Left: AI Diagnosis Cabin (Cyber Vision) */}
        <section className="col-span-12 lg:col-span-5 h-full flex flex-col pt-2 overflow-hidden">
          <div className="flex-1 bg-white rounded-[56px] border border-slate-100 shadow-[0_30px_60px_rgba(142,197,252,0.12)] flex flex-col overflow-hidden relative">
            <div className="p-10 pb-0">
               <div className="flex items-center justify-between mb-3">
                 <div className="flex items-center gap-2">
                   <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_#60A5FA]" />
                   <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Scan Operation: Active</span>
                 </div>
                 <div className="flex items-center gap-2 px-4 py-1.5 bg-purple-50 text-purple-600 rounded-full text-[10px] font-black uppercase tracking-wider border border-purple-100">
                   <Target size={12} />
                   High-Precision Analysis
                 </div>
               </div>
               <h2 className="text-4xl font-black text-slate-900 tracking-tighter">AI 智能诊疗舱</h2>
               <p className="text-sm text-slate-400 mt-4 leading-relaxed font-medium">
                 正在进行多维人脸建模，通过SMAS层热感应技术锁定深层老化节点。
               </p>
            </div>

            <div className="flex-1 flex flex-col relative px-10 pb-10">
              <FaceScan />
              
              {/* Floating Dialogue Hub (Overlaying bottom of Scan) */}
              <div className="absolute top-[55%] inset-x-8 bottom-6 z-30 flex flex-col">
                <div className="flex-1 bg-white/60 backdrop-blur-2xl rounded-[40px] border border-white/60 shadow-[0_20px_40px_rgba(142,197,252,0.15)] flex flex-col overflow-hidden">
                  {/* Fade mask at top */}
                  <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white/80 to-transparent z-10 pointer-events-none" />
                  
                  <div className="flex-1 overflow-y-auto p-8 space-y-6 scroll-smooth pt-12">
                    {/* User Query */}
                    <div className="flex justify-end">
                       <div className="max-w-[85%] bg-slate-900 text-white px-5 py-3 rounded-3xl rounded-tr-none shadow-lg">
                          <p className="text-[13px] font-medium leading-relaxed">我想改善法令纹和肤色暗沉，做过热玛吉还有两次没用</p>
                       </div>
                    </div>

                    {/* AI Reasoning Flow */}
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#8EC5FC] to-[#E0C3FC] flex items-center justify-center shrink-0 shadow-lg">
                          <Bot size={18} className="text-white" />
                       </div>
                       <div className="flex-1 space-y-4">
                          <div className="bg-blue-50/50 border border-blue-100/50 px-5 py-3 rounded-3xl rounded-tl-none">
                             <p className="text-[13px] text-slate-700 font-medium leading-relaxed">
                                已成功解析您的诉求。正在为您检索<span className="text-blue-600 font-black">历史卡项</span>与<span className="text-blue-600 font-black">肤质报告</span>...
                             </p>
                          </div>
                          
                          {/* Inference Workflow */}
                          <div className="space-y-2 pl-2 border-l-2 border-slate-100">
                             <div className="flex items-center gap-3 py-1">
                                <CheckCircle2 size={12} className="text-[#52C41A]" />
                                <span className="text-[11px] font-black italic text-slate-400">语义识别：法令纹 (Type: Sagging) / 暗沉 (Type: Pigment)</span>
                             </div>
                             <div className="flex items-center gap-3 py-1">
                                <CheckCircle2 size={12} className="text-[#52C41A]" />
                                <span className="text-[11px] font-black italic text-slate-400">资产关联：发现 2 次面部热玛吉余额 (Exp: 2025.12)</span>
                             </div>
                             <div className="flex items-center gap-3 py-1">
                                <CheckCircle2 size={12} className="text-[#52C41A]" />
                                <span className="text-[11px] font-black italic text-slate-700">方案生成：优先执行卡内提拉，补充光子嫩肤提亮</span>
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* Final AI Summary */}
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#8EC5FC] to-[#E0C3FC] flex items-center justify-center shrink-0" />
                       <div className="flex-1 bg-white border border-slate-100 p-5 rounded-3xl shadow-sm">
                          <p className="text-[13px] text-slate-800 font-bold leading-relaxed">
                            建议今日预约一次<span className="text-blue-500">热玛吉</span>，并加购<span className="text-purple-500">M22光子嫩肤</span>作为两周后的肤质补给。
                          </p>
                       </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-white/50 border-t border-slate-50 relative">
                     <input 
                       type="text" 
                       placeholder="追问或修改方案细节..." 
                       className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                     />
                     <button className="absolute right-9 top-1/2 -translate-y-1/2 text-blue-500 hover:scale-110 transition-transform">
                        <ArrowRight size={18} />
                     </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 pt-0 opacity-40 pointer-events-none grayscale">
              <div className="p-8 bg-slate-50/50 rounded-[40px] border border-slate-100 flex items-center justify-between group">
                <div className="flex items-center gap-5">
                   <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-blue-500 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                      <Maximize2 size={28} />
                   </div>
                   <div>
                      <h4 className="text-lg font-black text-slate-900 tracking-tight">预览改善预演</h4>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5">Simulation vs Reality View</p>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="text-right">
                      <p className="text-[10px] font-black text-slate-300 uppercase">Est. Lift</p>
                      <p className="text-xl font-black text-blue-500 tracking-tighter">+40%</p>
                   </div>
                   <ArrowRight size={20} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right: 8-Week Transformation Roadmap (Glassmorphism) */}
        <section className="col-span-12 lg:col-span-7 h-full flex flex-col pt-2">
           <div className="flex-1 bg-white/40 backdrop-blur-3xl rounded-[56px] border border-white/60 shadow-[0_30px_60px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden relative">
              {/* Header: Roadmap Title */}
              <div className="p-10 border-b border-white/40 flex items-center justify-between bg-white/10">
                 <div>
                   <div className="flex items-center gap-2 mb-2">
                     <div className="px-2.5 py-0.5 bg-slate-900 text-white text-[10px] font-black rounded-lg uppercase tracking-widest">Confirmed Plan</div>
                     <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 ml-2 italic">Aesthetic Roadmap v4.2</span>
                   </div>
                   <h2 className="text-4xl font-black text-slate-900 tracking-tighter">8 周变美巡航计划</h2>
                 </div>
                 <div className="flex flex-col items-end">
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Compliance Rate</p>
                    <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC]">98.2%</p>
                 </div>
              </div>

              {/* Vertical Scroll Area */}
              <div className="flex-1 overflow-y-auto p-12 space-y-8 relative">
                 <div className="absolute left-[71px] top-12 bottom-12 w-px bg-slate-200/50 shadow-[inset_0_0_4px_rgba(0,0,0,0.02)]" />

                 {roadmap.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative pl-16 group"
                    >
                       {/* Week Indicator Capsule */}
                       <div className="absolute left-0 top-0 w-14 h-14 rounded-[22px] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 flex items-center justify-center z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <span className="text-xs font-black text-slate-900 italic">W{item.week}</span>
                       </div>

                       {/* High-end Capsule Card */}
                       <div className={`p-8 rounded-[44px] border transition-all duration-500 relative overflow-hidden group/card ${
                         item.type === 'in-card' 
                           ? 'bg-white border-blue-100 shadow-xl shadow-blue-500/5 hover:shadow-2xl'
                           : item.type === 'out-card'
                           ? 'bg-gradient-to-br from-white to-purple-50/30 border-purple-100 border-dashed hover:border-solid hover:bg-white shadow-xl shadow-purple-500/5 hover:shadow-2xl'
                           : 'bg-slate-50/40 border-slate-100 opacity-60 hover:opacity-100'
                       }`}>
                          {/* Inner Decorative Elements */}
                          {item.type === 'in-card' && (
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none opacity-50" />
                          )}

                          <div className="flex items-center justify-between mb-5 relative z-10">
                             <div className="flex items-center gap-4">
                                <div className={`w-14 h-14 rounded-[22px] bg-white shadow-lg flex items-center justify-center transition-colors ${
                                  item.type === 'in-card' ? 'text-blue-500 border border-blue-50' : 'text-purple-500 border border-purple-50'
                                }`}>
                                   {item.icon}
                                </div>
                                <div>
                                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1 leading-none">{item.phase}</p>
                                   <h4 className="text-xl font-black text-slate-900 tracking-tight">{item.title}</h4>
                                </div>
                             </div>
                             
                             <div className="flex flex-col items-end">
                                {item.type === 'in-card' && (
                                  <div className="flex flex-col items-end gap-1.5">
                                    <span className="px-3 py-1 bg-blue-600 text-white text-[9px] font-black rounded-full uppercase tracking-widest shadow-lg shadow-blue-600/20">卡内资产盘活</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Asset Active</span>
                                  </div>
                                )}
                                {item.type === 'out-card' && (
                                  <div className="flex flex-col items-end gap-1">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-600 text-[9px] font-black rounded-full uppercase tracking-widest">美学增益建议</span>
                                    <div className="flex items-baseline gap-1 mt-1">
                                      <span className="text-lg font-black text-purple-600 leading-none">￥599</span>
                                      <span className="text-[10px] text-slate-300 font-bold line-through">￥1280</span>
                                    </div>
                                  </div>
                                )}
                             </div>
                          </div>
                          
                          <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-[90%] relative z-10">{item.description}</p>
                          
                          {item.tips && (
                            <div className="mt-6 flex items-center gap-2.5 relative z-10">
                               <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full flex items-center gap-2 border border-emerald-100">
                                 <Activity size={10} />
                                 <span className="text-[10px] font-black uppercase tracking-widest">{item.tips}</span>
                               </div>
                            </div>
                          )}
                       </div>
                    </motion.div>
                 ))}
              </div>

              {/* Bottom: Execution & Call to Action */}
              <div className="p-10 border-t border-white/40 bg-white/60 backdrop-blur-2xl flex items-center gap-8">
                 <div className="flex-1 bg-slate-900 rounded-[36px] p-2 flex items-center overflow-hidden">
                    <div className="flex-1 flex items-center gap-5 pl-6 pr-4">
                       <div className="w-14 h-14 bg-white/10 rounded-[22px] flex items-center justify-center text-white/60">
                          <QrCode size={28} strokeWidth={1.5} />
                       </div>
                       <div>
                          <p className="text-white text-base font-black tracking-tight">获取完整美学方案</p>
                          <p className="text-white/40 text-[10px] uppercase font-black tracking-[0.3em] mt-0.5">Scan to sync your profile</p>
                       </div>
                    </div>
                    <button className="h-16 px-10 bg-white text-slate-900 rounded-[28px] font-black text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl">
                       即刻生成并排期
                    </button>
                 </div>
                 <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-[28px] border border-slate-100 bg-white flex items-center justify-center text-slate-400 cursor-pointer hover:shadow-xl hover:text-slate-900 transition-all">
                       <Smartphone size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">App Link</span>
                 </div>
              </div>
           </div>
        </section>
      </main>

      {/* Decision Intelligence Panel (Bottom Overlay) */}
      <AnimatePresence>
        {isAdminView && (
          <motion.div 
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 500, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 100 }}
            className="fixed bottom-0 inset-x-0 z-[100] px-12 pb-12"
          >
            <div className="bg-slate-900/95 backdrop-blur-3xl border border-white/10 p-10 rounded-[64px] shadow-[0_50px_150px_rgba(0,0,0,0.6)]">
               <div className="flex items-center justify-between mb-10">
                 <div className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <ShieldCheck size={18} />
                   </div>
                   <h3 className="text-[11px] font-black text-white/40 uppercase tracking-[0.5em]">Digital Institutional Intelligence Dashboard</h3>
                 </div>
                 <div 
                   onClick={() => setIsAdminView(false)}
                   className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white cursor-pointer transition-colors"
                 >
                   <ChevronDown size={20} />
                 </div>
               </div>
               
               <div className="grid grid-cols-3 gap-10">
                 {stats.map((stat, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ y: 30, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ delay: idx * 0.1 + 0.3 }}
                     className="p-8 rounded-[40px] bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all flex flex-col items-center text-center group"
                   >
                     <div className="p-4 bg-white/10 rounded-[24px] text-blue-400 group-hover:scale-110 transition-transform mb-6">
                       <stat.icon size={28} />
                     </div>
                     <p className="text-4xl font-black text-white tracking-tighter mb-2">{stat.value}</p>
                     <p className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] mb-3">{stat.label}</p>
                     <p className="text-[13px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 italic">
                       {stat.subValue}
                     </p>
                   </motion.div>
                 ))}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
