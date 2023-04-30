import Link from "next/link";

export default function About() {
  return (
    <section id="about-detail">
      <h2>About</h2>
      <img src="/img/dummy.jpg" alt="name" />
      <p class="">会社名</p>
      <p class="">やったこと</p>
      <p class="">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <p class="link"><Link href="./top.html">戻る</Link></p>
    </section>
  );
}