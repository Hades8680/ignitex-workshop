import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, UploadCloud, Bot, BarChart3, CheckCircle2, XCircle, Sparkles, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import { solutionWorkflow, comparisonData } from '../data/siteData';

const iconMap = {
  UploadCloud: UploadCloud,
  Bot: Bot,
  BarChart3: BarChart3,
};

export default function SolutionSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="solution" className="py-20 md:py-28 bg-white relative">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Cpu className="w-4 h-4 text-sky-600" />
            <span>Phần 3 • Kiến Trúc Giải Pháp Đột Phá</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            ABSOFT LEARNING – Khi Giáo Viên <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
              Truyền Thụ Tri Thức Cho AI
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Không thay thế người thầy, ABSOFT trao cho người thầy quyền năng "nhân bản tri thức" để AI đồng hành 1-1 cùng từng học sinh, đảm bảo không một ai bị bỏ lại phía sau.
          </p>
        </div>

        {/* 3-Step Interactive Workflow */}
        <div className="mb-24">
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase">
              Quy Trình Vận Hành 3 Bước Tự Động Hóa
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Từ Tri Thức Chuyên Gia Đến Trải Nghiệm Học Tập Cá Nhân Hóa
            </h3>
          </div>

          {/* Step Selector Tabs (Desktop & Tablet) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {solutionWorkflow.map((step, idx) => {
              const Icon = iconMap[step.icon] || Cpu;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-5 rounded-2xl text-left border transition-all duration-300 flex items-center gap-4 ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-50 to-indigo-50/70 border-sky-400 shadow-md ring-2 ring-sky-400/20'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 shadow-2xs'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold transition-all ${
                      isActive
                        ? 'bg-gradient-to-tr from-sky-600 to-indigo-600 text-white shadow-md shadow-sky-500/25 scale-105'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-sky-600 tracking-wider">
                        BƯỚC {step.step}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 truncate">
                        {step.phase}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base truncate mt-0.5">
                      {step.title}
                    </h4>
                  </div>
                  {isActive && (
                    <span className="hidden lg:block w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Interactive Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden"
            >
              {/* Decorative background grid inside card */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left side: Description & Key Benefit */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{solutionWorkflow[activeStep].badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    Bước {solutionWorkflow[activeStep].step}: {solutionWorkflow[activeStep].title}
                  </h3>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                    {solutionWorkflow[activeStep].description}
                  </p>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-bold text-white text-sm">Điểm Đột Phá Công Nghệ:</h5>
                        <p className="text-emerald-300 text-sm mt-0.5 leading-relaxed">
                          {solutionWorkflow[activeStep].keyBenefit}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      onClick={() => setActiveStep((activeStep + 1) % 3)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-sky-400 hover:bg-sky-300 transition-colors"
                    >
                      <span>Xem bước kế tiếp</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-slate-400">
                      Bước {activeStep + 1} / 3 của quy trình
                    </span>
                  </div>
                </div>

                {/* Right side: Visual Diagram Graphic */}
                <div className="lg:col-span-5">
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/15 backdrop-blur-xl space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-amber-400" />
                        Trạng thái Động cơ ABSOFT
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
                        Đang hoạt động 100%
                      </span>
                    </div>

                    {activeStep === 0 && (
                      <div className="space-y-3 text-xs sm:text-sm">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <span className="text-slate-300">Tài liệu giáo trình (PDF/Docx)</span>
                          <span className="text-sky-300 font-bold">Đã đồng bộ</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <span className="text-slate-300">Vector Embeddings (RAG)</span>
                          <span className="text-indigo-300 font-bold">1,536 chiều</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <span className="text-slate-300">Ranh giới tri thức sư phạm</span>
                          <span className="text-emerald-300 font-bold">Khóa chặt Anti-hallucination</span>
                        </div>
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div className="space-y-3 text-xs sm:text-sm">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <span className="text-slate-300">Mô hình sư phạm gợi mở</span>
                          <span className="text-sky-300 font-bold">Socratic Method</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <span className="text-slate-300">Độ trễ tương tác AI</span>
                          <span className="text-indigo-300 font-bold">&lt; 1.0 giây</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <span className="text-slate-300">Cá nhân hóa lộ trình</span>
                          <span className="text-emerald-300 font-bold">Thích ứng theo từng câu hỏi</span>
                        </div>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="space-y-3 text-xs sm:text-sm">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <span className="text-slate-300">Dashboard Phụ huynh & Giảng viên</span>
                          <span className="text-sky-300 font-bold">Cập nhật tức thời</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <span className="text-slate-300">Bản đồ điểm yếu kiến thức</span>
                          <span className="text-indigo-300 font-bold">Phân tích vi mô</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                          <span className="text-slate-300">Cảnh báo can thiệp sư phạm</span>
                          <span className="text-emerald-300 font-bold">Tự động gửi thông báo</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Khối "Sự cần thiết của nền tảng": Comparison Table */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold tracking-widest text-indigo-600 uppercase">
              Tính Cấp Thiết Của Đề Tài
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              So Sánh Trực Diện: Phương Pháp Cũ vs. ABSOFT LEARNING
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
              Thấy rõ sự khác biệt mang tính cách mạng khi đưa Giáo viên AI vào hỗ trợ người học.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 shadow-xl bg-white">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-5 px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700 w-1/4">
                    Tiêu Chí Đánh Giá
                  </th>
                  <th className="py-5 px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-rose-700 bg-rose-50/50 w-3/8">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-500" />
                      <span>Mô Hình Truyền Thống Cũ</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-sky-700 bg-sky-50/60 w-3/8">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-600" />
                      <span>ABSOFT LEARNING (Giáo Viên AI)</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm sm:text-base">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4.5 px-6 font-bold text-slate-800 text-sm">
                      {row.criterion}
                    </td>
                    <td className="py-4.5 px-6 text-slate-600 bg-rose-50/20 text-sm">
                      <span className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{row.traditional}</span>
                      </span>
                    </td>
                    <td className="py-4.5 px-6 font-semibold text-slate-900 bg-sky-50/30 text-sm">
                      <span className="flex items-start gap-2 text-sky-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{row.absoft}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
