// hooks
import { useState, useMemo } from 'react';
// libraries
import EmailJS from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// other files
import { priceData } from '../utils/priceData';
import Image from '../assets/flower.jpg';

export const Book = () => {
  const [list, setList] = useState(priceData);

  // calculate logic
  const total = useMemo(() => {
    // console.log('%cuseMemo Render', 'color: green');
    const initialValue = 0;
    return list.reduce((acc, cur) => {
      // console.log('acc', acc, 'cur', cur);
      return cur.checked === true ? (acc += cur.price) : acc;
    }, initialValue);
  }, [list]);

  // reset logic
  const resetForm = () => {
    setList((prevState) =>
      prevState.map((listItem) => ({
        ...listItem,
        checked: false,
      }))
    );
  };

  // email-js
  const sendEmail = (e) => {
    e.preventDefault();

    EmailJS.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_API_KEY
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

    // sweet-alert2
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: 'Thank you!',
      text: 'We have received your request.',
      icon: 'success',
    });
  };

  // onChange logic
  const handleCheckChange = (e) => {
    const newData = list.map((data) => {
      const newDataItem = { ...data };
      if (newDataItem.name === e.target.value) {
        newDataItem.checked = !data.checked;
      }
      return newDataItem;
    });
    setList(newData);
  };

  // string format, two demical numeric
  const getTotalPrice = (price) => {
    return `$${price.toFixed(2)} `;
  };

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
          {/* name */}
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

          {/* number */}
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

          {/* email */}
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

          {/* location */}
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

          {/* date */}
          <fieldset className='border border-solid rounded border-gray-300 p-3'>
            <legend className='p-1'>Date</legend>
            <div className='text-gray-500'>
              <input type='date' name='date' required />
            </div>
          </fieldset>

          {/* services */}
          <fieldset className='border border-solid rounded border-gray-300 p-3'>
            <legend className='p-1'>Services</legend>
            <ul>
              {list.map((data, index) => {
                return (
                  <li key={index} className='flex justify-between'>
                    <div className='p-1'>
                      <input
                        type='checkbox'
                        checked={data.checked}
                        onChange={handleCheckChange}
                        id={`linked ${index}`}
                        name='services'
                        value={data.name}
                        className='h-3 w-3 rounded-full border-2 border-gray-400 appearance-none cursor-pointer checked:bg-gray-400'
                      />
                      <label htmlFor={`linked ${index}`} className='p-3'>
                        {data.name}
                      </label>
                    </div>
                    <div>{getTotalPrice(data.price)}</div>
                  </li>
                );
              })}
            </ul>
          </fieldset>

          {/* total label */}
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

          {/* send button */}
          <button
            className='table mx-auto border border-gray-300 rounded mt-4 px-6 py-1 hover:bg-gray-300'
            type='submit'
          >
            Send
          </button>
        </form>

        {/* img */}
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
