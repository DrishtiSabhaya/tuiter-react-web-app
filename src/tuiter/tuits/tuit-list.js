import React from "react";
// import TuitItem from "./tuit-item";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuit-reducer";
import "./index.css";

const TuitList = ({post}) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center gap-2">
                <div className="align-self-start">
                    <img src={`/images/${post.image}`} alt="" className="rounded-circle align-self-start wd-avatar"/>
                </div>
                <div className="d-flex flex-column gap-1 w-100">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-1">
                            <span className="fw-bold">{post.userName}</span>
                            {post.verified ? (
                                <>
                                  <span>
                                    <i className="fa-solid fa-circle-check"></i>
                                  </span>
                                </>
                            ) : (<></>)
                            }
                            <div className="text-muted ms-1">@{post.userName}</div>
                            <div className="text-muted ms-1">- {post.time}</div>
                        </div>
                        <div>
                            <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(post._id)}></i>
                        </div>
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: post.tuit }}></div>
                    {/*<div>*/}
                    {/*    <TuitItem preview={post.preview} />*/}
                    {/*</div>*/}
                    <div>
                        <TuitStats post={post}/>
                    </div>
                </div>
            </li>
        </>
    );
};

export default TuitList;