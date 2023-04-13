import Link from 'next/link';

export default function Top() {
  return (
    <>
      <About />
      <Works />
      <Notes />
      <Contact />
    </>
  );
}

function About() {
  return (
    <section id="about">
      <h2>GAIA MATSUYOSHI</h2>
      <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <p class="link"><Link href="/about">もっと知る</Link></p>
    </section>
  );
}

function Works() {
  return (
    <section id="work">
      <h2>Works</h2>
      <ul>
        <li><img src="img/dummy.jpg" alt="テキストテキストテキスト" /><p>会社名</p></li>
        <li><img src="img/dummy.jpg" alt="テキストテキストテキスト" /><p>会社名</p></li>
        <li><img src="img/dummy.jpg" alt="テキストテキストテキスト" /><p>会社名</p></li>
        <li><img src="img/dummy.jpg" alt="テキストテキストテキスト" /><p>会社名</p></li>
        <li><img src="img/dummy.jpg" alt="テキストテキストテキスト" /><p>会社名</p></li>
        <li><img src="img/dummy.jpg" alt="テキストテキストテキスト" /><p>会社名</p></li>
      </ul>
      <p class="link"><Link href="/work">もっと見る</Link></p>
    </section>
  );
}

function Notes() {
  return (
    <section id="note">
      <h2>Notes</h2>
      <ul>
        <li><img src="img/dummy.jpg" alt="テキストテキストテキスト" /><p>会社名</p></li>
        <li><img src="img/dummy.jpg" alt="テキストテキストテキスト" /><p>会社名</p></li>
        <li><img src="img/dummy.jpg" alt="テキストテキストテキスト" /><p>会社名</p></li>
      </ul>
      <p class="link"><Link href="/note">もっと読む</Link></p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      <p class="link"><Link href="/contact">話をしてみる</Link></p>
    </section>
  );
}