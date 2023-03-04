import React from "react";
import "./index.css";

const PostItem = ({
                     preview = {
                         image: "https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSTVj5DHrlahOykYCHrcwL63gTkGzcXodPQgvrJXFqQMFg4Ktgtxmh_fGFJbsMF9BwmIbdW4L17YdJejrxJNwqyEnAP-.jpg?r=3d5",
                         title: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                         description: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
                         link: "netflix.com",
                         linkHref: "https://www.netflix.com",
                     },
                 }) => {
    if (!preview) {
        return <></>;
    }

    return (
        <>
            <a href={preview.linkHref || preview.link || "#"} className="wd-post-preview">
                <div className="card wd-post-item-preview-card">
                    <img className={`card-img-top img-fluid ${(preview.title || preview.description) && `wd-post-item-preview-bottom-flat`}`} src={preview.image} alt={preview.title}></img>
                    {(preview.title || preview.description) && (
                        <>
                            <div className="card-body">
                                <h6 className="card-title">{preview.title}</h6>
                                <p className="card-text mb-1 wd-text-muted">
                                    {preview.description}
                                </p>
                                <p className="card-text d-flex align-items-center">
                                    <i className="fa fa-link wd-text-muted"></i>{" "}
                                    <span className="ms-2 wd-text-muted">
                                        {preview.link || preview.linkHref}
                                    </span>
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </a>
        </>
    );
};

export default PostItem;