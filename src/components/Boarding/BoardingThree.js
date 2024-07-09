// BoardingThree.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GrLinkNext } from "react-icons/gr";

function BoardingThree() {
    const history = useNavigate();

    const handleNextClick = () => {
        history('/login');
    };
    return (
        <section className='w-full h-[100vh] mx-auto boardingThree'>
            <div className='w-[311px] h-[400px] rounded-[48px] bg-[#FE8C00] mx-auto mt-40'>
                <h1 className='w-[252px] h-[120px] text-[32px] font-bold mx-auto text-center leading-10 text-white pt-6'>
                    We serve incomparable delicacies
                </h1>
                <p className='w-[252px] h-[60px] mt-8 font-normal mx-auto text-center text-white'>
                    All the best restaurants with their top menu waiting for you, they can't wait for your order!!
                </p>

                <div className='w-[94px] h-[94px] border-2 rounded-full mx-auto mt-16 cursor-pointer'
                    onClick={handleNextClick}
                >
                    <div className='w-[60px] h-[60px] rounded-full bg-white  flex items-center text-center m-4'>
                        <span className='text-[#FE8C00] pl-4 text-2xl'> <GrLinkNext /></span>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default BoardingThree;
