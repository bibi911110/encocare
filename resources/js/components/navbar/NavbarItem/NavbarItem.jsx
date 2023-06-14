import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { downArrowIcon } from '@/components/icons/common';
import './NavbarItem.scss';

const NavbarItem = ({ title, link, subLinks }) => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    if (link) {
        return (
            <li className="navbar-menu-item main-menu">
                <Link href={link}>{title}</Link>
            </li>
        );
    } else {
        return (
            <li
                className="navbar-menu-item"
                onMouseEnter={() => setSubMenuOpen(true)}
                onMouseLeave={() => setSubMenuOpen(false)}
            >
                <span>{title}</span>
                {downArrowIcon}
                {isSubMenuOpen && (
                    <ul className="sub-menu">
                        {subLinks?.map((item) => (
                            <li key={item.title}>
                                <Link href={item.link}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        );
    }
};

export default NavbarItem;
