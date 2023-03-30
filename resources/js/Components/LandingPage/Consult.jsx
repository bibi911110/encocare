import React from 'react';
import AvatarImg1 from '../../../images/avatar/1.png'
import AvatarImg2 from '../../../images/avatar/2.png'
import AvatarImg3 from '../../../images/avatar/3.png'
import ConsultCard from './ConsultCard';
const consults = [
    {
        image: AvatarImg1,
        fullName: 'Dr. Alison West',
        specialist: 'Eye Specialist, Eye Surgeon',
        role: 'MBBS, MRC, FRCS',
        location: '468 Ezequiel Oval, Danykabury 72017, Guam'    
    },
    {
        image: AvatarImg2,
        fullName: 'Dr. Saul Parisian',
        specialist: 'Eye Specialist, Eye Surgeon',
        role: 'Eye Specialist, Eye Surgeon',
        location: '356 Pollich Ville, West Cheyenne 43478-0171, Venezuela'
    },
    {
        image: AvatarImg3,
        fullName: 'Dr. Amy White',
        specialist: 'Eye Specialist, Eye Surgeon',
        role: 'Eye Specialist, Eye Surgeon',
        location: '5509 Green Rapids, Jerdeton 75864, Mozambique'    
    }
    
]
export default function Consult(props) {
    return (
        <div className="consult w-10/12 mx-auto my-10">
            <p className="section-title">Consult with the best we got!</p>
            <p className="section-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
            <div className="flex flex-row justify-wrap flex-wrap justify-center">
                {
                    consults.map((consult, index) => (
                        <ConsultCard
                            key={index}
                            data={consult}
                        />
                    ))
                }
            </div>
            <div className="load-more mt-[48px] text-center">
                <span >Browse More</span>
            </div>
        </div>
    )
}