import { facebookButtonIcon, googleButtonIcon, twitterButtonIcon } from '@/components/icons/social';
import './SocialButton.scss';

const SocialButton = ({ type, title }) => {
    let buttonClassName = `social-button social-${type}`;
    let buttonContent;

    if (type == 'facebook') {
        buttonContent = (
            <>
                {facebookButtonIcon}
                <span>{title}</span>
            </>
        );
    } else if (type == 'google') {
        buttonContent = (
            <>
                {googleButtonIcon}
                <span>{title}</span>
            </>
        );
    } else if (type == 'twitter') {
        buttonContent = (
            <>
                {twitterButtonIcon}
                <span>{title}</span>
            </>
        );
    }

    return <button className={buttonClassName}>{buttonContent}</button>;
};

export default SocialButton;
