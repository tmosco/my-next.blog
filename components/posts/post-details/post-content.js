import ReactMarkdown from "react-markdown"

import PostHeader from "./post-header"
import styles from "./post-content.module.css"






const PostContent = ({post}) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    return (
        <article className={styles.content}>
            <PostHeader title={post.title} image={imagePath}/>
          <ReactMarkdown>
              {post.content}
          </ReactMarkdown>
            
        </article>
    );
};

export default PostContent;