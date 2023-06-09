import Link from 'next/link';
import { client } from "../libs/client";

export const getStaticProps = async () => {
  const dataWorks = await client.get({ endpoint: "works" , queries: { limit: 6 ,filters: 'view[equals]true'} });
  const dataNotes = await client.get({ endpoint: "notes" , queries: { limit: 3 } });
  // console.log(dataNotes.contents)
  return {
    props: {
      workdata: dataWorks.contents,
      notedata: dataNotes.contents,
    },
  };
};

export default function Top(props) {
  return (
    <>
      <About />
      <Works work={props.workdata}/>
      <Notes note={props.notedata}/>
      <Contact />
    </>
  );
}

function About() {
  return (
    <section id="about">
      <h2>GAIA MATSUYOSHI</h2>
      <p class="center">宮崎のとあるSaaS企業のフロントエンドエンジニア</p>
      <p class="link"><Link className="line" href="/about">もっと知る</Link></p>
    </section>
  );
}

function Works({ work }) {
  return (
    <section id="work">
      <h2>Works</h2>
      <ul>
        {work.map((work) => (
          <li key={work.id}>
            <Link href={`/works/${work.id}`}><img src={work.thumb.url} alt={work.comp} /></Link>
            <p className='bold'>{work.comp}</p>
          </li>
        ))}
      </ul>
      <p class="link"><Link className="line" href="/work">もっと見る</Link></p>
    </section>
  );
}

function Notes({ note }) {
  return (
    <section id="note">
      <h2>Notes</h2>
      <ul>
        {note.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}><img src={note.thumb.url} alt="" /></Link>
            <p className='bold'>{note.title}</p>
          </li>
        ))}
      </ul>
      <p class="link"><Link className="line" href="/note">もっと読む</Link></p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>　すこしでも興味を持っていただけたなら。</p>
      <p class="link"><Link className="line" href="/contact">もっと聞く</Link></p>
    </section>
  );
}