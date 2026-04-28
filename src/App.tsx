/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  MessageSquare, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Search, 
  CreditCard, 
  Clock, 
  TrendingUp, 
  Target, 
  Zap,
  User,
  Bot,
  Stethoscope,
  ShieldCheck,
  ArrowRight,
  PlusCircle,
  History,
  LayoutDashboard,
  Star,
  CalendarDays,
  Smartphone,
  Droplets,
  Sun,
  Activity,
  Shield,
  Info
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
}

export default function App() {
  const [isWorkflowExpanded, setIsWorkflowExpanded] = useState(true);
  const [isAdminView, setIsAdminView] = useState(false);

  const workflowSteps: WorkflowStep[] = [
    { id: '1', title: '语义解析', content: '识别核心诉求：法令纹（韧带松弛型）、肤色暗沉（代谢滞后型）。' },
    { id: '2', title: '卡项校验', content: '检测资产：热玛吉（面部）剩余 2 次，有效期至 2025.12。' },
    { id: '3', title: '逻辑配伍', content: '利用热玛吉深层加热促胶原新生，协同 M22 爆破表皮黑色素。' },
    { id: '4', title: '冲突检测', content: '安全校验：热玛吉与光子嫩肤间隔需满 14 天，排期合规。' },
  ];

  const roadmap: RoadmapItem[] = [
    { 
      week: 1, 
      phase: 'Phase 1: 启动期', 
      title: '热玛吉 (面部)', 
      type: 'in-card', 
      icon: <Zap size={14} />, 
      isPaid: true 
    },
    { 
      week: 2, 
      phase: 'Phase 1: 观察期', 
      title: '皮肤自我修复', 
      type: 'observation', 
      icon: <Activity size={14} />, 
      tips: '多补水、物理防晒' 
    },
    { 
      week: 3, 
      phase: 'Phase 2: 焕亮期', 
      title: 'M22 AOPT 光子嫩肤', 
      type: 'out-card', 
      icon: <Sparkles size={14} />, 
      isPaid: false 
    },
    { 
      week: 4, 
      phase: 'Phase 2: 补水期', 
      title: '基础玻尿酸导入', 
      type: 'out-card', 
      icon: <Droplets size={14} />, 
      isPaid: false 
    },
    { 
      week: 5, 
      phase: 'Phase 3: 维稳期', 
      title: '居家护理周', 
      type: 'maintenance', 
      icon: <Sun size={14} />, 
      tips: '高浓度VC修复' 
    },
    { 
      week: 6, 
      phase: 'Phase 3: 二次加强', 
      title: '热玛吉 (眼周/局部)', 
      type: 'in-card', 
      icon: <Target size={14} />, 
      isPaid: true 
    },
    { 
      week: 7, 
      phase: 'Phase 4: 巩固期', 
      title: '皮肤质感微调', 
      type: 'maintenance', 
      icon: <Shield size={14} /> 
    },
    { 
      week: 8, 
      phase: 'Phase 4: 巡检期', 
      title: '最后的质感巡检', 
      type: 'maintenance', 
      icon: <Search size={14} /> 
    },
  ];

  const stats = [
    { label: '方案制定时间', value: '5min', subValue: '20min → 5min', icon: Clock, color: 'text-blue-600' },
    { label: '方案准确率', value: '96%', subValue: '基于10w+临床案例', icon: Target, color: 'text-emerald-600' },
    { label: '采纳率提升', value: '+32%', subValue: '对比人工咨询', icon: TrendingUp, color: 'text-orange-600' },
    { label: '核销率', value: '67%', subValue: '38% → 67%', icon: CreditCard, color: 'text-purple-600' },
    { label: '客单价提升', value: '+28%', subValue: '复合方案带动', icon: Zap, color: 'text-rose-600' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-800 font-sans selection:bg-[#52C41A]/20">
      {/* Header */}
      <header className="h-16 border-b border-slate-100 bg-white/60 backdrop-blur-xl sticky top-0 z-50 px-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-[#52C41A] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#52C41A]/30">
            <Stethoscope size={20} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-slate-900">AesthetiCal <span className="text-[#52C41A]">Pro</span></h1>
            <p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Smart Planning Intelligence</p>
          </div>
        </div>
        
        <div className="flex items-center gap-5">
          <button 
            onClick={() => setIsAdminView(!isAdminView)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all border shadow-sm ${
              isAdminView 
                ? 'bg-purple-600 text-white border-purple-600' 
                : 'bg-white text-slate-500 border-slate-200 hover:border-purple-300'
            }`}
          >
            <LayoutDashboard size={14} />
            {isAdminView ? '管理后台已开启' : '进入机构后台'}
          </button>
          
          <div className="h-6 w-px bg-slate-100" />
          
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-slate-900">咨询智库</p>
              <p className="text-[10px] text-[#52C41A]">在线协助中</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden text-slate-400">
               <User size={16} />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto p-8 grid grid-cols-12 gap-8 h-[calc(100vh-64px)] items-start overflow-hidden">
        
        {/* Left Column: Emotional Consultation Hub */}
        <section className="col-span-12 lg:col-span-4 h-full flex flex-col pt-2 overflow-hidden">
          <div className="flex-1 bg-white rounded-[32px] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#52C41A]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            
            <div className="p-5 border-b border-slate-50 flex items-center justify-between bg-white/50 backdrop-blur-sm z-10">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#52C41A]/10 rounded-lg">
                  <MessageSquare size={16} className="text-[#52C41A]" />
                </div>
                <span className="font-bold text-sm tracking-tight">情感化对话区</span>
              </div>
              <button className="text-slate-300 hover:text-slate-500 transition-colors">
                <History size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8 z-10">
              <div className="flex justify-end pr-2">
                <motion.div 
                  initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                  className="max-w-[85%] bg-slate-900 text-white p-4 rounded-3xl rounded-tr-none shadow-xl shadow-slate-200"
                >
                  <p className="text-[13px] leading-relaxed font-medium">
                    我想改善法令纹和肤色暗沉，做过热玛吉还有两次没用。
                  </p>
                </motion.div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                  <Bot size={22} className="text-[#52C41A]" />
                </div>
                <div className="flex-1 space-y-6">
                  <motion.div 
                    initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    className="p-5 bg-[#52C41A]/5 rounded-[24px] rounded-tl-none border border-[#52C41A]/10"
                  >
                    <p className="text-[13px] text-slate-700 leading-relaxed">
                      收到。针对您的<span className="font-bold text-slate-900">法令纹焦虑</span>，我已为您检索了个人档案及院内项目库。我会优先盘活您的<span className="font-bold text-[#52C41A]">热玛吉余次</span>，并协同肤色提亮方案，为您制定“深层提升+表皮焕亮”的复合计划。
                    </p>
                  </motion.div>

                  <div className="bg-slate-50/80 rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                    <button 
                      onClick={() => setIsWorkflowExpanded(!isWorkflowExpanded)}
                      className="w-full p-4 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Zap size={14} className="text-amber-400" />
                        面诊逻辑思维链
                      </div>
                      {isWorkflowExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    
                    <AnimatePresence>
                      {isWorkflowExpanded && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden border-t border-slate-100"
                        >
                          <div className="p-5 space-y-5">
                            {workflowSteps.map((step, idx) => (
                              <div key={idx} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                  <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400">
                                    {idx + 1}
                                  </div>
                                  {idx !== workflowSteps.length - 1 && <div className="w-px h-full bg-slate-200 my-1" />}
                                </div>
                                <div className="pb-2">
                                  <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider">
                                    {idx === 0 && '[分析] '}
                                    {idx === 1 && '[资产] '}
                                    {idx === 2 && '[科学] '}
                                    {idx === 3 && '[安全] '}
                                    {step.title}
                                  </h4>
                                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{step.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white border-t border-slate-50">
              <div className="flex gap-3 items-center">
                <input 
                  type="text" 
                  placeholder="询问更多治疗细节..." 
                  className="flex-1 bg-slate-50 border-none rounded-2xl px-5 py-3.5 text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#52C41A]/20 transition-all"
                />
                <button className="w-12 h-12 bg-[#52C41A] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#52C41A]/30 hover:scale-105 transition-all">
                  <ArrowRight size={20} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: 8-Week Transformation Roadmap */}
        <section className="col-span-12 lg:col-span-8 h-full flex flex-col pt-2 overflow-hidden">
          <div className="flex-1 bg-white rounded-[32px] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col overflow-hidden">
            {/* Top Header: Cycle Overview */}
            <div className="px-8 py-5 border-b border-slate-50 bg-[#52C41A]/5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="px-2 py-0.5 bg-[#52C41A] text-white text-[9px] font-bold rounded-md uppercase tracking-wider">方案核定版</div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">AesthetiCal Intelligence Plan</span>
                </div>
                <h2 className="text-xl font-black text-slate-900 tracking-tight">紧致提亮 · 双月阶梯计划</h2>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-slate-400" />
                  <span className="text-xs font-bold text-slate-500 underline decoration-slate-200 decoration-2 underline-offset-4">60 天周期</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-xl border border-[#52C41A]/20 shadow-sm">
                  <p className="text-[9px] font-bold text-slate-400">方案匹配度</p>
                  <p className="text-sm font-black text-[#52C41A]">98%</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {/* AI人脸分析模块 (Visual Diagnosis) */}
              <div className="p-8 border-b border-slate-50 flex gap-12 items-center bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50/30 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                
                {/* Face Portrait with Markers */}
                <div className="relative w-64 h-64 shrink-0">
                  <div className="absolute inset-0 bg-slate-50 rounded-[48px] border border-slate-100 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" 
                      alt="Facial Portrait"
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-[#52C41A]/5 mix-blend-multiply" />
                  </div>
                  
                  {/* Nasolabial Fold Marker */}
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }} transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute top-[62%] right-[32%] z-20"
                  >
                    <div className="w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-help group/marker">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    </div>
                    <div className="absolute left-7 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-1.5 rounded-xl shadow-xl w-32 border-l-4 border-l-amber-400 pointer-events-none">
                      <p className="text-[10px] font-black text-slate-900">法令纹区 (松弛)</p>
                      <p className="text-[9px] text-amber-600 font-bold">改善潜力: +40%</p>
                    </div>
                  </motion.div>

                  {/* Dullness Marker */}
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }} transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                    className="absolute top-[38%] left-[25%] z-20"
                  >
                    <div className="w-5 h-5 bg-purple-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-help group/marker">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    </div>
                    <div className="absolute right-7 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-1.5 rounded-xl shadow-xl w-32 border-r-4 border-r-purple-400 pointer-events-none">
                      <p className="text-[10px] font-black text-slate-900 text-right">面颊区 (暗沉)</p>
                      <p className="text-[9px] text-purple-600 font-bold text-right">预计提亮: +20%</p>
                    </div>
                  </motion.div>
                </div>

                {/* Progress and Value Panel */}
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="p-1.5 bg-purple-100 rounded-lg">
                        <Target size={16} className="text-purple-600" />
                      </div>
                      <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest leading-none">皮肤问题可视化诊断</h3>
                    </div>
                    <p className="text-xs text-slate-400 font-bold ml-9">AI Facial Insight Analysis & Pre-visualization</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-[#52C41A]/5 rounded-[24px] border border-[#52C41A]/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap size={14} className="text-[#52C41A]" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">热玛吉提升感</span>
                      </div>
                      <p className="text-lg font-black text-[#52C41A]">40% <span className="text-[10px] text-slate-300 font-normal ml-0.5">EST.</span></p>
                    </div>
                    <div className="p-5 bg-purple-50 rounded-[24px] border border-purple-100">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles size={14} className="text-purple-600" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">肤色提亮感</span>
                      </div>
                      <p className="text-lg font-black text-purple-600">20% <span className="text-[10px] text-slate-300 font-normal ml-0.5">EST.</span></p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 pt-2">
                     <div className="flex items-center gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm ring-2 ring-amber-100" />
                       <span className="text-[10px] font-bold text-slate-400">目前状态</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-[#52C41A] shadow-sm ring-2 ring-[#52C41A]/10" />
                       <span className="text-[10px] font-bold text-slate-400">改善预演</span>
                     </div>
                  </div>
                </div>
              </div>

              {/* Body: 8-Week Gantt Roadmap */}
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <CalendarDays size={18} className="text-slate-400" />
                      <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">8-Week Transformation Roadmap</h3>
                   </div>
                   <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-[#52C41A]" />
                        <span className="text-[10px] font-bold text-slate-400">卡内消耗</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded border border-[#52C41A] border-dashed" />
                        <span className="text-[10px] font-bold text-slate-400">建议加购</span>
                      </div>
                   </div>
                </div>

                <div className="overflow-x-auto pb-4">
                  <div className="min-w-[1000px] grid grid-cols-8 gap-4 items-stretch">
                    {roadmap.map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`relative flex flex-col rounded-[24px] p-5 transition-all cursor-default border ${
                          item.type === 'in-card' 
                            ? 'bg-[#52C41A] text-white border-[#52C41A] shadow-lg shadow-[#52C41A]/20 ring-4 ring-white'
                            : item.type === 'out-card'
                            ? 'bg-white border-[#52C41A]/30 border-dashed border-2 shadow-sm'
                            : 'bg-white/50 border-slate-100'
                        }`}
                      >
                        {/* Week Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                            item.type === 'in-card' ? 'bg-white/20' : 'bg-slate-100 text-slate-400'
                          }`}>
                            W{item.week}
                          </div>
                          {item.isPaid && <ShieldCheck size={14} className={item.type === 'in-card' ? 'text-white/60' : 'text-[#52C41A]'} />}
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3">
                           <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                             item.type === 'in-card' ? 'bg-white/10' : 'bg-slate-50 text-slate-400'
                           }`}>
                              {item.icon}
                           </div>
                           <div>
                              <p className={`text-[9px] font-black uppercase tracking-tighter mb-1 ${
                                item.type === 'in-card' ? 'text-white/60' : 'text-slate-400'
                              }`}>{item.phase}</p>
                              <h4 className="text-xs font-black leading-tight">{item.title}</h4>
                           </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-current opacity-10 flex flex-col items-center gap-1">
                           <div className="w-8 h-1 bg-current rounded-full" />
                           <div className="w-12 h-1 bg-current rounded-full" />
                        </div>

                        <div className="mt-4">
                          {item.type === 'in-card' && (
                             <span className="text-[9px] font-bold bg-white/20 px-2 py-1 rounded-md">卡内余额核销</span>
                          )}
                          {item.type === 'out-card' && (
                             <div className="space-y-1">
                                <span className="text-[9px] font-bold text-[#52C41A] bg-[#52C41A]/5 px-2 py-1 rounded-md block text-center">建议加购</span>
                                <span className="text-[10px] font-black text-slate-900 block text-center">特惠: ￥599</span>
                             </div>
                          )}
                          {item.tips && (
                             <p className="text-[9px] text-slate-400 italic text-center">{item.tips}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Execution & CTA */}
            <div className="p-8 border-t border-slate-100 bg-white grid grid-cols-12 gap-8 items-center">
               <div className="col-span-12 lg:col-span-7">
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-white rounded-xl shadow-sm">
                           <CreditCard size={20} className="text-slate-400" />
                        </div>
                        <div>
                           <p className="text-xs font-bold text-slate-900">预算明细汇总</p>
                           <p className="text-[10px] text-slate-400 mt-0.5">
                              共计 8 周计划：<span className="text-blue-500 font-bold">卡内消耗 2 项</span>，建议 <span className="text-[#52C41A] font-bold">新增 2 项</span>
                           </p>
                        </div>
                     </div>
                     <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400">预计今日支付</p>
                        <p className="text-xl font-black text-slate-900">￥599 <span className="text-[10px] text-rose-500 ml-1">立省 ￥681</span></p>
                     </div>
                  </div>
               </div>

               <div className="col-span-12 lg:col-span-5 flex gap-3">
                  <button className="flex-1 h-14 bg-slate-900 text-white rounded-[22px] font-bold text-sm shadow-xl shadow-slate-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5">
                     <CalendarDays size={18} />
                     一键同步手机日历
                  </button>
                  <button className="flex-1 h-14 bg-[#52C41A] text-white rounded-[22px] font-bold text-sm shadow-xl shadow-[#52C41A]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5">
                     <Smartphone size={18} />
                     立即预约服务
                  </button>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* Admin Stat Footer (Institution Level) */}
      <AnimatePresence>
        {isAdminView && (
          <motion.footer 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-slate-100 bg-white/80 backdrop-blur-md overflow-hidden"
          >
             <div className="max-w-[1600px] mx-auto p-10 pt-6">
               <div className="flex items-center gap-2 mb-6">
                 <ShieldCheck size={16} className="text-purple-600" />
                 <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">院内管理决策看板 (机构后端实时联动)</span>
               </div>
               <div className="grid grid-cols-5 gap-6">
                 {stats.map((stat, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ delay: idx * 0.1 }}
                     className="p-6 rounded-[28px] border border-slate-100 bg-white/50 shadow-sm hover:shadow-xl transition-all group"
                   >
                     <div className="flex items-center justify-between mb-4">
                       <div className={`p-2.5 rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform ${stat.color}`}>
                         <stat.icon size={20} />
                       </div>
                       <span className="text-2xl font-black text-slate-900 tracking-tighter">{stat.value}</span>
                     </div>
                     <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                     <p className="text-[11px] text-[#52C41A] font-bold mt-1.5 bg-[#52C41A]/5 inline-block px-2 py-0.5 rounded-lg border border-[#52C41A]/10">{stat.subValue}</p>
                   </motion.div>
                 ))}
               </div>
             </div>
          </motion.footer>
        )}
      </AnimatePresence>
    </div>
  );
}


