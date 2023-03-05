import PostItemList from "./PostListItem.js";
import posts from "./post.js";

const PostList = () => {
    return `
      <ul class="list-group posts">
        ${posts.map((p) => PostItemList(p)).join("")}
      </ul> `;
};

export default PostList;

