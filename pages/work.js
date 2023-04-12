import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ work }) {
  return (
    <div>
      <ul>
        {work.map((work) => (
          <li key={work.id}>
            <Link href={`/works/${work.id}`}>{work.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      work: data.contents,
    },
  };
};