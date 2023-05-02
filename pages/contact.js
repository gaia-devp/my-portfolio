import Link from "next/link";
import Sns from "../components/sns"

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Webサイトにご訪問いただき、ありがとうございます。<br></br>
      お仕事のご依頼、こんなこと一緒にやってみない？という楽しいお誘いなどなど<br></br>
      何でも気軽にご連絡ください。お待ちしております。</p>
      <Sns></Sns>
      <p class="link"><Link className="line" href="/">戻る</Link></p>
    </section>
  );
}