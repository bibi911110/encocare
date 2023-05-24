import BasicLayout from '@/layout/BasicLayout/BasicLayout';
import './NotFound.scss';

const NotFound = () => {
    return (
        <BasicLayout>
            <div className="not-found">
                <h3>The page could not be found.</h3>
            </div>
        </BasicLayout>
    );
};

export default NotFound;
