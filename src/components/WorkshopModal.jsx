import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Calendar, Clock, MapPin, CheckCircle2, Send, ArrowRight } from 'lucide-react';
import { workshopDetails, siteConfig } from '../data/siteData';

export default function WorkshopModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Học sinh / Sinh viên',
    note: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      role: 'Học sinh / Sinh viên',
      note: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 overflow-hidden"
        >
          {/* Top gradient bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-sky-500 via-indigo-600 to-emerald-500" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Modal Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Đăng Ký Tham Dự Miễn Phí</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {workshopDetails.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Đồng hành cùng đội ngũ IGNITEX - UTC để khám phá mô hình Giáo viên AI cá nhân hóa.
                </p>
              </div>

              {/* Event Details Quick Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 mb-6 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span><strong>Thời gian:</strong> {workshopDetails.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span><strong>Hình thức:</strong> {workshopDetails.location}</span>
                </div>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Họ và tên của bạn *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ví dụ: Nguyễn Văn A"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email nhận link Zoom *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@vidu.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Số điện thoại / Zalo
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0987xxxxxx"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Bạn hiện là
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all bg-white"
                  >
                    <option value="Học sinh / Sinh viên">Học sinh / Sinh viên</option>
                    <option value="Giảng viên / Giáo viên">Giảng viên / Giáo viên</option>
                    <option value="Nhà quản lý giáo dục / Trung tâm">Nhà quản lý giáo dục / Trung tâm</option>
                    <option value="Phụ huynh học sinh">Phụ huynh học sinh</option>
                    <option value="Chuyên gia công nghệ & AI">Chuyên gia công nghệ & AI</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-600 hover:from-sky-500 hover:to-indigo-500 shadow-lg shadow-sky-500/25 transition-all text-sm mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>Xác Nhận Giữ Chỗ Tham Dự</span>
                </button>
              </form>
            </div>
          ) : (
            /* Submission Success State */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Đăng Ký Thành Công!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Cảm ơn <strong>{formData.fullName}</strong> đã đăng ký tham gia buổi Workshop Online của đội ngũ <strong>IGNITEX</strong>. Link tham gia Zoom & bộ quà tặng Early Access sẽ được gửi đến email <strong>{formData.email}</strong> trước giờ diễn ra sự kiện.
              </p>
              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                >
                  Đóng cửa sổ
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
