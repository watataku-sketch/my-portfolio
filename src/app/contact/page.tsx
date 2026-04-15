"use client";

import React from 'react';

export default function ContactPage() {
  
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      <main className="pt-32 pb-20 px-6 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 italic">Contact</h1>
        <p className="text-slate-500 mb-12">
          制作の依頼、コラボレーション、またはお仕事のご相談など、<br />
          こちらのフォームよりお気軽にお問い合わせください。
        </p>

        {/* 🚀 フォーム */}
        <form 
          action="https://formspree.io/f/xgorvrgo" 
          method="POST" 
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700">お名前 / Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700">メールアドレス / Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-slate-700">メッセージ / Message</label>
            <textarea 
              name="message" 
              required 
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="ご相談内容を入力してください"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-slate-900 text-white font-bold py-4 rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200"
          >
            送信する / Send Message
          </button>
        </form>
      </main>
    </div>
  );
}