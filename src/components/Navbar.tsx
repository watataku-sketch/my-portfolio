"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects/hare-pont' },
    { name: 'Works', href: '/works' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tighter text-xl text-slate-950 hover:opacity-70 transition-opacity">
          Watari Takuya
        </Link>

        {/* デスクトップメニュー */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-blue-600 transition-colors">
              {item.name}
            </Link>
          ))}
        </div>

        {/* スマホ用ボタン */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-900">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* スマホ用メニュー */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-6 flex flex-col gap-4">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-medium text-slate-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}