import styles from "./featuredPost.module.css"
import PostsGrid from "../posts/posts-grid"

import React from 'react';
const FeaturedPost = (props) => {
    return (
        <section className={styles.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={props.posts}/>
            
        </section>
    );
};

export default FeaturedPost;