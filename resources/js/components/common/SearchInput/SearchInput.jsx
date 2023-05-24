import { searchIcon } from '@/components/icons/common';
import './SearchInput.scss';

const SearchInput = ({ placeHolder, className, ...props }) => {
    const searchClassName = className ? `search-input ${className}` : 'search-input';

    return (
        <div className={searchClassName} {...props}>
            <input placeholder={placeHolder} />
            <span className="search-icon">{searchIcon}</span>
        </div>
    );
};

export default SearchInput;
