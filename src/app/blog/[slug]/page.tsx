// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from './blog-data'; // ここでデータを読み込む！

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // URL（slug）に一致する記事データを取得
  const post = blogPosts[slug as keyof typeof blogPosts];

  // 記事がなければ404エラーを出す
  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      {/* ヘッダー部分 */}
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
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.2]">
            {post.title}
          </h1>
        </div>
      </header>

      {/* 記事本文 */}
      <div className="max-w-3xl mx-auto px-6 py-20 text-lg leading-relaxed text-slate-700">
        {post.content}
        
        {/* 技術ログへの誘導ボタン */}
        <div className="mt-24 p-10 bg-slate-900 rounded-[40px] text-white">
          <h3 className="text-2xl font-bold mb-4">さらに深い「技術ログ」を見る</h3>
          <p className="text-slate-400 mb-8">
            技術ブログ『クリエイティブコーディングロード』では、Processingを軸としたコードの実装解説やツールの活用術を更新。2,100記事の執筆経験から得た知見やプロセスを全公開しています。
          </p>
          <a href="https://watataku-artist-katsuyaku.com" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-rose-600 text-white rounded-full font-bold hover:bg-rose-500 transition-all">
            ブログを見る ↗
          </a>
        </div>
      </div>
    </article>
  );
}