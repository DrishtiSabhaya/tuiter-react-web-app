const PostSummaryItem = (post) => `        
      <a href="#" class="list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-center">
        <div class="d-flex flex-column">
          <div class="text-muted">${post.topic}</div>
          <div>
            <span class="fw-bold">${post.userName}</span>
            <i class="fa-solid fa-circle-check"></i>
            ${post.time ? 
              `<span class="text-muted">~</span>
               <span class="text-muted">${post.time}</span>`: ""}   
          </div>
          <div class="fw-bold">
            ${post.title}
          </div>
          ${post.tweets ? 
            `<div class="text-muted">${post.tweets} Tuits</div>`: ""}
        </div>
        <img class="explore-post-img rounded" src=${post.image} alt=${post.userName}/>
      </a>
 `;

export default PostSummaryItem;