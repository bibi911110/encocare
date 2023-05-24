import Header from '../../components/layout/Header/Header';
import Navbar from '../../components/layout/Navbar/Navbar';
import Profile from '../../components/layout/Profile/Profile';
import BottomDialog from '../../components/common/BottomDialog/BottomDialog';
import './ProfileLayout.scss';

const ProfileLayout = ({ children }) => {
    const currentUrl = window.location.href;
    const isTestHistory = currentUrl.indexOf('/profile/test-history') > -1;

    return (
        <>
            <header data-layout="profile">
                <Header />
                <Navbar mode="user" />
            </header>
            <main data-layout="profile">
                <Profile isTestHistory={isTestHistory} />
                <div className="main-content">{children}</div>
            </main>
            <BottomDialog />
        </>
    );
};

export default ProfileLayout;
