export const Service = () => {
  return (
    <div>
      <p className='title-st'>Service</p>
      <div className='mx-auto md:w-3/4'>
        {/* Haircut */}
        <div className='p-10'>
          <p className='text-2xl font-bold mb-6'>Haircut</p>
          <ul>
            <li>
              <span>Haircut</span>
              <span className='float-right'>$50.00 +</span>
            </li>
            <li>
              <span>Haircut + Color</span>
              <span className='float-right'>$110.00 +</span>
            </li>
            <li>
              <span>Haircut + Treatment</span>
              <span className='float-right'>$100.00 +</span>
            </li>
            <li>
              <span>Haircut + Color + Treatment </span>
              <span className='float-right'>$160.00 +</span>
            </li>
            <li>
              <span>Haircut + Head Spa </span>
              <span className='float-right'>$100.00 +</span>
            </li>
          </ul>
        </div>

        <hr />

        {/* Color */}
        <div className='p-10'>
          <p className='text-2xl font-bold mb-6'>Color</p>
          <ul>
            <li>
              <span>Color</span>
              <span className='float-right'>$60.00 +</span>
            </li>
            <li>
              <span>Design Color</span>
              <span className='float-right'>$80.00 +</span>
            </li>
            <li>
              <span>Retouch</span>
              <span className='float-right'>$80.00 +</span>
            </li>
          </ul>
        </div>

        <hr />

        {/* Others */}
        <div className='p-10'>
          <p className='text-2xl font-bold mb-6'>Others</p>
          <ul>
            <li>
              <span>Treatment</span>
              <span className='float-right'>$50.00 +</span>
            </li>
            <li>
              <span>Head Spa</span>
              <span className='float-right'>$50.00 +</span>
            </li>
            <li>
              <span>Hair Set</span>
              <span className='float-right'>$50.00 +</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
