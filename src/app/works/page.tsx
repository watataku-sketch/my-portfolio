import React from 'react';
import Navbar from '@/components/Navbar';

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      <Navbar />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* --- Section: Lead --- */}
          <section className="mb-24">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tighter text-slate-950 flex flex-col gap-2">
  <span className="flex items-center gap-3">
    🏗️ Works: Art & Technology Social Implementation
  </span>
  <span className="text-lg md:text-xl font-medium text-slate-500 tracking-normal">
    作品：アートとテクノロジーの社会的実装
  </span>
</h2>
            <div className="bg-slate-50 border-l-4 border-blue-600 p-8 rounded-r-2xl mb-8 text-lg leading-relaxed shadow-sm text-slate-800">
              「クリエイティブコーディング独学開始から1年9か月。3つの公募展で選出を経て、TOKYO NODE（虎ノ門ヒルズ）の制作依頼を完遂。未経験からでも社会実装まで最短距離で漕ぎ着ける『完遂力』を視覚化します。」
            </div>
            <p className="text-lg text-slate-700 leading-relaxed font-medium mb-4">
              7年間の在宅介護で味わった「言葉が届かない」もどかしさ。 私はその課題を、3Dという「手に取るような体験」に変換することで解決します。 ここに並ぶ実績は、すべて「説明のむずかしいこと」を直感的な安心へと橋渡しするための、社会実装の記録です。
            </p>
          </section>

         {/* --- Section 01: TOKYO NODE --- */}
<section className="mb-24">
  <h3 className="text-2xl font-bold mb-6 border-b pb-2 flex items-center gap-3">
    <span className="text-blue-600 italic">01.</span> 虎ノ門ヒルズ ステーションタワー TOKYO NODE SKY GARDEN & POOL
  </h3>

  <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-2 shadow-xl">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/v_IPm8Fbe4A?rel=0&modestbranding=1&controls=1"
      title="TOKYO NODE SKY GARDEN & POOL 展示映像"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  {/* 撮影に関する注釈 */}
  <div className="text-right pr-2 space-y-1 mb-8 mt-4">
    <p className="text-[10px] text-slate-400">
      ※運営事務局による記録映像です。
    </p>
    <p className="text-[11px] text-blue-500 font-medium">
      （中央よりやや下の青い部分にプールがあります。）
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
    <div className="space-y-4">
      <p><strong>Project Data:</strong> 企業依頼 / 2025.11 〜</p>
      <p><strong>Requested theme:</strong> 大人の遊び場</p>
      <p><strong>Title of work:</strong> 「童心にかえろう」</p>
      <p><strong>Tech Stack:</strong> Processing / DaVinci Resolve</p>
    </div>
    <div className="space-y-4 border-l pl-8 border-slate-100">
      <p><strong>Concept:</strong> 地上250mのインフィニティプールという特殊な環境に合わせ、鑑賞者自身が太陽になったかのような感覚を味わってもらう設計。単なる映像投影ではなく、作品単体で完結するのではなく、この場所の「景色」と、そこに立つ「あなた」が合わさって初めて完成するアート。</p>
      <p><strong>Insights:</strong> 子どもの頃の気持ちを思い出し、気持ちを解放してもらいたい。</p>
    </div>
  </div>
</section>

          {/* --- Section 02: UN:O --- */}
          <section className="mb-24">
            <h3 className="text-2xl font-bold mb-6 border-b pb-2 flex items-center gap-3">
              <span className="text-blue-600 italic">02.</span> UN:O 清和ビジネス サテライトオフィス - 常設展示
            </h3>
            <div className="grid grid-cols-1 gap-12 text-sm">
              <div className="bg-slate-50 p-6 rounded-2xl">
                <p className="mb-4"><strong>Project Data:</strong> 公募にて2作品選出 / 常設展示 / 2025.10 〜</p>
                <p className="mb-4"><strong>Open Call Theme:</strong> UN:Oの空間のためのデジタルアート</p>
                <p><strong>Tech Stack:</strong> Processing / DaVinci Resolve</p>
              </div>

              {/* --- 2-1 選出作品1 --- */}
　            <div className="space-y-6">
               <h4 className="font-bold text-lg text-slate-900 border-l-4 border-blue-600 pl-4">
               2-1 選出作品1：静寂を打つ光
               </h4>

               {/* YouTube埋め込み */}
               <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-2 shadow-xl bg-slate-900">
                <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/2DspcKR0oTk?rel=0&modestbranding=1&controls=1"
                title="UN:O 選出作品1 展示映像"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
                </div>

  {/* 撮影に関する注釈のみ */}
  <div className="text-right pr-2 mb-8 mt-4">
    <p className="text-[10px] text-slate-400">
      ※運営事務局による記録映像です。
    </p>
  </div>

  <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
    <p><strong>Title of work:</strong> 静寂を打つ光</p>
    <p><strong>Concept:</strong> 日本の庭園に見られる「ししおどし」をモチーフに、創造的な仕事のサイクルを表現したデジタルアートです。静かに思考が満ちる「蓄積」、アイデアが形になる「解放」、そして次の創造へと向かう「浄化」の循環。これは、UN:Oという空間で日々生まれる、知的生産活動のリズムそのものを表現しています。</p>
    <p><strong>Insights:</strong> アイデアが浮かびやすくなるような、思考の余白を生む視覚体験の設計。</p>
  </div>
</div>

              {/* --- 2-2 選出作品2 --- */}
<div className="space-y-6 border-t pt-12">
  <h4 className="font-bold text-lg text-slate-900 border-l-4 border-blue-600 pl-4">
    2-2 選出作品2：自分に、まる
  </h4>

  {/* YouTube埋め込み */}
  <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-2 shadow-xl bg-slate-900">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/UbScEorOWLQ?rel=0&modestbranding=1&controls=1"
      title="UN:O 選出作品2 展示映像"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  {/* 撮影に関する注釈のみ（青文字なし） */}
  <div className="text-right pr-2 mb-8 mt-4">
    <p className="text-[10px] text-slate-400">
      ※運営事務局による記録映像です。
    </p>
  </div>

  <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
    <p><strong>Title of work:</strong> 自分に、まる</p>
    <p><strong>Concept:</strong> この作品は、タイムマネジメント手法「ポモドーロテクニック」を、自己肯定の行為として再解釈した、25分間のインタラクティブアートです。25分間、画面には一定の間隔で、温かみのある「まる」が一つずつ増えていきます。これは、生産性を測るためのタイマーではありません。ただ仕事に向き合った、その尊い時間そのものを肯定するための装置です。</p>
    <p><strong>Insights:</strong> 仕事をしながら、ふと画面に「まる」が表示されているのを見て、心理的な負担を減らしつつ、やる気、行動意欲を高めるのが目的の作品。</p>
  </div>
</div>
            </div>
          </section>

          {/* --- Section 03: STATION TOWER --- */}
<section className="mb-32">
  <h3 className="text-2xl font-bold mb-8 border-b pb-2 flex items-center gap-3 text-slate-950">
    <span className="text-blue-600 italic">03.</span> 虎ノ門ヒルズ ステーションタワー B2F サイネージ / 展示
  </h3>

  <div className="space-y-16 mb-16">
    {/* 1つめの動画 */}
    <div>
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-2 shadow-xl bg-slate-900">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Y8Kmt50hKc8?rel=0&modestbranding=1&controls=1"
          title="STATION TOWER 展示映像 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-right pr-2 mt-4">
        <p className="text-[10px] text-slate-400">※運営事務局による記録映像を編集したものです。</p>
      </div>
    </div>

    {/* 2つめの動画 */}
    <div>
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-2 shadow-xl bg-slate-900">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/d29d_0k3J1I?rel=0&modestbranding=1&controls=1"
          title="STATION TOWER 展示映像 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-right pr-2 mt-4">
        <p className="text-[10px] text-slate-400">※運営事務局による記録映像を編集したものです。</p>
      </div>
    </div>

    {/* 3つめの動画 ＋ 4枚の画像 */}
    <div>
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-2 shadow-xl bg-slate-900">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/kiE-erCZrmk?rel=0&modestbranding=1&controls=1"
          title="STATION TOWER 展示映像 3"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-right pr-2 mt-4">
        <p className="text-[10px] text-slate-400">※作品の色がゆっくりと移り変わる様子を、4枚の写真で並べました。</p>
        <p className="text-[10px] text-slate-400">※展示会場の空気感と、作品の輝きをじっくり見ていただくために、あえて静止画を掲載しています。</p>
      </div>

      {/* 4枚の画像グリッド：縦長比率 [3/4] に変更 */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
  <div className="aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden shadow-sm">
    <img src="/images/station-tower-1.jpg" alt="展示風景1" className="w-full h-full object-cover" />
  </div>
  <div className="aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden shadow-sm">
    <img src="/images/station-tower-2.jpg" alt="展示風景2" className="w-full h-full object-cover" />
  </div>
  <div className="aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden shadow-sm">
    <img src="/images/station-tower-3.jpg" alt="展示風景3" className="w-full h-full object-cover" />
  </div>
  <div className="aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden shadow-sm">
    <img src="/images/station-tower-4.jpg" alt="展示風景4" className="w-full h-full object-cover" />
  </div>
</div>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-700">
    <div className="space-y-2">
      <p><strong>Project Data:</strong> 公募選出 / 2025.09</p>
      <p><strong>Open Call Theme:</strong> PERFORMED IMAGE</p>
      <p><strong>Title of work:</strong> 再演される記憶</p>
      <p><strong>Tech Stack:</strong> Processing / DaVinci Resolve</p>
    </div>
    <div className="space-y-4 border-l pl-8 border-slate-100">
      <p><strong>Concept:</strong> 台湾ワーキングホリデー中に出会った人々が、私にかけてくれた温かい言葉の数々。その記憶の断片を、Processingによって光の粒子へと分解し、三次元空間に再配置する試み。</p>
      <p><strong>Insight:</strong> 記憶を抽象的に再現すると同時に、駅を行き交う人一人ひとりがダイヤモンドで、誰一人欠けてはならない存在であるということを伝えたかった。</p>
    </div>
  </div>
</section>

{/* --- Section 04: KITTE OSAKA --- */}
<section className="mb-32 border-b pb-24">
  <h3 className="text-2xl font-bold mb-6 border-b pb-2 flex items-center gap-3 text-slate-950">
    <span className="text-blue-600 italic">04.</span> ＫＩＴＴＥ大阪 AxCROSS - 大規模空間での初展示
  </h3>

  {/* aspect-video に変更して、他の動画とサイズを統一 */}
  <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-2 shadow-xl bg-slate-900">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/vwhM3V2hNLo?rel=0&modestbranding=1&controls=1"
      title="KITTE大阪 AxCROSS 展示映像"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  {/* 注釈 */}
  <div className="text-right pr-2 space-y-1 mb-8 mt-4">
    <p className="text-[11px] text-slate-400 font-medium">
      （横幅18mの超広角ビジョンでの展示。ビル群が上下に動き、街が生まれ変わる表現を実装しました）
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
    <div className="space-y-2 text-slate-700">
      <p><strong>Project Data:</strong> 公募選出 / 2025.03</p>
      <p><strong>Open Call Theme:</strong> 広告募集広告</p>
      <p><strong>Title of work:</strong> 生まれ変わり続ける大阪</p>
      <p><strong>Tech Stack:</strong> Processing / DaVinci Resolve</p>
    </div>
    <div className="space-y-4 border-l pl-8 border-slate-100 text-slate-700">
      <p><strong>Concept:</strong> 旧大阪中央郵便局の歴史を刻む建屋にて、進化を止めることのない「大阪の生命力」を表現。18mという超広角なキャンバスを活かし、ビル群が建設されて生まれ変わる大阪をイメージ。</p>
      <p><strong>Insights:</strong> クリエイティブコーディングにおける「初展示作」でありながら、公共空間の大型ビジョンへの社会実装を成功させた原点。</p>
    </div>
  </div>
</section>

          {/* --- Section: Digital Impact --- */}
          <section className="mb-32">
            <h2 className="text-3xl font-extrabold mb-12 tracking-tight flex flex-col gap-2 text-slate-950">
              <span className="flex items-center gap-3">
              <span className="text-blue-600">📈</span> Digital Impact & Strategy
             </span>
              <span className="text-lg md:text-xl font-medium text-slate-500 tracking-normal">
               デジタル・インパクトと戦略：「数字」と「戦略」で示す構築力
            </span>
            </h2>
            <div className="space-y-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="bg-slate-100 aspect-video rounded-2xl flex items-center justify-center text-slate-400">Search Consoleのグラフ画像</div>
                <div>
                  <h4 className="font-bold text-xl mb-4 text-slate-950">Google Discover 選出：情報の「拡散」をハックする</h4>
                  <p className="text-blue-600 font-bold mb-4">Result: 37,622表示 / 2,254クリック（11日間継続）</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Strategy: 独自の「手帳論」をターゲットに刺さるタイミングで公開。SEO/Webマーケティングの知見を活かし、Googleの推薦アルゴリズムに適合させた実績。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h4 className="font-bold text-xl mb-4 text-slate-950">E-Commerce Strategy：年間売上100万円の創出</h4>
                  <p className="text-blue-600 font-bold mb-4">Result: Amazonアソシエイト 年間売上 ¥1,003,788（2021）</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Strategy: コンテンツの訴求力とSEO設計により、広告に頼らず個人の発信力のみで100万円規模の流通を発生させるマーケット感覚を証明。
                  </p>
                </div>
                <div className="bg-slate-100 aspect-video rounded-2xl flex items-center justify-center text-slate-400 order-1 md:order-2">売上集計画面のキャプチャ</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="bg-slate-100 aspect-video rounded-2xl flex items-center justify-center text-slate-400 text-center p-4 text-xs">認定証のフラットデザイン画像</div>
                <div>
                  <h4 className="font-bold text-xl mb-4 text-slate-950">Authority：Web戦略を支える専門知識</h4>
                  <p className="mb-4"><strong>Certification:</strong> SEO検定1級 / Webマーケティング検定1級</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Insight: 確かな理論的バックボーンに基づいたWeb戦略の立案・実行が可能です。
                  </p>
                </div>
              </div>
            </div>
          </section>

         {/* --- Section: Legacy --- */}
<section className="mb-32 bg-slate-50 -mx-6 px-6 py-20 rounded-3xl">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-extrabold mb-16 tracking-tight flex flex-col gap-2 text-slate-950">
      <span className="flex items-center gap-3">
        <span className="text-blue-600">🎨</span> Creative Journey
      </span>
      <span className="text-lg md:text-xl font-medium text-slate-500 tracking-normal">
        表現の歩み：多領域における活動と実績
      </span>
    </h2>

    <div className="grid grid-cols-1 gap-20">
      
      {/* 1. Music/Hybrid: 内なる言葉のクロニクル */}
      <div className="space-y-6">
        <h4 className="font-bold text-xl border-l-4 border-blue-600 pl-4 text-slate-900">
          AI × Human Session: オリジナルソング「内なる言葉のクロニクル」
        </h4>
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl bg-slate-900">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/ic_x06YvDQg?rel=0&modestbranding=1"
            title="内なる言葉のクロニクル"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-sm text-slate-700 leading-relaxed space-y-4">
          <p><strong>Concept:</strong> 「わたしたちは言葉でできている」という詩を、アルゴリズムという名の風にのせて視覚的に翻訳。Suno AIを用いた楽曲制作と、Processingによるジェネラティブ映像を融合させた、人間と機械の対話の記録です。</p>
          <div className="bg-white/50 p-4 rounded-xl italic text-slate-600 border border-slate-100">
            「今日、あなたの世界は、どんな色の言葉で満たされていますか？」
          </div>
          <p className="text-[11px] text-slate-500">
            ※虎ノ門ヒルズ TOKYO NODE「DIGITAL SPRINGBOARD」テーマ『詩とコンピュータ』という公募に提出した作品に、音楽をつけた曲　
          </p>
        </div>
      </div>

      {/* 2. Music: 音楽コンテスト 投票1位 (2014) */}
      <div className="space-y-6">
        <h4 className="font-bold text-xl border-l-4 border-blue-600 pl-4 text-slate-900">
          Music: 大阪市鶴見区 音楽コンテスト お客様投票1位 (2014)
        </h4>
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl bg-slate-900">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/eOgHYc0DTvE?rel=0&modestbranding=1&controls=1"
            title="Music Contest 2014"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-sm text-slate-600 leading-relaxed pl-5 space-y-2">
          <p><strong>Achievement:</strong> 聴衆による直接投票で1位を獲得。大阪市鶴見区 音楽大使に任命される。</p>
          <p><strong>Achievement:</strong> 地域文化の振興を目的とした音楽大使として活動。イベントにて出演し、音楽を通じたコミュニティ活性化に貢献しました。</p>
          <p><strong>Set List:</strong> なごり雪（カバー）、オレンジ（オリジナル曲）</p>
          <p className="pt-2 text-slate-500 italic">
            Background: 人に涙していただいた弾き語りの経験は、現在の「心に届くアニメーション設計」の原点となっています。
          </p>
        </div>
      </div>

      {/* 4. Photography: 台北ナビ (文字のみ) */}
      <div className="space-y-4">
        <h4 className="font-bold text-xl border-l-4 border-blue-600 pl-4 text-slate-900">
          Photography: 台湾の大手観光メディアでの表紙採用や、商業撮影を通じた大幅な業績改善
        </h4>
        <div className="text-sm text-slate-600 leading-relaxed pl-5">
          <p><strong>Overview:</strong> 台湾最大の観光情報サイト「台北ナビ」の表紙写真を撮影。スクールフォト売上アップ</p>
          <p><strong>Impact:</strong> スクールフォト等の商業撮影において、前年比500%の売上アップを達成。</p>
        </div>
      </div>

      {/* 5. Writing: トロント情報誌『TORJA』 (文字のみ) */}
      <div className="space-y-4">
        <h4 className="font-bold text-xl border-l-4 border-blue-600 pl-4 text-slate-900">
          Writing: トロント情報誌『TORJA』 ラブコメ連載 (2011-2012)
        </h4>
        <div className="text-sm text-slate-600 leading-relaxed pl-5">
          <p><strong>Project:</strong> カナダ・トロントの日本人向け現地情報誌にてコラムを連載。</p>
          <p><strong>Storytelling:</strong> 読者にきゅんきゅんしてもらえるような展開を追求。後のSEOライター・文筆家としてのキャリア、および論理的な構成力の礎となりました。</p>
        </div>
      </div>

    </div>
  </div>
</section>

          {/* --- Section: Future Outlook --- */}
          <section className="bg-blue-600 text-white p-12 rounded-[2rem] shadow-xl shadow-blue-200">
            <h2 className="text-3xl font-bold mb-8 flex flex-col gap-2">
             <span className="flex items-center gap-3">
             <span>🚀</span> Future Outlook
             </span>
             <span className="text-lg md:text-xl font-medium text-blue-100/80 tracking-normal">
              未来への展望：次に取り組むこと
             </span>
            </h2>
            <p className="text-xl font-bold mb-8 leading-relaxed">
              「テクノロジーを、医療・介護の現場に『心のゆとり』を生むための力にする。 」
            </p>
            <div className="space-y-6 text-blue-50 text-lg leading-relaxed font-medium">
              <p>独学で走り抜けた最初の1年9か月は、公募入賞という形で「技術で何ができるか」を証明する期間でした。 次のフェーズでは、この「伝える技術」を、医療・介護DX領域で役に立てたいです。</p>
              <p>「患者と医師の情報の立体的な可視化」や、数値化できない介護現場の「言葉にできない『つらさ』や『変化』を、色や光で分かりやすく伝える 」に挑戦します。</p>
              <p>かつての私のように、一人で介護の壁に突き当たっている誰かへ。 テクノロジーという「架け橋」を架け、孤独な「もどかしさ」を「晴れやかな確信」に変える未来を、私は自らの手で実装します。</p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}