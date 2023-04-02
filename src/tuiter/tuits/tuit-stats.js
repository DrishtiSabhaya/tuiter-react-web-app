import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks.js";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import "./index.css";

const TuitStats = ({ post }) => {

    const dispatch = useDispatch();
    return (
        <>
            <div className="d-flex justify-content-between px-2 wd-text-muted">
                <div className="wd-cursor-pointer">
                    <i className="far fa-comment"></i>
                    <span className="ms-2">{post.replies}</span>
                </div>
                <div className="wd-cursor-pointer">
                    <i className="fas fa-retweet"></i>
                    <span className="ms-2">{post.retuits}</span>
                </div>
                <div className="wd-cursor-pointer" onClick={() => {
                    dispatch(updateTuitThunk({
                                                 ...post,
                                                 likes: post.likes + 1
                                             }))}}>
                    {post.liked ? (<i className="fas fa-heart wd-tuit-liked"></i>) : (<i className="far fa-heart"></i>)}
                    <span className="ms-2">{post.likes}</span>
                </div>
                <div className="wd-cursor-pointer" onClick={() => {
                    dispatch(updateTuitThunk({
                                                 ...post,
                                                 dislikes: post.dislikes - 1
                                             }))}}>
                    <FontAwesomeIcon icon={solid('thumbs-down')}/>
                    <span className="text-muted ps-2">{post.dislikes}</span>
                </div>
                <div className="wd-cursor-pointer">
                    <i className="fas fa-external-link-alt"></i>
                </div>
            </div>
        </>
    );
};

export default TuitStats;