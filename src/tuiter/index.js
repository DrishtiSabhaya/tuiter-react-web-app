import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryList from "./post-summary-list";
import React from "react";

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div class="col-xl-6 col-lg-7 col-10 d-flex flex-column gap-1">
                <Routes>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="/" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="col-xxl-4 col-lg-4 d-none d-lg-block">
                <Routes>
                    <Route path="home" element={<PostSummaryList/>}/>
                    <Route path="explore" element={<WhoToFollowList/>}/>
                    <Route path="/" element={<WhoToFollowList/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default Tuiter;


