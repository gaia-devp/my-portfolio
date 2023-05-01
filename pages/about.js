import Link from "next/link";

export default function About() {
  return (
    <section id="about-detail">
      <h2>About</h2>
      <div class="introduction">
        <div>
          <h3 class="">まつよし がいあ</h3>
          <p class="">フロントエンドエンジニア</p>
          <p class="">1995年6月9日生まれ。宮崎県宮崎市出身。岡山県立大学卒</p>
          <p class=""></p>
        </div>
        <img src="/img/dummy.jpg" alt="name" />
      </div>
      <div class="biography">
        <p class="">やったこと</p>
        <p class="">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
      <p class="link"><Link href="/">戻る</Link></p>
    </section>
  );
}