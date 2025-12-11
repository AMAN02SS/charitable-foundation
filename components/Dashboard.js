"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { updateProfile, fetchuser } from '@/actions/useractions';
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';


const Dashboard = () => {
  const { data: session, update } = useSession()
  const router = useRouter()
  const [form, setform] = useState({})

  useEffect(() => {
    
    if (!session) {
      router.push('/login')
    }
    else{
      getData()
    }
    
  }, [router,session])

  const getData = async () =>{
    let u = await fetchuser(session.user.name)
    setform(u)
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    let a = await updateProfile(e, session.user.name)
    Swal.fire({
      title: "Success!",
      text: "Profile updated successfully",
      icon: "success",
      confirmButtonText: "OK"
    });

  }

  return (
    <>

      <div className='bg-[#256199] mx-100 my-10 p-10 flex justify-center items-center flex-col rounded-2xl'>
        <h1 className='text-4xl font-medium py-4 text-white'>Welcome to Dashboard</h1>
        <form action={handleSubmit} className='w-100'>
          <div className=' '>
            <label htmlFor="name" className='block mb-2 text-sm font-medium text-blue-50 py-1'>Name:</label>
            <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name='name' id='name' className='rounded-xl block w-full p-2 border border-gray-300 round-lg  bg-gray-50 focus:ring-blue-500 ' />
          </div>
          <div className=' '>
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-white py-1'>Email:</label>
            <input value={form.email ? form.email : ""} onChange={handleChange} type="text" name='email' id='email' className='rounded-xl block w-full p-2 border border-gray-300 round-lg  bg-gray-50 focus:ring-blue-500 ' />
          </div>
          <div className=' '>
            <label htmlFor="username" className='block mb-2 text-sm font-medium text-white py-1'>Username:</label>
            <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name='username' id='username' className='rounded-xl block w-full p-2 border border-gray-300 round-lg  bg-gray-50 focus:ring-blue-500 ' />
          </div>
          <div className=' '>
            <label htmlFor="profilePic" className='block mb-2 text-sm font-medium text-white py-1'>Profile Picture:</label>
            <input value={form.profilePic ? form.profilePic : ""} onChange={handleChange} type="text" name='profilePic' id='profilePic' className='rounded-xl block w-full p-2 border border-gray-300 round-lg  bg-gray-50 focus:ring-blue-500 ' />
          </div>
          <div className=' '>
            <label htmlFor="coverPic" className='block mb-2 text-sm font-medium text-white py-1'>Cover Picture:</label>
            <input value={form.coverPic ? form.coverPic : ""} onChange={handleChange} type="text" name='coverPic' id='coverPic' className='rounded-xl block w-full p-2 border border-gray-300 round-lg  bg-gray-50 focus:ring-blue-500 ' />
          </div>
          <div className=' '>
            <label htmlFor="razorpayid" className='block mb-2 text-sm font-medium text-white py-1'>Razorpay ID:</label>
            <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="text" name='razorpayid' id='razorpayid' className='rounded-xl block w-full p-2 border border-gray-300 round-lg  bg-gray-50 focus:ring-blue-500 ' />
          </div>
          <div className=' '>
            <label htmlFor="razorpaysecret" className='block mb-2 text-sm font-medium text-white py-1'>Razorpay Secret:</label>
            <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="text" name='razorpaysecret' id='razorpaysecret' className='rounded-xl block w-full p-2 border border-gray-300 round-lg  bg-gray-50 focus:ring-blue-500 ' />
          </div>
          <div className='w-full text-sm font-medium py-4'>
            <button type="submit" className="w-full rounded-full text-white bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Save</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Dashboard