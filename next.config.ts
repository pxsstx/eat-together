// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public', // เก็บไฟล์ PWA ในโฟลเดอร์ public
  disable: process.env.NODE_ENV === 'development', // ปิด PWA ในโหมด development
  register: true, // ลงทะเบียน Service Worker
  skipWaiting: true, // ให้ Service Worker เริ่มทำงานทันที
});

module.exports = withPWA({
  reactStrictMode: true,
});