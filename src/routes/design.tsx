
import { CopyToClipboard } from '#/components/CopyToClipbaord';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';



import { FaBuildingCircleCheck } from "react-icons/fa6";

import { LuX } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Route = createFileRoute('/design')({
  component: RouteComponent,
})


function RouteComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className='min-w-0'>


      <div className='flex flex-col gap-y-4 p-4'>
        <h1> This is an H1 text Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, minima. </h1>
        <h2> This is an H2 text </h2>
        <h3> This is an H3 text </h3>
        <h4> This is an H4 text </h4>
        <h5> This is an H5 text </h5>
        <h6> This is an H6 text </h6>
        <p> This is a paragraph text </p>
        <p className='italic'> This is a italic paragraph text </p>


        <section className='bg-(--color-secondary) pb-8'>
          <div className='page-wrap flex flex-col items-center'>
            <div className='flex items-center justify-center w-25 h-25 translate-y-1/2 rounded-full bg-white text-6xl'>
              <FaBuildingCircleCheck className='pl-1  text-orange-500' />
            </div>

            <div className='flex flex-col gap-y-4 w-100 h-85 bg-white rounded-lg pt-16 pb-4 px-4'>
              <h3>Established Brand</h3>
              <p className="text-gray-900">Partner with a trusted and growing homegrown brand that has built a loyal customer base and a strong reputation for delivering Sulit Sarap across Mindanao. Our growing presence continues to strengthen customer familiarity and trust in the AFC name.</p>
            </div>
          </div>
        </section>

        <button
          onClick={() => setMenuOpen(true)}
          className='border border-gray-300 rounded-md py-2 px-4'>
          Open contact
        </button>

        <div
          aria-hidden={!menuOpen}
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
          <div
            onClick={() => setMenuOpen(false)}
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} />
          <div className={`relative z-10 w-full max-w-2xl rounded-xl bg-white border border-gray-300 p-6 shadow-xl transform transition-all duration-300 ease-out
      ${menuOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'}`}>
            <LuX
              onClick={() => setMenuOpen(false)}
              className='ml-auto text-2xl hover:cursor-pointer hover:text-(--color-secondary)'
            />

            <div className='text-center'>
              <h3 className=''>CONTACT US</h3>
              <h5 className=' text-gray-700 font-medium'>
                For any concerns, you may reach us through the channels below.
              </h5>
            </div>

            <div className='pt-8'>
              <h4 className='pb-2'>Email:</h4>
              <div className='grid grid-cols-[1fr_8fr] items-center md:grid-cols-[30px_1fr] md:pl-4'>
                <MdEmail className='text-(--color-primary) text-2xl' />
                <div className='flex flex-row gap-x-2'>
                  <p>afcfranchisingcorp@gmail.com</p>
                  <CopyToClipboard text='afcfranchisingcorp@gmail.com' />
                </div>
              </div>
            </div>

            <div className='pt-8'>
              <h4 className='pb-2'>Address:</h4>
              <div className='grid grid-cols-[1fr_8fr] items-baseline md:grid-cols-[30px_1fr] md:pl-4'>
                <FaLocationDot className='text-(--color-primary) text-xl' />
                <a
                  href='https://maps.app.goo.gl/6uATqqwddGTyx7zH9'
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-base hover:text-(--color-secondary)'>
                  Quezon Avenue, Midsayap, Cotabato, Region 12
                  <FaExternalLinkAlt className="inline-block align-middle ml-2 mb-1" />
                </a>
              </div>
            </div>

            <div className='pt-8'>
              <h4 className='pb-2'>Social Media:</h4>
              <div className='grid grid-cols-[1fr_8fr] items-baseline md:grid-cols-[30px_1fr] md:pl-4'>
                <FaFacebook className='text-(--color-primary) text-xl' />
                <a
                  href='https://www.facebook.com/arthursfriedchicken'
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-base hover:text-(--color-secondary)'>
                  f/arthursfriedchicken
                  <FaExternalLinkAlt className="inline-block align-middle ml-2 mb-1" />
                </a>
              </div>
            </div>
          </div>
        </div>



      </div>

    </main>
  )
}
