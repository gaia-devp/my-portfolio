import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Webサイトにご訪問いただき、ありがとうございます。<br></br>
      お仕事のご依頼、こんなこと一緒にやってみない？という楽しいお誘いなどなど<br></br>
      何でも気軽にご連絡ください。お待ちしております。</p>
      <ul>
        <li className="mail"><a href="#"><img src="img/mail_icon2.png" alt="mail" />
          <div><p>xxx.@gmail.com</p></div></a>
        </li>
        <li className="twitter"><a href="#"><img src="img/twitter_icon2.png" alt='twitter'/>
          <div><p>@asdfasdf</p></div></a>
        </li>
      </ul>
      <p class="link"><Link href="/">戻る</Link></p>
    </section>
  );
}