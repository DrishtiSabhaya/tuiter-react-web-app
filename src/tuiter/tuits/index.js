import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitList from "./tuit-list.js";
import {findTuitsThunk} from "../../services/tuits-thunks";

const Tuits = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk());
    }, []);

    return (
        <>
            {
                loading && <li className="list-group-item"> Loading... </li>
            }
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"/>
        <ul className="list-group posts">
            {tuits.map((tuit) => (
                <TuitList tuits={tuit}/>
            ))}
        </ul>
        </>
    );
};

export default Tuits;