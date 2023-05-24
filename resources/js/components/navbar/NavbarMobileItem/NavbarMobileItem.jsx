import { Link } from '@inertiajs/react';
import { downArrowIcon, rightArrowIcon } from '@/components/icons/common';
import './NavbarMobileItem.scss';

const NavbarMobileItem = ({ title, link, subLinks, isSubMenuOpen, setSubMenuOpen, closeMobileMenu }) => {
    if (link) {
        return (
            <li className="navbar-mobile-item">
                <div className="navbar-mobile-item-main">
                    <Link href={link} onClick={closeMobileMenu}>
                        {title}
                    </Link>
                </div>
            </li>
        );
    } else {
        return (
            <li className="navbar-mobile-item">
                <div className="navbar-mobile-item-main" onClick={() => setSubMenuOpen(title)}>
                    <span>{title}</span>
                    {isSubMenuOpen === title ? downArrowIcon : rightArrowIcon}
                </div>
                {isSubMenuOpen === title && (
                    <ul className="navbar-mobile-sub-menu">
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

export default NavbarMobileItem;
