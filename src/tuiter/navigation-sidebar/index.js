import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a href="/tuiter" className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active': active === '' ? 'active' : ''}`}>
                Explore
            </Link>
            <Link to="/tuiter/notification" className={`list-group-item ${active === 'notification'?'active':''}`}>
                Notification
            </Link>
            <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}>
                Messages
            </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </Link>
            <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists'?'active':''}`}>
                Lists
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                Profile
            </Link>
            <Link to="/tuiter/more" className={`list-group-item ${active === 'more'?'active':''}`}>
                More
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
        </div>
    );
};
export default NavigationSidebar;

