import { useEffect } from 'react';
import { Link, Head, useForm } from '@inertiajs/react';
import BasicLayout from '@/layout/BasicLayout/BasicLayout';
import Button from '@/components/common/Button/Button';
import FormDivider from '@/components/common/FormDivider/FormDivider';
import NormalInput from '@/components/common/NormalInput/NormalInput';
import PasswordInput from '@/components/common/PasswordInput/PasswordInput';
import SocialButton from '@/components/common/SocialButton/SocialButton';
import './Signup.scss';
import InputError from '@/components/common/InputError/InputError';

const Signup = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('signup'));
    };

    return (
        <BasicLayout>
            <Head title="Sign Up" />

            <div className="signup">
                <div className="left-section">
                    <div className="form-wrapper">
                        <h1>Sign Up</h1>
                        <p>Eyesight is a beautiful gift of life! Live it to the best!</p>
                        <div className="social-buttons">
                            <SocialButton type="facebook" title="Sign up using Facebook" />
                            <SocialButton type="google" title="Sign up using Google" />
                            <SocialButton type="twitter" title="Sign up using Twitter" />
                        </div>
                        <FormDivider />
                        <form onSubmit={submit}>
                            <div className="input-wrapper">
                                <NormalInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    placeHolder="Email Address"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                                <InputError message={errors.email} />
                                <PasswordInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    placeHolder="Password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password} />
                            </div>
                            <Button title="Sign Up" type="primary" disabled={processing} submit arrow />
                        </form>
                        <div className="link-wrapper">
                            <p>Already a member?</p>
                            <Link href="/login">Login</Link>
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

export default Signup;
