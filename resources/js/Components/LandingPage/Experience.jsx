import React from 'react';
import './style.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Experience(props) {
    return (
        <div className="bg-gray-500 2xl:px-80 xl:px-60 lg:px-30 px-15 relative py-10 text-black sm:px-5">
            <p className="text-black 2xl:text-4xl xl:text-3xl text-2xl text-left sm:text-center sm:font-semibold">Experiencing Vision Problems?</p>
            <p className="text-black 2xl:text-4xl xl:text-3xl text-2xl text-left mt-3 sm:text-center sm:font-semibold sm:mt-0">Take our Test! <span className="text-primary font-semibold	">It's Free and Easy</span></p>
            <p className="text-base mt-4">Encocare aims to cater the increasing eye diseases in the African countries! We are powered by AI (Artificial Intelligence) interface that diagnosis leading causes if visual impairments with 90% accuracy rate.</p>
            <div className="mt-11">
                <div className="flex flex-wrap">
                    <div className="w-1/2 sm:w-full">
                        <div className="experience-card">
                            <p className="title sm:text-center">Contract</p>
                            <p className="detail sm:text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut;</p>
                            <a className="link sm:text-center">Test yourself <ArrowForwardIcon className="ml-[12px]"/></a>
                        </div>
                        <div className="experience-card mt-20 sm:mt-10">
                            <p className="title sm:text-center">Glaucoma </p>
                            <p className="detail sm:text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut;</p>
                            <a className="link sm:text-center">Test yourself <ArrowForwardIcon className="ml-[12px]"/></a>
                        </div>
                    </div>
                    <div className="w-1/2 sm:w-full sm:mt-10">
                        <div className="experience-card">
                            <p className="title sm:text-center">Macular Degeneration</p>
                            <p className="detail sm:text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut;</p>
                            <a className="link sm:text-center">Test yourself <ArrowForwardIcon className="ml-[12px]"/></a>
                        </div>
                        <div className="experience-card mt-20 sm:mt-10">
                            <p className="title sm:text-center">Stargardt's Disease</p>
                            <p className="detail sm:text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut;</p>
                            <a className="link sm:text-center">Test yourself <ArrowForwardIcon className="ml-[12px]"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}