import { Head, Link, useForm } from '@inertiajs/react';
import BasicLayout from '@/layout/BasicLayout/BasicLayout';
import Button from '@/components/common/Button/Button';
import NormalInput from '@/components/common/NormalInput/NormalInput';
import InputError from '@/components/common/InputError/InputError';
import forgotPasswordLogoImage from '../../../../images/forgot-password.png';
import './ForgotPassword.scss';

const ForgotPassword = ({ status }) => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    console.log(status);

    return (
        <BasicLayout>
            <Head title="Forgot Password" />

            <div className="forgot-password">
                <div className="left-section">
                    <div className="form-wrapper">
                        <img src={forgotPasswordLogoImage} alt="" />
                        <h1>To err is human!</h1>
                        <p>Let's recover your password! Please enter the email address you used to sign up!</p>
                        <form onSubmit={submit}>
                            <div className="input-wrapper">
                                <NormalInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeHolder="Email Address"
                                />
                                <InputError message={errors.email} />
                            </div>
                            <Button title="Get magic link" type="primary" disabled={processing} submit arrow />
                        </form>
                    </div>
                </div>
                <div className="right-section"></div>
            </div>
        </BasicLayout>
    );
};

export default ForgotPassword;
