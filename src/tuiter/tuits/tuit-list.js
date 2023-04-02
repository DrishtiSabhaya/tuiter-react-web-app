import React, {useEffect} from "react";
import TuitStats from "./tuit-stats";
import {useDispatch, useSelector} from "react-redux";
// import {deleteTuit} from "../reducers/tuit-reducer";
import {findTuitsThunk} from "../../services/tuits-thunks.js";
import {deleteTuitThunk} from "../../services/tuits-thunks.js";
import "./index.css";

const TuitList = ({tuits}) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center gap-2">
                <div className="align-self-start">
                    <img src={`/images/${tuits.image}`} alt="" className="rounded-circle align-self-start wd-avatar"/>
                </div>
                <div className="d-flex flex-column gap-1 w-100">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-1">
                            <span className="fw-bold">{tuits.username}</span>
                            {tuits.verified ? (
                                <>
                                  <span>
                                    <i className="fa-solid fa-circle-check"></i>
                                  </span>
                                </>
                            ) : (<></>)
                            }
                            <div className="text-muted ms-1">@{tuits.username}</div>
                            <div className="text-muted ms-1">- {tuits.time}</div>
                        </div>
                        <div>
                            <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuits._id)}></i>
                        </div>
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: tuits.tuit }}></div>
                    {/*<div>*/}
                    {/*    <TuitItem preview={post.preview} />*/}
                    {/*</div>*/}
                    <div>
                        <TuitStats post={tuits}/>
                    </div>
                </div>
            </li>
        </>
    );
};

export default TuitList;