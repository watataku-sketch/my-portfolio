"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* メインコンテンツ */}
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        
        {/* モットーセクション */}
        <section className="mb-20">
          <div className="border-l-4 border-blue-600 pl-6 mb-8">
            <p className="text-lg md:text-xl font-medium text-slate-500 leading-relaxed mb-4 italic">
              2100の記事、20カ国の景色、7年の在宅介護。音楽が生む共鳴。<br />
              そして、虎ノ門ヒルズ49Fの空へ辿り着いた表現力。
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
              これら全ての経験をテクノロジーで「一本の線」へと繋ぎ、<br />
              現場の隅々まで、一人でも多くの「ありがとう」を創りたい。
            </h2>
          </div>
        </section>

        {/* ストーリーセクション */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-6 text-slate-950">「なぜ、私はコードを書くのか」</h3>
          <div className="space-y-6 text-lg leading-relaxed text-slate-700">
            <p>
              7年間の在宅介護。命と向き合う極限の日常で痛感したのは、<strong>「言葉だけでは救いきれない負担」</strong>と、意思疎通がうまくいかないことによる<strong>「孤独な緊張感」</strong>でした。
            </p>
            <p>
              特に認知症の家族への説明は困難を極め、医師、家族、要介護者の三者が、それぞれに「伝わらない」という想いを抱えていました。
            </p>
            <p className="text-blue-700 font-semibold italic bg-blue-50 p-4 rounded-lg">
              「あの時、もし3Dで直感的に可視化して説明できていたら、もっと楽に会話ができたんじゃないだろうか？」
            </p>
            <p>
              その切実な問いが、私のプログラミングの原動力です。
            </p>
            <p>
              AI × 3D実装 × 人生経験。
              この掛け算で、現場の重い空気や心身の負担をテクノロジーで<strong>「解きほぐす」</strong>アイデアを形にする。関わる人全員が笑顔になり、自然と「ありがとう」が生まれる瞬間を創るために、私は今日もコードを書き続けています。
            </p>
          </div>
        </section>

        {/* スキルセクション */}
        <section className="mb-20 bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="text-2xl">🛠️</span> Capabilities | 課題を突破する「知」と「技」
          </h3>
          
          <div className="space-y-12">
            {/* Tech */}
            <div>
              <h4 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Tech & Creative — 現場を可視化し、直感で繋ぐ技術</h4>
              <ul className="space-y-4">
                <li>
                  <span className="font-bold block text-slate-900 text-lg">React / Next.js / R3F</span>
                  <p className="text-slate-600">AI(Gemini)を開発パートナーとして、短期間でプロトタイプを実装。技術を「手段」として使いこなし、課題を最短で形にします。</p>
                </li>
                <li>
                  <span className="font-bold block text-slate-900 text-lg">Creative Coding(Processing / p5.js)</span>
                  <p className="text-slate-600">3つの公募選出、虎ノ門ヒルズ（TOKYO NODE）やKITTE大阪での展示実績に裏打ちされた「ニーズに応える」視覚表現力。</p>
                </li>
                <li>
                  <span className="font-bold block text-slate-900 text-lg italic">Digital Art Style "Pixel Jewel"</span>
                  <p className="text-slate-600">写真の記憶を3Dの輝きへ変換する独自の表現手法を提唱。</p>
                </li>
              </ul>
            </div>

            {/* Marketing */}
            <div>
              <h4 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Marketing & Growth — ユーザーの悩みを捉え、解決策を届ける力</h4>
              <ul className="space-y-4">
                <li>
                  <span className="font-bold block text-slate-900 text-lg">SEO & Webマーケティング（各検定1級保持）</span>
                  <p className="text-slate-600">Google Discoverへの11日間連続掲載、年間売上100万円超の実績。「役に立つこと」を最優先にした導線を大切にしています。</p>
                </li>
                <li>
                  <span className="font-bold block text-slate-900 text-lg">Content Production & 音楽大使</span>
                  <p className="text-slate-600">約2100記事の執筆経験。祖母へ贈った曲でお客様投票1位を獲得。難解なテーマでも、心に深く入り込む「届く言葉」を紡ぎます。</p>
                </li>
                <li>
                  <span className="font-bold block text-slate-900 text-lg">Creative Business Result（売上500%アップ）</span>
                  <p className="text-slate-600">スクールフォトにて、保護者様のニーズを汲み取り、園児たちと心を通わせ撮影した結果、前年比500%の売上を達成。</p>
                </li>
              </ul>
            </div>

            {/* Global */}
            <div>
              <h4 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">Global & Communication — 言葉を超えて「心」を繋ぐ適応力</h4>
              <ul className="space-y-4">
                <li>
                  <span className="font-bold block text-slate-900 text-lg">多文化理解と非言語コミュニケーション</span>
                  <p className="text-slate-600">アイスランドや台湾・カナダでの活動を通じ、言葉の壁を「行動」と「表現」で突破。留学生指導ではサプライズビデオを贈られる信頼関係を築きました。</p>
                </li>
                <li>
                  <span className="font-bold block text-slate-900 text-lg">逆境を乗り越える自走力</span>
                  <p className="text-slate-600">世界20カ国を放浪。旅の写真を製品化して活動資金へと繋げるなど、自らの経験を「価値」へと変換し、ゼロから形にする粘り強さを培いました。</p>
                </li>
              </ul>
            </div>

            {/* Domain */}
            <div className="pt-6 border-t border-slate-200">
              <h4 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4 italic">7年の現場経験という「一次情報」</h4>
              <p className="text-slate-900 font-bold text-lg">在宅介護実務 (7年)</p>
              <p className="text-slate-600 italic">24時間体制の介護を通じた実体験から、「現場の痛み」をシステム仕様へと翻訳できます。</p>
            </div>
          </div>
        </section>

        {/* 強みセクション */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-10 flex items-center gap-2">
            <span className="text-2xl">🌟</span> Strengths | 強み
          </h3>
          <div className="grid grid-cols-1 gap-12">
            <div className="group">
              <span className="text-blue-600 font-black text-4xl block mb-2 opacity-30 group-hover:opacity-100 transition-opacity">01</span>
              <h4 className="text-xl font-bold mb-3 text-slate-900 underline decoration-blue-200 underline-offset-8">AIを相棒とした「圧倒的な自走力」と学習速度</h4>
              <p className="text-slate-600 leading-relaxed">世界20カ国を放浪したサバイバル能力は、現在の開発にも直結しています。Gemini Pro等のAIを開発パートナーとし、未経験の技術領域でも数日でプロトタイプを構築。「まず形にして検証する」スピード感で貢献します。</p>
            </div>
            
            <div className="group">
              <span className="text-blue-600 font-black text-4xl block mb-2 opacity-30 group-hover:opacity-100 transition-opacity">02</span>
              <h4 className="text-xl font-bold mb-3 text-slate-900 underline decoration-blue-200 underline-offset-8">現場の「痛み」を「仕組み」に変える共感力</h4>
              <p className="text-slate-600 leading-relaxed">7年間の介護という「当事者の一次情報」が最大の武器です。単にコードを書くのではなく、介護者や家族が抱える「孤独な緊張感」を自分事として理解し、現場の負担を1%でも軽くするUI/UXを逆算して提案できます。</p>
            </div>

            <div className="group">
              <span className="text-blue-600 font-black text-4xl block mb-2 opacity-30 group-hover:opacity-100 transition-opacity">03</span>
              <h4 className="text-xl font-bold mb-3 text-slate-900 underline decoration-blue-200 underline-offset-8">「伝える」ことへの飽くなき追求とビジネス視点</h4>
              <p className="text-slate-600 leading-relaxed">2100本の記事、売上500%アップ、公募選出。これらに共通するのは「相手が本当に求めているものは何か」を考え抜き、結果を出すまでやり遂げる姿勢です。SEO検定1級の知見を活かし、数字への意識も両立させています。</p>
            </div>
          </div>
        </section>

        {/* フッター的なメッセージ */}
        <section className="text-center py-20 border-t border-slate-100">
          <p className="text-slate-400 text-sm mb-4 uppercase tracking-[0.2em]">Thank you for reading.</p>
          <Link href="/contact" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-colors">
            お問い合わせはこちら
          </Link>
        </section>

      </main>

    </div>
  );
}