import React from 'react'
import Image from 'next/image'
import {ChevronRight} from 'lucide-react';
import {MapPin} from 'lucide-react';
import {Phone} from 'lucide-react';
import {Clock8} from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <div
  className="flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover w-full h-[304]"
  style={{ backgroundImage: "url('/contact-frame.jpg')" }}
>
  <Image src={'/logo-icon.jpg'} alt="Logo" width={77} height={77} />
  <h1 className="text-3xl font-semibold text-[#000]">Contact</h1>
  <div className="flex flex-row">
    <p className="font-bold text-[#000]">Home</p>
    <ChevronRight />
    <p className="text-1xl text-[#000]">Contact</p>
  </div>
</div>

      <div className='flex flex-col text-center mt-12'>
        <h1 className='text-3xl font-bold text-[#000]'>Get In Touch With Us</h1>
        <p className='text-gray-400'>
        For More Information About Our Product & Services. Please Feel Free To Drop Us<br/> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="flex flex-col items-center mt-20">
  {/* Main Container */}
  <div className="flex flex-row w-full max-w-5xl space-x-10 gap-56">
    {/* Left Side: Icons and Information */}
    <div className="flex flex-col ml-10 space-y-5">
      <div className="flex flex-row space-x-3 items-center">
        <MapPin />
        <h1 className="text-2xl text-[#000]">Address</h1>
      </div>
      <p className="text-[#000]">
        236 5th SE Avenue, New<br /> York NY10000, United<br /> States
      </p>

      <div className="flex flex-row space-x-3 items-center">
        <Phone />
        <h1 className="text-2xl text-[#000]">Phone</h1>
      </div>
      <p className="text-[#000]">
        Mobile: +(84) 546-6789<br />
        Hotline: +(84) 456-6789
      </p>

      <div className="flex flex-row space-x-3 items-center">
        <Clock8 />
        <h1 className="text-2xl text-[#000]">Working Time</h1>
      </div>
      <p className="text-[#000]">
        Monday-Friday: 9:00 -<br /> 22:00<br />
        Saturday-Sunday: 9:00 -<br /> 21:00
      </p>
    </div>

    {/* Right Side: Form */}
    <div className="flex flex-col flex-1">
    <form>
      <h2 className="font-bold text-[#000]  p-2">Your name</h2>
      <input
        type="text"
        placeholder="Abc"
        className="rounded border border-gray-300 w-527 h-120 p-3 px-8"
      />

     
        <h2 className="font-bold text-[#000] p-2">Email address</h2>
        <input
          type="text"
          placeholder="Abc@def.com"
          className="rounded border border-gray-300 w-527 h-120 p-3 px-8"
        />

        <h2 className="font-bold text-[#000] p-2">Subject</h2>
        <input
          type="text"
          placeholder="This is an optional"
          className="rounded border border-gray-300 w-527 h-120 p-3 px-8"
        />

        <h2 className="font-bold text-[#000] p-2">Message</h2>
        <textarea
          placeholder="Hi! I'd like to ask about..."
          className="rounded border border-gray-300 w-527 h-150 p-3 px-8 resize-none"
        ></textarea>

        <div className="mt-10">
          <button className="bg-[#B88E27] hover:bg-[#f2bc35] text-[#fff] rounded w-48 p-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
  );
}

export default Contact;