import { Link } from '@inertiajs/react';
import Button from '../Button/Button';
import { directionIcon, mapIcon } from '@/components/icons/common';
import avatarImage1 from '../../../../images/avatar/1.png';
import './ConsultantCard.scss';

const ConsultantCard = () => {
    return (
        <div className="consultant-card">
            <div className="main">
                <img src={avatarImage1} alt="" />
                <div className="personal-info">
                    <h3>Dr. Alison West</h3>
                    <p>Eye Specialist, Eye Surgeon</p>
                    <span>MBBS, MRC, FRCS</span>
                </div>
            </div>
            <div className="address-wrapper">
                {mapIcon}
                <span>468 Ezequiel Oval, Danykabury</span>
            </div>
            <div className="link-wrapper">
                <div className="direction-wrapper">
                    {directionIcon}
                    <Link href="/">Get Directions</Link>
                </div>
                <Button title="Connect&nbsp;&nbsp;&nbsp;" arrow type="primary" />
            </div>
        </div>
    );
};

export default ConsultantCard;
