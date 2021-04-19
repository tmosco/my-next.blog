import ReactMarkdown from "react-markdown"

import PostHeader from "./post-header"
import styles from "./post-content.module.css"


const DUMMY_POST={
    slug:"getting-started-with-nextJs",
    title:"Getting started with next js",
     image:"getting-started-with-nextjs.png", 
     content:"# This is a first post",
     date:"2022-02-23" }



const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
    return (
        <article className={styles.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath}/>
          <ReactMarkdown>
              {DUMMY_POST.content}
          </ReactMarkdown>
            
        </article>
    );
};

export default PostContent;