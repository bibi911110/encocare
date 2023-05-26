import './CheckBox.scss';

const CheckBox = ({ className, ...props }) => {
    const checkboxClassName = className ? `checkbox ${className}` : 'checkbox';

    return (
        <label className={checkboxClassName}>
            <input type="checkbox" {...props} />
            <span className="checkmark"></span>
        </label>
    );
};

export default CheckBox;
