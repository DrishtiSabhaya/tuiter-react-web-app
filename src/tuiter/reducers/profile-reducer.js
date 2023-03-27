import {createSlice} from "@reduxjs/toolkit";

const profile = {
    firstName: "Jose",
    lastName: "Annunziato",
    handle: "jannunzi",
    profilePicture: "../../images/react1.png",
    bannerPicture: "../../images/spacex.jpg",
    bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    dateOfBirth: "7/7/1968",
    dateJoined: "April 2009",
    followingCount: 312,
    followersCount: 180,
};

const profileSlice = createSlice({
                                    name: "profile",
                                    initialState: profile,
                                    reducers: {
                                        editProfile(state, action) {
                                            const {firstName, lastName, bio, location, website, dateOfBirth} = action.payload;
                                            return {...state, firstName, lastName, bio, location, website, dateOfBirth};
                                        }
                                    }
                                 })

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;