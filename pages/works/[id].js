import { client } from '../../libs/client';

export default function workId({ work }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{work.title}</h1>
      <p className={styles.publishedAt}>{work.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${work.body}`,
        }}
        className={styles.post}
      />
    </main>
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