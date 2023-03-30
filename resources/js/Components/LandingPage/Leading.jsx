import React from 'react';
import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import Eye1 from '../../../images/eye1.svg'
import Eye2 from '../../../images/eye2.svg'
import Eye3 from '../../../images/eye3.svg'
export default function Leading(props) {
    return (
        <div className="leading w-11/12 mx-auto my-20">
            <p className="section-title">The leading causes of blindness!</p>
            <p className="section-description">Encocare authorized specialists can guide you throughout the course of the treatment. Get involved!</p>
            <div className="w-full mx-auto my-20 flex flex-wrap flex-row justify-around">
                <div className="card w-[32%] sm:w-full bg-gray-500">
                    <img src={Eye1}/>
                    <p className="title text-black-500">Contract</p>
                    <p className="detail text-black-500">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod</p>
                    <PrimaryButton className="btn-learn-more">
                        Learn More
                    </PrimaryButton>
                </div>
                <div className="card w-[32%] sm:w-full bg-black-500">
                    <img src={Eye2}/>
                    <p className="title text-white">Glaucoma</p>
                    <p className="detail text-white">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod</p>
                    <PrimaryButton className="btn-learn-more">
                        Learn More
                    </PrimaryButton>
                </div>
                <div className="card w-[32%] sm:w-full bg-primary">
                    <img src={Eye3}/>
                    <p className="title text-white">Macular Degenration</p>
                    <p className="detail text-white">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod</p>
                    <PrimaryButton className="btn-learn-more bg-gray-500">
                        Learn More
                    </PrimaryButton>
                </div>
            </div>
        </div>
    )
}