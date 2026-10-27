import React from 'react';
import { Sparkles, Mail, Phone, MapPin, ArrowUp, Calendar, Clock, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { siteConfig, workshopDetails } from '../data/siteData';

export default function Footer({ onOpenWorkshopModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
      {/* Workshop Final CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-700 p-8 sm:p-12 text-white shadow-2xl border border-sky-400/30 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Trải Nghiệm Bản Thử Nghiệm Sớm (Early Access)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Sẵn Sàng Trải Nghiệm Giáo Viên AI ABSOFT & Đối Thoại Cùng 6 Thành Viên?
              </h3>
              <p className="text-sky-100 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
                Đăng ký ngay một suất tham dự Workshop Online để xem Live Demo, tương tác trực tiếp với Giáo viên AI trên chính giáo trình của bạn, và thảo luận chuyên sâu cùng đội ngũ sáng lập IGNITEX từ Trường Đại học Giao thông Vận tải (UTC).
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenWorkshopModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-xl shadow-slate-950/20 hover:scale-105 active:scale-100 transition-all text-sm"
              >
                <Calendar className="w-4 h-4 text-sky-600" />
                <span>Đăng Ký Tham Dự Workshop</span>
              </button>
              <a
                href="#solution"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-white/15 hover:bg-white/20 border border-white/20 transition-all text-xs"
              >
                <span>Xem Lại 3 Trụ Cột Công Nghệ</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & University Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white">
                  {siteConfig.brandName}
                </span>
                <span className="block text-[10px] uppercase tracking-widest font-semibold text-sky-400">
                  {siteConfig.brandSlogan} • UTC
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm text-justify">
              Đề tài nghiên cứu ứng dụng công nghệ giáo dục: <strong>{siteConfig.projectName}</strong> – Nền tảng học tập cùng Giáo viên AI cá nhân hóa theo năng lực thực tế. Chuyển giao tri thức chuẩn xác, phương pháp gợi mở Socratic và minh bạch hóa tiến độ cho xã hội.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address} • {siteConfig.university}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-white transition-colors">
                  {siteConfig.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>{siteConfig.contactPhone}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Khám Phá Chuyên Đề
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#team" className="hover:text-sky-400 transition-colors">
                  Đội ngũ 6 thành viên IGNITEX
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-sky-400 transition-colors">
                  Nghịch lý & 4 Nỗi đau thị trường
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-sky-400 transition-colors">
                  Kiến trúc Giáo viên AI 3 trụ cột
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-sky-400 transition-colors">
                  Bảng đối chiếu & 3 Kịch bản thực tế
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Workshop Details Card */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Lịch Trình Sự Kiện Workshop
            </h4>
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2.5 text-xs">
              <div className="text-white font-semibold">
                {workshopDetails.title}
              </div>
              <div className="text-slate-300">
                ⏰ <strong>Thời gian:</strong> {workshopDetails.time}
              </div>
              <div className="text-slate-300">
                🌐 <strong>Kênh trực tuyến:</strong> {workshopDetails.location}
              </div>
              <button
                onClick={onOpenWorkshopModal}
                className="w-full mt-2 py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold transition-colors text-center text-xs"
              >
                Nhận Link Phòng Họp Trực Tuyến
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Bản quyền đề tài thuộc về nhóm <strong>IGNITEX</strong> – Trường Đại học Giao thông Vận tải (UTC). All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
