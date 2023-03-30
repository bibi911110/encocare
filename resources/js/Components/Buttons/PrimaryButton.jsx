import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './style.css'
export default function PrimaryButton({ className = '', disabled, showArrow = true , children, ...props }) {
    return (
        <button
            {...props}
            className={
                ` primary-btn inline-block bg-primary px-6 pt-2.5 pb-2 text-xs font-medium leading-normal text-white flex items-center
                shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-500 
                hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                focus:bg-primary-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children} 
            {
                showArrow && (<ArrowForwardIcon clasName="ml-[12px]"/>)
            }
        </button>
    );
}
