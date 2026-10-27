/**
 * INTERNAL COMPONENT: DevLogSection
 * [Lưu ý: Không render lên public landing page theo yêu cầu, được giữ lại trong codebase
 * để phục vụ tài liệu tra cứu nội bộ của nhóm phát triển IGNITEX]
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, CheckCircle, Clock, Calendar, CheckSquare, User, Tag, Sparkles, Filter, PlusCircle } from 'lucide-react';
import { devLogs } from '../data/siteData';

export default function DevLogSection() {
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { key: 'all', label: 'Tất cả' },
    { key: 'completed', label: 'Hoàn thành' },
    { key: 'in_progress', label: 'Đang triển khai' },
    { key: 'planned', label: 'Kế hoạch tiếp theo' },
  ];

  const filteredLogs = devLogs.filter((log) => {
    if (filter === 'all') return true;
    return log.status === filter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Đã hoàn thành</span>
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 animate-pulse">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Đang triển khai</span>
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>Kế hoạch tiếp theo</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="devlog" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <History className="w-4 h-4 text-sky-600" />
            <span>Phần 4 • Minh Bạch & Cam Kết Tiến Độ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Nhật Ký Phát Triển <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              (Dev Log & Milestones)
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Hành trình hiện thực hóa ABSOFT LEARNING từ khảo sát bài toán thị trường đến kiến trúc AI và buổi ra mắt chính thức tại Workshop IGNITEX.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => {
            const isActive = filter === opt.key;
            const count =
              opt.key === 'all'
                ? devLogs.length
                : devLogs.filter((l) => l.status === opt.key).length;

            return (
              <button
                key={opt.key}
                onClick={() => setFilter(opt.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                <span>{opt.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-black ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-200 space-y-10">
          <AnimatePresence>
            {filteredLogs.map((log, index) => (
              <motion.div
                key={log.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-6 w-8 h-8 rounded-full border-4 border-white shadow-md flex items-center justify-center transition-transform group-hover:scale-125 ${
                    log.status === 'completed'
                      ? 'bg-emerald-500 text-white'
                      : log.status === 'in_progress'
                      ? 'bg-amber-500 text-white animate-pulse'
                      : 'bg-slate-300 text-slate-600'
                  }`}
                >
                  {log.status === 'completed' ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : log.status === 'in_progress' ? (
                    <Clock className="w-4 h-4" />
                  ) : (
                    <Calendar className="w-4 h-4" />
                  )}
                </div>

                {/* Log Card Content */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-xl text-xs font-black tracking-wide bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-2xs">
                        {log.version}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{log.date}</span>
                      </div>
                    </div>

                    <div>{getStatusBadge(log.status)}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {log.title}
                  </h3>

                  {/* Author & Role */}
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                    <User className="w-3.5 h-3.5 text-indigo-500" />
                    <span className="font-semibold text-slate-700">Phụ trách: {log.author}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500">{log.role}</span>
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {log.summary}
                  </p>

                  {/* Changelog checklist */}
                  {log.changelog && log.changelog.length > 0 && (
                    <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-1.5">
                        <CheckSquare className="w-3.5 h-3.5 text-sky-600" />
                        <span>Các hạng mục chi tiết đã thực hiện:</span>
                      </h4>
                      <ul className="space-y-2">
                        {log.changelog.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Developer Note on how to add logs */}
        <div className="mt-16 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <PlusCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                Dễ dàng bổ sung Dev Log mới
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Chỉ cần thêm mốc phiên bản vào mảng <code>devLogs</code> trong <code>src/data/siteData.js</code>, giao diện sẽ tự động cập nhật ngay lập tức.
              </p>
            </div>
          </div>
          <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100 flex-shrink-0">
            Clean Architecture
          </span>
        </div>

      </div>
    </section>
  );
}
