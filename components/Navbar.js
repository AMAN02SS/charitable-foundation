"use client"
import { useSession, signOut } from 'next-auth/react';
import React, { useState } from 'react'
import Link from 'next/link'


const Navbar = () => {
    const { data: session } = useSession()
    const [showDropdown, setshowDropdown] = useState(false)

    // 
    return (
        <div className='sticky top-0 z-10 bg-white/30 backdrop-blur-md shadow-sm' >
            <div className='flex flex-col justify-center items-center font-bold text-5xl z-1 h-[110] p-3 left-[45%] bg-transparent '>
                {!session && <><img src="/logo.png" width={100} height={100} alt="" />
                    <div className='text-center text-sm'><h5>Helping Hands Foundation</h5></div></>}
            </div>
            <nav className='absolute top-0 flex justify-between items-center h-30 bg-transparent w-full '>
                <div className='mx-15'>
                    <ul className='flex justify-center items-center gap-5 font-medium '>
                        <li className='px-3 py-4 w-full  rounded-full text-black hover:bg-black hover:rounded-full hover:px-3 hover:py-4 hover:w-full hover:text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer'>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className='px-3 py-4 w-full rounded-full  whitespace-nowrap text-black hover:bg-black hover:rounded-[50] hover:px-3 hover:py-4 hover:w-full hover:text-white transition duration-300 ease-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer'> <Link href={'#about'}>About Us</Link></li>
                        <li className='px-3 py-4 w-full rounded-full text-black hover:bg-black hover:rounded-[50] hover:px-3 hover:py-4 hover:w-full hover:text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer'><Link href={'#programs'}>Programmes</Link></li>
                        <li className='px-3 py-4 w-full rounded-full text-black hover:bg-black hover:rounded-[50] hover:px-3 hover:py-4 hover:w-full hover:text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer'>Reports</li>
                        <li className='border rounded-[50] px-6 py-4 w-full mx-5 hover:bg-black hover:rounded-[50] hover:px-6 hover:py-4 hover:w-full hover:text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div className='mx-15'>
                    <ul className='flex justify-center items-center gap-10 font-medium'>
                        {session && <Link href={`/${session.user.name}#donate`}><li className='border rounded-[50] px-6 py-4 w-full whitespace-nowrap bg-black text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer'>DONATE NOW</li></Link>}
                        {!session && <li className='border rounded-[50] px-6 py-4 w-full whitespace-nowrap hover:bg-black hover:rounded-[50] hover:px-6 hover:py-4 hover:w-full hover:text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer'>🔍 &nbsp; Find a cherity</li>}
                        {session &&
                            <> <button onClick={() => { setshowDropdown(!showDropdown) }} onBlur={() => {
                                setTimeout(() => {
                                    setshowDropdown(false)
                                }, 1000);
                            }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="flex items-center border rounded-[50] px-6 py-4 w-full whitespace-nowrap bg-black text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer" type="button">Welcome {session.user.email}
                                <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg></button>
                                <div id="dropdown" className={`z-10 ${showDropdown ? "" : 'hidden'} absolute top-27 right-50  bg-white flex justify-center border border-default-medium rounded-2xl shadow-lg w-40`}>
                                    <ul className="p-2 text-sm text-body font-medium w-full flex justify-center items-center flex-col" aria-labelledby="dropdownDefaultButton">
                                        <Link href="/dashboard"><li className="inline-flex items-center w-full text-2xl p-2 hover:bg-[#d4d3c1]  hover:text-heading rounded" title='Dashboard'>Dashboard</li></Link>
                                        <Link href={`/${session.user.name}`}><li className="inline-flex items-center w-full p-2 text-2xl hover:bg-[#d4d3c1] hover:text-heading rounded" title='Payments'>Payments</li></Link>
                                        <Link href="#" ><li className="inline-flex items-center w-full p-2 text-2xl hover:bg-[#d4d3c1] hover:text-heading rounded" title='Earning'>Earnings</li></Link>
                                        <Link onClick={() => { signOut() }} href={'#'} ><li className="inline-flex items-center w-full p-2 text-2xl hover:bg-[#d4d3c1] hover:text-heading rounded" title='Sign-out'>Sign out </li></Link>
                                    </ul>
                                </div>
                            </>
                        }
                        {/* {session && <li className='border rounded-[50] px-6 py-4 w-full hover:bg-black hover:rounded-[50] hover:px-6 hover:py-4 hover:w-full hover:text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer'><Link href={"/dashboard"}>Dashboard</Link></li>} */}
                        {session && <Link onClick={() => { signOut() }} className='border rounded-[50] px-6 py-4 w-full hover:bg-black hover:rounded-[50] hover:px-6 hover:py-4 hover:w-full hover:text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer' href={'#'}><li >Log Out</li></Link>}
                        {!session && <Link href={"/login"} className='border rounded-[50] px-6 py-4 w-full hover:bg-black hover:rounded-[50] hover:px-6 hover:py-4 hover:w-full hover:text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer'><li >Login</li></Link>}
                    </ul>
                </div>
            </nav >
        </div >

    )
}

export default Navbar