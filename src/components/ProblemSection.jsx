import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Users2, Target, Coins, EyeOff, TrendingDown, ArrowUpRight } from 'lucide-react';
import { marketPainPoints } from '../data/siteData';

const iconMap = {
  Users2: Users2,
  Target: Target,
  Coins: Coins,
  EyeOff: EyeOff,
};

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f01a_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f01a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>Phần 2 • Nỗi Đau Thực Tại & Thách Thức Thị Trường</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Tại Sao Mô Hình Học Tập Truyền Thống <span className="text-rose-600">Đang Gặp Giới Hạn?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Dù công nghệ số đã phát triển vượt bậc, mô hình lớp học 1-Nhiều vẫn tồn đọng những nút thắt kinh niên khiến cả học sinh, giáo viên và phụ huynh phải trả giá đắt.
          </p>
        </div>

        {/* 4 Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marketPainPoints.map((point, index) => {
            const Icon = iconMap[point.icon] || AlertTriangle;
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 hover:border-rose-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header with Icon & Stat */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-black text-rose-600 tracking-tight block">
                        {point.stat}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                        {point.statLabel}
                      </span>
                    </div>
                  </div>

                  {/* Badge & Title */}
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200/60 mb-3">
                    {point.badge}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {point.description}
                  </p>
                </div>

                {/* Card Footer Warning Impact */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <div className="flex items-center gap-1.5 text-rose-600">
                    <TrendingDown className="w-4 h-4" />
                    <span>Hậu quả: {point.highlight}</span>
                  </div>
                  <span className="text-slate-400 group-hover:text-rose-600 transition-colors">
                    #VấnĐề_0{point.id}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Conclusion Callout */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-extrabold tracking-widest text-emerald-400 uppercase">
              Lời Giải Đáp Từ IGNITEX
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">
              Cần một cơ chế đột phá: Chuyển giao tri thức từ Người sang AI
            </h4>
            <p className="text-sm text-slate-300">
              Để giáo viên không còn bị vắt kiệt sức, và mọi học sinh đều có gia sư 1-1 chuyên nghiệp 24/7.
            </p>
          </div>
          <a
            href="#solution"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm text-slate-900 bg-emerald-400 hover:bg-emerald-300 shadow-md shadow-emerald-400/20 hover:scale-105 active:scale-100 transition-all duration-200"
          >
            <span>Xem Giải Pháp Giáo Viên AI</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
