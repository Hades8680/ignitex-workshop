import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Users2, Target, Coins, EyeOff, TrendingDown, ArrowRight, ShieldAlert } from 'lucide-react';
import { marketPainSection } from '../data/siteData';

const iconMap = {
  Users2: Users2,
  Target: Target,
  Coins: Coins,
  EyeOff: EyeOff,
};

export default function MarketPainSection() {
  return (
    <section id="problem" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f01a_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f01a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>Phần 2 • Phân Tích Chuyên Sâu Bối Cảnh & Nỗi Đau Thị Trường</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {marketPainSection.title}
          </h2>

          <div className="mt-6 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs text-justify sm:text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 block mb-2">
              {marketPainSection.subtitle}
            </span>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {marketPainSection.introStory}
            </p>
          </div>
        </div>

        {/* 4 Deep-Dive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {marketPainSection.pains.map((pain, index) => {
            const Icon = iconMap[pain.icon] || AlertTriangle;
            return (
              <motion.div
                key={pain.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 hover:border-rose-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Leading Stat */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-xs flex-shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="text-right">
                      <span className="text-3xl sm:text-4xl font-black text-rose-600 tracking-tight block">
                        {pain.metricValue}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                        {pain.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Target & Slogan */}
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200/60 mb-2.5">
                    {pain.target}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors leading-snug">
                    {pain.slogan}
                  </h3>

                  {/* Deep Analysis (Văn bản dài phân tích sâu) */}
                  <div className="mt-4 text-slate-600 text-sm leading-relaxed space-y-2 text-justify">
                    <p>{pain.deepAnalysis}</p>
                  </div>
                </div>

                {/* Consequence & Impact Callout */}
                <div className="mt-6 pt-5 border-t border-slate-100 bg-rose-50/50 rounded-2xl p-4 border border-rose-100/60">
                  <div className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-bold text-rose-800 uppercase tracking-wider block mb-0.5">
                        Hệ Lụy Sư Phạm & Tổ Chức:
                      </span>
                      <p className="text-slate-700 leading-relaxed font-normal">
                        {pain.consequence}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Storytelling Transition Callout to Solution */}
        <div className="mt-16 max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-black tracking-widest text-emerald-400 uppercase bg-emerald-400/10 border border-emerald-400/20">
              Bước Ngoặt Chiến Lược
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
              Lời Giải Đáp Từ Đề Tài Khởi Nghiệp IGNITEX
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light text-justify">
              {marketPainSection.transitionCallout}
            </p>
            <div className="pt-2 flex justify-start">
              <a
                href="#solution"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm text-slate-900 bg-emerald-400 hover:bg-emerald-300 shadow-md shadow-emerald-400/20 hover:scale-105 active:scale-100 transition-all"
              >
                <span>Khám Phá Giải Pháp ABSOFT LEARNING</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
