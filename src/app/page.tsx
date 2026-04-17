"use client"; // 3Dモデルなどのクライアントサイド処理がある場合、これが必要です

import React, { useState } from 'react'; // { useState } を追加
import DentalModel from '@/components/DentalModel';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // 初期値は false（閉じている）
  // ...
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">

      {/* 🚀 【追加】ナビゲーションメニュー：ここから */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* ロゴ */}
          <a href="/" className="font-bold tracking-tighter text-xl text-slate-950 hover:opacity-70 transition-opacity">
          Watari Takuya
          </a>

          {/* デスクトップ用メニュー */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="/about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#Projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="/works/hare-pont" className="hover:text-blue-600 transition-colors">Works</a>
            <a href="#Blog" className="hover:text-blue-600 transition-colors">Blog</a>
            <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          
          {/* スマホ用ハンバーガーボタン */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-slate-900 focus:outline-none"
          >
            {/* メニューが開いている時は「×」、閉じている時は「三」を表示 */}
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>

        {/* 📱 スマホ用展開メニュー（isOpen が true の時だけ表示） */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <a href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600">About</a>
            <a href="#Projects" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600">Projects</a>
            <a href="/works/hare-pont" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600">Works</a>
            <a href="#Blog" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600">Blog</a>
            <a href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600">Contact</a>
          </div>
        )}
      </nav>
      {/* 【更新】ナビゲーションメニュー：ここまで */}
      
{/* --- 第1段階: HERO --- */}
<section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden w-full">
  <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
    
    {/* タイトル：3行構成でリズムを作る */}
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight tracking-tighter text-slate-900">
      説明のむずかしいことを、<br />
      3Dで「手に取るように」<br />
      わかりやすく
    </h1>

    {/* サブテキスト：横幅を絞り、行間を広げて「柱」にする */}
    <p className="text-lg md:text-xl text-slate-900 max-w-2xl mx-auto mb-12 leading-[1.8] font-medium">
      7年間の在宅介護で直面した「言葉が届かない」もどかしさを<br className="hidden md:block" />
      3Dの力で、誰もが直感的に納得できる「目に見える安心」へ
    </p>

    {/* 3Dモデル表示エリア */}
    <div className="relative w-full max-w-[800px] h-[400px] md:h-[500px] shadow-2xl rounded-2xl overflow-hidden border-4 border-slate-100 bg-slate-900 group">
      <DentalModel />
      <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white/50 pointer-events-none">
        3D MODEL: DRAG TO ROTATE
      </div>
    </div>
  </div>
</section>

      <hr className="border-slate-100 max-w-4xl mx-auto" />

      {/* --- 第2段階: MISSION --- */}
      <section className="max-w-4xl mx-auto py-24 px-6">
        <h2 className="text-2xl font-bold mb-12 flex items-center">
          <span className="w-8 h-1 bg-blue-600 mr-4"></span>
          解決したい現場の課題
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-600">「食べること」がリスクに変わる前に</h3>
            <p className="text-slate-600 leading-relaxed">
             「食べること」がリスクに変わる前に。
              食べ物や汚れが肺に入り込み命を脅かすことや、口の衰えが全身の元気を奪っていくこと。そんな「見えないリスク」が、在宅介護の現場では見過ごされています。口腔ケアを、不潔を防ぐためだけではなく、一生自分の口で食べるための「予防」へ。
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-600">介護者の孤立を、テクノロジーで支える</h3>
            <p className="text-slate-600 leading-relaxed">
              20代・30代の介護者が直面する、社会からの孤立と将来への不安。誰にも理解されない24時間の緊張感は、「どうしていいか分からない」という迷いから生まれます。テクノロジーによって「見えない不安」を「確かな安心」に変え、介護者の心に余裕を取り戻します。
            </p>
          </div>
        </div>
      </section>

      {/* --- 第3段階: PRODUCT --- */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12">なぜ3Dなのか</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2 flex items-center">
                <span className="text-blue-600 mr-2">1.</span> 見えない場所の可視化
              </h3>
              <p className="text-slate-600 leading-relaxed">
                口腔内という暗所を3D化。磨き残しが細菌リスクに直結することを直感的に伝え、口腔ケアを「ただの歯磨き」から、「命を守るための、大切な習慣」へと変えていきます。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2 flex items-center">
                <span className="text-blue-600 mr-2">2.</span> 「わかる」から生まれる安心
              </h3>
              <p className="text-slate-600 leading-relaxed">
                医師・介護者・患者が同じ3Dモデルを操作することで、説明のズレを排除。家族への指導を楽にし、納得感のある医療体験を作ります。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2 flex items-center">
                <span className="text-blue-600 mr-2">3.</span> 自分から取り組むケアへ
              </h3>
              <p className="text-slate-600 leading-relaxed">
                3Dでお口の仕組みを深く知ることで、指示を待つ姿勢から、「自ら予防のために歯磨きをする」積極的な行動へ。一生使い続ける歯を、自分で管理できる安心を届けます。
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* --- 第4段階: FUTURE --- */}
<section className="max-w-4xl mx-auto py-24 px-6">
  <h2 className="text-2xl font-bold mb-12 text-slate-800">これからの挑戦</h2>
  
  <div className="border-l-4 border-blue-600 pl-8">
    {/* メインタイトル */}
    <h3 className="text-2xl font-bold mb-6 text-slate-900 leading-tight">
      介護 × クリエイティブコーディング：<br className="md:hidden" />表現による自立支援
    </h3>
    
    {/* リード文 */}
    <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-3xl">
      24時間の緊張感にさらされる在宅介護者へ、コードの力で「自分の時間」と「未来の希望」を取り戻す体験を届けます。
    </p>

    {/* 3つの柱 */}
    <div className="space-y-8">
      <div>
        <h4 className="font-bold text-slate-800 mb-2 flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
          心のセラピー
        </h4>
        <p className="text-slate-600 pl-5 leading-relaxed">
          自分の操作で色が変わり、世界が動く視覚体験を通じて、「自分にも何かを変える力がある」という自信を取り戻します。
        </p>
      </div>

      <div>
        <h4 className="font-bold text-slate-800 mb-2 flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
          挫折させない学び
        </h4>
        <p className="text-slate-600 pl-5 leading-relaxed">
          介護の合間に「5分だけ触れる」設計で、楽しみながらプログラミングの基礎を習得。
        </p>
      </div>

      <div>
        <h4 className="font-bold text-slate-800 mb-2 flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
          キャリアへの橋渡し
        </h4>
        <p className="text-slate-600 pl-5 leading-relaxed">
          毎日の練習で生まれた作品を、そのまま「仕事のスキル」として蓄積。介護後のスムーズな就職・自立を支える「未来へのルート」を築きます。
        </p>
      </div>
    </div>
  </div>
</section>

{/* --- 第5段階: Artistic CV / 展示・受賞歴 --- */}
<section className="bg-slate-950 text-slate-100 py-24 px-6 border-t border-slate-900">
  <div className="max-w-4xl mx-auto">
    
    {/* メイン見出し */}
    <div className="flex items-center gap-3 mb-12">
      <span className="text-3xl">🎨</span>
      <h2 className="text-2xl font-bold text-blue-400">展示・受賞歴</h2>
    </div>

    {/* 実績テーブル */}
    <table className="w-full mb-6 md:table">
      <thead className="hidden md:table-header-group">
        <tr className="border-b border-slate-800 text-left text-sm text-slate-200 font-semibold">
          <th className="pb-4 pr-4 font-normal">年月</th>
          <th className="pb-4 pr-4 font-normal">内容</th>
          <th className="pb-4 font-normal">場所 / 詳細</th>
        </tr>
      </thead>
      
      <tbody className="divide-y divide-slate-900 md:divide-none">
        {[
          { year: '2025.11', content: '企業依頼/展示', location: '虎ノ門ヒルズ ステーションタワー49F' },
          { year: '2025.10', content: '常設展示/選出', location: '清和ビジネス UN:O（東京/2作品選出）' },
          { year: '2025.09', content: '公募選出/展示', location: '虎ノ門ヒルズ B2F TOKYO NODE サイネージ' },
          { year: '2025.03', content: '公募選出/展示', location: 'KITTE大阪 AxCROSS' },
          { year: '2014', content: 'お客様投票1位', location: '大阪市鶴見区音楽大使任命' },
        ].map((item, index) => (
          <tr key={index} className="flex flex-col md:table-row py-2 md:py-0 border-b border-slate-900 md:border-none last:border-0">
            {/* 年月：スマホでは明るい白で強調 */}
            <td className="font-bold text-white mb-1 md:mb-0 md:py-5 md:pr-4 md:table-cell text-sm md:text-base md:font-normal md:text-slate-300">
              {item.year}
            </td>
            {/* 内容：少し明るいグレーに統一 */}
            <td className="font-medium text-slate-200 mb-1 md:mb-0 md:py-5 md:pr-4 md:table-cell text-base">
              {item.content}
            </td>
            {/* 場所：見にくいグレー(slate-400)からslate-200に変更 */}
            <td className="text-sm md:text-base text-slate-200 md:py-5 md:table-cell">
              {item.location}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* 🚀 追加：Digital Strategy & Global Experience セクション */}
    {/* スマホ1列/PC2列、余白はタイトに mt-0 pt-6 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mt-0 pt-6 border-t border-slate-900">
      
      {/* デジタルマーケティング */}
      <div className="space-y-6">
        <h3 className="flex items-center gap-3 text-xl font-bold text-blue-400">
          <span className="text-2xl">📊</span> デジタルマーケティング
        </h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-slate-100 mb-1">Google Discover選出:</h4>
            {/* text-slate-400から200へ：視認性を大幅アップ */}
            <p className="text-slate-200 text-sm leading-relaxed">
              自著記事が11日間連続掲載で約3.7万回表示を記録。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-100 mb-1">Marketing ROI:</h4>
            <p className="text-slate-200 text-sm leading-relaxed">
              Amazonアソシエイトにおいて年間売上高100万円超を達成。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-100 mb-1">資格:</h4>
            {/* ここは少し青みのある白でプロ感を演出 */}
            <p className="text-slate-200 text-sm font-medium">
              SEO検定1級 / Webマーケティング検定1級
            </p>
          </div>
        </div>
      </div>

      {/* 海外経験 */}
      <div className="space-y-6 mt-10 md:mt-0">
        <h3 className="flex items-center gap-3 text-xl font-bold text-blue-400">
          <span className="text-2xl">🌍</span> 海外経験
        </h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-slate-100 mb-1">海外ボランティア & ワーホリ:</h4>
            <p className="text-slate-200 text-sm leading-relaxed">
              4カ国での就業および現地コミュニティ支援活動。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-100 mb-1">Global Mindset & 自走力:</h4>
            <p className="text-slate-200 text-sm leading-relaxed">
              世界20カ国を放浪。言葉も常識も異なる環境で、自ら情報を収集し、道を切り拓いてきた「圧倒的な自走力」が強みです。未知の技術や予期せぬトラブルに対しても、旅先で培ったサバイバル能力を活かし、自ら解決策を見出して完遂させる力を持っています。
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

   {/* フッター */}
<footer className="py-16 text-center text-slate-400 text-xs tracking-widest border-t border-slate-900 bg-slate-950 px-6">
  {/* flex-col でスマホは縦並び、md:flex-row でPCは横並びに切り替え */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
    
    <span>&copy; 2026 Watari Takuya</span>
    
    {/* PCの時だけ表示される区切り線 */}
    <span className="hidden md:inline mx-2">-</span>
    
    <span>Hospitality Web Architect</span>
    
    <span className="hidden md:inline mx-2">-</span>
    
    <span>Portfolio.</span>
    
  </div>
</footer>
    </div>
  );
}