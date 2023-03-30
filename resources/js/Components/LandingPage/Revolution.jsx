import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
export default function Revolution(props) {
    return (
        <div className="2xl:pt-36 xl:pt-24 lg:pt-18 2xl:pb-24 xl:pb-18 lg:pb-12 pt-6 sm:py-0 sm:pb-0">
            <div className="bg-primary 2xl:px-80 xl:px-60 lg:px-30 px-15 relative py-10 sm:pb-0">
                <p className="text-white 2xl:text-4xl xl:text-3xl lg:text-2xl sm: text-base	 text-lg font-medium text-center">Revolutionizing the Eye Testing Technology!</p>
                <p className="text-white 2xl:text-xl text-lg sm: text-xs font-medium text-center mt-5">We at encore believe in making African people quality of life better by giving them better and sustainable vision!</p>
                <div className="bg-white h-96 mt-10 flex items-center">
                    <ApplicationLogo className="mx-auto ms-auto"/>
                </div>
            </div>
        </div>
    )
}