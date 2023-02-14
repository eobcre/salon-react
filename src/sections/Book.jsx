import { useState, useMemo } from 'react';
// emailjs
import EmailJS from '@emailjs/browser';
// sweetalert2
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Image from '../assets/flower.jpg';

export const Book = () => {
  const [list, setList] = useState([
    // Service list, set to unchecked
    {
      name: 'Haircut',
      price: 50,
      checked: false,
    },
    {
      name: 'Color',
      price: 60,
      checked: false,
    },
    {
      name: 'Design Color',
      price: 80,
      checked: false,
    },
    {
      name: 'Treatment',
      price: 50,
      checked: false,
    },
    {
      name: 'Head Spa',
      price: 50,
      checked: false,
    },
    {
      name: 'Hair Set',
      price: 50,
      checked: false,
    },
  ]);

  // Calculate
  const total = useMemo(() => {
    const initialValue = 0;
    return list.reduce((acc, cur) => {
      // console.log('acc', acc, 'cur', cur);
      if (cur.checked === true) {
        acc += cur.price;
      }
      return acc;
    }, initialValue);
  });

  // Reset
  const resetForm = () => {
    setList((prevState) =>
      prevState.map((listItem) => ({
        ...listItem,
        checked: false,
      }))
    );
  };

  // Email JS
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
    resetForm();

    // Alert
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: 'Thank you!',
      text: 'We have received your request.',
      icon: 'success',
    });
  };

  const toggle = (toggleIndex) => {
    setList((prevState) =>
      prevState.map((listItem, index) => ({
        ...listItem,
        checked: toggleIndex === index ? !listItem.checked : listItem.checked,
      }))
    );
  };

  // Display total price
  const getTotalPrice = (price) => {
    return `$${price.toFixed(2)} `;
  };

  // JSX
  return (
    <>
      <p className='title-st'>Booking</p>
      <p className='text-center mb-20'>
        Book your appointment with CAIT SALON.
        <br />
        We will get back to you shortly.
      </p>
      <div className='mx-2 md:flex justify-between md:mx-36'>
        <form onSubmit={sendEmail} required>
          {/* Name */}
          <fieldset className='border border-solid rounded border-gray-300 p-3'>
            <legend className='p-1'>Name</legend>
            <input
              className='outline-none text-gray-500'
              type='text'
              name='name'
              size='50'
              autoComplete='off'
              required
            />
          </fieldset>

          {/* Number */}
          <fieldset className='border border-solid rounded border-gray-300 p-3'>
            <legend className='p-1'>Number</legend>
            <input
              className='outline-none text-gray-500'
              type='text'
              name='number'
              size='50'
              pattern='^[0-9-]+$'
              inputMode='numeric'
              autoComplete='off'
              required
            />
          </fieldset>

          {/* Email */}
          <fieldset className='border border-solid rounded border-gray-300 p-3'>
            <legend className='p-1'>Email</legend>
            <input
              className='outline-none text-gray-500'
              type='email'
              name='email'
              size='50'
              autoComplete='off'
              required
            />
          </fieldset>

          {/* Location */}
          <fieldset className='border border-solid rounded border-gray-300 p-3'>
            <legend className='p-1'>Salon Location</legend>
            <select
              className='outline-none text-gray-500'
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
            <div className='text-gray-500'>
              <input type='date' name='date' required />
            </div>
          </fieldset>

          {/* Services */}
          <fieldset className='border border-solid rounded border-gray-300 p-3'>
            <legend className='p-1'>Services</legend>

            <ul>
              {list.map(({ name, price, checked }, index) => {
                return (
                  <li key={index} className='flex justify-between'>
                    <div className='p-1'>
                      <input
                        type='checkbox'
                        checked={checked}
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
            </ul>
          </fieldset>

          <fieldset className='flex justify-between p-8'>
            <label htmlFor='total'>Price</label>
            <input
              type='text'
              name='total'
              value={getTotalPrice(total)}
              className='w-16 border-none outline-none'
              readOnly
            />
          </fieldset>

          {/* Send button */}
          <button
            className='table mx-auto border border-gray-300 rounded mt-4 px-6 py-1 hover:bg-gray-300'
            type='submit'
          >
            Send
          </button>
        </form>

        {/* Image */}
        <div className='shrink-0'>
          <img
            src={Image}
            alt='Image'
            width='330'
            height='440'
            className='hidden md:block mt-15px'
          />
        </div>
      </div>
    </>
  );
};
