import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ work }) {
  return (
    <section id="list">
      <h2>Works</h2>
      <ul>
        {work.map((work) => (
          <li key={work.id}>
            <Link href={`/works/${work.id}`}><img src={work.img.url} alt={work.comp} /></Link>
            <p>{work.comp}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });
  return {
    props: {
      work: data.contents,
    },
  };
};