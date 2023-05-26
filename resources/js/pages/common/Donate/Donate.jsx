import { useState } from 'react';
import PaymentStep1 from './PaymentStep1';
import PaymentStep2 from './PaymentStep2';
import './Donate.scss';
import BasicLayout from '@/layout/BasicLayout/BasicLayout';

const Donate = ({ auth }) => {
    const [paymentStep, setPaymentStep] = useState(0);

    const handleNextPaymentStep = () => {
        setPaymentStep(paymentStep + 1);
    };

    const handlePrevPaymentStep = () => {
        setPaymentStep(paymentStep - 1);
    };

    return (
        <BasicLayout auth={auth}>
            <div className="donate">
                <div className="main-section">
                    <h1>Donate for a Vision</h1>
                    <p>
                        The funds we receive are used to improve the technology we use to diagnose and treat visually
                        impaired persons!
                    </p>

                    <div className="payment-wrapper">
                        {paymentStep === 0 && (
                            <PaymentStep1
                                handleNextStep={handleNextPaymentStep}
                                handlePrevStep={handlePrevPaymentStep}
                            />
                        )}
                        {paymentStep === 1 && (
                            <PaymentStep2
                                handleNextStep={handleNextPaymentStep}
                                handlePrevStep={handlePrevPaymentStep}
                            />
                        )}
                    </div>
                </div>
            </div>
        </BasicLayout>
    );
};

export default Donate;
