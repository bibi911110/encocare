import { Link } from '@inertiajs/react';
import BusinessLayout from '@/layout/BusinessLayout/BusinessLayout';
import Button from '@/components/common/Button/Button';
import Dropzone from '@/components/common/Dropzone/Dropzone';
import NormalInput from '@/components/common/NormalInput/NormalInput';
import { doctorIcon } from '@/components/icons/sidebar';
import { imageIcon, leftArrowIcon2, userIcon } from '@/components/icons/common';
import './AddDoctor.scss';

const AddDoctor = () => {
    return (
        <BusinessLayout>
            <div className="add-doctor">
                <div className="main-header">
                    <h1>
                        <span>{leftArrowIcon2}</span>Add an Doctor
                    </h1>
                    <p>An an doctor to add in your dashboard!</p>
                </div>

                <div className="main-content">
                    <div className="card-wrapper">
                        <div className="card first-card">
                            <div className="card-title">
                                <span className="doctor-icon">{doctorIcon}</span>
                                DOCTOR DETAILS
                            </div>

                            <NormalInput placeHolder="Doctor name" />
                            <NormalInput placeHolder="Doctor Location" />
                            <NormalInput placeHolder="Doctor Contact Number" />
                        </div>
                        <div className="card second-card">
                            <div className="card-title">
                                <span>{userIcon}</span>
                                DOCTOR ADMIN
                            </div>

                            <div className="name-wrapper">
                                <NormalInput placeHolder="First Name" />
                                <NormalInput placeHolder="Last Name" />
                            </div>
                            <NormalInput placeHolder="Admin Email Address" />
                            <NormalInput placeHolder="Admin Contact Number" />
                        </div>
                        <div className="card third-card">
                            <div className="card-title">
                                <span>{imageIcon}</span>
                                UPLOAD PROFILE IMAGE
                            </div>

                            <Dropzone />
                        </div>
                    </div>

                    <div className="button-wrapper">
                        <Button title="Save" type="primary" />
                        <Link href="/">{leftArrowIcon2} Back</Link>
                    </div>
                </div>
            </div>
        </BusinessLayout>
    );
};

export default AddDoctor;
