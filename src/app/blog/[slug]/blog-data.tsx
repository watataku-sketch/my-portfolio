import React from 'react';

export type BlogPost = {
  category: string;
  title: string;
  date: string;
  content: React.ReactNode;
};

export const blogPosts: Record<string, BlogPost> = {
  "ux-for-dental-care": {
    category: "UX / Engineering",
    title: "「癒やす手」を守るエンジニアリング。",
    date: "2026.04.24",
    content: (
      <div className="space-y-12">
        {/* --- 導入 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">導入：歯科医師の「歩き方」に感じた、静かな違和感</h2>
          <div className="space-y-4">
            <p>
              それは、私が7年にわたって定期検診で通い続けている歯科医院での出来事でした。
              いつもテキパキと的確な指示を出し、完璧な治療を行う先生が、その日は少しだけ足を引きずって歩いていました。
            </p>
            <p>
              毎日数十人の患者を診て、前傾姿勢を保ちながら数ミリ単位の精密な治療を続ける。その過酷な労働が、先生の身体に確かな負荷をかけていることに気づいた瞬間、私は深い心配とともに、ある疑問を抱きました。
            </p>
            <blockquote className="border-l-4 border-rose-500 pl-6 my-10 italic text-xl text-slate-600 leading-relaxed bg-slate-50 py-4 pr-4">
              「患者へのケア」が最優先される医療現場で、実は「先生へのケア」が最も後回しにされているのではないか？
            </blockquote>
            <p>
              長年私の歯を守ってくれた先生のために、エンジニアリングという手段で何か役に立てるのではないか。その想いが、私の開発の原動力となりました。
            </p>
          </div>
        </section>

        {/* --- セクション1 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">ホスピタリティUX：プロのための「究極のアクセシビリティ」</h2>

          <div className="space-y-4 text-slate-700">
            <p>
              一般的に、アクセシビリティは「ハンディキャップを持つ人をサポートするもの」と定義されがちです。しかし、プロフェッショナルの現場におけるアクセシビリティの本質は、<strong>「熟練者の負荷を極限まで削ぎ落とすこと」</strong>にあると私は考えます。
            </p>
            <p>
              歯科医師は、その高度な知的・身体的リソースのすべてを「治療」に注ぎ込んだほうがいいと考えています。それ以外のカルテ操作や患者への説明といった作業に、1ミリの余計なストレスも与えてはなりません。
            </p>
            
            <div className="bg-rose-50 p-8 rounded-[2rem] my-10 border border-rose-100">
              <p className="text-rose-900 font-black text-lg mb-4">私の設計哲学</p>
              <ul className="list-none space-y-3 text-rose-800">
                <li className="flex gap-2"><span>・</span>おシャレなUIよりも、説明を楽にすることを。</li>
                <li className="flex gap-2"><span>・</span>かっこいい演出よりも、身体的負担を少なくすることを。</li>
              </ul>
            </div>
            
            <p>私はこれからの医療現場に、この「ホスピタリティ・デザイン」が必要不可欠だと確信しています。</p>
          </div>
        </section>

        {/* --- セクション2 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">3Dモデルによる「説明コスト」のデバッグ</h2>

         

          <div className="space-y-4">
            <p>
              言葉や2Dの図面だけで行う説明は、時間がかかる上に、患者さんとの間に「認識のズレ」を生みがちです。これを直感的な3Dモデルに置き換えることで、説明コストを劇的に「デバッグ」できます。
            </p>
            
            <ul className="space-y-6 mt-8">
              <li className="flex gap-4">
                <div className="flex-none w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-sm">01</div>
                <div><strong>一瞬の理解:</strong> どこが悪く、どう治すのか。患者さんが瞬時に視覚的に納得する。</div>
              </li>
              <li className="flex gap-4">
                <div className="flex-none w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-sm">02</div>
                <div><strong>予防の動機付け:</strong> 納得感が高まることで、定期検診への意識が「作業」から「自分への投資」に変わる。</div>
              </li>
              <li className="flex gap-4">
                <div className="flex-none w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-sm">03</div>
                <div><strong>負荷の連鎖を止める:</strong> 予防が定着すれば、心身を削る重度な手術を減らすことができ、結果として先生の身体的負担の軽減に繋がる。</div>
              </li>
            </ul>
            
            <p className="mt-10">
              「3Dで見せる」ことは、単なる視覚効果ではありません。医療現場の<strong>「疲労の連鎖」を断ち切るための、論理的なソリューション</strong>なのです。
            </p>
          </div>
        </section>

        {/* --- セクション3 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">実装のこだわり：Next.jsで届ける「1秒のホスピタリティ」</h2>

         

          <div className="space-y-4">
            <p>
              一刻を争う忙しい現場において、システムの「待ち時間」は最大級のストレスです。
              患者さんはもちろん、共に戦うスタッフや先生を1秒も待たせない。そのために私はNext.jsを採用し、レスポンスの速さも考えて開発しています。
            </p>
            <p>
              瞬時に立ち上がり、滑らかに動く。この「軽快さ」こそが、疲労している先生へエンジニアが払える最低限の敬意（リスペクト）だと考えています。
            </p>
            <p>
              将来的には、視線移動や音声入力を駆使し、「手の操作回数をゼロにする」挑戦もしたいです。「手を休めながら、情報を伝える」未来は、コードの力で実現できると思っています。
            </p>
          </div>
        </section>

        {/* --- 結び --- */}
        <section className="pt-10 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">結び：医療の「未来」を、コードで支える</h2>
          <div className="space-y-6">
            <p>
              技術は、人を幸せにするためにあります。
              それは患者さんだけでなく、最前線で戦い続ける医療従事者も同じです。
            </p>
            <p className="text-2xl font-black text-slate-900 leading-snug">
              歯科医師が、その尊い「治療」という技術に100%集中できる環境を。<br />
              私は、ホスピタリティ溢れるコードで、その背中を支えるエンジニアであり続けたいと思います。
            </p>
          </div>
        </section>
      </div>
    ),
  },

  // 2記事目
  "art-and-care": {
    category: "Art / Care",
    title: "アートは、人を救うツールになれるか。",
    date: "2026.04.24",
    content: (
      <div className="space-y-12 text-slate-700">
        {/* --- 導入 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">1. 導入：華やかな「表舞台」で問い直したこと</h2>
          <div className="space-y-4">
            <p>
              2025年、NEORTと清和ビジネス主催の公募展「#unote」において、私の2つの作品が選出され、サテライトオフィス「UN:O」の巨大ビジョンに映し出されました。自分の書いたコードが「アート」として認められ、多くの人の目に触れた瞬間の高揚感は、今でも鮮明に覚えています。
            </p>
           {/* --- YouTube埋め込みエリア --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              {/* 1つ目の動画 */}
              <div className="aspect-video w-full overflow-hidden rounded-3xl shadow-lg bg-slate-100">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/UbScEorOWLQ"
                  title="UN:O Exhibition Work 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* 2つ目の動画 */}
              <div className="aspect-video w-full overflow-hidden rounded-3xl shadow-lg bg-slate-100">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2DspcKR0oTk"
                  title="UN:O Exhibition Work 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* ------------------------- */}
            <p>
              この公募に挑戦する中で、私の中に一つの小さな、けれど確かな「願い」が生まれました。それは、自己完結する表現ではなく、<strong>「誰かの役に立ち、心からの『ありがとう』を受け取れるようなアートを作っていきたい」</strong>という夢です。
            </p>
          </div>
        </section>

        {/* --- セクション2 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">2. 「認められる」から「誰かのために」へ</h2>
          <div className="space-y-4">
            <p>
              展示を通じて得た一番の収益は、賞賛の声よりも、ある「気づき」でした。必ずしも複雑で「おしゃれ」なものを作る必要はない。たとえシンプルな表現であっても、その場の空気を少しだけ温かくしたり、働く人の心をふっと軽くしたりできれば、表現には十分すぎるほどの価値があるのだと。
            </p>
            <blockquote className="border-l-4 border-rose-500 pl-6 my-10 italic text-xl text-slate-600 bg-slate-50 py-4">
              「評価されるための技術（Art）」を、いつか「誰かを支えるための技術（Care）」へと繋げたい。
            </blockquote>
            <p>
              オフィスデザインのプロである清和ビジネス様に、働く人のための作品として選んでいただけたことは、大きな自信となりました。この経験は、アーティストとしてのゴールではなく、「技術を届ける相手」を再定義する大切な出発点となりました。
            </p>
          </div>
        </section>

        {/* --- セクション3 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">3. 7年間の介護生活で見つめた、無機質な空間の「空白」</h2>
          <div className="space-y-4">
            <p>
              私は7年間にわたり、在宅介護という日常を過ごしてきました。医療や介護の現場では、効率や安全が最優先されます。それは命を守る上で当然のことですが、一方で、生活の場がどうしても無機質になり、心の安らぎや「美しさ」による癒やしが後回しにされてしまう現実を、身をもって経験してきました。
            </p>
            <p>
              そんな心細い空間にこそ、デジタルだからこそできる柔らかな表現や、思わず見入ってしまう「穏やかな動き」が必要なのではないか。当事者として過ごした時間があるからこそ、私は<strong>「感性のホスピタリティ」を現場に実装したい</strong>という強い確信を持っています。
            </p>
          </div>
        </section>

        {/* --- セクション4 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">4. 展望：ケアの現場を「彩り」で支えるエンジニアリング</h2>
          <div className="space-y-4">
            <p>
              今、私が取り組んでいる「3Dの歯」の開発も、単なる正確な図解を目指しているわけではありません。患者さんが自分の体の一部を、単なる「治療対象」としてではなく、慈しむべき大切な存在として感じられるような、「アートとしての優しさ」を備えたインターフェースにしたいと考えています。
            </p>
            <p>
              展示実績で磨かせていただいた「伝える力」を、今度は医療教育や精神的ケア、そして現場で最前線を支える人々の心を癒やすツールへと投下していきたい。それが、クリエイティブコーダーとしての私の次なる挑戦です。
            </p>
          </div>
        </section>

        {/* --- 結び --- */}
        <section className="pt-10 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">5. 結び：技術の「出口」を、愛のある場所へ</h2>
          <div className="space-y-6">
            <p>
              私の書くコードは、もう自分の満足のためだけにあるのではありません。展示という光の当たる場所で学んだ「表現の力」を、今度は最も技術と優しさを必要とする、医療や介護の現場へと届けていきたい。
            </p>
            <p className="text-3xl font-black text-slate-900 leading-snug">
              「技術は、人を幸せにするためにある」
            </p>
            <p>
              そのシンプルな信念を、これからも一つひとつのコードと、誠実な言葉に込めていきたいと思います。
            </p>
          </div>
        </section>
      </div>
    ),
  },

  // 3記事目（これから中身を埋めていく）
  "trust-and-seo": {
    category: "SEO / Marketing",
    title: "2,100記事の「磨き上げ」で辿り着いた情報の価値。",
    date: "2026.04.24",
    content: (
      <div className="space-y-12">
        {/* --- 導入 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">1. 導入：「試行錯誤」の軌跡</h2>
          <div className="space-y-4">
            <p>
              累計2,100記事という執筆ログ。それは私にとって、単なる数字ではなく「誰かに情報を届ける難しさ」と向き合い続けた10,000時間の軌跡です。
            </p>
            <p>
              膨大な試行錯誤の中で私が学んだ「情報の純度」の重要性が、これから挑戦したい医療や介護の領域で、どう活かせる可能性があるのか。私の今の視点を共有させてください。
            </p>
          </div>
        </section>

        {/* --- セクション2 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">2. 「捨てる勇気」が教えてくれたこと</h2>

          <div className="space-y-4">
            <p>
              かつての私は「情報を増やせば、誰かに届く」と信じていました。しかし、ある時、自分の海外体験を綴った700もの記事を削除（損切り）しました。
            </p>
            <p>
              理由は、情報の「純度」を高めたかったからです。SEOのテクニック以上に、<strong>「ノイズを届けないこと」こそが、ユーザーへの誠実さではないか。</strong> そう気づいてから、自分の発信する言葉に責任感が宿るようになりました。
            </p>
          </div>
        </section>

        {/* --- セクション3 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">3. 数字の先にある「納得感」を目指して</h2>
          
          <div className="bg-slate-50 p-8 rounded-[2rem] my-10 border border-slate-100 italic text-slate-600">
            「この情報を信じていいのか？」というユーザーの不安に寄り添うことが何より大切。派手な言葉ではなく、圧倒的な「質の追求」こそが、不安を安心に変える鍵になると信じています。
          </div>

          <div className="space-y-4">
            <p>
              かつてのブログ運営で得た収益や成果は、小手先の技術ではなく「一人の深い悩みに答え続けた結果」として付いてきたものだと思っています。
            </p>
            <p>
              特に、人の心や体に触れるプロダクト（HealthTechなど）においては、情報の質がそのままユーザーの安心に直結します。誠実に向き合った結果としての数字を、これからの開発でも大切にしていきたいです。
            </p>
          </div>
        </section>

        {/* --- セクション4 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">4. インデックス率に込めた「届ける執念」</h2>
          
          {/* 実績表示用のカード */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm">
              <p className="text-sm text-slate-400 font-bold mb-2 uppercase tracking-widest">Search Index Rate</p>
              <p className="text-5xl font-black text-rose-500">81<span className="text-2xl">%</span></p>
              <p className="text-sm text-slate-500 mt-4">754記事中611記事がインデックス（Googleに正しく評価されている証）</p>
            </div>
            <div className="flex items-center text-slate-600 leading-relaxed">
              81%というインデックス率は、私にとって単なる数値目標ではなく、「価値ある情報を、検索エンジンの闇に埋もれさせない」という執念の現れです。
            </div>
          </div>

          <p>
            クリエイティブコーダーの経験を活かし、技術とマーケティングを繋ぎ合わせ、必要な人に情報を届ける「橋渡し」をしていきたいと考えています。
          </p>
        </section>

        {/* --- 結び --- */}
        <section className="pt-10 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">5. 結び：未完成の旅を、誠実な言葉と共に</h2>
          <div className="space-y-6">
            <p>
              2,100記事を書いた今も、私はまだ「正解」を探している途中にいます。
              ですが、一つだけ確信していることがあります。それは、<strong>エンジニアリングもSEOも、その先には必ず「人」がいる</strong>ということです。
            </p>
            <p className="text-2xl font-black text-slate-900 leading-snug">
              磨き上げた言葉と技術を携えて、誰もが安心して情報を受け取れる未来。<br />
              そんな景色を、皆さんと一緒に作っていけたら嬉しいです。
            </p>
          </div>
        </section>
      </div>
    ),
  },

  

  // 4記事目
  "vision-3d-care": {
    category: "Vision / 3D",
    title: "「見えない不安」を「見える安心」へ。",
    date: "2026.04.24",
    content: (
      <div className="space-y-12 text-slate-700">
        {/* --- 導入 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">1. すぐ隣にいるのに、伝わらないもどかしさ</h2>
          <div className="space-y-4">
            <p>
              私は7年間、家で介護を続けてきました。なかでも、訪問歯科治療の時間は、私にとって「情報の伝え方」を深く考えさせられる原体験となりました。
            </p>
            <p>
              私の祖父は認知症を患い、耳も遠くなっていました。治療の内容を説明するには、歯科衛生士さんが祖父の耳元に顔を近づけ、精一杯の大きな声を出さなければなりません。それでも、祖父にどこまで伝わっているかは分かりませんでした。
            </p>
            <blockquote className="border-l-4 border-rose-500 pl-6 my-10 italic text-xl text-slate-600 bg-slate-50 py-4">
              「何をされるか分からない」という恐怖は、人を強張らせ、時には拒絶へと繋がります。私は、<strong>「言葉の限界」</strong>を痛いほど感じていました。
            </blockquote>
          </div>
        </section>

        {/* --- セクション2 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">2. なぜ、言葉や2Dの図解だけでは届かないのか</h2>
          <div className="space-y-6">
            <p>
              医療の現場では「インフォームド・コンセント（納得のいく説明と同意）」が重視されます。しかし、現実はどうでしょうか。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="font-bold text-slate-900 mb-2">● 言葉の壁</p>
                <p className="text-sm">目に見えず、すぐに消えてしまう。特に認知症や難聴の方には、理解のハードルが非常に高いメディアです。</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="font-bold text-slate-900 mb-2">● 2D図解の壁</p>
                <p className="text-sm">専門的な断面図やレントゲンは、一般の方には「自分の体の一部」として直感的に結びつきにくいものです。</p>
              </div>
            </div>
            <p className="mt-6">
              「納得」とは、単に説明を聞くことではなく、<strong>「自分の体の中で何が起きているか、手触りを持って理解すること」</strong>のはずです。既存のツールだけでは、どうしても埋められない溝がありました。
            </p>
          </div>
        </section>

        {/* --- セクション3 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">3. 解決策としての3D：それは「対話のための道具」</h2>

          <div className="space-y-4">
            <p>
              そこで辿り着いたのが、3Dビジュアライゼーションです。3Dモデルの最大の強みは、その<strong>「直感性」</strong>にあります。
            </p>
            <ul className="space-y-4 list-none">
              <li className="flex gap-3">
                <span className="text-rose-500 font-bold">✔</span>
                <span><strong>見るだけで分かる:</strong> 回転させ、拡大する。自分の歯の状況を空間的に捉えることが、圧倒的な「安心」に繋がります。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-500 font-bold">✔</span>
                <span><strong>対話のハブになる:</strong> 3Dは、患者さんと医療従事者が同じ視点に立つための「共通言語」になります。</span>
              </li>
            </ul>
            <p className="mt-4">
              テクノロジーは、決して人を置き換えるものではありません。人と人がもっと通じ合えるようにするための「橋渡し」であるべきなのです。
            </p>
          </div>
        </section>

        {/* --- セクション4 --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">4. ビジョン：テクノロジーでQOLを底上げする</h2>
          <div className="space-y-4">
            <p>
              現在進めている「3Dの歯」の開発は、まさにこの願いの形です。単に正確なモデルを作るのではなく、「説明する先生の負担を減らし、説明を受ける患者さんの不安を消す」。そんな、現場の体温が通ったインターフェースを目指しています。
            </p>
            <p>
              患者さんが自分の状況を正しく理解し、納得して治療を受けられるようになる。それは、その人のQOL（生活の質）、ひいては<strong>「納得して生きる力」</strong>を底上げすることに繋がると確信しています。
            </p>
          </div>
        </section>

        {/* --- 結び --- */}
        <section className="pt-10 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">5. 結び：7年間の「気づき」を、これからの「価値」へ</h2>
          <div className="space-y-6">
            <p>
              介護の現場で祖父の隣に座り続けた7年間。そこで感じたもどかしさや、小さな気づきの一つひとつが、今の私のコードに宿っています。
            </p>
            <p className="text-3xl font-black text-slate-900 leading-snug">
              「見えない不安」を、テクノロジーの力で「見える安心」へ。
            </p>
            <p>
              私はこれからも、医療と患者さんの間にある壁を、誠実なエンジニアリングで溶かしていきたいと思います。
            </p>
          </div>
        </section>
      </div>
    ),
  },
};