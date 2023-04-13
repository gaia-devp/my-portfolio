import { client } from '../../libs/client';

export default function noteId({ note }) {
  return (
    <section id="detail">
      <h2>{note.title}</h2>
      <img src={note.img.url} alt={note.title} />
      <div
        dangerouslySetInnerHTML={{
          __html: `${note.body}`,
        }}
      />
    </section>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "notes" });

  const paths = data.contents.map((content) => `/notes/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "notes", contentId: id });

  return {
    props: {
      note: data,
    },
  };
};