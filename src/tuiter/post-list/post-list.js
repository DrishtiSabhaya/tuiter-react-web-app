import React from "react";
import PostItem from "./post-item";
import "./index.css";

const PostList = ({
                      post = {
                          avatarImage: "https://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_400x400.jpg",
                          name: "Elon Musk",
                          userName: "elonmusk",
                          verified: true,
                          time: "23h",
                          content: "Amazing show about <a href='#'>@Inspiration4x</a> mission!",
                          preview: {
                              image: "https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSTVj5DHrlahOykYCHrcwL63gTkGzcXodPQgvrJXFqQMFg4Ktgtxmh_fGFJbsMF9BwmIbdW4L17YdJejrxJNwqyEnAP-.jpg?r=3d5",
                              title: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                              description: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
                              link: "netflix.com",
                              linkHref: "https://www.netflix.com",
                          },
                          comments: "4.2K",
                          likes: "37.5K",
                          retuits: "3.5K",
                      },
                  }) => {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center gap-2">
                <div className="align-self-start">
                    <img src={post.avatarImage} alt="" className="rounded-circle align-self-start wd-avatar"/>
                </div>
                <div className="d-flex flex-column gap-1 w-100">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex gap-1">
                            <span className="fw-bold">{post.name}</span>
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
                            <i className="fas fa-ellipsis-h text-muted"></i>
                        </div>
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    <div>
                        <PostItem preview={post.preview} />
                    </div>
                    <div className="d-flex justify-content-between px-2 wd-text-muted">
                        <div>
                            <i className="far fa-comment"></i>
                            <span className="ms-2">{post.comments}</span>
                        </div>
                        <div>
                            <i class="fas fa-retweet"></i>
                            <span className="ms-2">{post.retuits}</span>
                        </div>
                        <div>
                            <i class="far fa-heart"></i>
                            <span className="ms-2">{post.likes}</span>
                        </div>
                        <div>
                            <i class="fas fa-upload pe-3"></i>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default PostList;