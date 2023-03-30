import React from 'react';
import TestImg from '../../../images/test.png'
import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
export default function TestVision(props) {
    return (
        <div className="testvision w-10/12 mx-auto my-20 flex flex-wrap ">
            <div className="w-1/2 bg-gray-500 h-full sm:w-full py-20 px-10">
                <p className="uppercase font-semibold">Encocare AI powered</p>
                <p className="text-black 2xl:text-4xl xl:text-3xl text-2xl text-left mt-3 sm:text-center sm:font-semibold sm:mt-0">Test your vision! <span className="text-primary">It's free and easy!</span></p>
                <p className="mt-5 font-medium">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] mt-[30px]">
                    <input
                        className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                        type="checkbox"
                        value=""
                        id="checkboxDefault" />
                    <label
                        className="inline-block pl-[0] hover:cursor-pointer ml-[16px] text-[16px]"
                        htmlFor="checkboxDefault">
                        I agree to the terms and conditions.
                    </label>
                </div>
                <PrimaryButton className="text-[18px] font-medium mt-[26px] px-[42px] sm:mx-auto sm:block">
                    Start the Test
                </PrimaryButton>
                <div className="mt-[22px] flex items-center">
                    <ContentCopyIcon color="primary"/><a className="share_link ml-[4px]"> Share link with your oved ones</a>
                </div>
            </div>
            <div className="w-1/2 sm:w-full">
                <img className="w-full h-full"  src={TestImg}/>
            </div>
        </div>
    )
}