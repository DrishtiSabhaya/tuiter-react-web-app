import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import HomeComponent from "./HomeComponent.js";

(function ($) {
    $("#wd-home").append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar("Home")}
            </div>
            <div class="col-xl-6 col-lg-7 col-10 d-flex flex-column gap-1">
                ${HomeComponent()}
            </div>
            <div class="col-xxl-4 col-lg-4 d-none d-lg-block">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);
