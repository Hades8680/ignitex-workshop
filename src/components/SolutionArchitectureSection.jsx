import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, UploadCloud, Bot, BarChart3, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Zap, Layers, BookOpen, Brain, Activity } from 'lucide-react';
import { solutionSection } from '../data/siteData';

const iconMap = {
  UploadCloud: UploadCloud,
  Bot: Bot,
  BarChart3: BarChart3,
};

export default function SolutionArchitectureSection() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="solution" className="py-20 md:py-28 bg-white relative">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Cpu className="w-4 h-4 text-sky-600" />
            <span>Phần 3 • Kiến Trúc Giải Pháp & 3 Trụ Cột Hoạt Động</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {solutionSection.title}
          </h2>

          {/* Deep-dive Definition Card */}
          <div className="mt-6 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-sky-50/80 via-indigo-50/50 to-emerald-50/70 border border-slate-200/80 shadow-xs text-justify sm:text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 block mb-2">
              {solutionSection.subtitle}
            </span>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {solutionSection.definition}
            </p>
          </div>
        </div>

        {/* 3 Pillars Selector Tabs */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {solutionSection.pillars.map((pillar, idx) => {
              const Icon = iconMap[pillar.icon] || Cpu;
              const isActive = activePillar === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(idx)}
                  className={`p-6 rounded-3xl text-left border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-50 to-indigo-50/80 border-sky-400 shadow-md ring-2 ring-sky-400/20'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform ${
                      isActive
                        ? 'bg-gradient-to-tr from-sky-600 to-indigo-600 text-white shadow-md shadow-sky-500/25 scale-105'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black text-sky-600 tracking-wider">
                        TRỤ CỘT {pillar.step}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {pillar.badge}
                      </span>
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                      {pillar.pillarName.split(':')[1] || pillar.pillarName}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Pillar Showcase Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            {/* Background blur */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Mechanism & Pedagogical Depth */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Trụ Cột {solutionSection.pillars[activePillar].step} • {solutionSection.pillars[activePillar].badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                  {solutionSection.pillars[activePillar].pillarName}
                </h3>

                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  <div>
                    <strong className="text-white block font-semibold mb-1">
                      1. Cơ chế vận hành kỹ thuật (Operational Mechanism):
                    </strong>
                    <p className="text-justify">{solutionSection.pillars[activePillar].mechanism}</p>
                  </div>

                  <div>
                    <strong className="text-emerald-400 block font-semibold mb-1">
                      2. Giá trị sư phạm & Triệt tiêu rủi ro (Pedagogical Impact):
                    </strong>
                    <p className="text-justify text-slate-200">{solutionSection.pillars[activePillar].pedagogicalValue}</p>
                  </div>
                </div>

                {/* Highlight Checkpoints */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2.5">
                  <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block">
                    Đặc Điểm Kỹ Thuật Đột Phá:
                  </span>
                  <ul className="space-y-2">
                    {solutionSection.pillars[activePillar].highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => setActivePillar((activePillar + 1) % 3)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-sky-400 hover:bg-sky-300 transition-colors"
                  >
                    <span>Xem Trụ Cột Kế Tiếp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-slate-400">
                    Trụ cột {activePillar + 1} / 3 của kiến trúc ABSOFT
                  </span>
                </div>
              </div>

              {/* Right Column: Architectural Simulation Visual */}
              <div className="lg:col-span-5">
                <div className="bg-white/10 rounded-3xl p-6 sm:p-7 border border-white/15 backdrop-blur-xl space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-amber-400" />
                      Trạng Thái Pipeline Sư Phạm AI
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
                      Hoạt động 100%
                    </span>
                  </div>

                  {activePillar === 0 && (
                    <div className="space-y-3.5 text-xs sm:text-sm">
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-slate-300 font-medium block">Nguồn tri thức giáo viên</span>
                          <span className="text-[11px] text-slate-400">Slide, PDF, Ngân hàng đề thi</span>
                        </div>
                        <span className="text-sky-300 font-bold">Đã phân tích cú pháp</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-slate-300 font-medium block">Vector Embedding RAG</span>
                          <span className="text-[11px] text-slate-400">Cosine similarity &gt; 0.82</span>
                        </div>
                        <span className="text-indigo-300 font-bold">1,536 chiều</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-slate-300 font-medium block">Biên giới kiến thức</span>
                          <span className="text-[11px] text-slate-400">Khóa chặt Anti-hallucination</span>
                        </div>
                        <span className="text-emerald-300 font-bold">Zero Hallucination</span>
                      </div>
                    </div>
                  )}

                  {activePillar === 1 && (
                    <div className="space-y-3.5 text-xs sm:text-sm">
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-slate-300 font-medium block">Thuật toán Socratic Method</span>
                          <span className="text-[11px] text-slate-400">Hỏi mở kích thích tư duy</span>
                        </div>
                        <span className="text-sky-300 font-bold">Bật mặc định</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-slate-300 font-medium block">Độ trễ tương tác AI</span>
                          <span className="text-[11px] text-slate-400">Phản xạ hội thoại tự nhiên</span>
                        </div>
                        <span className="text-indigo-300 font-bold">&lt; 0.8s</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-slate-300 font-medium block">Quy tắc giải bài tập</span>
                          <span className="text-[11px] text-slate-400">Không làm hộ - Hướng dẫn tự giải</span>
                        </div>
                        <span className="text-emerald-300 font-bold">Nghiêm ngặt</span>
                      </div>
                    </div>
                  )}

                  {activePillar === 2 && (
                    <div className="space-y-3.5 text-xs sm:text-sm">
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-slate-300 font-medium block">Bản đồ năng lực (Mastery Level)</span>
                          <span className="text-[11px] text-slate-400">Theo dõi lỗ hổng vi mô</span>
                        </div>
                        <span className="text-sky-300 font-bold">Cập nhật theo câu hỏi</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-slate-300 font-medium block">Cổng Dashboard Phụ huynh</span>
                          <span className="text-[11px] text-slate-400">Báo cáo tiến độ trực quan</span>
                        </div>
                        <span className="text-indigo-300 font-bold">Đồng bộ tức thì</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-slate-300 font-medium block">Khuyến nghị can thiệp sư phạm</span>
                          <span className="text-[11px] text-slate-400">Đề xuất bài ôn tập tự động</span>
                        </div>
                        <span className="text-emerald-300 font-bold">Tự động kích hoạt</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 text-[11px] text-slate-400 border-t border-white/10 flex items-center justify-between">
                    <span>Đơn vị nghiên cứu: IGNITEX Lab</span>
                    <span className="text-sky-300">Đại học GTVT (UTC)</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
