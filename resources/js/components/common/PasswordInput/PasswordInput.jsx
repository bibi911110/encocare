import { useState } from 'react';
import { passwordShowIcon } from '@/components/icons/common';
import './PasswordInput.scss';

const PasswordInput = ({ placeHolder, className, ...props }) => {
    const [isVisible, setVisible] = useState(false);

    const passwordClassName = className ? `password-input ${className}` : 'password-input';

    const toggleVisible = () => {
        setVisible(!isVisible);
    };

    return (
        <div className={passwordClassName} {...props}>
            <input placeholder={placeHolder} type={isVisible ? 'text' : 'password'} />
            <span className="toggle-password" onClick={toggleVisible}>
                {passwordShowIcon}
            </span>
        </div>
    );
};

export default PasswordInput;
