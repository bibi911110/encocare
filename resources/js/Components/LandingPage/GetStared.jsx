import './style.css'
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import image from '../../../images/carousel.png'
import PrimaryButton from '@/Components/Buttons/PrimaryButton';
export default function GetStared(props) {
    var items = [
        image,
        image,
        image
    ]
    return (
        <div className="bg-black get-stared flex flex-row flex-wrap items-center ">
            <div className="left-panel 2xl:px-36 2xl:py-36 xl:px-24 xl:py-24 lg:px-18 lg:py-18 px-6 py-6
                bg-black md:w-1/2 sm:w-full">
                <p className="2xl:text-4xl xl:text-3xl lg:text-2xl sm: text-2xl text-lg font-medium"><span className="text-white ">Revolutionizing </span><span className="text-primary">AI Powered</span></p>
                <p className="2xl:text-4xl xl:text-3xl lg:text-2xl sm: text-2xl text-lg font-medium"><span className="text-primary">Eye Testing</span> <span className="text-white">Technology!</span></p>
                <p className="text-white mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                <div className="mt-8">
                <PrimaryButton>
                    Get Started
                </PrimaryButton>
                <a className="text-white mx-5">Learn more</a>
                </div>
                
            </div>
            <div className="right-panel md:w-1/2 sm:w-full" >
            <Carousel
                className="landing-carousel"
                indicatorContainerProps={{
                    style: {
                        marginTop: '-80px',    // 1
                        zIndex: 100
                    }
                }}
            >
                {
                    items.map( (item, i) => <img key={i} src={item} /> )
                }
            </Carousel>
            </div>
        </div>
    )
}