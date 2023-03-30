import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import GetStared from '@/Components/LandingPage/GetStared'
import Revolution from '@/Components/LandingPage/Revolution';
import Experience from '@/Components/LandingPage/Experience';
import TestVision from '@/Components/LandingPage/TestVision';
import Leading from '@/Components/LandingPage/Leading';
import Consult from '@/Components/LandingPage/Consult'
import HowItWorks from '@/Components/LandingPage/HowItWorks'
export default function Index({ auth }) {
    return (
        <MainLayout
            // user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Index" />
            <div className="landingpage-container bg-white">
                <GetStared/>
                <Revolution/>
                <Experience/>
                <TestVision/>
                <Leading/>
                <Consult/>
                <HowItWorks/>
            </div>
        </MainLayout>
    );
}
