import { Link } from '@inertiajs/react';
import BasicLayout from '@/layout/BasicLayout/BasicLayout';
import Button from '@/components/common/Button/Button';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import NormalInput from '@/components/common/NormalInput/NormalInput';
import PasswordInput from '@/components/common/PasswordInput/PasswordInput';
import { rightArrowIcon2 } from '@/components/icons/common';
import './BusinessLogin.scss';

const BusinessLogin = () => {
    return (
        <BasicLayout>
            <div className="business-login">
                <div className="main-section">
                    <div className="left-section">
                        <h1>Business Login</h1>
                        <p>Login to the Africa's #1 Eye Testing Application</p>

                        <form>
                            <NormalInput placeHolder="Email Address" />
                            <PasswordInput placeHolder="Password" />
                            <div className="sub-links-wrapper">
                                <div className="remember-check">
                                    <CheckBox />
                                    <span>Remember me</span>
                                </div>
                                <Link href="/">Forgot Password?</Link>
                            </div>
                            <Button title="Login" type="primary" arrow />
                        </form>

                        <div className="link-wrapper">
                            <p>Not a member?</p>
                            <Link href="/signup-business">Subscribe to membership</Link>
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

export default BusinessLogin;
