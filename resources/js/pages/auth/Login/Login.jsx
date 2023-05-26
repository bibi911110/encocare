import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import BasicLayout from '@/layout/BasicLayout/BasicLayout';
import Button from '@/components/common/Button/Button';
import SocialButton from '@/components/common/SocialButton/SocialButton';
import FormDivider from '@/components/common/FormDivider/FormDivider';
import NormalInput from '@/components/common/NormalInput/NormalInput';
import PasswordInput from '@/components/common/PasswordInput/PasswordInput';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import InputError from '@/components/common/InputError/InputError';
import './Login.scss';

const Login = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <BasicLayout>
            <Head title="Login" />

            <div className="login">
                <div className="left-section">
                    <div className="form-wrapper">
                        <h1>Login</h1>
                        <p>Login to the Africa's #1 Eye Testing Application</p>
                        <div className="social-buttons">
                            <SocialButton type="facebook" title="Login using Facebook" />
                            <SocialButton type="google" title="Login using Google" />
                            <SocialButton type="twitter" title="Login using Twitter" />
                        </div>
                        <FormDivider />
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
                                <PasswordInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeHolder="Password"
                                />
                                <InputError message={errors.password} />
                                <div className="sub-links-wrapper">
                                    <div className="remember-check">
                                        <CheckBox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />
                                        <span>Remember me</span>
                                    </div>
                                    <Link href="/forgot-password">Forgot Password?</Link>
                                </div>
                            </div>
                            <Button title="Login" type="primary" disabled={processing} submit arrow />
                        </form>
                        <div className="link-wrapper">
                            <p>Not a member?</p>
                            <Link href="/signup">Sign Up</Link>
                        </div>
                        <p className="policy">
                            By signing up you agree to Encocare <span>terms & conditions</span> and privacy policy.
                        </p>
                    </div>
                </div>
                <div className="right-section"></div>
            </div>
        </BasicLayout>
    );
};

export default Login;
