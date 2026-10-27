import fs from 'fs';
import path from 'path';

const members = [
  { file: 'member-1', initials: 'LVD', name: 'Lê Văn Dũng', role: 'TEAM LEADER', c1: '#0284c7', c2: '#2563eb', roleColor: '#38bdf8' },
  { file: 'member-2', initials: 'LQT', name: 'Lê Quang Thịnh', role: 'CORE AI & FULL-STACK', c1: '#4f46e5', c2: '#7c3aed', roleColor: '#a5b4fc' },
  { file: 'member-3', initials: 'TDH', name: 'Thành Đặng Hoàn', role: 'SYSTEM & DEV', c1: '#0284c7', c2: '#06b6d4', roleColor: '#67e8f9' },
  { file: 'member-4', initials: 'DQA', name: 'Đào Quỳnh Anh', role: 'BA & MARKET RESEARCH', c1: '#059669', c2: '#10b981', roleColor: '#6ee7b7' },
  { file: 'member-5', initials: 'PTT', name: 'Phạm Toàn Tiến', role: 'GROWTH & OPERATIONS', c1: '#d97706', c2: '#f59e0b', roleColor: '#fde68a' },
  { file: 'member-6', initials: 'NHN', name: 'Nguyễn Hồng Nhạn', role: 'PRODUCT EXPERIENCE', c1: '#db2777', c2: '#f43f5e', roleColor: '#fbcfe8' }
];

const targetDir = path.resolve('public/avatars');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

members.forEach(m => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="bg_${m.file}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${m.c1}" />
      <stop offset="100%" stop-color="${m.c2}" />
    </linearGradient>
    <filter id="shadow_${m.file}" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="400" height="400" rx="40" fill="url(#bg_${m.file})" />
  <circle cx="200" cy="145" r="70" fill="#ffffff" filter="url(#shadow_${m.file})" />
  <circle cx="200" cy="145" r="62" fill="#f1f5f9" />
  <text x="200" y="165" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="46" font-weight="900" fill="${m.c1}" text-anchor="middle" letter-spacing="1">${m.initials}</text>
  <path d="M75 355 C95 240, 305 240, 325 355 Z" fill="#ffffff" opacity="0.95" filter="url(#shadow_${m.file})" />
  <rect x="50" y="325" width="300" height="42" rx="21" fill="#0f172a" opacity="0.85" />
  <text x="200" y="352" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" fill="${m.roleColor}" text-anchor="middle" letter-spacing="1">${m.role}</text>
</svg>`;

  fs.writeFileSync(path.join(targetDir, `${m.file}.svg`), svg);
});

console.log('Generated 6 avatar SVGs successfully!');
