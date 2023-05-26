import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import Navbar from '@/components/layout/Navbar/Navbar';
import BottomDialog from '@/components/common/BottomDialog/BottomDialog';
import './BasicLayout.scss';

const BasicLayout = ({ auth, children }) => {
    return (
        <>
            <header data-layout="base">
                <Header />
                <Navbar mode="user" auth={auth} />
            </header>
            <main data-layout="base">{children}</main>
            <BottomDialog />
            <Footer />
        </>
    );
};

export default BasicLayout;
