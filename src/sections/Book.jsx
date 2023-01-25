export const Book = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <p className='title-st'>Booking</p>
      <p className='text-center mb-20'>
        Book your appointment with CAIT SALON. We will get back to you shortly.
      </p>
      <form>
        <fieldset className='border border-solid rounded border-gray-300 w-1/2 p-3'>
          <legend className='p-1'>Name</legend>
          <input className='w-80 outline-none' type='text' />
        </fieldset>

        <fieldset className='border border-solid rounded border-gray-300 w-1/2 p-3'>
          <legend className='p-1'>Number</legend>
          <input className='w-80 outline-none' type='text' />
        </fieldset>

        <fieldset className='border border-solid rounded border-gray-300 w-1/2 p-3'>
          <legend className='p-1'>Email</legend>
          <input className='w-80 outline-none' type='mail' />
        </fieldset>

        <fieldset className='border border-solid rounded border-gray-300 w-1/2 p-3'>
          <legend className='p-1'>Stylist</legend>
          <select className='w-80 outline-none' name='stylits'>
            <option value=''>- - - Select Stylist - - -</option>
            <option value='one'>New Talent</option>
          </select>
        </fieldset>

        <fieldset className='border border-solid rounded border-gray-300 w-1/2 p-3'>
          <legend className='p-1'>Stylist</legend>
          <select className='w-80 outline-none' name='location'>
            <option value=''>- - - Select Location - - -</option>
            <option value=''>Rochester</option>
            <option value=''>Beaver</option>
            <option value=''>Pittsburgh</option>
          </select>
        </fieldset>

        <fieldset className='border border-solid rounded border-gray-300 w-1/2 p-3'>
          <legend className='p-1'>Date</legend>
          <input type='date' />
        </fieldset>

        {/* Checkbox */}
        <fieldset className='border border-solid rounded border-gray-300 w-1/2 p-3'>
          <legend className='p-1'>Services</legend>
          <div>
            <input type='checkbox' />
            <label for='haircut' className='p-2'>
              Haircut
            </label>
          </div>
          <div>
            <input type='checkbox' />
            <label for='treatment' className='p-2'>
              Treatment
            </label>
          </div>
          <div>
            <input type='checkbox' />
            <label for='color' className='p-2'>
              Color
            </label>
          </div>
          <div>
            <input type='checkbox' />
            <label for='haircut' className='p-2'>
              Massage
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
