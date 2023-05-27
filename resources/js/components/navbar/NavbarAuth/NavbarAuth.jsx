import { useState, useRef, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import Button from '../../common/Button/Button';
import { downArrowIcon } from '@/components/icons/common';
import { logoutIcon, securityIcon, userCircleIcon } from '@/components/icons/common';
import avatarImage from '../../../../images/avatar.png';
import './NavbarAuth.scss';

const links = [
    {
        title: 'Account Settings',
        icon: userCircleIcon,
        link: '/',
    },
    {
        title: 'Security Settings',
        icon: securityIcon,
        link: '/',
    },
    {
        title: 'Logout',
        icon: logoutIcon,
        link: '/logout',
    },
];

const NavbarAuth = ({ auth }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const profileRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [profileRef]);

    if (auth && auth.user) {
        return (
            <div className="navbar-auth-profile" ref={profileRef}>
                <div className="profile-wrapper" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                    <div className="profile-info">
                        <p className="email">{auth.user.email}</p>
                        <p className="account-id">
                            Account ID: <span>1236456789</span>
                        </p>
                    </div>
                    <img src={avatarImage} alt="" />
                    <span>{downArrowIcon}</span>
                </div>
                <div className={`profile-dropdown ${isDropdownOpen ? 'profile-dropdown-open' : ''}`}>
                    <div className="profile-mobile-detail">
                        <img src={avatarImage} alt="" />
                        <div className="profile-mobile-info">
                            <p className="email">{auth.user.email}</p>
                            <p className="account-id">
                                Account ID: <span>1236456789</span>
                            </p>
                        </div>
                    </div>
                    {links.map((item) => {
                        if (item.title === 'Logout') {
                            return (
                                <Link key={item.title} href={item.link} method="post">
                                    <div className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                                        <span>{item.icon}</span>
                                        {item.title}
                                    </div>
                                </Link>
                            );
                        } else {
                            return (
                                <Link key={item.title} href={item.link}>
                                    <div className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                                        <span>{item.icon}</span>
                                        {item.title}
                                    </div>
                                </Link>
                            );
                        }
                    })}
                </div>
            </div>
        );
    } else {
        return (
            <div className="navbar-auth">
                <Link href="/signup">
                    <Button title="Sign up" type="light" />
                </Link>
                <Link href="/login">
                    <Button title="Login" type="primary" />
                </Link>
            </div>
        );
    }
};

export default NavbarAuth;
