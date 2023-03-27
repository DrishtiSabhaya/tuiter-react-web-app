import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const NavigationSidebar = () => {

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a href="/tuiter" className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <FontAwesomeIcon icon={solid("house-chimney")} />
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active': pathname === '/tuiter' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={solid("hashtag")} />
                Explore
            </Link>
            <Link to="/tuiter/notification" className={`list-group-item ${active === 'notification'?'active':''}`}>
                <FontAwesomeIcon icon={solid("bell")} />
                Notification
            </Link>
            <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}>
                <FontAwesomeIcon icon={solid("message")} />
                Messages
            </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <FontAwesomeIcon icon={solid("bookmark")} />
                Bookmarks
            </Link>
            <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists'?'active':''}`}>
                <FontAwesomeIcon icon={solid("list")} />
                Lists
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <FontAwesomeIcon icon={solid("user")} />
                Profile
            </Link>
            <Link to="/tuiter/more" className={`list-group-item ${active === 'more'?'active':''}`}>
                <FontAwesomeIcon icon={solid("ellipsis")} />
                More
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
        </div>
    );
};
export default NavigationSidebar;

