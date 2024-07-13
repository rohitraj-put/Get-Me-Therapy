import React from 'react'
import successImage from '../Image/success.png'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";

function PostLogin() {
    const navigate = useNavigate()
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log('User signed out.');
                navigate("/login")
            })
            .catch((error) => {
                console.error('Error signing out: ', error);
            });
    };
    return (
        <section className={`w-full h-[100vh] mx-auto boardingOne`} style={{ border: "1px solid transparent" }}>
            <div className='w-[311px] h-[400px] rounded-[48px] bg-white mx-auto mt-40'>
                <div className='w-[202px] h-[168px] p-[20px] ml-12'>
                    <img
                        className='w-full h-full'
                        src={successImage}
                        alt='login success Image' />
                </div>
                <h2 className='text-[24px] mt-4 font-semibold text-center text-[#101010] leading-8'>Login Successful</h2>
                <button
                    type="submit"
                    className="px-12 py-2 ml-7 mt-8 h-[52px] bg-orange-500 text-white font-semibold rounded-[100px] hover:bg-[#FE8C00] transition-colors"
                >
                    <Link to="/tracking">  Go to Tracking Screen</Link>
                </button>
                <h2
                    onClick={handleLogout}
                    className=' font-medium mt-8 text-center  text-[14px] text-[ #878787] cursor-pointer'
                >Logout</h2>
            </div>
        </section>
    )
}

export default PostLogin
