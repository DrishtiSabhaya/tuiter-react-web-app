const PostListItem = (post) => `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div class="wd-bookmark wd-bottom-border d-flex">
        <div class="flex-column">
            <img src="${post.avatarImage}" alt="" class="rounded-circle avatar" />  
        </div>
        <div class="wd-bookmark-content flex-column">
          <div class="d-flex flex-row justify-content-between w-100">
            <div class="fw-bold d-flex align-items-center">
              ${post.name}
              ${post.verified ? `<i class="fa-solid fa-circle-check"></i>` : ``}
              <div class="text-muted ms-1">@${post.userName}</div>
              <div class="text-muted ms-1">${post.time}</div>
            </div>
            <div>
              <i class="fas fa-ellipsis-h text-muted"></i>
            </div>
          </div>
          <div class="pt-1">${post.content}</div>
          ${post.preview && `
              <div class="card my-3">
                <img class="card-img-top img-fluid ${!(post.preview.title || post.preview.description) && `bottom-rounded`}" src="${post.preview.image}" alt="${post.preview.title}">
                ${post.preview.title || post.preview.description ? `
                <div class="card-body">
                  <h6 class="card-title">${post.preview.title}</h6>
                  <p class="card-text mb-1">${post.preview.description}</p>
                  <p class="card-text d-flex align-items-center">
                  <a href="${post.preview.link ? post.preview.link : "#"}">
                    <i class="fa fa-link"></i> <span class="ms-2">${post.preview.link}</span></p>
                  </a>
                </div>` : ``}
              </div> `
}
          <div class="wd-actions">
                <a href="#" class="wd-action">
                    <i class="fa-solid fa-comment"></i>
                    <span>${post.comments}</span>
                </a>
                <a href="#" class="wd-action">
                    <i class="fa-solid fa-retweet"></i>
                    <span>${post.retuits}</span>
                </a>
                <a href="#" class="wd-action wd-action--active">
                    <i class="fa-solid fa-heart"></i>
                    <span>${post.likes}</span>
                </a>
                <a href="#" class="wd-action">
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </a>
            </div>
        </div>
      </div>
    </li>
`;

export default PostListItem;