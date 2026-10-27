import React from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle2, XCircle, AlertCircle, School, BookMarked, Building2, Sparkles, ArrowRight } from 'lucide-react';
import { impactComparisonSection } from '../data/siteData';

const caseIcons = {
  'case-1': School,
  'case-2': BookMarked,
  'case-3': Building2,
};

export default function ImpactComparisonSection() {
  return (
    <section id="impact" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>Phần 4 • Bảng Đối Chiếu Toàn Diện & Kịch Bản Thực Tiễn</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {impactComparisonSection.title}
          </h2>

          <div className="mt-6 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs text-justify sm:text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-2">
              {impactComparisonSection.subtitle}
            </span>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {impactComparisonSection.intro}
            </p>
          </div>
        </div>

        {/* 3-Column Comparative Matrix Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200/90 shadow-xl bg-white mb-20">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/80 text-slate-800">
                <th className="py-5 px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider w-1/4">
                  {impactComparisonSection.matrixHeaders[0]}
                </th>
                <th className="py-5 px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-600 bg-slate-50 w-1/4">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-slate-400" />
                    <span>{impactComparisonSection.matrixHeaders[1]}</span>
                  </div>
                </th>
                <th className="py-5 px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50/50 w-1/4">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span>{impactComparisonSection.matrixHeaders[2]}</span>
                  </div>
                </th>
                <th className="py-5 px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-sky-800 bg-sky-50/80 w-1/4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    <span>{impactComparisonSection.matrixHeaders[3]}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {impactComparisonSection.matrixRows.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-5 px-6 font-bold text-slate-900 bg-white">
                    {row.criterion}
                  </td>
                  <td className="py-5 px-6 text-slate-600 bg-slate-50/30 leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">•</span>
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-amber-800 bg-amber-50/20 leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{row.genericAi}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 font-semibold text-slate-900 bg-sky-50/40 leading-relaxed">
                    <div className="flex items-start gap-2 text-sky-950">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{row.absoft}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3 Real-World Use Cases */}
        <div className="mb-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest text-indigo-600 uppercase">
              Khả Năng Triển Khai Thực Chiến
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              3 Kịch Bản Ứng Dụng Thực Tế Của ABSOFT LEARNING
            </h3>
            <p className="text-sm text-slate-600 mt-2 font-normal">
              Từ giảng đường đại học, trung tâm luyện thi đến quy trình đào tạo nhân sự nội bộ doanh nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {impactComparisonSection.useCases.map((uc, index) => {
              const Icon = caseIcons[uc.id] || School;
              return (
                <motion.div
                  key={uc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold shadow-2xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold text-sky-700 bg-sky-50 border border-sky-100">
                        {uc.tag}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 leading-snug mb-1">
                      {uc.title}
                    </h4>
                    <p className="text-xs text-indigo-600 font-semibold mb-4">
                      Đối tượng: {uc.target}
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify mb-6">
                      {uc.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 bg-emerald-50/60 rounded-2xl p-4 border border-emerald-100/60">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                      Hiệu Quả Đo Lường Được:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {uc.benefit}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
