import Header from '../../components/layout/Header/Header';
import Navbar from '../../components/layout/Navbar/Navbar';
import './TestLayout.scss';

const TestLayout = ({ auth, children }) => {
    return (
        <>
            <header data-layout="test">
                <Header />
                <Navbar mode="user" auth={auth} />
            </header>
            <main data-layout="test">{children}</main>
        </>
    );
};

export default TestLayout;
