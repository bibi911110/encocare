import { rightArrowIcon2 } from '@/components/icons/common';
import './Button.scss';

const Button = ({ title, type, icon, arrow, className, submit, onClick, ...props }) => {
    let buttonContent;
    let buttonClassName = `button button-${type}`;

    if (className) {
        buttonClassName += ` ${className}`;
    }

    if (icon) {
        buttonContent = (
            <>
                <span className="button-icon">{icon}</span>
                <span className="button-title">{title}</span>
            </>
        );
    } else if (arrow) {
        buttonContent = (
            <>
                <span className="button-title">{title}</span>
                <span className="button-arrow-icon">{rightArrowIcon2}</span>
            </>
        );
    } else {
        buttonContent = <span className="button-title">{title}</span>;
    }

    return (
        <button className={buttonClassName} {...props} type={submit ? 'submit' : 'button'} onClick={onClick}>
            <div className="button-content">{buttonContent}</div>
        </button>
    );
};

export default Button;
