import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ---------------------------------------------------------
// 1. 記事データの定義（一覧ページのslugと完全に一致させています）
// ---------------------------------------------------------
const blogPosts = {
  "medical-3d-visualization": {
    category: "Vision",
    title: "「見えない不安」を「見える安心」へ。在宅介護7年で気づいた、医療の『伝え方』を3Dで変える方法。",
    date: "2026.04.23",
    description: "情報の非対称性が生む医療現場の課題を、3Dビジュアライゼーションでどう解決するか。",
    content: (
      <>
        <p>7年間にわたる在宅介護の現場で私が痛感したのは、「言葉が届かない」ことによる不安でした。病状やケアの方法を、専門的な言葉だけで理解するのは、家族にとっても本人にとっても非常に困難な作業です。</p>
        <p>そこで私はクリエイティブコーディングの技術を使い、医学的な情報を3Dで視覚化するアプローチを開始しました。「説明される」のではなく「見て、触れて、納得する」。この『情報の民主化』こそが、今の医療・介護現場に最も必要なホスピタリティだと確信しています。</p>
      </>
    ),
  },
  "seo-eeat-strategy": {
    category: "SEO/Marketing",
    title: "2,100記事の「磨き上げ」で辿り着いた情報の価値。SEO/Webマーケ検定1級が教える、HealthTechに必要な信頼（E-E-A-T）の作り方。",
    date: "2026.04.22",
    description: "膨大な試行錯誤から学んだ「情報の質」へのこだわり。信頼をいかに構築するか。",
    content: (
      <>
        <p>SEO検定1級ホルダーとして、私は2,100記事以上のコンテンツと向き合ってきました。特にHealthTech（ヘルステック）の領域では、Googleが定義するE-E-A-T（経験・専門性・権威性・信頼性）は単なる指標ではなく、ユーザーの命を守るための「誠実さの証明」です。</p>
        <p>本記事では、私が培ったWebマーケティングの知見をどう開発に活かし、情報の非対称性を解消しながら「届くべき人に届くプロダクト」を作るための戦略を解説します。</p>
      </>
    ),
  },
  "art-as-hospitality": {
    category: "Art/Contribution",
    title: "アートは, 人を救うツールになれるか。展示実績が教えてくれた「役に立つ表現」の充実感と、医療・介護への展望。",
    date: "2026.04.21",
    description: "UN:O選出やKITTE大阪での展示を経て。自己表現を社会貢献へと繋げるパラダイムシフト。",
    content: (
      <>
        <p>クリエイティブコーディングの世界で、KITTE大阪やUN:Oなどの公募展に選出された経験は、私に大きな気づきを与えてくれました。それは、「美しい」という感動は、時に「救い」に近い力を持つということです。</p>
        <p>自己完結するアートから、誰かの不便を解決したり、心を癒したりするための「機能するアート」へ。私の表現の軸足は今、確実に医療・介護という社会実装の場へと向かっています。</p>
      </>
    ),
  },
  "ux-for-dental-care": {
    category: "UX/Engineering",
    title: "「癒やす手」を守るエンジニアリング。歯科医師の負担を最小化する、ホスピタリティ溢れるUX設計の「作法」。",
    date: "2026.04.20",
    description: "現場で戦うプロフェッショナルの身体的負荷を、コードでどう軽減できるか。",
    content: (
      <>
        <p>歯科医師の先生とLINEで対話を重ねる中で見えてきたのは、過酷な現場で手を酷使するプロフェッショナルの姿でした。患者への説明のために複雑なUIを操作することは、時に身体的な「痛み」に繋がります。</p>
        <p>エンジニアとして私が目指すのは、最小限の操作で最大限の伝達を可能にする「癒やす手を守るUX」です。3Dモデルの回転一つ、ボタンの配置一つにホスピタリティを込める手法を紐解きます。</p>
      </>
    ),
  }
};

// ---------------------------------------------------------
// 2. 詳細ページコンポーネント (Next.js 15+ 対応版)
// ---------------------------------------------------------
export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // paramsをawaitしてslugを取り出す
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  // 該当するslugがない場合は404を表示
  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      {/* 記事上部のヘッダー背景 */}
      <header className="bg-slate-50 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-rose-500 font-bold mb-10 inline-flex items-center gap-2 hover:gap-3 transition-all">
            <span>←</span> Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-rose-50 text-rose-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
              {post.category}
            </span>
            <time className="text-sm text-slate-400 font-medium italic">{post.date}</time>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight">
            {post.title}
          </h1>
        </div>
      </header>

      {/* 記事の本文エリア */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="prose prose-slate prose-lg md:prose-xl max-w-none text-slate-700 leading-loose">
          {post.content}
        </div>

        {/* 記事下部のフッター誘導（技術ブログへの架け橋） */}
        <div className="mt-24 p-10 bg-slate-900 rounded-[40px] text-white shadow-2xl shadow-slate-200">
          <h3 className="text-2xl font-bold mb-4">
            さらに深い「技術ログ」を見る
          </h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            この記事の背景にあるコードの解説や、750記事を超える日々の試行錯誤は、技術ブログ「Creative Coding Road」で毎日発信しています。
          </p>
          <a 
            href="https://watataku-artist-katsuyaku.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-rose-600 text-white rounded-full font-bold hover:bg-rose-500 transition-all hover:-translate-y-1"
          >
            <span>ブログで詳細な実装を見る</span>
            <span className="text-xl">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}