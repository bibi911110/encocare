import Header from '../../components/layout/Header/Header';
import Navbar from '../../components/layout/Navbar/Navbar';
import Profile from '../../components/layout/Profile/Profile';
import BottomDialog from '../../components/common/BottomDialog/BottomDialog';
import './ProfileLayout.scss';

const ProfileLayout = ({ auth, children }) => {
    return (
        <>
            <header data-layout="profile">
                <Header />
                <Navbar mode="user" auth={auth} />
            </header>
            <main data-layout="profile">
                <Profile auth={auth} />
                <div className="main-content">{children}</div>
            </main>
            <BottomDialog />
        </>
    );
};

export default ProfileLayout;
