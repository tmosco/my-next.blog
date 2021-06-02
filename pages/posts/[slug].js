import Head from "next/head";

import PostContent from "../../components/posts/post-details/post-content";
import { getPostData, getPostFiles } from "../../helpers/post-utils";

const PostPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta
          name="description"
          content={props.post.excerpt}
        />
        "
      </Head>
      <PostContent post={props.post} />;
    </>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenaames = getPostFiles();

  const slugs = postFilenaames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug },
    })),
    fallback: false,
  };
}

export default PostPage;
