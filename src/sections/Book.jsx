import { useState } from 'react';

import Image from '../assets/flower.jpg';

export const Book = () => {
  // Checkbox
  const [isChecked, setIsChecked] = useState(false);
  // Total
  const [total, setTotal] = useState(0);

  // Checkbox function
  const handleClick = () => {
    setPrice(!isChecked);
  };

  // setIsChecked()

  // Total function

  // setTotal()

  return (
    <div>
      <p className='title-st'>Booking</p>
      <p className='text-center mb-20'>
        Book your appointment with CAIT SALON. We will get back to you shortly.
      </p>
      <div className='flex justify-center gap-40'>
        <div>
          <form>
            {/* Name */}
            <fieldset className='border border-solid rounded border-gray-300 p-3'>
              <legend className='p-1'>Name</legend>
              <input className='w-80 outline-none text-gray-500' type='text' />
            </fieldset>

            {/* Number */}
            <fieldset className='border border-solid rounded border-gray-300 p-3'>
              <legend className='p-1'>Number</legend>
              <input className='w-80 outline-none text-gray-500' type='text' />
            </fieldset>

            {/* Email */}
            <fieldset className='border border-solid rounded border-gray-300 p-3'>
              <legend className='p-1'>Email</legend>
              <input className='w-80 outline-none text-gray-500' type='mail' />
            </fieldset>

            {/* Location */}
            <fieldset className='border border-solid rounded border-gray-300 p-3'>
              <legend className='p-1'>Salon Location</legend>
              <select
                className='w-80 outline-none text-gray-500'
                name='location'
              >
                <option value=''>- - - Select Location - - -</option>
                <option value=''>Rochester</option>
                <option value=''>Beaver</option>
                <option value=''>Pittsburgh</option>
              </select>
            </fieldset>

            {/* Date */}
            <fieldset className='border border-solid rounded border-gray-300 p-3'>
              <legend className='p-1'>Date</legend>
              <div className='w-80 text-gray-500'>
                <input type='date' />
              </div>
            </fieldset>

            {/* Stylist */}
            <fieldset className='border border-solid rounded border-gray-300 p-3'>
              <legend className='p-1'>Stylist</legend>
              <select
                className='w-80 outline-none text-gray-500'
                name='stylits'
              >
                <option value=''>- - - Select Stylist - - -</option>
                <option value='new'>New Talent</option>
                <option value='stylist'>Stylist</option>
                <option value='lead'>Lead Stylist</option>
              </select>
            </fieldset>

            {/* Services */}
            <fieldset className='border border-solid rounded border-gray-300 p-3'>
              <legend className='p-1'>Services</legend>
              {/* Haircut - Checkbox */}
              <div className='w-80'>
                <input type='checkbox' className='accent-gray-500' />
                <label htmlFor='' className='p-2 text-gray-500'>
                  Haircut
                </label>
              </div>

              {/* Treatment - Checkbox */}
              <div>
                <input type='checkbox' className='accent-gray-500' />
                <label htmlFor='treatment' className='p-2 text-gray-500'>
                  Treatment
                </label>
              </div>
              {/* Color - Checkbox */}
              <div>
                <input type='checkbox' className='accent-gray-500' />
                <label htmlFor='color' className='p-2 text-gray-500'>
                  Color
                </label>
              </div>
              {/* Massage - Checkbox */}
              <div>
                <input type='checkbox' className='accent-gray-500' />
                <label htmlFor='haircut' className='p-2 text-gray-500'>
                  Massage
                </label>
              </div>
            </fieldset>
          </form>
          <button
            className='border border-gray-300 rounded mt-4 px-6 py-1 hover:bg-gray-100'
            type='submit'
          >
            Send
          </button>
        </div>

        <div>
          <img
            src={Image}
            alt='Image'
            width='300'
            height='440'
            className='hidden md:block'
          />
        </div>
      </div>
    </div>
  );
};
