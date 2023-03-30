import React from 'react';
import PrimaryButton from '@/Components/Buttons/PrimaryButton'

export default function HowItWorks(props) {
    return (
        <div className="how-it-works w-10/12 mx-auto my-10">
            <p className="section-title">How it works</p>
            <p className="section-description">Encocare is working on making eye testing more accessible and cost effective than ever before. This is how our AI powered system strives to achieve perfection!</p>
            <div className="justify-center flex items-center">
                <PrimaryButton className="btn-become-partner">
                    Become a partner
                </PrimaryButton>
                <span className="partner">
                    Register your clinic with us
                </span>
            </div>
        </div>
    )
}