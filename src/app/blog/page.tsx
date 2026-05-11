import React from 'react';
import Link from 'next/link';

// 確定した4記事のデータ
const blogPosts = [
  {
    id: 1,
    category: "Vision",
    title: "「見えない不安」を「見える安心」へ。在宅介護7年で気づいた、医療の『伝え方』を3Dで変える方法。",
    description: "情報の非対称性が生む医療現場の課題を、3Dビジュアライゼーションでどう解決するか。当事者としての視点を綴ります。",
    date: "2026.04.24",
    color: "bg-blue-50 text-blue-600",
    slug: "vision-3d-care"
  },
  {
    id: 2,
    category: "SEO/Marketing",
    title: "2,100記事の「磨き上げ」で辿り着いた情報の価値。SEO/Webマーケ検定1級が教える、HealthTechに必要な信頼（E-E-A-T）の作り方。",
    description: "膨大な試行錯誤から学んだ「情報の質」へのこだわり。命を扱うプロダクトにおいて、いかにして信頼を構築し、インデックスさせるか。",
    date: "2026.04.24",
    color: "bg-green-50 text-green-600",
    slug: "trust-and-seo"
  },
  {
    id: 3,
    category: "Art/Contribution",
    title: "アートは、人を救うツールになれるか。展示実績が教えてくれた「役に立つ表現」の充実感と、医療・介護への展望。",
    description: "UN:O選出やKITTE大阪での展示を経て。自己表現としてのコードを、誰かのための技術へと昇華させるパラダイムシフトの記録。",
    date: "2026.04.24",
    color: "bg-purple-50 text-purple-600",
    slug: "art-and-care"
  },
  {
    id: 4,
    category: "UX/Engineering",
    title: "「癒やす手」を守るエンジニアリング。歯科医師の負担を最小化する、ホスピタリティ溢れるUX設計の「作法」。",
    description: "現場の最前線で戦うプロフェッショナルの身体的負荷を、コードでどう軽減できるか。対話から生まれた新しいUXの形。",
    date: "2026.04.24",
    color: "bg-rose-50 text-rose-600",
    slug: "ux-for-dental-care"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* ヘッダーセクション */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            BLOG <span className="text-rose-500">&</span> Insights
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            技術、マーケティング、そしてケアの現場。それらを繋ぎ合わせる、私なりの「思考のデバッグ」ログ。
          </p>
        </div>

        {/* 記事グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="group h-full bg-white p-8 md:p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${post.color}`}>
                    {post.category}
                  </span>
                  <time className="text-sm text-slate-400 font-medium italic">{post.date}</time>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-rose-600 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                  {post.description}
                </p>
                
                <div className="flex items-center text-slate-900 font-bold group-hover:gap-2 transition-all">
                  Read More <span className="text-rose-500 ml-2">→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* ---------------------------------------------------------
            ★ ここに「既存の技術ブログへ」 ★
        --------------------------------------------------------- */}
        <div className="mt-24 pt-16 border-t border-slate-100 text-center">
          <p className="text-slate-500 mb-6 font-medium max-w-2xl mx-auto leading-relaxed">
            技術ブログ『Creative Coding Road』では、<br />
            Processingを軸としたコードの実装解説やツールの活用術を更新。<br />
            2,100記事の執筆経験から得た知見やプロセスを全公開しています。
          </p>
          <a 
            href="https://watataku-artist-katsuyaku.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-100 hover:-translate-y-1"
          >
            <span>クリエイティブコーディングロードを見る</span>
            <span className="text-xl">↗</span>
          </a>
          
          <div className="mt-8 flex justify-center gap-8 text-sm">
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold text-lg">750+</span>
              <span className="text-slate-400">Daily Articles</span>
            </div>
            <div className="flex flex-col border-x border-slate-100 px-8">
              <span className="text-slate-900 font-bold text-lg">81%</span>
              <span className="text-slate-400">Index Rate</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold text-lg">2,100+</span>
              <span className="text-slate-400">Total Lifetime Posts</span>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------- */}

      </div>
    </main>
  );
}