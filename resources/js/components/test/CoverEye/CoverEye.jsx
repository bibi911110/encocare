import Button from '../../common/Button/Button';
import { soundIcon } from '@/components/icons/common';
import coverEyeImage from '../../../../images/cover-eye.png';
import './CoverEye.scss';

const CoverEye = ({ onNext, onPrev }) => {
    return (
        <div className="cover-eye">
            <h1>Cover your left eye</h1>
            <img src={coverEyeImage} alt="" />
            <Button title="Continue with Right Eye" type="primary" onClick={onNext} arrow />
            <span onClick={onPrev}>Back</span>

            <div className="audio-wrapper">
                <p>
                    Audio Guide: <span>{soundIcon}</span>ON
                </p>
            </div>
        </div>
    );
};

export default CoverEye;
