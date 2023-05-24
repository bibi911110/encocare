import { Link } from '@inertiajs/react';
import BasicLayout from '@/layout/BasicLayout/BasicLayout';
import Button from '@/components/common/Button/Button';
import NormalInput from '@/components/common/NormalInput/NormalInput';
import forgetPasswordLogoImage from '../../../../images/forget-password.png';
import './ForgetPassword.scss';

const ForgetPassword = () => {
    return (
        <BasicLayout>
            <div className="forget-password">
                <div className="left-section">
                    <div className="form-wrapper">
                        <img src={forgetPasswordLogoImage} alt="" />
                        <h1>To err is human!</h1>
                        <p>Let's recover your password! Please enter the email address you used to sign up!</p>
                        <form>
                            <div className="input-wrapper">
                                <NormalInput placeHolder="Email Address" />
                            </div>
                            <Link href="/set-password">
                                <Button title="Get magic link" type="primary" arrow />
                            </Link>
                        </form>
                    </div>
                </div>
                <div className="right-section"></div>
            </div>
        </BasicLayout>
    );
};

export default ForgetPassword;
