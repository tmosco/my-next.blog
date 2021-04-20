import Hero from "../components/homePage/hero";
import FeaturedPost from "../components/homePage/featuredPost";
import { getFeaturedPosts } from "../helpers/post-utils";

const HomPage = (props) => {

  return (
    <>
      <Hero />
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
