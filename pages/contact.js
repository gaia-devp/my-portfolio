import Link from "next/link";

export default function Contact() {
  return (
    <section id="detail">
      <h2>About</h2>
      <img src="/img/dummy.jpg" alt="name" />
      <p class="">会社名</p>
      <p class="">やったこと</p>
      <p class="">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <p class="link"><Link href="/">戻る</Link></p>
    </section>
  );
}