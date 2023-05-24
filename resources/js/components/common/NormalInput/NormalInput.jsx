import './NormalInput.scss';

const NormalInput = ({ placeHolder, className, ...props }) => {
    const inputClassName = className ? `normal-input ${className}` : 'normal-input';

    return <input placeholder={placeHolder} className={inputClassName} {...props} />;
};

export default NormalInput;
