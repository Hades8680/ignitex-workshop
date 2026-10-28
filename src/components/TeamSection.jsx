import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Linkedin, Github, Mail, Sparkles, GraduationCap, Award } from 'lucide-react';
import { teamMembers, teamSectionIntro } from '../data/siteData';

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28 bg-white relative">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header: Subtitle, Title & Detailed Intro Paragraph */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Phần 1 • Đội Ngũ Sáng Lập IGNITEX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Đội Ngũ Kiến Tạo <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">IGNITEX</span> & Tầm Nhìn Phát Triển
          </h2>

          <div className="mt-6 p-6 rounded-3xl bg-slate-50 border border-slate-200/80 text-justify sm:text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 block mb-2">
              {teamSectionIntro.subtitle}
            </span>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {teamSectionIntro.paragraph}
            </p>
          </div>
        </div>

        {/* 6 Large Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Team Synergy Banner with UTC-15 Background */}
        <div className="mt-16 rounded-3xl relative overflow-hidden border border-slate-200/90 shadow-md">
          {/* UTC 15-Storey Building Background with Gradient Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('./images/utc-15-tang.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-indigo-950/85 to-slate-900/90 backdrop-blur-[2px]" />

          <div className="relative p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 shadow-md flex items-center justify-center text-sky-400 flex-shrink-0 backdrop-blur-md">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400">
                    Trụ Sở Nghiên Cứu • ĐH GTVT (UTC)
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-[11px] text-slate-300">Tòa nhà 15 tầng</span>
                </div>
                <h4 className="font-extrabold text-white text-lg sm:text-xl">
                  Cam Kết Thực Thi Từ Đội Ngũ Khởi Nghiệp IGNITEX
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  100% thành viên đồng lòng dốc sức kết hợp giữa năng lực lập trình lõi AI và quản trị kinh doanh để đưa ABSOFT LEARNING vào ứng dụng thực tiễn trong ngành giáo dục.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="px-4 py-2 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30 backdrop-blur-md shadow-xs">
                6 Thành viên Cốt lõi
              </span>
              <span className="px-4 py-2 rounded-full text-xs font-bold bg-emerald-500/80 text-white border border-emerald-400/50 backdrop-blur-md shadow-xs">
                UTC Innovation
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/**
 * Card hiển thị chi tiết cho từng thành viên với:
 * - Avatar lớn có fallback tự động
 * - Tuyên ngôn mục tiêu (Vision Statement)
 * - 3 Trách nhiệm chuyên môn sâu (Core Responsibilities)
 */
function MemberCard({ member, index }) {
  const [imgSrc, setImgSrc] = useState(member.avatarUrl);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(member.fallbackAvatar || `./avatars/member-${member.id}.svg`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col p-6 sm:p-7 overflow-hidden"
    >
      {/* Top accent gradient bar */}
      <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${member.roleBadgeColor}`} />

      {/* Header: Avatar, Name & Academic Info */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative flex-shrink-0">
          <div className={`p-1.5 rounded-2xl bg-gradient-to-tr ${member.roleBadgeColor || 'from-sky-500 to-indigo-600'} shadow-lg shadow-slate-200/60 group-hover:scale-105 transition-transform duration-300`}>
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[14px] overflow-hidden bg-slate-100 relative shadow-inner">
              <img
                src={imgSrc}
                alt={member.name}
                onError={handleError}
                className={`w-full h-full object-cover ${member.avatarPosition || 'object-center'} transition-all duration-300 group-hover:scale-105`}
                loading="lazy"
              />
            </div>
          </div>
          {member.role && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-100" title={member.role}>
              <Award className="w-3.5 h-3.5 text-sky-600" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0 pt-0.5">
          {member.role && (
            <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold text-white bg-gradient-to-r ${member.roleBadgeColor} shadow-xs mb-1.5`}>
              {member.role}
            </span>
          )}
          <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 group-hover:text-sky-600 transition-colors truncate">
            {member.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-snug">
            {member.academicInfo}
          </p>
        </div>
      </div>

      {/* Vision Statement (Khẩu hiệu / Tuyên ngôn mục tiêu) */}
      <div className="relative bg-slate-50/90 rounded-2xl p-4 sm:p-5 border border-slate-100 mb-4 group-hover:bg-sky-50/40 transition-colors flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          <Quote className="w-3.5 h-3.5 text-sky-600 rotate-180" />
          <span>Khẩu Hiệu / Tuyên Ngôn</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-normal">
          "{member.visionStatement}"
        </p>
      </div>

      {/* Footer: Social Contact links */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
        <span className="text-[11px] font-semibold text-slate-400">Kết nối chuyên gia</span>
        <div className="flex items-center gap-2">
          {member.socialLinks?.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-sky-100 hover:text-sky-600 text-slate-500 flex items-center justify-center transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.socialLinks?.github && (
            <a
              href={member.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-500 flex items-center justify-center transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {member.socialLinks?.email && (
            <a
              href={member.socialLinks.email}
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 text-slate-500 flex items-center justify-center transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
