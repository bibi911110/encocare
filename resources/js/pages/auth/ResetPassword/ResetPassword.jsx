import { useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import BasicLayout from '@/layout/BasicLayout/BasicLayout';
import Button from '@/components/common/Button/Button';
import PasswordInput from '@/components/common/PasswordInput/PasswordInput';
import InputError from '@/components/common/InputError/InputError';
import resetPasswordLogoImage from '../../../../images/reset-password.png';
import './ResetPassword.scss';

const ResetPassword = ({ email, token }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('password.store'));
    };

    return (
        <BasicLayout>
            <Head title="Reset Password" />

            <div className="reset-password">
                <div className="left-section">
                    <div className="form-wrapper">
                        <img src={resetPasswordLogoImage} alt="" />
                        <h1>Set a new password!</h1>
                        <p>Use a password that's easy to remember yet difficult to guess!</p>
                        <form onSubmit={submit}>
                            <div className="input-wrapper">
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeHolder="New Password"
                                />
                                <InputError message={errors.password} />
                                <PasswordInput
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeHolder="Confirm Password"
                                />
                                <InputError message={errors.password_confirmation} />
                            </div>
                            <Button title="Continue & Login" type="primary" disabled={processing} submit arrow />
                        </form>
                    </div>
                </div>
                <div className="right-section"></div>
            </div>
        </BasicLayout>
    );
};

export default ResetPassword;
