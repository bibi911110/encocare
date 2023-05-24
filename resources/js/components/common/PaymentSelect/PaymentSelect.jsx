import { useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';
import { backIcon, cardIcon, paypalIcon, stripeIcon } from '@/components/icons/payment';
import './PaymentSelect.scss';

const payments = [
    {
        title: 'Pay by Card',
        value: 'card',
        icon: cardIcon,
    },
    {
        title: 'Paypal',
        value: 'paypal',
        icon: paypalIcon,
    },
    {
        title: 'Stripe',
        value: 'stripe',
        icon: stripeIcon,
    },
    {
        title: 'Pay by Bank',
        value: 'bank',
        icon: backIcon,
    },
];

const PaymentSelect = ({ onChange }) => {
    const [payment, setPayment] = useState('card');

    const handlePayment = (paymentType) => {
        setPayment(paymentType);
        if (onChange) {
            onChange(paymentType);
        }
    };

    return (
        <div className="payment-select">
            {payments.map((item) => {
                return (
                    <div
                        key={item.value}
                        className={`payment-item ${payment === item.value ? 'payment-item-active' : ''}`}
                        onClick={() => handlePayment(item.value)}
                    >
                        <div className="checkbox-title">
                            <CheckBox checked={payment === item.value} readonly />
                            <span className="payment-title">{item.title}</span>
                        </div>
                        <span className="payment-icon">{item.icon}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default PaymentSelect;
