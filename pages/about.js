import Link from "next/link";
import Sns from "../components/sns"

export default function About() {
  return (
    <section id="about-detail">
      <h2>About</h2>
      <div class="introduction">
        <div>
          <h3 class="">まつよし がいあ</h3>
          <p class="">1995年6月9日生まれ。宮崎県宮崎市出身。</p>
          <p class="">岡山県立大学情報工学部卒</p>
          <p class="">卒業後、岡山の企業でインフラエンジニアとして就職。</p>
          <p class="">コードを書くことの楽しさを知り転職を決意</p>
          <p class="">宮崎に帰郷するとともに、現SaaS企業に就職</p>
          <p class="">現在は自社システムを用いてWEBサイトを制作しています</p>
        </div>
        <img src="/img/dummy.jpg" alt="name" />
      </div>
      <div id="contact">
        <Sns></Sns>
      </div>
      <p class="link"><Link className="line" href="/">戻る</Link></p>
    </section>
  );
}