import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ note }) {
  return (
    <section id="list">
      <h2>Notes</h2>
      <ul>
        {note.map((note) => (
          <Link href={`/notes/${note.id}`} className="item">
            <li key={note.id}>
              <img src={note.img.url} alt="" />
              <p>{note.title}</p>
            </li>
          </Link>
        ))}
      </ul>
      <p class="link"><Link className="line" href="/">戻る</Link></p>
    </section>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "notes" });
  return {
    props: {
      note: data.contents,
    },
  };
};