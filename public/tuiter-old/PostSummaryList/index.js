import posts from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () =>
    ` <div class="list-group">
        ${posts.map((post) => PostSummaryItem(post)).join("")}
    </div>
    `;

export default PostSummaryList;