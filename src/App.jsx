import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import MarketPainSection from './components/MarketPainSection';
import SolutionArchitectureSection from './components/SolutionArchitectureSection';
import ImpactComparisonSection from './components/ImpactComparisonSection';
import Footer from './components/Footer';
import WorkshopModal from './components/WorkshopModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-sky-500 selection:text-white relative">
      {/* Sticky Glassmorphism Header */}
      <Navbar onOpenWorkshopModal={handleOpenModal} />

      <main className="flex-grow">
        {/* Phần 0: Hero Banner – Tầm Nhìn Workshop IGNITEX */}
        <HeroSection onOpenWorkshopModal={handleOpenModal} />

        {/* Phần 1: Đội Ngũ 6 Thành Viên & Mục Tiêu Hướng Đến (ĐẶT LÊN ĐẦU TIÊN) */}
        <TeamSection />

        {/* Phần 2: Bối Cảnh, Vấn Đề & 4 Nỗi Đau Chí Mạng Của Thị Trường */}
        <MarketPainSection />

        {/* Phần 3: Giải Pháp ABSOFT LEARNING & Kiến Trúc Giáo Viên AI (3 Trụ Cột) */}
        <SolutionArchitectureSection />

        {/* Phần 4: Sự Cần Thiết Của Nền Tảng – Bảng Đối Chiếu Toàn Diện & 3 Kịch Bản Thực Tế */}
        <ImpactComparisonSection />
      </main>

      {/* Phần 5: Kết Luận Workshop & Footer */}
      <Footer onOpenWorkshopModal={handleOpenModal} />

      {/* Interactive Registration Modal */}
      <WorkshopModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
