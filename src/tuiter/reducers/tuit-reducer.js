import { createSlice } from "@reduxjs/toolkit";
import tuits from "../data/tuits.json";
import {findTuitsThunk, createTuitThunk, deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks.js";
const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0,
}

const initialState = {
    tuits: [],
    loading: false
}


const tuitsSlice = createSlice({
                                   name: "tuits",
                                   initialState,
                                   extraReducers: {
                                       [findTuitsThunk.pending]:
                                           (state) => {
                                               state.loading = true
                                               state.tuits = []
                                           },
                                       [findTuitsThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.tuits = payload
                                           },
                                       [findTuitsThunk.rejected]:
                                           (state, action) => {
                                               state.loading = false
                                               state.error = action.error
                                           },
                                       [deleteTuitThunk.fulfilled] :
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.tuits = state.tuits
                                                   .filter(t => t._id !== payload)
                                           },
                                       [createTuitThunk.fulfilled]:
                                           (state, { payload }) => {
                                               state.loading = false
                                               state.tuits.push(payload)
                                           },
                                       [updateTuitThunk.fulfilled]:
                                           (state, payload ) => {
                                               state.loading = false
                                               const p = {payload}
                                               const likes = p.payload.payload.likes >= 1 ? true : false;
                                               const dislikes = p.payload.payload.dislikes < 1 ? 0 : p.payload.payload.dislikes;
                                               const tuitNdx = state.tuits.findIndex((t) => t._id === p.payload.payload._id)
                                               state.tuits[tuitNdx] = {
                                                   ...state.tuits[tuitNdx],
                                                   ...p.payload.payload,
                                                   liked: likes                                            }
                                           }
                                   },
                                   reducers: {
                                       createTuit(state, action) {
                                           state.unshift({
                                                             ...action.payload,
                                                             ...templateTuit,
                                                             _id: (new Date()).getTime(),
                                                         })
                                       },
                                       deleteTuit(state, action) {
                                            const index = state.findIndex(tuit => tuit._id === action.payload);
                                            state.splice(index,1);
                                       }
                                   }
                               });

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;