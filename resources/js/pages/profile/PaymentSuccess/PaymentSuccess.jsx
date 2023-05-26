import { Link } from '@inertiajs/react';
import ProfileLayout from '@/layout/ProfileLayout/ProfileLayout';
import Button from '@/components/common/Button/Button';
import successImage from '../../../../images/success2.png';
import paymentMethodImage from '../../../../images/payments/method.png';
import './PaymentSuccess.scss';

const PaymentSuccess = ({ auth }) => {
    return (
        <ProfileLayout auth={auth}>
            <div className="payment-success">
                <div className="payment-success-content">
                    <img src={successImage} alt="" />
                    <h1>Payment Successful!</h1>
                    <p>
                        You're done! We hope you enjoy your subscription with Encocare! We've sent you an email{' '}
                        <br className="desktop-only" />
                        with details of your dashboard login credentials!
                    </p>
                    <Link href="/profile/dashboard" className="dashboard-link">
                        <Button title="Go to Dashboard" type="primary" />
                    </Link>
                    <Link href="/" className="email-link">
                        Didn't receive the email?
                    </Link>

                    <div className="method-wrapper">
                        <p>Accepted Methods:</p>
                        <img src={paymentMethodImage} alt="" />
                    </div>
                </div>
                <div className="support-link">
                    <p>
                        Have a problem? Contact <span>Customer Support Team</span>
                    </p>
                </div>
            </div>
        </ProfileLayout>
    );
};

export default PaymentSuccess;
