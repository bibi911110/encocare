import './InputError.scss';

const InputError = ({ message, className = '', ...props }) => {
    return message ? (
        <p {...props} className="input-error">
            {message}
        </p>
    ) : null;
};

export default InputError;
