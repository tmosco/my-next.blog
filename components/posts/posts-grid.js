import PostItem from "./post-Item"
import styles from "./posts-grid.module.css";

const posts=[];

const PostsGrid = ({posts}) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post}/>
      ))}
    </ul>
  );
};

export default PostsGrid;
