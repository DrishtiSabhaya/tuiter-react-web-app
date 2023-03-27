import React from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Profile = ({openComponent}) => {
    const navigate = useNavigate();
    const profile = useSelector((state) => state.profile);
    return (
        <>
            <div className="d-flex gap-4">
                <FontAwesomeIcon icon={solid("arrow-left")} onClick={() => navigate(-1)} />
                <div className="d-flex flex-column">
                    <h5 className="mb-0">
                        {profile.firstName} {profile.lastName}
                    </h5>
                    <span>123k Tuits</span>
                </div>
            </div>
            <img
                src={profile.bannerPicture}
                alt={profile.handle}
                className="wd-profile-banner mt-1"
            />
            <div className="px-3">
                <div className="d-flex justify-content-between">
                    <div className="wd-profile-picture-container">
                        <img
                            src={profile.profilePicture}
                            alt={profile.handle}
                            className="wd-profile-picture"
                        />
                    </div>
                    <div>
                        <button className="btn btn-outline-dark rounded-pill mt-2" onClick={() => openComponent()}>
                            Edit Profile
                        </button>
                    </div>
                </div>
                <div className="mt-2">
                    <h5 className="mb-0">
                        {profile.firstName} {profile.lastName}
                    </h5>
                    <div className="text-muted">@{profile.handle}</div>
                </div>
                <div className="mt-2">{profile.bio}</div>
                <div className="mt-2 d-flex gap-4">
                    <div className="text-muted d-flex gap-1 ">
                        <FontAwesomeIcon icon={solid('location')} />
                        <span className="align-self-center">{profile.location}</span>
                    </div>
                    <div className="text-muted d-flex gap-1 ">
                        <FontAwesomeIcon icon={solid('birthday-cake')} />
                        <span className="align-self-center">
                          Born {profile.dateOfBirth}
                        </span>
                    </div>
                    <div className="text-muted d-flex gap-1 ">
                        <FontAwesomeIcon icon={solid('calendar')} />
                        <span className="align-self-center">
                          Joined {profile.dateJoined}
                        </span>
                    </div>
                </div>
                <div className="d-flex gap-4 mt-2">
                    <div>
                        <span className="fw-bold">{profile.followingCount}</span>{" "}
                        <span className="text-muted">Following</span>
                    </div>
                    <div>
                        <span className="fw-bold">{profile.followersCount}</span>{" "}
                        <span className="text-muted">Followers</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;