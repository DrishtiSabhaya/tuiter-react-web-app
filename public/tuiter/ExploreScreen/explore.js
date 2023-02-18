import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
    <div class="container mt-1">
        <div class="row">
           <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar("Explore")}
           </div>
           <div class="col-xl-6 col-lg-7 col-10 d-flex flex-column gap-1">
                ${ExploreComponent()}
            </div>
           <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${WhoToFollowList()}
           </div>
        </div>
    </div>
   `);
}
$(exploreComponent);