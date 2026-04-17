"use client";

import React from 'react';
import DentalModel from '@/components/DentalModel';
import { motion } from 'framer-motion';

export default function HarePontPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- Hero Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-500 font-bold mb-4 tracking-widest text-sm uppercase">Preventive Dental Bridge System</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            歯科現場の「不安」を<br />
            「晴れ」に変える、<br />
            世界で一つの架け橋。
          </h1>
          <p className="text-2xl font-light text-slate-600 italic">HARE-PONT（ハレポン）</p>
        </motion.div>

        {/* --- 3D Preview Section --- */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden mb-20 border border-slate-100">
          <div className="h-[400px] md:h-[600px] w-full">
            <DentalModel />
          </div>
          <div className="p-6 bg-slate-900 text-white text-center text-sm tracking-widest">
            マウスやタッチで「自分の歯」をグリグリと動かして発見する体験
          </div>
        </div>

        {/* --- Concept Section --- */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-blue-500 pl-4">ネーミングの由来</h3>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p><span className="font-bold text-blue-600">晴れ（HARE）：</span> 歯の健康を守り、患者様の心を晴れやかに。</p>
              <p><span className="font-bold text-blue-600">ポンティック（Pontic）：</span> 歯科用語の「架け橋（人工歯）」への敬意。ラテン語で「橋」を意味する Pont / Pons から。</p>
              <p className="bg-blue-50 p-4 rounded-lg font-medium text-blue-800 italic">
                「ハレポン ＝ 不安を晴らす架け橋」
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-blue-500 pl-4">「自ら見つける」体験</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              ハレポンの3D操作は、患者様自身が患部を動かして「自分で発見する」体験を提供します。
            </p>
            <p className="text-slate-900 font-bold leading-relaxed">
              人から言われた正論ではなく、自分で触れて見た「事実」だからこそ、「納得」という最高の救いへと変わります。
            </p>
          </div>
        </div>

        {/* --- Benefits Section --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-blue-500 mb-4 text-3xl font-bold">For Patient</div>
            <h4 className="text-xl font-bold mb-4 text-slate-900">患者様にとって</h4>
            <p className="text-slate-600 leading-relaxed">
              「どこが悪いか」を直感。迷いが「自発的な予防行動（通院・ケア）」という確固たる意志に変わります。
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-blue-500 mb-4 text-3xl font-bold">For Clinic</div>
            <h4 className="text-xl font-bold mb-4 text-slate-900">医院様にとって</h4>
            <p className="text-slate-600 leading-relaxed">
              説明から「共感」へ。モチベーションが維持され、スタッフの負担軽減とリピート率向上を実現します。
            </p>
          </div>
        </div>

        {/* --- Vision Section --- */}
        <div className="text-center mb-20 py-16 border-t border-slate-200">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">「自分の歯」への理解が、<br />クリニックの未来を変える</h3>
          <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed mb-8">
            私たちは、歯科医療を「痛くなってから行く場所」から、<br />
            「人生を晴れやかにするために行く場所」へアップデートします。
          </p>
        </div>

        {/* --- Disclaimer --- */}
        <div className="bg-slate-100 p-8 rounded-xl text-xs text-slate-500 leading-relaxed">
          <h5 className="font-bold mb-4 text-slate-700 text-sm">【本システムのご利用にあたって】</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>非医療機器の明示:</strong> 本システムは、診断や治療方針の決定を自動で行う「医療機器」ではありません。</li>
            <li><strong>医師の責任:</strong> 最終的な診断、治療方針の決定は、必ず歯科医師自らの専門的知見と責任において行ってください。</li>
            <li><strong>免責事項:</strong> 本システムの使用により生じた損害について、開発者は一切の責任を負いません。</li>
            <li><strong>試作版の扱い:</strong> 現在開発中のプロトタイプ（ベータ版）であり、予告なく仕様変更を行う場合があります。</li>
          </ul>
        </div>

      </div>
    </main>
  );
}