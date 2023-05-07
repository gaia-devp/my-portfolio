import Link from "next/link";
import Sns from "../components/sns"

export default function About() {
  return (
    <section id="about-detail">
      <h2>About</h2>
      <div class="introduction">
        <div>
          <h3 class="">まつよし がいあ</h3>
          <p class="">1995年6月9日生まれ　<br className="sp_only"></br>宮崎県宮崎市出身</p>
          <p class="">岡山県立大学情報工学部卒</p>
          <p class="">卒業後は岡山のとある企業で<br className="sp_only"></br>インフラエンジニアとして就職</p>
          <p class="">コードを書くことの楽しさを知り<br className="sp_only"></br>転職を決意</p>
          <p class="">宮崎に帰郷するとともに<br className="sp_only"></br>現SaaS企業に就職</p>
          <p class="">現在は自社システムを用いて<br className="sp_only"></br>WEBサイトを制作しています</p>
        </div>
        <img src="/img/about.jpg" alt="name" />
      </div>
      <div id="contact">
        <Sns></Sns>
      </div>
      <p class="link"><Link className="line" href="/">戻る</Link></p>
    </section>
  );
}