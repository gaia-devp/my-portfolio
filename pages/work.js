import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ work }) {
  return (
    <section id="list">
      <h2>Works</h2>
      <ul>
        {work.map((work) => (
          <Link href={`/works/${work.id}`} className="item">
            <li key={work.id}>
              <img src={work.img.url} alt={work.comp} />
              <p>{work.comp}</p>
            </li>
          </Link>
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