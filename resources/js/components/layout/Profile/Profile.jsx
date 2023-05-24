import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import {
    dashboardIcon,
    plusIcon,
    rightArrowIcon,
    rightArrowIcon3,
    settingIcon,
    starIcon,
} from '@/components/icons/common';
import profileImage from '../../../../images/avatar/4.png';
import './Profile.scss';

const menu = [
    { title: 'Dashboard', icon: dashboardIcon, link: '/profile/dashboard' },
    { title: 'Past Tests', icon: starIcon, link: '/profile/test' },
    { title: 'Membership and Plans', icon: plusIcon, link: '/profile/membership' },
    { title: 'Account Settings', icon: settingIcon, link: '/profile/setting' },
];

const Profile = ({ isTestHistory }) => {
    const [isMobileOpen, setMobileOpen] = useState(false);
    const profileRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setMobileOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [profileRef]);

    return (
        <div className="profile" ref={profileRef}>
            <div className="float-button" onClick={() => setMobileOpen(!isMobileOpen)}>
                <span>{rightArrowIcon3}</span>
            </div>
            <div className={`main-section${isMobileOpen ? ' active' : ''}${isTestHistory ? ' is-test-history' : ''}`}>
                <div className="back" />
                <div className="front">
                    <img src={profileImage} alt="" />
                    <h1>User Name</h1>
                    <p>salman95altaf@gmail.com</p>

                    <ul className="menu">
                        {menu.map((item) => (
                            <li key={item.link}>
                                <Link href={item.link} className="menu-item">
                                    <div>
                                        <span className="menu-icon">{item.icon}</span>
                                        <span className="menu-title">{item.title}</span>
                                    </div>
                                    <span className="arrow-icon">{rightArrowIcon}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
