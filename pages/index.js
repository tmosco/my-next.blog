import Head from 'next/head'


import Hero from "../components/homePage/hero";
import FeaturedPost from "../components/homePage/featuredPost";
import { getFeaturedPosts } from "../helpers/post-utils";

const HomPage = (props) => {

  return (
    <>
      <Hero />
      <Head>
        <title>Ty's Blog</title>
      <meta name="description" content="latest news happenings around the world" />"
      </Head>
      <FeaturedPost posts={props.posts} />
    </>
  );
};
export function getStaticProps() {
  const featuredPost = getFeaturedPosts();

  return {
    props: {
      posts: featuredPost,
    },
  };
}

export default HomPage;
