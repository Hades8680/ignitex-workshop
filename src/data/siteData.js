/**
 * ==============================================================================
 * IGNITEX - ABSOFT LEARNING COMPREHENSIVE WHITEPAPER & WORKSHOP DATA
 * ==============================================================================
 * Toàn bộ dữ liệu chuyên sâu của chuyên trang Workshop Online IGNITEX.
 * Cấu trúc tách biệt hoàn toàn giữa dữ liệu và giao diện (Clean Architecture).
 * ==============================================================================
 */

export const siteConfig = {
  brandName: "IGNITEX",
  brandSlogan: "Ignite The Future of EdTech",
  projectName: "ABSOFT LEARNING",
  shortProjectName: "Giáo Viên AI",
  projectTagline: "Nền Tảng Học Tập Cùng Giáo Viên AI Cá Nhân Hóa",
  workshopBadge: "IGNITEX ONLINE WORKSHOP • EDTECH INNOVATION SHOWCASE",
  workshopHeroHeadline: "ABSOFT LEARNING – Nền Tảng Học Tập Cùng Giáo Viên AI Cá Nhân Hóa",
  workshopHeroDescription:
    "Chuyển dịch mô hình giáo dục từ 'Một thầy dạy nhiều trò theo một kịch bản cố định' sang kỷ nguyên 'Giáo viên truyền thụ tri thức và phương pháp sư phạm cho AI, để AI trực tiếp kèm cặp 1-1 cho từng người học'. ABSOFT LEARNING không thay thế người thầy — chúng tôi nhân bản năng lực của người thầy lên hàng ngàn lần, giúp mọi học viên đều có một gia sư riêng thấu hiểu từng lỗ hổng kiến thức và báo cáo tiến độ minh bạch theo thời gian thực cho nhà quản lý, phụ huynh.",
  workshopDate: "20:00 - 21:30 | Thứ Bảy, Ngày 15/11/2026",
  workshopPlatform: "Zoom & Google Meet Online",
  contactEmail: "contact.ignitex@gmail.com",
  contactPhone: "+84 987 654 321",
  university: "Trường Đại học Giao thông Vận tải (UTC)",
  address: "Số 3 Phố Cầu Giấy, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
  utcBackground: "./images/utc-15-tang.jpg",
};

/**
 * THANH CHỈ SỐ ẤN TƯỢNG (KEY METRICS BAR TẠI HERO BANNER)
 */
export const heroMetrics = [
  {
    id: 1,
    value: "1 kèm 1",
    label: "Tương Tác Cá Nhân Hóa 24/7",
    description: "Đồng hành liên tục theo đúng tốc độ nhận thức và thời gian biểu của từng học viên."
  },
  {
    id: 2,
    value: "100%",
    label: "Chuẩn Giáo Trình (Zero Hallucination)",
    description: "AI chỉ giảng dạy nghiêm ngặt trong phạm vi kiến thức chuẩn do chính giáo viên nạp vào."
  },
  {
    id: 3,
    value: "360°",
    label: "Real-time Analytics Report",
    description: "Minh bạch hóa toàn bộ tiến trình, mức độ thấu hiểu bài cho Phụ huynh & Nhà quản lý đào tạo."
  }
];

/**
 * ĐỘI NGŨ 6 THÀNH VIÊN IGNITEX & MỤC TIÊU HƯỚNG ĐẾN (PHẦN 1)
 * ------------------------------------------------------------------------------
 * HƯỚNG DẪN THAY ẢNH AVATAR:
 * 1. Đặt ảnh chân dung thật vào thư mục: /public/avatars/ (ví dụ: dung-le.jpg)
 * 2. Cập nhật trường `avatarUrl` bên dưới: "/avatars/dung-le.jpg" hoặc URL online.
 * Hệ thống tự động có fallback hiển thị vector avatar cực đẹp nếu ảnh chưa sẵn sàng.
 * ------------------------------------------------------------------------------
 */
export const teamSectionIntro = {
  subtitle: "Sự Giao Thoa Chiến Lược Giữa Công Nghệ & Quản Trị",
  title: "Đội Ngũ Kiến Tạo IGNITEX & Tầm Nhìn Phát Triển",
  paragraph:
    "Mở đầu buổi Workshop là sự xuất hiện của 6 mảnh ghép tạo nên IGNITEX — sự giao thoa chiến lược giữa tư duy Kỹ thuật Công nghệ thông tin (xây dựng lõi AI và hệ thống phần mềm vững chắc) cùng tư duy Quản trị Kinh doanh (thấu hiểu nỗi đau thị trường, tối ưu vận hành và thiết kế hành trình trải nghiệm người dùng) từ mái trường Đại học Giao thông Vận tải (UTC). Mỗi thành viên nắm giữ một trụ cột sống còn để đưa ABSOFT LEARNING từ đề tài nghiên cứu trở thành giải pháp EdTech thực chiến có sức lan tỏa rộng khắp."
};

export const teamMembers = [
  {
    id: 1,
    name: "Lê Tiến Dũng",
    role: "Team Leader (Trưởng nhóm Dự án)",
    roleBadgeColor: "from-sky-500 to-blue-600",
    academicInfo: "Trưởng nhóm điều phối chiến lược IGNITEX",
    // ==========================================
    // Ảnh đại diện thật từ thư mục IMG:
    avatarUrl: "./avatars/le-tien-dung.png",
    avatarPosition: "object-[center_20%]",
    // ==========================================
    fallbackAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    visionStatement:
      "Kiến tạo sự kết hợp hoàn hảo giữa công nghệ lõi AI và bài toán thực tiễn của giáo dục Việt Nam. Mục tiêu của tôi là dẫn dắt ABSOFT LEARNING vượt qua khuôn khổ một đề tài ý tưởng để trở thành một nền tảng EdTech thực chiến, nơi mọi người học đều được tiếp cận sự chỉ dẫn tận tâm như có giáo viên riêng bên cạnh.",
    coreResponsibilities: [
      "Định hình tầm nhìn sản phẩm & lộ trình phát triển toàn diện (Product Roadmap) từ giai đoạn MVP đến quy mô thương mại hóa.",
      "Điều phối sự phối hợp nhịp nhàng giữa khối Kỹ thuật (CNTT) và khối Kinh doanh (QTKD), đảm bảo tiến độ và chất lượng kỹ thuật.",
      "Kiểm soát chất lượng tổng thể của buổi Workshop Showcase và các cột mốc triển khai nền tảng ABSOFT LEARNING."
    ],
    skills: ["Product Vision", "Team Leadership", "Strategic Planning", "EdTech Management"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:dung.levan@ignitex.edu.vn"
    }
  },
  {
    id: 2,
    name: "Lê Quang Thịnh",
    role: "Core AI & Full-stack Architect",
    roleBadgeColor: "from-indigo-500 to-purple-600",
    academicInfo: "Sinh viên Công nghệ thông tin - Chất lượng cao K63 - Đại học Giao thông Vận tải",
    // ==========================================
    // Ảnh đại diện thật từ thư mục IMG:
    avatarUrl: "./avatars/le-quang-thinh.jpg",
    avatarPosition: "object-center",
    // ==========================================
    fallbackAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    visionStatement:
      "Xây dựng bộ não 'Giáo viên AI' không chỉ trả lời đúng kiến thức mà còn có khả năng sư phạm thực thụ: biết gợi mở tư duy thay vì đưa sẵn đáp án, biết nhận diện lỗ hổng kiến thức của từng cá nhân để điều chỉnh cách giảng giải. Tôi hướng tới một kiến trúc hệ thống vững chắc, bảo mật và có khả năng mở rộng quy mô lớn.",
    coreResponsibilities: [
      "Thiết kế kiến trúc luồng huấn luyện AI từ tài liệu của giáo viên (RAG Pipeline, Knowledge Boundary & Semantic Vector Search).",
      "Tối ưu hóa mô hình ngôn ngữ lớn (LLM) theo phương pháp sư phạm gợi mở Socratic và cơ chế chống ảo giác tri thức (Anti-hallucination).",
      "Phát triển hệ thống Backend/Frontend lõi, bảo mật dữ liệu học tập và thiết lập hạ tầng đám mây sẵn sàng vận hành 24/7."
    ],
    skills: ["AI Pedagogical Engine", "RAG & Vector DB", "Full-Stack Architecture", "System Security"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:thinh.lequang@ignitex.edu.vn"
    }
  },
  {
    id: 3,
    name: "Thành Đặng Hoàn",
    role: "System & Data Analytics Engineer",
    roleBadgeColor: "from-blue-500 to-cyan-600",
    academicInfo: "Sinh viên Công nghệ thông tin - Chất lượng cao K63 - Đại học Giao thông Vận tải",
    // ==========================================
    // Ảnh đại diện thật từ thư mục IMG:
    avatarUrl: "./avatars/thanh-dang-hoan.jpg",
    avatarPosition: "object-[center_18%]",
    // ==========================================
    fallbackAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    visionStatement:
      "Biến những cuộc hội thoại học tập hàng ngày giữa học viên và AI thành nguồn dữ liệu biết nói. Mục tiêu của tôi là xây dựng giao diện học tập mượt mà nhất và một hệ thống phân tích tiến độ thời gian thực, giúp giáo viên, phụ huynh và nhà quản lý nhìn thấy bức tranh năng lực toàn diện của người học chỉ trong một màn hình.",
    coreResponsibilities: [
      "Phát triển giao diện phòng học tương tác 1-1 với Giáo viên AI và cổng nạp tri thức giáo trình trực quan cho giảng viên.",
      "Xây dựng thuật toán đo lường mức độ tiếp thu (Mastery Level Tracking) và hệ thống Dashboard báo cáo tiến trình tự động.",
      "Tối ưu hóa hiệu năng truyền tải thời gian thực, đảm bảo trải nghiệm UI/UX phản hồi dưới 1 giây trên mọi thiết bị."
    ],
    skills: ["Real-time Systems", "Learning Analytics", "Frontend/UI UX", "Interactive Dashboards"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:hoan.thanhdang@ignitex.edu.vn"
    }
  },
  {
    id: 4,
    name: "Đào Quỳnh Anh",
    role: "Lead Business Analyst & Market Researcher",
    roleBadgeColor: "from-emerald-500 to-teal-600",
    academicInfo: "Sinh viên Quản trị kinh doanh K66 - Đại học Giao thông Vận tải",
    // ==========================================
    // Ảnh đại diện thật từ thư mục IMG:
    avatarUrl: "./avatars/dao-quynh-anh.jpg",
    avatarPosition: "object-[center_18%]",
    // ==========================================
    fallbackAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    visionStatement:
      "Mọi công nghệ dù tiên tiến đến đâu cũng chỉ có giá trị khi giải quyết đúng nỗi đau của con người. Tôi hướng tới việc đào sâu nghiên cứu tâm lý người học, áp lực của người dạy và rào cản của phụ huynh để mỗi tính năng trên ABSOFT LEARNING đều chạm đúng nhu cầu cấp thiết nhất của thị trường.",
    coreResponsibilities: [
      "Khảo sát, phân tích dung lượng thị trường EdTech và định hình chân dung đa chiều của 3 nhóm người dùng mục tiêu (Người học - Giảng viên - Quản lý/Phụ huynh).",
      "Chuyển hóa nỗi đau thực tế của thị trường thành yêu cầu tính năng sản phẩm chuẩn xác (BRD, Use Cases & User Stories).",
      "Đánh giá tính khả thi thương mại, sự đón nhận của thị trường và tính cấp thiết trong ứng dụng Giáo viên AI tại Việt Nam."
    ],
    skills: ["Market Research", "Business Requirements", "User Personas", "Value Proposition"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:anh.daoquynh@ignitex.edu.vn"
    }
  },
  {
    id: 5,
    name: "Phạm Toàn Tiến",
    role: "Growth Strategy & Operations Lead",
    roleBadgeColor: "from-amber-500 to-orange-600",
    academicInfo: "Sinh viên Quản trị kinh doanh K66 - Đại học Giao thông Vận tải",
    // ==========================================
    // Ảnh đại diện thật từ thư mục IMG:
    avatarUrl: "./avatars/pham-toan-tien.jpg",
    avatarPosition: "object-[center_18%]",
    // ==========================================
    fallbackAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
    visionStatement:
      "Xây dựng mô hình vận hành bền vững và chiến lược lan tỏa giá trị của ABSOFT LEARNING đến từng trường học, trung tâm đào tạo và doanh nghiệp. Tôi muốn chứng minh rằng việc cá nhân hóa giáo dục 1-1 hoàn toàn có thể thực hiện với chi phí tối ưu cho số đông nhờ sức mạnh của AI.",
    coreResponsibilities: [
      "Thiết kế mô hình kinh doanh bền vững (B2B2C / SaaS EdTech) và giải bài toán tối ưu chi phí triển khai trên quy mô lớn.",
      "Xây dựng quy trình chuyển đổi số và chuẩn hóa tài liệu hướng dẫn cho các cơ sở giáo dục khi tích hợp Giáo viên AI.",
      "Hoạch định chiến lược Go-to-Market, tiếp cận mạng lưới trường học, trung tâm đào tạo và phát triển cộng đồng người học."
    ],
    skills: ["Go-to-Market Strategy", "Operations Modeling", "Cost Optimization", "B2B Partnership"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:tien.phamtoan@ignitex.edu.vn"
    }
  },
  {
    id: 6,
    name: "Nguyễn Hồng Nhạn",
    role: "Product Experience & Stakeholder Relations",
    roleBadgeColor: "from-pink-500 to-rose-600",
    academicInfo: "Sinh viên Quản trị kinh doanh - Chất lượng cao K66 - Đại học Giao thông Vận tải",
    // ==========================================
    // Ảnh đại diện thật từ thư mục IMG:
    avatarUrl: "./avatars/nguyen-hong-nhan.jpg",
    avatarPosition: "object-[center_18%]",
    // ==========================================
    fallbackAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
    visionStatement:
      "Xóa bỏ khoảng cách thông tin giữa người học, người dạy và người quản lý/phụ huynh. Mục tiêu của tôi là thiết kế hành trình trải nghiệm liền mạch và hệ thống báo cáo tiến độ giàu tính nhân văn, giúp phụ huynh và nhà quản lý không chỉ giám sát mà còn thấu hiểu để đồng hành đúng lúc cùng người học.",
    coreResponsibilities: [
      "Tối ưu hóa hành trình trải nghiệm người dùng (Customer Journey Mapping), đảm bảo sự liền mạch giữa 3 phân hệ tương tác.",
      "Chuẩn hóa hệ thống tiêu chí báo cáo trực quan và cảnh báo học tập mang tính sư phạm dành riêng cho Phụ huynh & Quản lý đào tạo.",
      "Phụ trách công tác truyền thông sự kiện Workshop Online IGNITEX và xây dựng quan hệ hợp tác cùng các đối tác giáo dục."
    ],
    skills: ["Customer Journey", "Stakeholder Relations", "UX Storytelling", "Educational PR"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:nhan.nguyenhong@ignitex.edu.vn"
    }
  }
];

/**
 * BỐI CẢNH & 4 NỖI ĐAU CHÍ MẠNG CỦA THỊ TRƯỜNG (PHẦN 2)
 */
export const marketPainSection = {
  subtitle: "Thách Thức Cốt Lõi Của Nền Giáo Dục Quy Mô Công Nghiệp",
  title: 'Nghịch Lý Của Giáo Dục Hiện Đại: "Dạy Số Đông Nhưng Kỳ Vọng Kết Quả Cá Nhân"',
  introStory:
    "Trong suốt hàng thế kỷ qua, mô hình lớp học truyền thống (1 giáo viên phụ trách 30 đến 50 học sinh) được thiết kế nhằm tối ưu hóa chi phí truyền đạt thông tin trên diện rộng. Tuy nhiên, mô hình này lại vô tình hy sinh tốc độ tiếp thu, phong cách tư duy và nhu cầu bổ khuyết kiến thức riêng biệt của từng cá nhân. Khi khối lượng tri thức ngày càng phức tạp, cả 4 mắt xích trong hệ sinh thái giáo dục — Người thầy, Người học, Gia đình/Nhà trường và Nền kinh tế — đều rơi vào trạng thái quá tải nghiêm trọng.",
  pains: [
    {
      id: 1,
      target: "Nỗi đau của Giáo viên & Giảng viên",
      slogan: '"Kiệt sức vì sự lặp lại và quá tải cá nhân hóa"',
      icon: "Users2",
      badgeColor: "rose",
      deepAnalysis:
        "Theo các khảo sát thực tế, giáo viên đang phải dành tới 70% tổng thời gian làm việc để lặp lại các bài giảng lý thuyết cơ bản, chấm điểm thủ công và giải đáp những câu hỏi trùng lặp của hàng chục học sinh. Dù nhận thức rõ từng em có một lỗ hổng kiến thức khác nhau, quỹ thời gian hữu hạn 45 phút trên lớp hoàn toàn không cho phép người thầy dừng lại để kèm cặp cặn kẽ từng cá nhân mà vẫn phải hoàn thành phân phối chương trình.",
      consequence:
        "Giáo viên rơi vào hội chứng kiệt sức (Teacher Burnout), suy giảm nhiệt huyết sư phạm và không còn năng lượng để tập trung vào các hoạt động sáng tạo bài giảng hoặc hướng dẫn chuyên sâu cho học sinh xuất sắc.",
      metricValue: "70%",
      metricLabel: "Thời gian bị lãng phí vào tác vụ lặp lại thủ công"
    },
    {
      id: 2,
      target: "Nỗi đau của Người học (Học sinh - Sinh viên)",
      slogan: '"Hội chứng sợ hỏi và Lộ trình đồng phục (One-Size-Fits-All)"',
      icon: "Target",
      badgeColor: "amber",
      deepAnalysis:
        "Trong một lớp học đông người, học viên có học lực trung bình hoặc yếu luôn mang tâm lý e ngại bị bạn bè và thầy cô đánh giá nếu đặt câu hỏi 'ngây ngô', dẫn đến hiện tượng giấu dốt và mất gốc kiến thức lũy tiến qua từng bài. Ngược lại, những học viên tiếp thu nhanh lại chịu cảnh nhàm chán khi phải chờ đợi mặt bằng chung. Nguy hiểm hơn, khi học sinh tự tìm đến các công cụ AI đại trà (như ChatGPT thông thường), AI tự do thường giải bài hộ từ A-Z khiến người học triệt tiêu khả năng tư duy độc lập, hoặc trả lời lan man, sai lệch hoàn toàn so với giáo trình của giáo viên bộ môn.",
      consequence:
        "Khoảng cách học lực trong cùng một lớp ngày càng nới rộng; người học mất dần sự tự tin hoặc hình thành thói quen ỷ lại vào các công cụ giải bài tắt mà không nắm vững bản chất kiến thức.",
      metricValue: "68%",
      metricLabel: "Học sinh thừa nhận ngại giơ tay hỏi lại bài trên lớp"
    },
    {
      id: 3,
      target: "Nỗi đau của Phụ huynh & Nhà quản lý đào tạo",
      slogan: '"Điểm mù thông tin (The Blind Spot) và Báo cáo muộn màng"',
      icon: "EyeOff",
      badgeColor: "indigo",
      deepAnalysis:
        "Phụ huynh đầu tư chi phí lớn cho con đi học, còn các nhà quản lý doanh nghiệp chi trả ngân sách đào tạo cho nhân sự, nhưng cả hai đều rơi vào trạng thái 'mù thông tin' về tiến trình học tập hàng ngày. Dữ liệu duy nhất họ nhận được là bảng điểm tổng kết cuối kỳ hoặc các bài kiểm tra định kỳ — thời điểm mà mọi sự hổng kiến thức đã trở nên quá muộn màng để khắc phục kịp thời. Họ hoàn toàn thiếu một công cụ đo lường: Hôm nay con mình đã thực sự hiểu khái niệm nào? Đang loay hoay ở bài toán nào? Cần hỗ trợ ngay ở điểm nghẽn nào?",
      consequence:
        "Mất kết nối sư phạm giữa Gia đình và Nhà trường; phụ huynh hoang mang tạo áp lực ngược lên con cái, trong khi các cơ sở đào tạo không thể cam kết chất lượng đầu ra một cách minh bạch.",
      metricValue: "100%",
      metricLabel: "Đo lường tiến độ theo thời gian thực khi tích hợp AI"
    },
    {
      id: 4,
      target: "Nỗi đau Kinh tế Giáo dục (Bloom's 2-Sigma Problem)",
      slogan: '"Rào cản chi phí khổng lồ của mô hình Gia sư 1-1"',
      icon: "Coins",
      badgeColor: "sky",
      deepAnalysis:
        "Nghiên cứu kinh điển của nhà tâm lý học giáo dục Benjamin Bloom đã chứng minh: Học sinh được giảng dạy theo phương pháp kèm 1-1 đạt kết quả vượt trội hơn 98% học sinh trong lớp học đại trà (hiện tượng 2 độ lệch chuẩn - 2-Sigma). Tuy nhiên, bài toán kinh tế luôn là rào cản ngăn chặn sự bình đẳng giáo dục: Thuê một giáo viên giỏi kèm riêng 1-1 tốn kém hàng triệu đồng mỗi tuần, biến việc học cá nhân hóa thành đặc quyền xa xỉ của số ít gia đình có điều kiện, hoàn toàn bất khả thi để nhân rộng cho hàng triệu người học trong xã hội.",
      consequence:
        "Bất bình đẳng trong tiếp cận chất lượng giáo dục ngày càng trầm trọng; xã hội lãng phí tiềm năng to lớn của hàng triệu người học chỉ vì thiếu một gia sư tận tâm bên cạnh.",
      metricValue: "98%",
      metricLabel: "Học sinh tiến bộ vượt bậc khi có người kèm 1-1"
    }
  ],
  transitionCallout:
    "Rõ ràng, giải pháp không phải là ép giáo viên phải làm việc kiệt sức hơn, cũng không phải thả nổi học sinh cho các chatbot AI giải bài hộ không kiểm soát. Xã hội cấp thiết cần một cơ chế công nghệ mới: Cho phép giáo viên chuyển giao tri thức và phương pháp sư phạm của chính mình cho AI, để AI trở thành cánh tay nối dài kèm cặp 1-1 cho từng người học — Đó chính là sứ mệnh ra đời của ABSOFT LEARNING."
};

/**
 * GIẢI PHÁP ABSOFT LEARNING & 3 TRỤ CỘT KIẾN TRÚC (PHẦN 3)
 */
export const solutionSection = {
  subtitle: "Kiến Trúc Công Nghệ Sư Phạm Đột Phá",
  title: "ABSOFT LEARNING – Giải Lời Giải Cho Bài Toán Cá Nhân Hóa Ở Quy Mô Lớn",
  definition:
    "ABSOFT LEARNING không phải là một kho video bài giảng quay sẵn thụ động, càng không phải một chatbot hỏi đáp tự do thiếu kiểm chứng. Đây là Nền tảng Chuyển giao Tri thức & Phương pháp Sư phạm cho AI, cho phép giáo viên 'dạy' cho AI nội dung giáo trình độc quyền của mình. Từ đó, Giáo viên AI đóng vai trò như một trợ giảng 1-1 tận tâm, trực tiếp giảng giải, đặt câu hỏi gợi mở theo năng lực riêng của từng học viên 24/7 và minh bạch hóa toàn bộ tiến trình cho nhà quản lý.",
  pillars: [
    {
      id: 1,
      step: "01",
      pillarName: "Trụ cột 1: Chuyển Giao Tri Thức Chuẩn (Teacher-to-AI Transfer)",
      badge: "Knowledge Transfer & Anti-Hallucination",
      icon: "UploadCloud",
      color: "sky",
      mechanism:
        "Giáo viên chỉ cần tải lên slide bài giảng, giáo trình PDF/Docx, ngân hàng câu hỏi và các ghi chú sư phạm đặc thù. Hệ thống ABSOFT sử dụng kỹ thuật RAG (Retrieval-Augmented Generation) kết hợp Vector Database để băm nhỏ, gắn chỉ mục ngữ nghĩa và thiết lập Biên Giới Tri Thức (Knowledge Boundary) nghiêm ngặt.",
      pedagogicalValue:
        "Triệt tiêu 100% hiện tượng AI bịa đặt kiến thức (Zero Hallucination). Giáo viên AI cam kết chỉ giảng dạy trung thành tuyệt đối với đúng nội dung, thuật ngữ và phương pháp giải mà người thầy đã thiết lập, bảo toàn tính chuẩn mực của chương trình học.",
      highlights: [
        "Tiếp nhận đa định dạng: Slide, Giáo trình, Đề thi, Bản ghi âm sư phạm",
        "Tự động trích xuất khái niệm cốt lõi và mối liên kết logic giữa các bài học",
        "Thiết lập biên giới kiến thức an toàn, nghiêm cấm AI trả lời ngoài phạm vi bài học"
      ]
    },
    {
      id: 2,
      step: "02",
      pillarName: "Trụ cột 2: Kèm 1-1 Thích Ứng Theo Năng Lực (Adaptive 1-on-1 Tutoring)",
      badge: "Socratic Method & Personalized Pace",
      icon: "Bot",
      color: "indigo",
      mechanism:
        "Khi học viên bước vào bài học, Giáo viên AI tự động đánh giá kiến thức nền tảng và chia nhỏ bài giảng theo từng lát cắt tư duy. Thay vì đọc chép thụ động, AI áp dụng Phương pháp Gợi mở Socratic: Đặt câu hỏi kích thích suy nghĩ, phát hiện kịp thời các quan niệm sai lầm (misconceptions) và kiên nhẫn giảng lại bằng nhiều góc nhìn khác nhau.",
      pedagogicalValue:
        "Cá nhân hóa tốc độ học tập đến mức tối đa: Học viên tiếp thu chậm được giảng giải cặn kẽ từng bước nhỏ mà không sợ bị phán xét; học viên giỏi được thử thách với các câu hỏi nâng cao. Quan trọng nhất, AI tuyệt đối KHÔNG làm bài tập hộ — AI chỉ dẫn dắt để người học tự tìm ra lời giải.",
      highlights: [
        "Phương pháp sư phạm gợi mở Socratic: Hỏi để học viên tự khai phá đáp án",
        "Tự động điều chỉnh độ khó và phong cách diễn đạt phù hợp với tâm lý học viên",
        "Sẵn sàng giải thích lại 100 lần không biết mệt mỏi, phản hồi thời gian thực < 0.8 giây"
      ]
    },
    {
      id: 3,
      step: "03",
      pillarName: "Trụ cột 3: Báo Cáo Tiến Độ Đa Chiều (360° Real-time Analytics)",
      badge: "Mastery Tracking & Actionable Insights",
      icon: "BarChart3",
      color: "emerald",
      mechanism:
        "Trong suốt buổi học, hệ thống âm thầm ghi nhận thời gian dừng đọc, phản xạ trả lời câu hỏi, các khái niệm học viên hay hỏi lại và mức độ hoàn thành mục tiêu bài học (Mastery Level). Toàn bộ dữ liệu này được tổng hợp thành bản đồ năng lực trực quan theo thời gian thực.",
      pedagogicalValue:
        "Xóa bỏ hoàn toàn điểm mù thông tin. Phụ huynh và nhà quản lý đào tạo nhận được báo cáo chi tiết kèm theo khuyến nghị hành động cụ thể (ví dụ: 'Học viên đã nắm vững 85% lý thuyết đạo hàm, nhưng còn lúng túng ở dạng đồ thị — Giáo viên AI đã tự động phân bổ thêm 3 bài tập củng cố'), giúp can thiệp sư phạm chuẩn xác và kịp thời.",
      highlights: [
        "Bản đồ năng lực học tập trực quan (Skill Mastery Radar Chart)",
        "Tự động phát hiện lỗ hổng kiến thức vi mô và đề xuất bài ôn tập bổ trợ",
        "Dashboard chuyên biệt cho 3 đối tượng: Học viên - Giảng viên - Phụ huynh/Quản lý"
      ]
    }
  ]
};

/**
 * BẢNG ĐỐI CHIẾU TOÀN DIỆN & 3 KỊCH BẢN ỨNG DỤNG THỰC TẾ (PHẦN 4)
 */
export const impactComparisonSection = {
  subtitle: "Sự Khác Biệt Mang Tính Cách Mạng",
  title: "Tại Sao Là Bây Giờ & Tại Sao Là ABSOFT LEARNING?",
  intro:
    "Để thấy rõ giá trị thực tiễn của ABSOFT LEARNING, hãy cùng so sánh mô hình này với các phương pháp học tập truyền thống và xu hướng sử dụng các công cụ Chatbot AI thông thường trên thị trường hiện nay:",
  matrixHeaders: [
    "Tiêu Chí Đánh Giá",
    "Lớp Học / Video Thu Sẵn",
    "Chatbot AI Đại Trà (ChatGPT)",
    "ABSOFT LEARNING (Giáo Viên AI)"
  ],
  matrixRows: [
    {
      criterion: "1. Mức độ cá nhân hóa",
      traditional: "Rất thấp (Một bài giảng chung cho cả lớp, tốc độ cố định)",
      genericAi: "Trung bình (Phụ thuộc vào khả năng biết viết Prompt của người học)",
      absoft: "Toàn diện 100% (AI tự động nhận diện năng lực và điều chỉnh lộ trình riêng)"
    },
    {
      criterion: "2. Tính chuẩn xác theo giáo trình",
      traditional: "Chuẩn theo giáo viên nhưng không thể tương tác 24/7",
      genericAi: "Nguy cơ cao bịa đặt (Hallucination), trả lời lệch tài liệu trường lớp",
      absoft: "Tuyệt đối 100% chuẩn xác (Đóng khung phạm vi giáo trình của thầy cô)"
    },
    {
      criterion: "3. Phương pháp sư phạm dẫn dắt",
      traditional: "Truyền thụ một chiều, ít cơ hội tương tác hỏi đáp sâu",
      genericAi: "Thường giải hộ từ A-Z, làm học sinh lười suy nghĩ độc lập",
      absoft: "Socratic Method: Gợi mở tư duy, kiên nhẫn hướng dẫn học viên tự giải"
    },
    {
      criterion: "4. Chi phí để đạt kèm 1-1",
      traditional: "Rất đắt đỏ (vài trăm ngàn đến hàng triệu đồng/buổi học gia sư)",
      genericAi: "Chi phí tài khoản AI nhưng không có định hướng sư phạm",
      absoft: "Chi phí tối ưu và dễ dàng phổ cập cho số đông nhờ tự động hóa"
    },
    {
      criterion: "5. Minh bạch cho Phụ huynh / Quản lý",
      traditional: "Chỉ biết kết quả khi đã thi xong (Điểm số khô khan cuối kỳ)",
      genericAi: "Hoàn toàn mù thông tin, không biết học sinh đang dùng AI vào việc gì",
      absoft: "Báo cáo tiến độ thời gian thực 360° kèm khuyến nghị can thiệp cụ thể"
    },
    {
      criterion: "6. Khả năng mở rộng (Scale-up)",
      traditional: "Bị giới hạn vật lý bởi số lượng giáo viên và sĩ số phòng học",
      genericAi: "Mở rộng tốt nhưng không có giá trị quản lý đào tạo tổ chức",
      absoft: "Nhân bản tri thức không giới hạn, phục vụ đồng thời hàng vạn học viên"
    }
  ],
  useCases: [
    {
      id: "case-1",
      title: "Trường Đại học & Trường Phổ thông (K-12)",
      target: "Khoa CNTT, Toán, Kinh tế, Ngoại ngữ",
      tag: "Trợ Giảng AI 24/7",
      description:
        "Mỗi giảng viên sở hữu một 'Bản sao trợ giảng AI' được nạp toàn bộ slide giáo trình và bài tập của môn học. Sinh viên có thể ôn tập, hỏi bài thâu đêm trước kỳ thi mà không làm phiền thầy cô. Giảng viên giải phóng hàng trăm giờ chấm bài và trả lời câu hỏi cơ bản, dành thời gian cho nghiên cứu khoa học.",
      benefit: "Nâng cao tỷ lệ qua môn, giảm thiểu tối đa tình trạng sinh viên bỏ môn vì mất gốc."
    },
    {
      id: "case-2",
      title: "Trung Tâm Ngoại Ngữ, Lập Trình & Luyện Thi",
      target: "IELTS, TOEIC, Coding Bootcamps, THPT Quốc Gia",
      tag: "Cam Kết Đầu Ra 1-1",
      description:
        "Sau giờ học chính khóa trên lớp, học viên được Giáo viên AI đồng hành luyện tập 1-1 tại nhà. Phụ huynh nhận được bản tin tiến độ hàng tuần qua Zalo/Email ghi nhận rõ con đã nắm vững bao nhiêu từ vựng, giải được bao nhiêu bài toán, tạo niềm tin tuyệt đối vào chất lượng đào tạo của trung tâm.",
      benefit: "Tăng 40% tỷ lệ giữ chân học viên (Retention Rate) và bảo chứng chất lượng đầu ra."
    },
    {
      id: "case-3",
      title: "Đào Tạo Nội Bộ Doanh Nghiệp (Corporate L&D)",
      target: "Onboarding Nhân Sự Mới, Đào Tạo Quy Trình Bán Hàng & Nghiệp Vụ",
      tag: "Nhân Bản Tri Thức Chuyên Gia",
      description:
        "Các chuyên gia kỳ cựu và trưởng phòng ban 'dạy' quy trình nghiệp vụ, tài liệu SOP và tình huống xử lý khách hàng cho AI. Nhân viên mới gia nhập được Giáo viên AI hướng dẫn 1-1 và kiểm tra nhập vai thực tế (Role-playing) mà không làm gián đoạn công việc của cấp trên.",
      benefit: "Rút ngắn 60% thời gian đào tạo tân binh và chuẩn hóa 100% quy trình vận hành."
    }
  ]
};

/**
 * NHẬT KÝ PHÁT TRIỂN NỘI BỘ TRONG CODE (DEV LOG & MILESTONES)
 * ------------------------------------------------------------------------------
 * [LƯU Ý: Phần này được lưu trữ trực tiếp trong codebase để đội ngũ kỹ thuật theo dõi,
 * không hiển thị trên Dashboard giao diện khách hàng theo đúng chỉ thị]
 * ------------------------------------------------------------------------------
 */
export const devLogs = [
  {
    id: 1,
    version: "v0.1",
    status: "completed",
    statusLabel: "Hoàn thành",
    date: "15/09/2026",
    title: "Khảo Sát Nhu Cầu Thị Trường & Định Hình Bài Toán Sư Phạm",
    author: "Đào Quỳnh Anh & Phạm Toàn Tiến",
    role: "Business & Market Discovery",
    summary:
      "Thực hiện phỏng vấn sâu 120 học sinh, 35 giáo viên THPT/Đại học và 40 phụ huynh tại Hà Nội để xác thực mức độ nghiêm trọng của 4 nỗi đau trong giáo dục truyền thống.",
    changelog: [
      "Xác lập nghịch lý giáo dục: 70% giáo viên kiệt sức vì lặp lại kiến thức cơ bản",
      "Xác thực nhu cầu kèm cặp 1-1 cá nhân hóa nhưng bị chặn bởi rào cản chi phí",
      "Thiết lập hồ sơ chân dung người dùng (User Personas) cho Học viên, Giảng viên và Phụ huynh"
    ]
  },
  {
    id: 2,
    version: "v0.3",
    status: "completed",
    statusLabel: "Hoàn thành",
    date: "02/10/2026",
    title: "Thiết Kế Kiến Trúc RAG & Pipeline Huấn Luyện AI Không Ảo Giác",
    author: "Lê Quang Thịnh & Lê Văn Dũng",
    role: "Core Architecture & AI Pipeline",
    summary:
      "Nghiên cứu cơ chế băm nhỏ giáo trình và nhúng Vector Embeddings 1536 chiều, kết hợp phương pháp Socratic để ép mô hình AI chỉ giảng dạy gợi mở thay vì giải bài hộ.",
    changelog: [
      "Xây dựng pipeline RAG kết hợp Vector DB với ngưỡng tương đồng cosine > 0.82",
      "Thiết kế System Prompt Socratic: Tuyệt đối không đưa đáp án trực tiếp trong lần hỏi đầu tiên",
      "Kiểm thử benchmark tốc độ phản hồi đạt 0.78s trên môi trường Cloud thử nghiệm"
    ]
  },
  {
    id: 3,
    version: "v0.7",
    status: "completed",
    statusLabel: "Hoàn thành",
    date: "18/10/2026",
    title: "Xây Dựng Giao Diện Tương Tác 1-1 & Hệ Thống Analytics Real-time",
    author: "Thành Đặng Hoàn & Nguyễn Hồng Nhạn",
    role: "Frontend Experience & Metrics",
    summary:
      "Phát triển giao diện phòng học thông minh tương tác thời gian thực và trung tâm phân tích dữ liệu học tập đa chiều cho Phụ huynh và Nhà quản lý.",
    changelog: [
      "Hoàn thiện UI phòng học tương tác trực quan với Giáo viên AI thích ứng",
      "Xây dựng thuật toán đo lường mức độ tiếp thu (Mastery Level) và cảnh báo điểm nghẽn",
      "Tối ưu hóa thiết kế Responsive trên Mobile, Tablet và Desktop đạt điểm Google Lighthouse 98+"
    ]
  },
  {
    id: 4,
    version: "v1.0-rc",
    status: "in_progress",
    statusLabel: "Đang triển khai",
    date: "27/10/2026",
    title: "Tối Ưu Hóa Trải Nghiệm & Chuẩn Bị Showcase Workshop Online IGNITEX",
    author: "Toàn Đội Ngũ IGNITEX",
    role: "Full Team Alignment",
    summary:
      "Hoàn thiện phiên bản Whitepaper Showcase chuyên sâu, kết nối kịch bản demo và mở cổng đăng ký tham dự Workshop Online chính thức.",
    changelog: [
      "Triển khai Landing Page & Whitepaper trực quan công khai 24/7 với cấu hình Vercel",
      "Chuẩn bị tài liệu nghiên cứu sư phạm và bộ slide thuyết trình cho 6 thành viên tại Workshop",
      "Tích hợp cổng đăng ký giữ chỗ và hệ thống gửi thư mời tham gia phòng họp trực tuyến"
    ]
  },
  {
    id: 5,
    version: "v1.2",
    status: "planned",
    statusLabel: "Kế hoạch tiếp theo",
    date: "Tháng 12/2026",
    title: "Chương Trình Thử Nghiệm Thí Điểm (Pilot Program) Tại Các Đơn Vị Đối Tác",
    author: "Lê Văn Dũng & Phạm Toàn Tiến",
    role: "Deployment & Growth",
    summary:
      "Triển khai thử nghiệm có kiểm soát tại 3 trường THPT và 2 trung tâm ngoại ngữ đối tác nhằm đo lường hiệu quả cải thiện điểm số thực tế.",
    changelog: [
      "Ký kết thỏa thuận hợp tác thử nghiệm thí điểm với các đơn vị đào tạo",
      "Tích hợp mô hình nhận diện giọng nói tiếng Việt thời gian thực (Real-time Speech Tutoring)",
      "Mở rộng kho học liệu thông minh cho môn Toán học và Tiếng Anh học thuật"
    ]
  }
];

/**
 * CHI TIẾT SỰ KIỆN WORKSHOP ONLINE
 */
export const workshopDetails = {
  title: "Workshop Trực Tuyến: Ra Mắt ABSOFT LEARNING & Kỷ Nguyên Giáo Viên AI",
  badge: "Sự Kiện Trực Tuyến Độc Quyền",
  time: "20:00 - 21:30 | Thứ Bảy, Ngày 15/11/2026",
  location: "Hội thảo trực tuyến (Zoom / Google Meet)",
  targetAudience:
    "Học sinh, Sinh viên, Giảng viên, Nhà quản lý đào tạo & Phụ huynh quan tâm đến công nghệ AI trong giáo dục",
  agenda: [
    {
      time: "20:00 - 20:15",
      title: "Khai mạc & Giới thiệu 6 thành viên sáng lập IGNITEX - UTC",
      speaker: "Lê Văn Dũng & Nguyễn Hồng Nhạn"
    },
    {
      time: "20:15 - 20:40",
      title: "Giải mã Nghịch lý Giáo dục & Giới thiệu Giải pháp ABSOFT LEARNING",
      speaker: "Đào Quỳnh Anh & Lê Quang Thịnh"
    },
    {
      time: "20:40 - 21:05",
      title: "Live Demo: Trải nghiệm thực tế tương tác 1-1 cùng Giáo viên AI",
      speaker: "Thành Đặng Hoàn & Phạm Toàn Tiến"
    },
    {
      time: "21:05 - 21:30",
      title: "Tọa đàm Hỏi đáp (Q&A) & Trao tặng tài khoản trải nghiệm sớm VIP",
      speaker: "Toàn bộ 6 thành viên IGNITEX"
    }
  ],
  highlights: [
    "Trải nghiệm trực tiếp tương tác 1-1 với Giáo viên AI thế hệ mới trên giáo trình thực tế",
    "Đối thoại chuyên sâu cùng 6 thành viên sáng lập IGNITEX - Đại học Giao thông Vận tải",
    "Nhận tài khoản trải nghiệm sớm (Early Access VIP) hoàn toàn miễn phí trọn đời tính năng cơ bản",
    "Nhận bộ Whitepaper tài liệu phương pháp ứng dụng Prompt AI trong giảng dạy và học tập"
  ]
};
