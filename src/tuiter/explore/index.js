import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import ExploreScreen from "./explore";
import WhoToFollowList from "../who-to-follow-list";

const ExploreComponent = () => {
    return (
        <>
            <div>
                {/*<div class="col-xl-6 col-lg-7 col-10 d-flex flex-column gap-1">*/}
                    <ExploreScreen />
                {/*</div>*/}
            </div>
        </>
    );
};

export default ExploreComponent;