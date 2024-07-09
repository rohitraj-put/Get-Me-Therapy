// BoardingOne.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrLinkNext } from "react-icons/gr";

function BoardingOne() {
    const history = useNavigate();
    const [exiting, setExiting] = useState(false);

    const handleNextClick = () => {
        setExiting(true);
        setTimeout(() => {
            history('/boarding-two');
        }, 500);
    };

    return (
        <section className={`w-full h-[100vh] mx-auto boardingOne ${exiting ? 'page-exit' : ''}`}>
            <div className='w-[311px] h-[400px] rounded-[48px] bg-[#FE8C00] mx-auto mt-40'>
                <h1 className='w-[252px] h-[120px] text-[32px] font-bold mx-auto text-center leading-10 text-white pt-6'>
                    We serve incomparable delicacies
                </h1>
                <p className='w-[252px] h-[60px] mt-8 font-normal mx-auto text-center text-white'>
                    All the best restaurants with their top menu waiting for you, they can't wait for your order!!
                </p>
                <div className='w-[247px] h-[20px] mx-auto text-white mt-32 text-[14px] font-semibold flex justify-between'>
                    <button className="focus:outline-none">Skip</button>
                    <div className='flex items-center'>
                        <button
                            className="flex items-center focus:outline-none"
                            onClick={handleNextClick}
                        >
                            Next
                            <span className='text-white ml-4'><GrLinkNext /></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BoardingOne;
