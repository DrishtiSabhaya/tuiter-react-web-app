import Profile from "./profile";
import {useNavigate} from 'react-router-dom';
import {useCallback, useState} from "react";

const ProfileComponent = () => {
    const navigate = useNavigate();
    const openComponent = useCallback(() => {
        navigate('/tuiter/editprofile');
    }, [])

    // const setNavigationActive = (active) => {
    //     return {
    //         type: "change-active",
    //         active,
    //     };
    // };

    return (
        <>
            {/*{edit ? (<EditProfile closeComponent={closeComponent}/>) : (<Profile openComponent={openComponent}/>)}*/}
            <Profile openComponent={openComponent}/>
        </>
    );
};

export default ProfileComponent;