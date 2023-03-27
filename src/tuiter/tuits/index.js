import React from "react";
import { useSelector } from "react-redux";
import TuitList from "./tuit-list.js";

const Tuits = () => {
    const tuits = useSelector((state) => state.tuits);

    return (
        <>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"/>
        <ul className="list-group posts">
            {tuits.map((tuit) => (
                <TuitList post={tuit}/>
            ))}
        </ul>
        </>
    );
};

export default Tuits;