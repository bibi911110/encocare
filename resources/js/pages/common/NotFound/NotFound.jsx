import BasicLayout from '@/layout/BasicLayout/BasicLayout';
import './NotFound.scss';

const NotFound = ({ auth }) => {
    return (
        <BasicLayout auth={auth}>
            <div className="not-found">
                <h1>The page could not be found.</h1>
            </div>
        </BasicLayout>
    );
};

export default NotFound;
