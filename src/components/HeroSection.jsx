import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Users, CheckCircle2, Bot, Clock, Activity, ShieldCheck, Zap, BarChart2 } from 'lucide-react';
import { siteConfig, heroMetrics } from '../data/siteData';

export default function HeroSection({ onOpenWorkshopModal }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-100">
      {/* UTC 15-Storey Building Grand Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="./images/utc-15-tang.jpg" 
          alt="Tòa nhà 15 tầng Đại học Giao thông Vận tải UTC"
          className="w-full h-full object-cover object-[center_30%] scale-100 transition-transform duration-1000"
        />
        {/* Balanced artistic light overlay: building is unmistakably visible while text has optimal contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/65 to-white/25 sm:from-white/85 sm:via-white/55 sm:to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-white/40" />
        <div className="absolute inset-0 bg-sky-950/5 mix-blend-multiply" />
      </div>

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-400/15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, In-depth Narrative & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Workshop Showcase Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-xs mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 -ml-5" />
              <span>{siteConfig.workshopBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              <span className="block text-slate-900">ABSOFT LEARNING</span>
              <span className="block mt-2 bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-700 bg-clip-text text-transparent">
                Nền Tảng Học Tập Cùng Giáo Viên AI Cá Nhân Hóa
              </span>
            </h1>

            {/* In-depth Narrative (Tuân thủ nghiêm ngặt quy tắc độ dài & chiều sâu) */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal text-justify lg:text-left">
              Chuyển dịch mô hình giáo dục từ <em>"Một thầy dạy nhiều trò theo một kịch bản cố định"</em> sang kỷ nguyên <strong>"Giáo viên truyền thụ tri thức và phương pháp sư phạm cho AI, để AI trực tiếp kèm cặp 1-1 cho từng người học"</strong>. ABSOFT LEARNING không thay thế người thầy — chúng tôi nhân bản năng lực của người thầy lên hàng ngàn lần, giúp mọi học viên đều có một gia sư riêng thấu hiểu từng lỗ hổng kiến thức và báo cáo tiến độ minh bạch theo thời gian thực cho nhà quản lý, phụ huynh.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#solution"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-600 hover:from-sky-500 hover:to-indigo-500 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Khám phá Kiến trúc Đề tài</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#team"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-base text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Users className="w-5 h-5 text-sky-600" />
                <span>Gặp gỡ 6 Thành viên</span>
              </a>

              <button
                onClick={onOpenWorkshopModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-base text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 shadow-xs transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Đăng Ký Tham Dự Workshop</span>
              </button>
            </div>

            {/* University affiliation tag */}
            <div className="mt-8 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-500">
              <span className="font-bold text-slate-700 uppercase tracking-wider">Đề tài nghiên cứu ứng dụng bởi:</span>
              <span className="font-semibold text-slate-800">Đội ngũ IGNITEX – Trường Đại học Giao thông Vận tải (UTC)</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-100/90 text-sky-800 font-bold text-[11px] border border-sky-200">
                🏛️ Tòa nhà 15 tầng UTC
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive AI Tutor Simulation Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glowing back panel */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 rounded-3xl blur-lg opacity-30 animate-pulse-subtle" />

              <div className="relative bg-white/95 rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-7 backdrop-blur-xl">
                {/* Simulated Tutor Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/30">
                        <Bot className="w-6 h-6" />
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">Giáo Viên AI ABSOFT</h4>
                        <span className="px-2 py-0.5 text-[10px] font-bold bg-sky-100 text-sky-800 rounded-md">V1.0 Socratic</span>
                      </div>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-slate-400" />
                        Kèm cặp 1-1 riêng biệt theo năng lực thực tế
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold text-emerald-700">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>Real-time</span>
                  </div>
                </div>

                {/* Simulated Tutor Dialogue: Demonstrating Socratic Pedagogical Behavior */}
                <div className="py-4 space-y-3.5 text-xs sm:text-sm">
                  {/* Student Question */}
                  <div className="flex items-start gap-2.5 justify-end">
                    <div className="bg-sky-600 text-white p-3.5 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
                      <p className="font-medium text-xs sm:text-sm">
                        "Thưa thầy AI, bài toán tối ưu chi phí này em nên dùng đạo hàm hay lập bảng biến thiên thì nhanh hơn ạ?"
                      </p>
                    </div>
                  </div>

                  {/* AI Tutor Pedagogical Response (Socratic: doesn't just give answers, prompts reflection) */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-1 shadow-2xs">
                      AI
                    </div>
                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl rounded-tl-none max-w-[90%] space-y-2.5">
                      <p className="font-semibold text-slate-800">
                        Chào em! Rất khen em đã chủ động so sánh hai phương pháp 💡
                      </p>
                      <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                        Theo đúng bài giảng của <strong>Thầy Dũng trên lớp</strong>, trước khi chọn công cụ, em hãy nhìn lại <em>tập xác định của biến số $x$</em>. Biến $x$ ở đây là số lượng sản phẩm thì có thể nhận giá trị âm hay không?
                      </p>
                      
                      <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-[11px] text-indigo-900 space-y-1">
                        <div className="flex items-center gap-1.5 font-bold">
                          <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                          <span>Nguyên tắc Sư phạm Socratic ABSOFT:</span>
                        </div>
                        <p className="text-slate-600 pl-5">
                          Tuyệt đối không giải tắt bài tập hộ học viên — chỉ gợi mở từng nấc thang tư duy để học viên tự khám phá bản chất.
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 font-medium flex items-center justify-between">
                        <span className="text-emerald-600 font-semibold">Độ chuẩn giáo trình: 100%</span>
                        <span>Độ trễ phản hồi: 0.78s</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Diagnostic Bottom Metrics */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block text-[10px]">Mức độ hiểu bài</span>
                    <strong className="text-sky-600 font-bold text-xs sm:text-sm">85% Đạt Chuẩn</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block text-[10px]">Tốc độ tiếp thu</span>
                    <strong className="text-indigo-600 font-bold text-xs sm:text-sm">1.3x Tự Động</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block text-[10px]">Báo cáo Phụ huynh</span>
                    <strong className="text-emerald-600 font-bold text-xs sm:text-sm">Đã đồng bộ</strong>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Thanh chỉ số ấn tượng (Key Metrics Bar) */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {heroMetrics.map((metric) => (
              <div
                key={metric.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                    {metric.value}
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    {metric.label}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
