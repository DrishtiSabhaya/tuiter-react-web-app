import React from "react";
import "./index.css";

const TuitStats = ({ post }) => {

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
                <div className="wd-cursor-pointer">
                    {post.liked ? (<i className="fas fa-heart wd-tuit-liked"></i>) : (<i className="far fa-heart"></i>)}
                    <span className="ms-2">{post.likes}</span>
                </div>
                <div className="wd-cursor-pointer">
                    <i className="fas fa-external-link-alt"></i>
                </div>
            </div>
        </>
    );
};

export default TuitStats;