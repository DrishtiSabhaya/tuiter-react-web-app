import React from "react";
import PostList from "./post-list";
import posts from "./posts.json";

const PostLists = () => {
    return (
        <>
            <ul class="list-group posts">
                {posts.map((post) => (
                    <PostList post={post} />
                ))}
            </ul>
        </>
    );
};

export default PostLists;