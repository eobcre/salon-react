export const Service = () => {
  return (
    <div>
      <p className='title-st'>Service</p>
      <div className='w-3/4 mx-auto'>
        {/* Haircut */}
        <div className='p-10'>
          <p className='text-2xl font-bold'>Haircut</p>
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

        {/* Color */}
        <div className='p-10'>
          <p className='text-2xl font-bold'>Color</p>
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

        {/* Others */}
        <div className='p-10'>
          <p className='text-2xl font-bold'>Others</p>
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
