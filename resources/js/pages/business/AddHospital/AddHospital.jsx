import { Link } from '@inertiajs/react';
import BusinessLayout from '@/layout/BusinessLayout/BusinessLayout';
import Button from '@/components/common/Button/Button';
import Dropzone from '@/components/common/Dropzone/Dropzone';
import NormalInput from '@/components/common/NormalInput/NormalInput';
import { imageIcon, leftArrowIcon2, userIcon } from '@/components/icons/common';
import { hospitalIcon } from '@/components/icons/sidebar';
import './AddHospital.scss';

const AddHospital = () => {
    return (
        <BusinessLayout>
            <div className="add-hospital">
                <div className="main-header">
                    <h1>
                        <span>{leftArrowIcon2}</span>Add an Hospital
                    </h1>
                    <p>Super Admin can add hospital here and manage login credentials for hospital admins.</p>
                </div>

                <div className="main-content">
                    <div className="card-wrapper">
                        <div className="card first-card">
                            <div className="card-title">
                                <span className="hospital-icon">{hospitalIcon}</span>
                                HOSPITAL DETAILS
                            </div>

                            <NormalInput placeHolder="Hospital name" />
                            <NormalInput placeHolder="Hospital Location" />
                            <NormalInput placeHolder="Hospital Contact Number" />
                        </div>
                        <div className="card second-card">
                            <div className="card-title">
                                <span>{userIcon}</span>
                                HOSPITAL ADMIN
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

export default AddHospital;
