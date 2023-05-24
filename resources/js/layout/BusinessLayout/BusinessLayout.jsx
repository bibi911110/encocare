import Header from '../../components/layout/Header/Header';
import Navbar from '../../components/layout/Navbar/Navbar';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import './BusinessLayout.scss';

const BusinessLayout = ({ children }) => {
    return (
        <>
            <header data-layout="business">
                <Header />
                <Navbar mode="admin" />
            </header>
            <main data-layout="business">
                <Sidebar type="business" />
                <div className="main-content">{children}</div>
            </main>
        </>
    );
};

export default BusinessLayout;
