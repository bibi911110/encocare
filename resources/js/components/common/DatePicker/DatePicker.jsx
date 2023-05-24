import { datePickerIcon } from '@/components/icons/common';
import './DatePicker.scss';

const DatePicker = ({ placeHolder, className, ...props }) => {
    const inputClassName = className ? `date-picker ${className}` : 'date-picker';

    return (
        <div className={inputClassName}>
            <input placeholder={placeHolder} {...props} />
            <span>{datePickerIcon}</span>
        </div>
    );
};

export default DatePicker;
