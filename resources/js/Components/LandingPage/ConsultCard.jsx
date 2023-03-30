import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DirectionsIcon from '@mui/icons-material/Directions';
export default function ConsultCard({data, ...props}) {
    return (
        <div className="consult-card bg-gray-500 xl:w-[30%] md:w-[45%] sm:w-full">
            <div className="flex">
                <img src={data?.image}/>
                <div className="details">
                    <p className="name">{data?.fullName}</p>
                    <p className="specialist">{data?.specialist}</p>
                    <p className="role">{data?.role}</p>
                </div>
            </div>
            <p className="location"><LocationOnIcon/> <span>{data?.location}</span></p>
            <div class="mt-[30px] flex items-center justify-end">
                <a className="direction"><DirectionsIcon color="text-blue"/>Get Directions</a>
                <PrimaryButton className="btn-connect-consult">
                    Connect
                </PrimaryButton>
            </div>
        </div>
    )
}