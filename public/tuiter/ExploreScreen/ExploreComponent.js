import PostSummaryList from "../PostSummaryList/index.js";

const navItems = [
    {
        link: "#",
        title: "For You",
        active: true,
    },
    {
        link: "#",
        title: "Trending",
        active: false,
    },
    {
        link: "#",
        title: "New",
        active: false,
    },
    {
        link: "#",
        title: "Sports",
        active: false,
    },
    {
        link: "#",
        title: "Entertainment",
        active: false,
    },
];

const ExploreComponent = () => `
        <div class="row d-flex align-items-center">
            <div class="col-11 search-parent">
              <i class="fa-solid fa-magnifying-glass search-icon"></i>
              <input type="text" class="form-control rounded-pill search-bar" placeholder="Search Tuiter" aria-label="search" />
            </div>
            <div class="col-1"><i class="fa-solid fa-gear fs-4"></i></div>
          </div>
          <ul class="nav nav-tabs">
          ${navItems
                .map((item) => `<li class="nav-item">
                                    <a href=${item.link} class=${`"nav-link ${item.active ? `active` : ``}"`}>${item.title}</a>
                                    </li>`).join("")}
          </ul>
          <div>
            <div class="explore-banner-container">
              <img src="../../images/spacex.jpg" alt="SpaceX" class="img-fluid"/>
              <div class="explore-banner-title fs-2 fw-bold">
                SpaceX's Starship
              </div>
            </div>
            ${PostSummaryList()}
            </div> `;

export default ExploreComponent;
