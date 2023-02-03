import { useState } from 'react';

import Image from '../assets/flower.jpg';

export const Book = () => {
  const priceList = [
    {
      service: 'Haircut',
      price: 50,
    },
    {
      service: 'Treatment',
      price: 50,
    },
  ];
  // Checkbox
  const [checked, setChecked] = useState(
    new Array(priceList.length).fill(false)
  );
  // Total
  const [total, setTotal] = useState(0);

  // Checkbox function
  const toggle = () => {
    setChecked(!checked);
  };

  // setIsChecked()

  // Total function
  // const totalCal = () => {};

  // setTotal()
  // setTotal(totalCal);

  return (
    <div>
      <p className='title-st'>Booking</p>
      <p className='text-center mb-20'>
        Book your appointment with CAIT SALON.
        <br />
        We will get back to you shortly.
      </p>
      <div className='-mx-0 p-10 md:flex md:mx-36'>
        <div className='flex-1'>
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

              {/* <div className='w-80'>
                <input
                  type='checkbox'
                  checked={checked}
                  onChange={toggle}
                  className='accent-gray-500'
                />
                <label htmlFor='input' className='p-2 text-gray-500'>
                  Haircut {checked ? 'checked' : 'un-checked'}.
                </label>
              </div>

              <div>
                <input type='checkbox' className='accent-gray-500' />
                <label htmlFor='treatment' className='p-2 text-gray-500'>
                  Treatment
                </label>
              </div>

              <div>
                <input type='checkbox' className='accent-gray-500' />
                <label htmlFor='color' className='p-2 text-gray-500'>
                  Color
                </label>
              </div>

              <div>
                <input type='checkbox' className='accent-gray-500' />
                <label htmlFor='haircut' className='p-2 text-gray-500'>
                  Massage
                </label>
              </div> */}
            </fieldset>
          </form>
          <button
            className='table mx-auto border border-gray-300 rounded mt-4 px-6 py-1 hover:bg-gray-100'
            type='submit'
          >
            Send
          </button>
        </div>

        <div className='flex-1'>
          <img
            src={Image}
            alt='Image'
            width='300'
            height='440'
            className='hidden md:block float-right'
          />
        </div>
      </div>
    </div>
  );
};
