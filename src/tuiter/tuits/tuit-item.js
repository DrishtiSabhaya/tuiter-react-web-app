import React from "react";
import "./index.css";

const PostItem = (preview) => {
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