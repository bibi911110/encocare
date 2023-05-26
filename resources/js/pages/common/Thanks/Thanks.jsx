import { Link } from '@inertiajs/react';
import BasicLayout from '@/layout/BasicLayout/BasicLayout';
import Button from '@/components/common/Button/Button';
import NormalInput from '@/components/common/NormalInput/NormalInput';
import img from '../../../../images/thankyou.png';
import './Thanks.scss';

const Thanks = ({ auth }) => {
    return (
        <BasicLayout auth={auth}>
            <div className="thanks">
                <img src={img} alt="" />
                <h1>
                    You're amazing! <br className="mobile-only" />
                    Thank you
                </h1>
                <p>
                    Thank you for your support in curing blindness! If you wish to subscribe to our latest{' '}
                    <br className="desktop-only" />
                    updates and news please enter your email below!
                </p>
                <div>
                    <NormalInput placeHolder="Email Address" />
                </div>
                <div>
                    <Button title="Subscribe" type="primary" arrow />
                </div>
                <div>
                    <Link href="/">Return to homepage</Link>
                </div>
            </div>
        </BasicLayout>
    );
};

export default Thanks;
