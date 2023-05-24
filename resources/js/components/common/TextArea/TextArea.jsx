import './TextArea.scss';

const TextArea = ({ placeHolder, className, rows }) => {
    const inputClassName = className ? `text-area ${className}` : 'text-area';

    return <textarea placeholder={placeHolder} className={inputClassName} rows={rows} />;
};

export default TextArea;
