import cardImage from '../../../../images/payments/card.png';
import './CardNumberInput.scss';

const CardNumberInput = ({ placeHolder, className, ...props }) => {
    const inputClassName = className ? `card-number-input ${className}` : 'card-number-input';

    return (
        <div className={inputClassName}>
            <input placeholder={placeHolder} {...props} />
            <img src={cardImage} alt="" />
        </div>
    );
};

export default CardNumberInput;
