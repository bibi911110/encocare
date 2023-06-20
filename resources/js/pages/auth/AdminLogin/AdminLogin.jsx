import { Link, router } from '@inertiajs/react';
import BasicLayout from '@/layout/BasicLayout/BasicLayout';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import Button from '@/components/common/Button/Button';
import NormalInput from '@/components/common/NormalInput/NormalInput';
import PasswordInput from '@/components/common/PasswordInput/PasswordInput';
import { rightArrowIcon2 } from '@/components/icons/common';
import './AdminLogin.scss';

const AdminLogin = () => {
    const handleLogin = () => {
        router.get('/admin/dashboard');
    };

    return (
        <BasicLayout>
            <div className="admin-login">
                <div className="main-section">
                    <div className="left-section">
                        <h1>Super Admin Login</h1>
                        <p>Login to the Africa's #1 Eye Testing Application</p>

                        <form>
                            <NormalInput placeHolder="Email Address" />
                            <PasswordInput placeHolder="Password" />
                            <div className="sub-links-wrapper">
                                <div className="remember-check">
                                    <CheckBox />
                                    <span>Remember me</span>
                                </div>
                                <Link href="/forgot-password">Forgot Password?</Link>
                            </div>
                            <Button title="Login" type="primary" onClick={handleLogin} arrow />
                        </form>

                        <div className="link-wrapper">
                            <p>Not a member?</p>
                            <Link href="/signup-admin">Subscribe to membership</Link>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="back-image" />
                        <div className="overlay">
                            <div className="title-wrapper">
                                <h1>Join the largest NGO Network</h1>
                                <p>
                                    With over 2,000 Ophthalmologists across Africa, Encocare phthalmologists Association
                                    is one of the largest globally!
                                </p>
                                <div className="link-wrapper">
                                    <Button title="Get Registered!" type="primary" />
                                    <Link href="/">
                                        Learn more
                                        {rightArrowIcon2}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BasicLayout>
    );
};

export default AdminLogin;
