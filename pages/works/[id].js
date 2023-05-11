import { client } from '../../libs/client';
import Link from "next/link";

export default function workId({ work }) {
  return (
    <section id="detail">
      <h2>Work</h2>
      <img src={work.img.url} alt={work.comp} />
      <p><a href={work.link}><strong>{work.comp}</strong></a></p>
      <p>{work.skill}</p>
      <div dangerouslySetInnerHTML={{
          __html: `${work.body}`,
        }} />
      <p class="link"><Link className="line" href="/work">戻る</Link></p>
    </section>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });

  const paths = data.contents.map((content) => `/works/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "works", contentId: id });

  return {
    props: {
      work: data,
    },
  };
};