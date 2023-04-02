import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import {Routes, Route} from "react-router";
import WhoToFollowList from "./who-to-follow-list";
import React from "react";
import WhoReducer from "./reducers/who-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuit-reducer";
import profileReducer from "./reducers/profile-reducer";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import EditProfileComponent from "./profile/edit-profile";

const store = configureStore({reducer : {who : WhoReducer, tuitsData : tuitsReducer, profile : profileReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div class="col-xl-6 col-lg-7 col-10 d-flex flex-column gap-1">
                    <Routes>
                        <Route path="home" element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="/" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="editprofile" element={<EditProfileComponent/>}/>
                    </Routes>
                </div>
                <div className="col-xxl-4 col-lg-4 d-none d-lg-block">
                    <Routes>
                        <Route path="home" element={<WhoToFollowList/>}/>
                        <Route path="explore" element={<WhoToFollowList/>}/>
                        <Route path="/" element={<WhoToFollowList/>}/>
                        <Route path="profile" element={<WhoToFollowList/>}/>
                        <Route path="editprofile" element={<WhoToFollowList/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    )
}
export default Tuiter;


