import BasicLayout from '@/layout/BasicLayout/BasicLayout';
import './NotFound.scss';

const NotFound = () => {
    return (
        <BasicLayout>
            <div className="not-found">
                <h1>The page could not be found.</h1>
            </div>
        </BasicLayout>
    );
};

export default NotFound;
