import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import BasicLayout from '@/layout/BasicLayout/BasicLayout';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import Button from '@/components/common/Button/Button';
import NormalInput from '@/components/common/NormalInput/NormalInput';
import InputError from '@/components/common/InputError/InputError';
import CustomModal from '@/components/common/CustomModal/CustomModal';
import forgotPasswordLogoImage from '../../../../images/forgot-password.png';
import './ForgotPassword.scss';

const ForgotPassword = ({ status }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

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
                                {status && <p className="success-message">{status}</p>}
                            </div>
                            <Button title="Get magic link" type="primary" disabled={processing} submit arrow />
                        </form>
                    </div>
                </div>
                <div className="right-section"></div>
            </div>

            <CustomModal isOpen={modalIsOpen} closeModal={closeModal}>
                <div className="agree-modal-container">
                    <h1>Please indicate your consent!</h1>
                    <div className="agree-wrapper">
                        <div className="agree-content">
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                <br />
                                <br />
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                sea takimata sanctus est Lorem ipsum dolor sit amet.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consetetur sadipscing
                                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua.
                                <br />
                                <br />
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                sea takimata sanctus est Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                amet.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                <br />
                                <br />
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                sea takimata sanctus est Lorem ipsum dolor sit amet.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consetetur sadipscing
                                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua.
                                <br />
                                <br />
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                sea takimata sanctus est Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                amet.
                            </p>
                        </div>

                        <div className="agree-check">
                            <CheckBox />
                            <p>I agree to the terms & conditions and privacy policy of Encocare.</p>
                        </div>

                        <div className="button-wrapper">
                            <Button title="Agree & Continue" type="primary" onClick={closeModal} arrow />
                        </div>
                        <p>
                            For more details please, read your <br className="mobile-only" />
                            <span>terms & conditions</span> and <span>privacy policy</span>.
                        </p>
                    </div>
                </div>
            </CustomModal>
        </BasicLayout>
    );
};

export default ForgotPassword;
