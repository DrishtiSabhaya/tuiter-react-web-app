import {useCallback, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import {editProfile} from "../reducers/profile-reducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import "./index.css";

const EditProfileComponent = () => {
    const navigate = useNavigate();
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setdateOfBirth] = useState(profile.dateOfBirth);
    const closeComponent = useCallback(() => {
        navigate('/tuiter/profile');
    }, [])

    const onProfileSaveHandler = () => {
        dispatch(editProfile({firstName, lastName, bio, location, website, dateOfBirth}));
        closeComponent();
    };
    return (
        <>
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-4">
                    <FontAwesomeIcon icon={solid("xmark")} onClick={() => closeComponent()}/>
                    <div className="align-self-center">
                        <h5 className="mb-0">Edit Profile</h5>
                    </div>
                </div>
                <button className="btn btn-dark rounded-pill" onClick={() => onProfileSaveHandler()}>
                    Save
                </button>
            </div>
            <div className="mt-2 position-relative">
                <img
                    src={profile.bannerPicture}
                    alt={profile.handle}
                    className="wd-profile-banner"
                />
                <div
                    className="wd-profile-banner wd-edit-banner-pic-overlay position-absolute top-0 d-flex justify-content-center">
                    <i className="fa-solid fa-camera fa-inverse fa-xl align-self-center wd-cursor-pointer"></i>
                </div>
            </div>
            <div className="px-3">
                <div className="d-flex justify-content-between">
                    <div className="wd-profile-picture-container">
                        <img
                            src={profile.profilePicture}
                            alt={profile.handle}
                            className="wd-profile-picture"
                        />
                        <div
                            className="wd-profile-picture wd-edit-profile-pic-overlay d-flex justify-content-center">
                            <i className="fa-solid fa-camera fa-inverse fa-xl align-self-center wd-cursor-pointer"></i>
                        </div>
                    </div>
                </div>
                <div className="mt-2 form-floating">
                    <input
                        type="text"
                        className="form-control text-dark"
                        id="wd-edit-profile-first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label htmlFor="wd-edit-profile-first-name ">First Name</label>
                </div>
                <div className="mt-2 form-floating">
                    <input
                        type="text"
                        className="form-control text-dark"
                        id="wd-edit-profile-last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <label htmlFor="wd-edit-profile-last-name">Last Name</label>
                </div>
                <div className="mt-2 form-floating">
                    <textarea
                        className="form-control text-dark"
                        id="wd-edit-profile-bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                    <label htmlFor="wd-edit-profile-bio">Bio</label>
                </div>
                <div className="mt-2 form-floating">
                    <input
                        type="text"
                        className="form-control text-dark"
                        id="wd-edit-profile-location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <label htmlFor="wd-edit-profile-location">Location</label>
                </div>
                <div className="mt-2 form-floating">
                    <input
                        type="text"
                        className="form-control text-dark"
                        id="wd-edit-profile-website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                    <label htmlFor="wd-edit-profile-website">Website</label>
                </div>
                <div className="mt-2 form-floating">
                    <input
                        type="text"
                        className="form-control text-dark"
                        id="wd-edit-profile-dateOfBirth"
                        value={dateOfBirth}
                        onChange={(e) => setdateOfBirth(e.target.value)}
                    />
                    <label htmlFor="wd-edit-profile-dateOfBirth">Birth date</label>
                </div>
            </div>
        </>
    );
}

export default EditProfileComponent;