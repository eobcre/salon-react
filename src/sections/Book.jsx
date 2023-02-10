import { useState } from 'react';
import EmailJS from '@emailjs/browser'; // EmailJS
import Image from '../assets/flower.jpg';

const getTotalPrice = (price) => `$${price.toFixed(2)} +`;

export const Book = () => {
  // EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    EmailJS.sendForm(
      'service_lkcx1hs',
      'template_4e36qqj',
      e.target,
      '8amCye5YPJ3JRgePo'
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  // Checkbox
  const list = [
    {
      name: 'Haircut',
      price: 50,
    },
    {
      name: 'Color',
      price: 60,
    },
    {
      name: 'Design Color',
      price: 80,
    },

    {
      name: 'Treatment',
      price: 50,
    },
    {
      name: 'Head Spa',
      price: 50,
    },
    {
      name: 'Hair Set',
      price: 50,
    },
  ];

  // useState
  const [checked, setChecked] = useState(new Array(list.length).fill(false));
  const [total, setTotal] = useState(0);

  // Checkbox
  const toggle = (place) => {
    const updatedChecked = checked.map((item, index) => {
      if (index === place) {
        return !item;
      } else {
        return item;
      }
    });

    setChecked(updatedChecked);

    // Total
    const initialValue = 0;
    const totalPrice = updatedChecked.reduce((acc, currentTorF, index) => {
      if (currentTorF === true) {
        return acc + list[index].price;
      }
      return acc;
    }, initialValue);

    setTotal(totalPrice);
  };

  // JSX
  return (
    <div>
      <p className='title-st'>Booking</p>
      <p className='text-center mb-20'>
        Book your appointment with CAIT SALON.
        <br />
        We will get back to you shortly.
      </p>
      <div className='mx-2 md:flex md:mx-36'>
        <div className='flex-1'>
          <form onSubmit={sendEmail} required>
            {/* Name */}
            <fieldset className='border border-solid rounded border-gray-300 p-3'>
              <legend className='p-1'>Name</legend>
              <input
                className='w-80 outline-none text-gray-500'
                type='text'
                name='name'
                autoComplete='off'
                required
              />
            </fieldset>

            {/* Number */}
            <fieldset className='border border-solid rounded border-gray-300 p-3'>
              <legend className='p-1'>Number</legend>
              <input
                className='w-80 outline-none text-gray-500'
                type='text'
                name='number'
                autoComplete='off'
                required
              />
            </fieldset>

            {/* Email */}
            <fieldset className='border border-solid rounded border-gray-300 p-3'>
              <legend className='p-1'>Email</legend>
              <input
                className='w-80 outline-none text-gray-500'
                type='mail'
                name='email'
                autoComplete='off'
                required
              />
            </fieldset>

            {/* Location */}
            <fieldset className='border border-solid rounded border-gray-300 p-3'>
              <legend className='p-1'>Salon Location</legend>
              <select
                className='w-80 outline-none text-gray-500'
                name='location'
                required
              >
                <option>Select Location</option>
                <option name='location'>Rochester</option>
                <option name='location'>Beaver</option>
                <option name='location'>Pittsburgh</option>
              </select>
            </fieldset>

            {/* Date */}
            <fieldset className='border border-solid rounded border-gray-300 p-3'>
              <legend className='p-1'>Date</legend>
              <div className='w-80 text-gray-500'>
                <input type='date' name='date' required />
              </div>
            </fieldset>

            {/* Services */}
            <fieldset className='border border-solid rounded border-gray-300 p-3'>
              <legend className='p-1'>Services</legend>

              <ul>
                {list.map(({ name, price }, index) => {
                  return (
                    <li key={index} className='flex justify-between'>
                      <div className='p-1'>
                        <input
                          type='checkbox'
                          checked={checked[index]}
                          onChange={() => toggle(index)}
                          id={`linked-${index}`}
                          name='services'
                          value={name}
                        />
                        <label htmlFor={`linked-${index}`} className='p-1'>
                          {name}
                        </label>
                      </div>
                      <div>{getTotalPrice(price)}</div>
                    </li>
                  );
                })}
                <li>
                  <div className='flex justify-between'>
                    <p className='p-6'>Service Price:</p>
                    <div className='p-6'>{getTotalPrice(total)}</div>
                  </div>
                </li>
              </ul>
            </fieldset>
            {/* Total */}
            {/* Send button */}
            <button
              className='table mx-auto border border-gray-300 rounded mt-4 px-6 py-1 hover:bg-gray-100'
              type='submit'
            >
              Send
            </button>
          </form>
        </div>

        {/* Image */}
        <div className='flex-1'>
          <img
            src={Image}
            alt='Image'
            width='300'
            height='440'
            className='hidden md:block float-right mt-15px'
          />
        </div>
      </div>
    </div>
  );
};
